import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  dismissPlayer,
  handleUniversalLink,
  playMoment,
  playMoments,
  playStory,
  setDoNotTrack,
  setExternalUserId,
} from '../../utils/sdk.utils';

export function SdkActionsScreen(): JSX.Element {
  return (
    <View style={styles.view}>
      <HR title="Player" />

      <ActionSection title="Play Story">
        <View>
          <ActionButton
            title="Play"
            onPress={() => playStory('<Story_ID>')}
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
            onPress={() => playMoments({labels: 'moments'})}
          />
        </View>
      </ActionSection>
      <ActionSection title="Play Story Page">
        <View>
          <ActionButton
            title="Play"
            onPress={() =>
              playStory('<Story_ID>', '<PAGE_ID>')
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
        <View>
          <ActionButton
            title="Set"
            onPress={() => {
              setExternalUserId('<USER_ID>');
            }}
          />
        </View>
      </ActionSection>
      <ActionSection title="Set Universal Link">
        <View>
          <ActionButton
            title="Set"
            onPress={() => handleUniversalLink('http://your.app.link')}
          />
        </View>
      </ActionSection>
    </View>
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
    paddingBottom: 10
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
    marginBottom: 15,
  },
  actionSectionText: {
    fontSize: 17,
  },
});
