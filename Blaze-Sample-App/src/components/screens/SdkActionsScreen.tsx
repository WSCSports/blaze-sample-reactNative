import React, { JSX, useEffect, useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { AppFollowEntitiesManager } from '../../utils/AppFollowEntitiesManager';
import {
  getIsLiquidGlassEnabled,
  followedEntitiesDataSource,
  getIsMuted,
  isInColdStart,
  dismissPlayer,
  showSearchScreen,
  handleUniversalLink,
  logout,
  playMoment,
  playMoments,
  playStories,
  playStory,
  playVideo,
  playVideos,
  prepareMoments,
  prepareStories,
  prepareVideos,
  setDoNotTrack,
  setEnableStoriesPreroll,
  setExternalUserId,
  setLiquidGlassEnabled,
  setExternalUserToken,
  setPlayerSoundState,
  setShowAlerts,
  updateGeoRestriction,
} from '../../utils/sdk.utils';
import {
  BlazeWidgetLabel,
  BlazeRecommendationsType,
  BlazePlayerType,
  BlazeFollowedEntityCategory,
} from '@wscsports/blaze-rtn-sdk';

const COLD_START_PLAYER_TYPES: BlazePlayerType[] = ['Moments', 'Stories', 'Videos'];

export const SdkActionsScreen = React.memo((): JSX.Element => {
  const [geoText, setGeoText] = useState('');
  const [universalLinkText, setUniversalLinkText] = useState('');
  const [externalUserIdText, setExternalUserIdText] = useState('');
  const [externalUserTokenText, setExternalUserTokenText] = useState('');
  const [evictCachedContent, setEvictCachedContent] = useState(false);
  const [showAlerts, setShowAlertsState] = useState(true);
  const [addEntityIdText, setAddEntityIdText] = useState('');
  const [removeEntityIdText, setRemoveEntityIdText] = useState('');
  const [isMuted, setIsMuted] = useState(true);
  const [isLiquidGlass, setIsLiquidGlass] = useState(false);
  const [storiesPreroll, setStoriesPreroll] = useState(false);

  useEffect(() => {
    // Reflect the current SDK-wide mute state on mount (native default is muted).
    getIsMuted().then(setIsMuted);
  }, []);

  const togglePlayerSoundState = async () => {
    await setPlayerSoundState(isMuted ? 'unmute' : 'mute');
    // Re-read the state from the SDK so the button label reflects the real value.
    const muted = await getIsMuted();
    setIsMuted(muted);
  };

  useEffect(() => {
    getIsLiquidGlassEnabled().then(setIsLiquidGlass);
  }, []);

  const toggleLiquidGlass = async () => {
    await setLiquidGlassEnabled(!isLiquidGlass);
    setIsLiquidGlass(await getIsLiquidGlassEnabled());
  };

  const toggleAlerts = () => {
    setShowAlerts(!showAlerts);
    setShowAlertsState(!showAlerts);
  };

  const toggleStoriesPreroll = () => {
    setEnableStoriesPreroll(!storiesPreroll);
    setStoriesPreroll(!storiesPreroll);
  };

  const addEntity = (entityType: BlazeFollowedEntityCategory | null) => {
    const id = addEntityIdText.trim();
    if (id) {
      AppFollowEntitiesManager.insertFollowedEntities([
        { id, providerName: 'stats-perform', entityType },
      ]).then(() => {
        Alert.alert('Follow Entities', `Added: ${id}`);
        setAddEntityIdText('');
      });
    }
  };

  const forYouWithLabelFilter: BlazeRecommendationsType = {
    anyLabelFilter: [],
    coldStartLabels: [],
    type: 'ForYou'
  };

  return (
    <ScrollView>
      <View style={styles.view}>
        <HR title="Player" />

        <ActionSection title="Play Story">
          <View>
            <ActionButton
              title="Play"
              onPress={() => playStory('<STORY_ID>')}
            />
          </View>
        </ActionSection>
        <ActionSection title="Play Stories">
          <View>
            <ActionButton
              title="Play"
              onPress={() =>
                playStories({ labels: BlazeWidgetLabel.singleLabel('live-stories') })
              }
            />
          </View>
        </ActionSection>
        <ActionSection title="Prepare Stories">
          <View>
            <ActionButton
              title="Prepare"
              onPress={() =>
                prepareStories({ labels: BlazeWidgetLabel.singleLabel('live-stories') })
              }
            />
          </View>
        </ActionSection>
        <View style={styles.toggleContainer}>
          <Text style={styles.actionSectionText}>Stories Pre-roll Ads:</Text>
          <Switch
            value={storiesPreroll}
            onValueChange={toggleStoriesPreroll}
            style={styles.toggleStyle}
          />
        </View>
        <ActionSection title="Play Moment">
          <View>
            <ActionButton
              title="Play"
              onPress={() => playMoment('<MOMENT_ID>')}
            />
          </View>
        </ActionSection>
        <ActionSection title="Play Moments">
          <View>
            <ActionButton
              title="Play"
              onPress={() =>
                playMoments(
                  { labels: BlazeWidgetLabel.singleLabel('moments') }
                )
              }
            />
          </View>
        </ActionSection>
        <ActionSection title="Prepare Moments">
          <View>
            <ActionButton
              title="Prepare"
              onPress={() =>
                prepareMoments({ labels: BlazeWidgetLabel.singleLabel('moments') })
              }
            />
          </View>
        </ActionSection>
        <ActionSection title="Play Video">
          <View>
            <ActionButton
              title="Play"
              onPress={() => playVideo('<VIDEO_ID>')}
            />
          </View>
        </ActionSection>
        <ActionSection title="Play Videos">
          <View>
            <ActionButton
              title="Play"
              onPress={() =>
                playVideos(
                  { labels: BlazeWidgetLabel.singleLabel('videos') }
                )
              }
            />
          </View>
        </ActionSection>
        <ActionSection title="Prepare Videos">
          <View>
            <ActionButton
              title="Prepare"
              onPress={() =>
                prepareVideos({ labels: BlazeWidgetLabel.singleLabel('videos') })
              }
            />
          </View>
        </ActionSection>

        <ActionSection title="Play Recommendations">
          <View>
            <ActionButton
              title="Play"
              onPress={() =>
                playMoments(
                  { recommendationsType: forYouWithLabelFilter }
                )
              }
            />
          </View>
        </ActionSection>
        <ActionSection title="Prepare Followed Entities">
          <View>
            <ActionButton
              title="Prepare"
              onPress={() => prepareMoments(followedEntitiesDataSource)}
            />
          </View>
        </ActionSection>
        <ActionSection title="Play Followed Entities">
          <View>
            <ActionButton
              title="Play"
              onPress={() => playMoments(followedEntitiesDataSource)}
            />
          </View>
        </ActionSection>
        <ActionSection title="Play Story Page">
          <View>
            <ActionButton
              title="Play"
              onPress={() =>
                playStory('<STORY_ID>', '<PAGE_ID>')
              }
            />
          </View>
        </ActionSection>
        <ActionSection title="Show Search Screen">
          <View>
            <ActionButton
              title="Search"
              onPress={() =>
                showSearchScreen({
                  suggestionsDataSource: { labels: BlazeWidgetLabel.singleLabel('moments') },
                })
              }
            />
          </View>
        </ActionSection>
        <ActionSection title="Dismiss Player">
          <View>
            <ActionButton title="Dismiss" onPress={dismissPlayer} />
          </View>
        </ActionSection>

        <HR title="Actions" />

        <ActionSection title="Set Do Not Track">
          <View>
            <ActionButton title="Set" onPress={setDoNotTrack} />
          </View>
        </ActionSection>
        <ActionSection title={`Player Sound (${isMuted ? 'Muted' : 'Unmuted'})`}>
          <View>
            <ActionButton
              title={isMuted ? 'Unmute' : 'Mute'}
              onPress={togglePlayerSoundState}
            />
          </View>
        </ActionSection>
        <ActionSection title={`Liquid Glass (${isLiquidGlass ? 'On' : 'Off'})`}>
          <View>
            <ActionButton
              title={isLiquidGlass ? 'Disable' : 'Enable'}
              onPress={toggleLiquidGlass}
            />
          </View>
        </ActionSection>
        {COLD_START_PLAYER_TYPES.map(playerType => (
          <ActionSection key={playerType} title={`${playerType} In Cold Start`}>
            <View>
              <ActionButton title="Check" onPress={() => isInColdStart(playerType)} />
            </View>
          </ActionSection>
        ))}
        <ActionSection title="Set External User Id">
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="ID"
              value={externalUserIdText}
              onChangeText={text => setExternalUserIdText(text)}
              autoCapitalize="none"
              style={styles.inputContainer}
            />
            <ActionButton
              title="Set"
              onPress={() => {
                setExternalUserId(externalUserIdText);
              }}
            />
          </View>
        </ActionSection>
        <ActionSection title="Logout Current User">
          <View>
            <ActionButton title="Logout" onPress={logout} />
          </View>
        </ActionSection>
        <ActionSection title="Set External User Token">
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Token"
              value={externalUserTokenText}
              onChangeText={text => setExternalUserTokenText(text)}
              autoCapitalize="none"
              secureTextEntry
              style={styles.inputContainer}
            />
            <ActionButton
              title="Set"
              onPress={() => {
                setExternalUserToken(externalUserTokenText, evictCachedContent ? 'Evict' : 'Keep');
              }}
            />
          </View>
        </ActionSection>
        <View style={styles.toggleContainer}>
          <Text style={styles.actionSectionText}>Evict Cached Content:</Text>
          <Switch
            value={evictCachedContent}
            onValueChange={setEvictCachedContent}
            style={styles.toggleStyle}
          />
        </View>
        <ActionSection title="Set Universal Link">
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Link"
              value={universalLinkText}
              onChangeText={text => setUniversalLinkText(text)}
              autoCapitalize="none"
              style={styles.inputContainer}
            />
            <ActionButton
              title="Set"
              onPress={() => handleUniversalLink(universalLinkText)}
            />
          </View>
        </ActionSection>
        <ActionSection title="Update Geo Location">
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Location"
              value={geoText}
              onChangeText={text => setGeoText(text)}
              autoCapitalize="none"
              style={styles.inputContainer}
            />
            <ActionButton
              title="Set"
              onPress={() => {
                updateGeoRestriction(geoText);
              }}
            />
          </View>
        </ActionSection>
        <View style={styles.toggleContainer}>
          <Text style={styles.actionSectionText}>Show Errors Alerts:</Text>
          <Switch
            value={showAlerts}
            onValueChange={toggleAlerts}
            style={styles.toggleStyle}
          />
        </View>

        <HR title="Follow Entities" />

        <ActionSection title="Add Entity">
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Entity ID"
              value={addEntityIdText}
              onChangeText={text => setAddEntityIdText(text)}
              autoCapitalize="none"
              style={styles.inputContainer}
            />
            <View style={styles.addButtons}>
              <ActionButton title="Add Team" onPress={() => addEntity('Team')} />
              <ActionButton title="Add Unknown" onPress={() => addEntity(null)} />
            </View>
          </View>
        </ActionSection>
        <ActionSection title="Remove Entity">
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Entity ID"
              value={removeEntityIdText}
              onChangeText={text => setRemoveEntityIdText(text)}
              autoCapitalize="none"
              style={styles.inputContainer}
            />
            <ActionButton
              title="Remove"
              onPress={() => {
                const id = removeEntityIdText.trim();
                if (id) {
                  AppFollowEntitiesManager.removeFollowedEntities([{ id, entityType: null }]).then(() => {
                    Alert.alert('Follow Entities', `Removed: ${id}`);
                    setRemoveEntityIdText('');
                  });
                }
              }}
            />
          </View>
        </ActionSection>
        <ActionSection title="Get All Entities">
          <ActionButton
            title="Get"
            onPress={() => {
              AppFollowEntitiesManager.getFollowedEntities().then(entities => {
                Alert.alert(
                  'Followed Entities',
                  entities.length > 0
                    ? entities
                        .map(entity => `${entity.id} · ${entity.providerName ?? '-'} · ${entity.entityType ?? '-'}`)
                        .join('\n')
                    : '(empty)',
                );
              });
            }}
          />
        </ActionSection>
        <ActionSection title="Clear All Entities">
          <ActionButton
            title="Clear"
            onPress={() => {
              AppFollowEntitiesManager.clearAll().then(() => {
                Alert.alert('Follow Entities', 'All entities cleared');
              });
            }}
          />
        </ActionSection>
      </View>
    </ScrollView>

  );
});

interface ActionSectionProps {
  title: string;
  children: JSX.Element;
}

interface ActionButtonProps {
  title: string;
  onPress: () => void;
}

interface HRProps {
  title?: string;
}

function HR(props: HRProps) {
  const { title } = props;
  return (
    <View style={styles.hrView}>
      <View style={styles.hrAround} />
      {title && (
        <View>
          <Text style={styles.hrText}>{title}</Text>
        </View>
      )}
      <View style={styles.hrAround} />
    </View>
  );
}

export function ActionButton(props: ActionButtonProps) {
  const { title, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

function ActionSection(props: ActionSectionProps): JSX.Element {
  const { title, children } = props;

  return (
    <View style={styles.actionSectionView}>
      <Text style={styles.actionSectionText}>{title}</Text>
      <View>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  hrView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  hrAround: {
    flex: 1,
    height: 1,
    backgroundColor: '#bbbbbb',
  },
  hrText: {
    fontSize: 20,
    fontWeight: '700',
    paddingHorizontal: 10,
  },
  view: {
    padding: 20,
  },
  button: {
    minWidth: 100,
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#3498DB',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  actionSectionView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  actionSectionText: {
    fontSize: 17,
  },
  toggleStyle: {
    marginEnd: 8,
  },
  toggleContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  inputContainer: {
    textAlign: 'center',
    marginHorizontal: 6,
    borderColor: 'grey',
    borderWidth: 2,
    borderStyle: 'solid',
    width: 80,
    textAlignVertical: 'center',
    borderRadius: 12,
    height: 36,
  },
  inputWrapper: { flexDirection: 'row' },
  addButtons: { gap: 6 },
});
