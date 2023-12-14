import {BlazeWidgetLabel} from '@wscsports/blaze-rtn-sdk/src/classes/blaze-widget-label';
import React, {} from 'react';
import {ViewStyle} from 'react-native';
import {momentPlayerRowTheme} from '../../utils/blazePlayersTheme.utils';
import {widgetLayoutMomentsRow} from '../../utils/widgetLayout.utils';
import {BlazeMomentsRowView} from '../native';
import {
  OnTriggerCTANativeEvent,
  PresetThemeRowType,
} from '@wscsports/blaze-rtn-sdk/src/interfaces/widgets-props.interface';

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
        onTriggerCTA={(event: OnTriggerCTANativeEvent) => {
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
        presetTheme={presetRowTheme}
        blazePlayerMomentTheme={momentPlayerRowTheme}
        blazeWidgetLayout={widgetLayoutMomentsRow}
        style={style}
      />
    </>
  );
}
