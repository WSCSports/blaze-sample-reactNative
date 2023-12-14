import {BlazeWidgetLabel} from '@wscsports/blaze-rtn-sdk/src/classes/blaze-widget-label';
import React, {useRef} from 'react';
import {Button, ViewStyle} from 'react-native';
import {momentPlayerGridTheme} from '../../utils/blazePlayersTheme.utils';
import {widgetLayoutMomentsGrid} from '../../utils/widgetLayout.utils';
import {BlazeMomentsGridView} from '../native';
import {BlazeViewComponentMethods} from '@wscsports/blaze-rtn-sdk/src/interfaces';
import {updateDataSourceHandler} from '../../utils/sdk.utils';
import {OnTriggerCTANativeEvent} from '@wscsports/blaze-rtn-sdk/src/interfaces/widgets-props.interface';

export interface WidgetMomentsGridListProps {
  style?: ViewStyle; 
  adjustSizeAutomatically?: boolean;
}

export function WidgetMomentsGridList(
  props: WidgetMomentsGridListProps,
): JSX.Element {
  const {style, adjustSizeAutomatically} = props;
  const momentsGridRef = useRef<BlazeViewComponentMethods | null>(null);

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
      {/* <Button title="Update Data Source" onPress={handleUpdateDataSource} /> */}
      <BlazeMomentsGridView
        ref={momentsGridRef}
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
        onTriggerCTA={(event: OnTriggerCTANativeEvent) => {
          const widgetId = event.nativeEvent.widgetId;
          const actionType = event.nativeEvent.actionType;
          const actionParam = event.nativeEvent.actionParam;
          console.log(
            'Moments grid',
            'onTriggerCTA with widgetId: ',
            widgetId,
            ' actionType: ',
            actionType,
            ' actionParam: ',
            actionParam,
          );
        }}
        adjustSizeAutomatically={adjustSizeAutomatically}
        dataSource={{
          labels: BlazeWidgetLabel.singleLabel('moments'),
        }}
        style={style}
        blazeWidgetLayout={widgetLayoutMomentsGrid}
        blazePlayerMomentTheme={momentPlayerGridTheme}
      />
    </>
  );
}
