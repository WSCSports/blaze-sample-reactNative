import {PresetThemeRowType} from '@wscsports/blaze-rtn-sdk/src/BlazeMomentsRowViewNativeComponent';
import {BlazeWidgetLabel} from '@wscsports/blaze-rtn-sdk/src/classes/blaze-widget-label';
import React from 'react';
import {ViewStyle} from 'react-native';
import {BlazeMomentsRowView} from '../native';

export interface WidgetMomentsRowListProps {
  style?: ViewStyle; // You can adjust the type based on your styling needs
  dataSourceScreen?: boolean;
}

export function WidgetMomentsRowList(
  props: WidgetMomentsRowListProps,
): JSX.Element {
  const {style} = props;

  return (
    <BlazeMomentsRowView
      onWidgetDataLoadStarted={() => {
        console.log('Moments row', 'onWidgetDataLoadStarted');
      }}
      onWidgetDataLoadCompleted={() => {
        console.log('Moments row', 'onWidgetDataLoadCompleted');
      }}
      onWidgetPlayerDismissed={() => {
        console.log('Moments row', 'onWidgetPlayerDismissed');
      }}
      onItemClicked={() => {
        console.log('Moments row', 'onItemClicked');
      }}
      onTriggerCTA={event => {
        const widgetId = event.nativeEvent.widgetId;
        const actionType = event.nativeEvent.actionType;
        const actionParam = event.nativeEvent.actionParam;
        console.log(
          'Moments row',
          'onTriggerCTA with widgetId: ',
          widgetId,
          ' actionType: ',
          actionType,
          ' actionParam: ',
          actionParam,
        );
      }}
      dataSource={{
        labels: BlazeWidgetLabel.singleLabel('moments'),
      }}
      presetTheme={PresetThemeRowType.CIRCLE}
      style={style}
    />
  );
}
