import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {
  dismissPlayer,
  playMoment,
  playMoments,
  playStory,
  setDoNotTrack,
  setExternalUserId,
} from '../../utils/sdk.utils';

export function SdkActionsScreen(): JSX.Element {

  return (
    <View>
      <ActionSection title="Play Story">
        <View>
          <Button
            title="Play"
            onPress={() => playStory('64ee20ba1396e4277f0597ce')}
          />
        </View>
      </ActionSection>
      <ActionSection title="Play Moment">
        <View>
          <Button
            title="Moment"
            onPress={() => playMoment('64ee1f9f1396e4277f059607')}
          />
        </View>
      </ActionSection>
      <ActionSection title="set Do Not Track">
        <View>
          <Button title="setDoNotTrack" onPress={setDoNotTrack} />
        </View>
      </ActionSection>
      <ActionSection title="setExternalUserId">
        <View>
          <Button
            title="setExternalUserId"
            onPress={() => {
              setExternalUserId('12345');
            }}
          />
        </View>
      </ActionSection>
      <ActionSection title="Dismiss Player">
        <View>
          <Button title="Dismiss" onPress={dismissPlayer} />
        </View>
      </ActionSection>
      <ActionSection title="playMoments">
        <View>
          <Button
            title="play Moments"
            onPress={() => playMoments({labels: 'moments'})}
          />
        </View>
      </ActionSection>
      <ActionSection title="play Story Page">
        <View>
          <Button
            title="playStoryPage"
            onPress={() =>
              playStory(
                '64abaf079503bc65ac534f86',
                '64abaf069503bc65ac534f83'
              )
            }
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
