import React from 'react';
import {ViewStyle} from 'react-native';
import {PresetThemeRowType} from '@wscsports/blaze-rtn-sdk/src/BlazeStoriesRowViewNativeComponent';
import {BlazeStoriesRowView} from '../native';

export interface WidgetStoriesRowListProps {
  style?: ViewStyle; // You can adjust the type based on your styling needs
}

export function WidgetStoriesRowList(
  props: WidgetStoriesRowListProps,
): JSX.Element {
  const {style} = props;

  return (
    <BlazeStoriesRowView
      onWidgetDataLoadStarted={() => {
        console.log('Stories row', 'onWidgetDataLoadStarted');
      }}
      onWidgetDataLoadCompleted={() => {
        console.log('Stories row', 'onWidgetDataLoadCompleted');
      }}
      onWidgetPlayerDismissed={() => {
        console.log('Stories row', 'onWidgetPlayerDismissed');
      }}
      onItemClicked={() => {
        console.log('Stories row', 'onItemClicked');
      }}
      onTriggerCTA={(event) => {
        const widgetId = event.nativeEvent.widgetId
        const actionType = event.nativeEvent.actionType
        const actionParam = event.nativeEvent.actionParam
        console.log('Stories row', 'onTriggerCTA with widgetId: ', widgetId, " actionType: ", actionType, " actionParam: ", actionParam);
      }}
      dataSource={{
        labels: 'live-stories',
      }}
      presetTheme={PresetThemeRowType.RECTANGLE}
      style={style}
    />
  );
}
