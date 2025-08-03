import React, { JSX } from 'react';
import { ViewStyle } from 'react-native';
import { widgetLayoutStoriesRow } from '../../utils/widgetLayout.utils';
import { storyPlayerRowStyle } from '../../utils/blazePlayersTheme.utils';
import {
  BlazeStoriesRowView,
  BlazeWidgetLabel,
  BlazeWidgetLayoutPreset,
} from '@wscsports/blaze-rtn-sdk';
import { createWidgetDelegate } from '../../utils';

export interface WidgetStoriesRowListProps {
  style?: ViewStyle;
}

export function WidgetStoriesRowList(
  props: WidgetStoriesRowListProps,
): JSX.Element {
  const { style } = props;
  const presetRowLayout: BlazeWidgetLayoutPreset = 'StoriesWidget.Row.circles';

  return (
    <>
      <BlazeStoriesRowView
        style={style}
        dataSource={{
          labels: BlazeWidgetLabel.singleLabel('live-stories')
        }}
        presetWidgetLayout={presetRowLayout}
        // blazeWidgetLayout={widgetLayoutStoriesRow} // Uncomment this if you want to customize the widget's appearence.
        // playerStyle={storyPlayerRowStyle} // Uncomment this if you want to customize the player's appearence.
        widgetDelegate={createWidgetDelegate('Stories Row')}
      />
    </>
  );
}