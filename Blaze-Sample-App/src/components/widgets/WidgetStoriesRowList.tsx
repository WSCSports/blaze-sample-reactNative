import {BlazeWidgetLabel} from '@wscsports/blaze-rtn-sdk/src/classes/blaze-widget-label';
import React, {useRef} from 'react';
import {ViewStyle} from 'react-native';
import {BlazeStoriesRowView} from '../native';
import {widgetLayoutStoriesRow} from '../../utils/widgetLayout.utils';
import {storyPlayerRowTheme} from '../../utils/blazePlayersTheme.utils';
import {BlazeViewComponentMethods} from '@wscsports/blaze-rtn-sdk/src/interfaces';
import {
  OnTriggerCTANativeEvent,
  PresetThemeRowType,
} from '@wscsports/blaze-rtn-sdk/src/interfaces/widgets-props.interface';

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
        onTriggerCTA={(event: OnTriggerCTANativeEvent) => {
          const widgetId = event.nativeEvent.widgetId;
          const actionType = event.nativeEvent.actionType;
          const actionParam = event.nativeEvent.actionParam;
          console.log(
            'Stories row',
            'onTriggerCTA with widgetId: ',
            widgetId,
            ' actionType: ',
            actionType,
            ' actionParam: ',
            actionParam,
          );
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
