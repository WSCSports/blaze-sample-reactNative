import React from 'react';
import {ScrollView, Dimensions, View, EmitterSubscription, StyleSheet} from 'react-native';
import {ScreenContainer} from './ScreenContainer';
import {WidgetMomentsRowList, WidgetMomentsGridList} from '../widgets';
import {RegisterGlobalEvents} from '@wscsports/blaze-rtn-sdk/src/NativeBlazeSdk';
import { useFocusEffect } from '@react-navigation/native';

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
        <WidgetMomentsRowList
          style={styles.row_widget_container}
        />

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
    marginBottom: 30,
  },
  grid_widget_container: {
    marginTop: 10,
  },
});
