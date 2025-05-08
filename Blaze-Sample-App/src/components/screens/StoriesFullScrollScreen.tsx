import React, { JSX } from 'react';
import { Dimensions, ScrollView, StyleSheet } from 'react-native';
import { WidgetStoriesGridList, WidgetStoriesRowList } from '../widgets';
import { ScreenContainer } from './ScreenContainer';

export function StoriesFullScrollScreen(): JSX.Element {
  return (
    <ScreenContainer>
      <ScrollView
        contentContainerStyle={styles.content_container}
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}>
        <WidgetStoriesRowList style={styles.row_widget_container} />

        <WidgetStoriesGridList
          style={styles.grid_widget_container}
          isEmbeddedInScrollView={true}
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
