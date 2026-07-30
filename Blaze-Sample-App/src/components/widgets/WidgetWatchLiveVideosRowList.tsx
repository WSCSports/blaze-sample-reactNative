import React, { JSX } from 'react';
import { ViewStyle } from 'react-native';
import { videosPlayerStyle } from '../../utils/blazePlayersTheme.utils';
import {
  BlazeVideosRowView,
  BlazeWidgetLabel,
  BlazeWidgetLayoutPreset,
} from '@wscsports/blaze-rtn-sdk';
import { createWidgetDelegate } from '../../utils';
import { widgetLayoutVideosRow } from '../../utils/widgetLayout.utils';

export interface WidgetWatchLiveVideosRowListProps {
  style?: ViewStyle;
}

export function WidgetWatchLiveVideosRowList(
  props: WidgetWatchLiveVideosRowListProps,
): JSX.Element {
  const { style } = props;
  const presetRowLayout: BlazeWidgetLayoutPreset = 'VideosWidget.Row.horizontalRectangles';

  return (
    <>
      <BlazeVideosRowView
        style={style}
        dataSource={{
          labels: BlazeWidgetLabel.singleLabel('match'),
          orderType: 'startTimeAsc',
          advancedOrderType: 'LiveFirst',
        }}
        videosFilterParams={{
          contentTypes: ['stream'],
          streamStates: ['live', 'upcoming'],
        }}
        presetWidgetLayout={presetRowLayout}
        // blazeWidgetLayout={widgetLayoutVideosRow} // Uncomment this if you want to customize the widget's appearence.
        // playerStyle={videosPlayerStyle} // Uncomment this if you want to customize the player's appearence.
        widgetId="Watch Live Videos Row"
        widgetDelegate={createWidgetDelegate('Watch Live Row')}
      />
    </>
  );
}
