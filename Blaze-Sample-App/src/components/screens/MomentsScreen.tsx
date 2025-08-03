import React, { JSX } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { WidgetMomentsGridList, WidgetMomentsRowList } from '../widgets';
import { ScreenContainer } from './ScreenContainer';
import { SectionHeader } from '../shared';

export const MomentsScreen = React.memo((): JSX.Element => {
  return (
    <ScreenContainer>
      <ScrollView
        contentContainerStyle={styles.content_container}
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}>

        {/* Moments Row */}
        <SectionHeader
          title="Moments Row"
        />
        <WidgetMomentsRowList style={styles.row_widget_container} />

        {/* Moments Grid */}
        <SectionHeader
          title="Moments Grid"
        />
        <WidgetMomentsGridList
          style={styles.grid_widget_container}
          isEmbeddedInScrollView={true}
          shouldShowActionButtons={true}
        />
      </ScrollView>
    </ScreenContainer>
  );
});

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
