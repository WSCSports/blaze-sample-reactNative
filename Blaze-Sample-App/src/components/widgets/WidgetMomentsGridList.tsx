import React, { useRef } from 'react';
import { Button, ViewStyle } from 'react-native';
import { momentPlayerGridTheme } from '../../utils/blazePlayersTheme.utils';
import { widgetLayoutMomentsGrid } from '../../utils/widgetLayout.utils';
import { updateDataSourceHandler } from '../../utils/sdk.utils';
import { 
  BlazeMomentsGridView,
  BlazeWidgetLabel,
  PresetThemeGridType,
  OnWidgetDataLoadStartedEvent,
  OnWidgetDataLoadCompleteEvent,
  OnWidgetPlayerDismissedEvent,
  OnWidgetItemClickedEvent,
  OnCTATriggeredEvent,
} from '@wscsports/blaze-rtn-sdk';

export interface WidgetMomentsGridListProps {
  style?: ViewStyle; 
  adjustSizeAutomatically?: boolean;
}

export function WidgetMomentsGridList(
  props: WidgetMomentsGridListProps,
): JSX.Element {
  const {style, adjustSizeAutomatically} = props;
  const presetGridTheme: PresetThemeGridType = 'twoColumnsTheme';
  const momentsGridRef = useRef<BlazeMomentsGridView | null>(null);

  const handleReloadData = () => {
    if (momentsGridRef?.current) {
      momentsGridRef?.current.reloadData();
    }
  };

  const handleUpdateDataSource = () => {
    const newDataSource = {
      /* Your updated data source */
      labels: BlazeWidgetLabel.atLeastOneOf('messi', 'ronaldo'),
    };
    updateDataSourceHandler(momentsGridRef, newDataSource);
  };

  return (
    <>
      <Button title="Reload Data" onPress={handleReloadData} />
      <Button title="Update Data Source" onPress={handleUpdateDataSource} />
      <BlazeMomentsGridView
        ref={momentsGridRef}
        onWidgetDataLoadStarted={(event: OnWidgetDataLoadStartedEvent) => {
          console.log('Moments grid - onWidgetDataLoadStarted - widgetId: ' + event.widgetId);
        }}
        onWidgetDataLoadCompleted={(event: OnWidgetDataLoadCompleteEvent) => {
          console.log('Moments grid - onWidgetDataLoadCompleted - widgetId: ' + event.widgetId + ', itemCount: ' + event.itemsCount + ', error: ' + event.error);
        }}
        onWidgetPlayerDismissed={(event: OnWidgetPlayerDismissedEvent) => {
          console.log('Moments grid - onWidgetPlayerDismissed - widgetId: ' + event.widgetId);
        }}
        onItemClicked={(event: OnWidgetItemClickedEvent) => {
          console.log('Moments grid - onItemClicked - widgetId: ' + event.widgetId + ', widgetItemId: ' + event.widgetItemId + ', widgetItemTitle: ' + event.widgetItemTitle);
        }}
        onTriggerCTA={(event: OnCTATriggeredEvent) => {
          console.log('Moments grid - onTriggerCTA - widgetId: ' + event.widgetId + ', actionType: ' + event.actionType + ', actionParam: ' + event.actionParam);
        }}
        adjustSizeAutomatically={adjustSizeAutomatically}
        dataSource={{
          labels: BlazeWidgetLabel.singleLabel('moments'),
        }}
        presetTheme={presetGridTheme}
        style={style}
        blazeWidgetLayout={widgetLayoutMomentsGrid}
        blazePlayerMomentTheme={momentPlayerGridTheme}
      />
    </>
  );
}
