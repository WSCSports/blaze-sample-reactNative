import React from 'react';
import { ViewStyle } from 'react-native';
import { widgetLayoutStoriesRow } from '../../utils/widgetLayout.utils';
import { storyPlayerRowTheme } from '../../utils/blazePlayersTheme.utils';
import {
  BlazeStoriesRowView,
  BlazeWidgetLabel,
  PresetThemeRowType,
  OnWidgetDataLoadStartedEvent,
  OnWidgetDataLoadCompleteEvent,
  OnWidgetPlayerDismissedEvent,
  OnWidgetItemClickedEvent,
  OnCTATriggeredEvent,
} from '@wscsports/blaze-rtn-sdk';

export interface WidgetStoriesRowListProps {
  style?: ViewStyle;
}

export function WidgetStoriesRowList(
  props: WidgetStoriesRowListProps,
): JSX.Element {
  const {style} = props;
  const presetRowTheme: PresetThemeRowType = 'widgetCircle';

  return (
    <>
      <BlazeStoriesRowView
        onWidgetDataLoadStarted={(event: OnWidgetDataLoadStartedEvent) => {
          console.log('Stories row - onWidgetDataLoadStarted - widgetId: ' + event.widgetId);
        }}
        onWidgetDataLoadCompleted={(event: OnWidgetDataLoadCompleteEvent) => {
          console.log('Stories row - onWidgetDataLoadCompleted - widgetId: ' + event.widgetId + ', itemCount: ' + event.itemsCount + ', error: ' + event.error);
        }}
        onWidgetPlayerDismissed={(event: OnWidgetPlayerDismissedEvent) => {
          console.log('Stories row - onWidgetPlayerDismissed - widgetId: ' + event.widgetId);
        }}
        onItemClicked={(event: OnWidgetItemClickedEvent) => {
          console.log('Stories row - onItemClicked - widgetId: ' + event.widgetId + ', widgetItemId: ' + event.widgetItemId + ', widgetItemTitle: ' + event.widgetItemTitle);
        }}
        onTriggerCTA={(event: OnCTATriggeredEvent) => {
          console.log('Stories row - onTriggerCTA - widgetId: ' + event.widgetId + ', actionType: ' + event.actionType + ', actionParam: ' + event.actionParam);
        }}
        dataSource={{
          labels: BlazeWidgetLabel.singleLabel('live-stories'),
        }}
        blazeWidgetLayout={widgetLayoutStoriesRow}
        presetTheme={presetRowTheme}
        style={style}
        blazePlayerStoryTheme={storyPlayerRowTheme}
      />
    </>
  );
}
