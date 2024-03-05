import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  dismissPlayer,
  handleUniversalLink,
  playMoment,
  playMoments,
  playStories,
  playStory,
  prepareMoments,
  prepareStories,
  setDoNotTrack,
  setExternalUserId,
  setShowAlerts,
  updateGeoRestriction,
} from '../../utils/sdk.utils';
import { BlazeWidgetLabel } from '@wscsports/blaze-rtn-sdk';

export function SdkActionsScreen(): JSX.Element {
  const [geoText, setGeoText] = useState('');
  const [universalLinkText, setUniversalLinkText] = useState('');
  const [externalUserIdText, setExternalUserIdText] = useState('');
  const [showAlerts, setShowAlertsState] = useState(true);

  const toggleAlerts = () => {
    setShowAlerts(!showAlerts);
    setShowAlertsState(!showAlerts);
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
                playStories({labels: BlazeWidgetLabel.singleLabel('<STORIES_LABEL>')})
              }
            />
          </View>
        </ActionSection>
        <ActionSection title="Prepare Stories">
          <View>
            <ActionButton
              title="Prepare"
              onPress={() =>
                prepareStories({labels: BlazeWidgetLabel.singleLabel('<STORIES_LABEL>')})
              }
            />
          </View>
        </ActionSection>
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
                playMoments({labels: BlazeWidgetLabel.singleLabel('<MOMENTS_LABEL>')})
              }
            />
          </View>
        </ActionSection>
        <ActionSection title="Prepare Moments">
          <View>
            <ActionButton
              title="Prepare"
              onPress={() =>
                prepareMoments({labels: BlazeWidgetLabel.singleLabel('<MOMENTS_LABEL>')})
              }
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
      </View>
    </ScrollView>
    
  );
}

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
  const {title} = props;
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
  const {title, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

function ActionSection(props: ActionSectionProps): JSX.Element {
  const {title, children} = props;

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
  inputWrapper: {flexDirection: 'row'},
});
