import React, { JSX } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';

import {
  WidgetMomentsGridList,
  WidgetMomentsRowList,
  WidgetStoriesGridList,
  WidgetStoriesRowList,
  WidgetVideosRowList,
  WidgetVideosGridList
} from '../widgets';

import {
  ScreenContainer
} from './ScreenContainer';

import {
  SectionHeader
} from '../shared';

export const HomeScreen = React.memo((): JSX.Element => {
  return (
    <ScreenContainer>
      <ScrollView
        contentContainerStyle={styles.content_container}
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}>

        {/* Stories Row */}
        <SectionHeader
          title="Stories Row"
        />
        <WidgetStoriesRowList style={styles.row_widget_container} />

        {/* Stories Grid */}
        <SectionHeader
          title="Stories Grid"
        />
        <WidgetStoriesGridList
          style={styles.grid_widget_container}
          isEmbeddedInScrollView={true}
          shouldLimitItemCount={true}
        />

        {/* Moments Row */}
        <SectionHeader
          title="Moments Row"
        />
        <WidgetMomentsRowList
          style={styles.row_animated_widget_container}
          overridePreset='MomentsWidget.Row.verticalAnimatedThumbnailsRectangles'
        />

        {/* Moments Grid */}
        <SectionHeader
          title="Moments Grid"
        />
        <WidgetMomentsGridList
          style={styles.grid_widget_container}
          isEmbeddedInScrollView={true}
          shouldLimitItemCount={true}
        />

        {/* Videos Row */}
        <SectionHeader
          title="Videos Row"
        />
        <WidgetVideosRowList style={styles.row_widget_container} />

        {/* Videos Grid */}
        <SectionHeader
          title="Videos Grid"
        />
        <WidgetVideosGridList
          style={styles.grid_widget_container}
          isEmbeddedInScrollView={true}
          shouldLimitItemCount={true}
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
  },
  row_animated_widget_container: {
    height: Dimensions.get('screen').height * 0.5,
  },
  grid_widget_container: {
  },
});
