import {useFocusEffect} from '@react-navigation/native';
import { RegisterGlobalEvents } from '@wscsports/blaze-rtn-sdk';
import React from 'react';
import {
  Dimensions,
  EmitterSubscription,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {WidgetMomentsGridList, WidgetMomentsRowList} from '../widgets';
import {ScreenContainer} from './ScreenContainer';

export function MomentsScreen(): JSX.Element {
  useFocusEffect(
    React.useCallback(() => {
      const onMomentsPlayerDismissed: EmitterSubscription =
        RegisterGlobalEvents.onMomentsPlayerDismissed(() => {
          console.log('onMomentsPlayerDismissed');
        });
      const onMomentsPlayerDidAppear: EmitterSubscription =
        RegisterGlobalEvents.onMomentsPlayerDidAppear(() => {
          console.log('onMomentsPlayerDidAppear');
        });

      // Remove the event listener when the component unmounts
      return () => {
        onMomentsPlayerDismissed.remove();
        onMomentsPlayerDidAppear.remove();
      };
    }, []),
  );

  return (
    <ScreenContainer>
      <ScrollView
        contentContainerStyle={styles.content_container}
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}>
        <WidgetMomentsRowList style={styles.row_widget_container} />

        <WidgetMomentsGridList
          style={styles.grid_widget_container}
          adjustSizeAutomatically={true}
        />
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content_container: {
    flexGrow: 1,
  },
  row_widget_container: {
    height: Dimensions.get('screen').height * 0.2,
    marginBottom: 10,
  },
  grid_widget_container: {
    marginTop: 10,
  },
});
