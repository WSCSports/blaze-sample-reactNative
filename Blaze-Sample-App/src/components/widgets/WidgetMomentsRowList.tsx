import React from 'react';
import { ViewStyle } from 'react-native';
import { momentPlayerRowTheme } from '../../utils/blazePlayersTheme.utils';
import { widgetLayoutMomentsRow } from '../../utils/widgetLayout.utils';
import {
  BlazeMomentsRowView,
  BlazeWidgetLabel,
  PresetThemeRowType,
  OnWidgetDataLoadStartedEvent,
  OnWidgetDataLoadCompleteEvent,
  OnWidgetPlayerDismissedEvent,
  OnWidgetItemClickedEvent,
  OnCTATriggeredEvent,
} from '@wscsports/blaze-rtn-sdk';

export interface WidgetMomentsRowListProps {
  style?: ViewStyle;
}

export function WidgetMomentsRowList(
  props: WidgetMomentsRowListProps,
): JSX.Element {
  const {style} = props;
  const presetRowTheme: PresetThemeRowType = 'widgetCircle';

  return (
    <>
      <BlazeMomentsRowView
        onWidgetDataLoadStarted={(event: OnWidgetDataLoadStartedEvent) => {
          console.log('Moments row - onWidgetDataLoadStarted - widgetId: ' + event.widgetId);
        }}
        onWidgetDataLoadCompleted={(event: OnWidgetDataLoadCompleteEvent) => {
          console.log('Moments row - onWidgetDataLoadCompleted - widgetId: ' + event.widgetId + ', itemCount: ' + event.itemsCount + ', error: ' + event.error);
        }}
        onWidgetPlayerDismissed={(event: OnWidgetPlayerDismissedEvent) => {
          console.log('Moments row - onWidgetPlayerDismissed - widgetId: ' + event.widgetId);
        }}
        onItemClicked={(event: OnWidgetItemClickedEvent) => {
          console.log('Moments row - onItemClicked - widgetId: ' + event.widgetId + ', widgetItemId: ' + event.widgetItemId + ', widgetItemTitle: ' + event.widgetItemTitle);
        }}
        onTriggerCTA={(event: OnCTATriggeredEvent) => {
          console.log('Moments row - onTriggerCTA - widgetId: ' + event.widgetId + ', actionType: ' + event.actionType + ', actionParam: ' + event.actionParam);
        }}
        dataSource={{
          labels: BlazeWidgetLabel.singleLabel('moments'),
        }}
        presetTheme={presetRowTheme}
        blazePlayerMomentTheme={momentPlayerRowTheme}
        blazeWidgetLayout={widgetLayoutMomentsRow}
        style={style}
      />
    </>
  );
}
