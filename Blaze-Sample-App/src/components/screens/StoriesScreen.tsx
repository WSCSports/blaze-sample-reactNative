import React, { JSX } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { WidgetStoriesGridList, WidgetStoriesRowList } from '../widgets';
import { ScreenContainer } from './ScreenContainer';

export function StoriesScreen(): JSX.Element {
  return (
    <ScreenContainer>
      <ScrollView
        contentContainerStyle={styles.content_container}
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}>
        <WidgetStoriesRowList style={styles.row_widget_container} />
        <WidgetStoriesGridList style={styles.grid_widget_container} />
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
    flex: 3,
    marginBottom: 10,
  },
  grid_widget_container: {
    flex: 7,
    marginTop: 10,
  },
});
