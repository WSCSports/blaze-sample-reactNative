import BlazeSDK, { BlazeFollowEntitiesDelegate } from '@wscsports/blaze-rtn-sdk';

const SYNC_DEBOUNCE_MS = 500;

/**
 * App-level manager for follow entities.
 *
 * Wraps BlazeSDK follow entities API and demonstrates the recommended
 * sync pattern: instead of persisting on every follow/unfollow action,
 * we debounce and always read the latest SDK runtime snapshot.
 * This avoids race conditions when the user rapidly follows/unfollows
 * while the player is open (JS thread may be blocked).
 *
 * For a production app, replace the in-memory store with AsyncStorage
 * or your own remote/local persistence layer.
 */
class AppFollowEntitiesManagerImpl {
  private static instance: AppFollowEntitiesManagerImpl;
  private syncTimer: ReturnType<typeof setTimeout> | null = null;
  private followedEntityIds: string[] = [];

  private constructor() {}

  static getInstance(): AppFollowEntitiesManagerImpl {
    if (!AppFollowEntitiesManagerImpl.instance) {
      AppFollowEntitiesManagerImpl.instance = new AppFollowEntitiesManagerImpl();
    }
    return AppFollowEntitiesManagerImpl.instance;
  }

  /**
   * Initialize the follow entities system.
   * Call after BlazeSDK.init() completes.
   */
  start() {
    BlazeSDK.setFollowEntitiesDelegate(this.delegate);
    this.loadAndApplyStoredEntities();
    console.log('[AppFollowEntitiesManager] Started');
  }

  async setFollowedEntities(entityIds: string[]) {
    await BlazeSDK.setFollowedEntities(entityIds);
    this.followedEntityIds = entityIds;
    console.log('[AppFollowEntitiesManager] setFollowedEntities:', entityIds);
  }

  async insertFollowedEntities(entityIds: string[]) {
    await BlazeSDK.insertFollowedEntities(entityIds);
    this.followedEntityIds = [...new Set([...this.followedEntityIds, ...entityIds])];
    console.log('[AppFollowEntitiesManager] insertFollowedEntities:', entityIds);
  }

  async removeFollowedEntities(entityIds: string[]) {
    await BlazeSDK.removeFollowedEntities(entityIds);
    this.followedEntityIds = this.followedEntityIds.filter(id => !entityIds.includes(id));
    console.log('[AppFollowEntitiesManager] removeFollowedEntities:', entityIds);
  }

  async getFollowedEntities(): Promise<string[]> {
    const ids = await BlazeSDK.getFollowedEntities();
    console.log('[AppFollowEntitiesManager] getFollowedEntities:', ids);
    return ids;
  }

  async clearAll() {
    await BlazeSDK.setFollowedEntities([]);
    this.followedEntityIds = [];
    console.log('[AppFollowEntitiesManager] clearAll');
  }

  // ---- Private ----

  private delegate: BlazeFollowEntitiesDelegate = {
    onFollowEntityClicked: (params) => {
      console.log('[AppFollowEntitiesManager] onFollowEntityClicked:', JSON.stringify(params));

      if (params.newFollowingState) {
        console.log(`  → Entity ${params.followEntity.id} is now FOLLOWED`);
      } else {
        console.log(`  → Entity ${params.followEntity.id} is now UNFOLLOWED`);
      }

      this.scheduleSyncToStorage();
    },
  };

  /**
   * Debounced sync: waits for rapid follow/unfollow actions to settle,
   * then reads the latest snapshot from the SDK and persists it.
   */
  private scheduleSyncToStorage() {
    if (this.syncTimer) {
      clearTimeout(this.syncTimer);
    }
    this.syncTimer = setTimeout(() => {
      this.syncToStorage();
    }, SYNC_DEBOUNCE_MS);
  }

  private async syncToStorage() {
    try {
      const currentIds = await BlazeSDK.getFollowedEntities();
      this.followedEntityIds = currentIds;
      // In production: await AsyncStorage.setItem('followedEntities', JSON.stringify(currentIds));
      console.log('[AppFollowEntitiesManager] syncToStorage — snapshot:', currentIds);
    } catch (e) {
      console.error('[AppFollowEntitiesManager] syncToStorage error:', e);
    }
  }

  private loadAndApplyStoredEntities() {
    // In production: const stored = JSON.parse(await AsyncStorage.getItem('followedEntities') ?? '[]');
    const stored = this.followedEntityIds;
    if (stored.length > 0) {
      BlazeSDK.setFollowedEntities(stored);
      console.log('[AppFollowEntitiesManager] Loaded stored entities:', stored);
    }
  }
}

export const AppFollowEntitiesManager = AppFollowEntitiesManagerImpl.getInstance();
