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

export interface WidgetVideosRowListProps {
  style?: ViewStyle;
  widgetId: string;
  overridePreset?: BlazeWidgetLayoutPreset;
}

export function WidgetVideosRowList(
  props: WidgetVideosRowListProps,
): JSX.Element {
  const { style, widgetId, overridePreset } = props;
  const presetRowLayout: BlazeWidgetLayoutPreset = 'VideosWidget.Row.horizontalRectangles';

  return (
    <>
      <BlazeVideosRowView
        style={style}
        dataSource={{
          labels: BlazeWidgetLabel.singleLabel('videos'),
        }}
        // dataSource={{ type: 'followedEntities' }} // Uncomment (instead of the dataSource above) to build the row from the entities the user follows.
        presetWidgetLayout={overridePreset ?? presetRowLayout}
        // blazeWidgetLayout={widgetLayoutVideosRow} // Uncomment this if you want to customize the widget's appearence.
        // playerStyle={videosPlayerStyle} // Uncomment this if you want to customize the player's appearence.
        // playbackConfiguration={{ multiAspectRatio: true, shouldOpenInLandscape: true, bufferingSpinnerDelayMs: 500 }}
        // videosFilterParams={{ contentTypes: ['video', 'stream'], streamStates: ['live', 'upcoming'] }} // Uncomment (with a data source that actually has live content) to mix in live streams.
        widgetId={widgetId}
        widgetDelegate={createWidgetDelegate('Videos Row')}
      />
    </>
  );
}
