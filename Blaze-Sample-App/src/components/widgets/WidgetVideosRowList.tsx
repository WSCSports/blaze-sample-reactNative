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
}

export function WidgetVideosRowList(
  props: WidgetVideosRowListProps,
): JSX.Element {
  const { style } = props;
  const presetRowLayout: BlazeWidgetLayoutPreset = 'VideosWidget.Row.horizontalRectangles';

  return (
    <>
      <BlazeVideosRowView
        style={style}
        dataSource={{
          labels: BlazeWidgetLabel.singleLabel('videos'),
        }}
        presetWidgetLayout={presetRowLayout}
        // blazeWidgetLayout={widgetLayoutVideosRow} // Uncomment this if you want to customize the widget's appearence.
        // playerStyle={videosPlayerStyle} // Uncomment this if you want to customize the player's appearence.
        widgetDelegate={createWidgetDelegate('Videos Row')}
      />
    </>
  );
}