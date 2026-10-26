import BlazeSDK, { BlazeFollowEntitiesDelegate, BlazeFollowEntity } from '@wscsports/blaze-rtn-sdk';

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
  private followedEntities: BlazeFollowEntity[] = [];

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

  async setFollowedEntities(entities: BlazeFollowEntity[]) {
    await BlazeSDK.followEntitiesManager.setFollowedEntities(entities);
    this.followedEntities = entities;
    console.log('[AppFollowEntitiesManager] setFollowedEntities:', entities);
  }

  async insertFollowedEntities(entities: BlazeFollowEntity[]) {
    await BlazeSDK.followEntitiesManager.insertFollowedEntities(entities);
    const insertedIds = new Set(entities.map(entity => entity.id));
    this.followedEntities = [
      ...this.followedEntities.filter(entity => !insertedIds.has(entity.id)),
      ...entities,
    ];
    console.log('[AppFollowEntitiesManager] insertFollowedEntities:', entities);
  }

  async removeFollowedEntities(entities: BlazeFollowEntity[]) {
    await BlazeSDK.followEntitiesManager.removeFollowedEntities(entities);
    const removedIds = new Set(entities.map(entity => entity.id));
    this.followedEntities = this.followedEntities.filter(entity => !removedIds.has(entity.id));
    console.log('[AppFollowEntitiesManager] removeFollowedEntities:', entities);
  }

  async getFollowedEntities(): Promise<BlazeFollowEntity[]> {
    const entities = await BlazeSDK.followEntitiesManager.getFollowedEntities();
    console.log('[AppFollowEntitiesManager] getFollowedEntities:', entities);
    return entities;
  }

  async clearAll() {
    await BlazeSDK.followEntitiesManager.setFollowedEntities([]);
    this.followedEntities = [];
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
      const currentEntities = await BlazeSDK.followEntitiesManager.getFollowedEntities();
      this.followedEntities = currentEntities;
      // In production: await AsyncStorage.setItem('followedEntities', JSON.stringify(currentEntities));
      console.log('[AppFollowEntitiesManager] syncToStorage — snapshot:', currentEntities);
    } catch (e) {
      console.error('[AppFollowEntitiesManager] syncToStorage error:', e);
    }
  }

  private loadAndApplyStoredEntities() {
    // In production: const stored = JSON.parse(await AsyncStorage.getItem('followedEntities') ?? '[]');
    const stored = this.followedEntities;
    if (stored.length > 0) {
      BlazeSDK.followEntitiesManager.setFollowedEntities(stored);
      console.log('[AppFollowEntitiesManager] Loaded stored entities:', stored);
    }
  }
}

export const AppFollowEntitiesManager = AppFollowEntitiesManagerImpl.getInstance();
