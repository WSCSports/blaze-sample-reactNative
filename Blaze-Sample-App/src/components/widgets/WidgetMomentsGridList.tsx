import React from 'react';
import {ViewStyle} from 'react-native';
import {BlazeMomentsGridView} from '../native';

export interface WidgetMomentsGridListProps {
  style?: ViewStyle; // You can adjust the type based on your styling needs
  adjustSizeAutomatically?: boolean;
}


export function WidgetMomentsGridList(
  props: WidgetMomentsGridListProps,
): JSX.Element {
  const { style, adjustSizeAutomatically } = props;

  return (
    <BlazeMomentsGridView
      onWidgetDataLoadStarted={() => {
        console.log('Moments grid', 'onWidgetDataLoadStarted');
      }}
      onWidgetDataLoadCompleted={() => {
        console.log('Moments grid', 'onWidgetDataLoadCompleted');
      }}
      onWidgetPlayerDismissed={() => {
        console.log('Moments grid', 'onWidgetPlayerDismissed');
      }}
      onItemClicked={() => {
        console.log('Moments grid', 'onItemClicked');
      }}
      onTriggerCTA={(event) => {
        const widgetId = event.nativeEvent.widgetId
        const actionType = event.nativeEvent.actionType
        const actionParam = event.nativeEvent.actionParam
        console.log('Moments grid', 'onTriggerCTA with widgetId: ', widgetId, " actionType: ", actionType, " actionParam: ", actionParam);
      }}
      adjustSizeAutomatically={adjustSizeAutomatically}
      dataSource={{
        labels: 'moments'
      }}
      style={style}
    />
  );
}
