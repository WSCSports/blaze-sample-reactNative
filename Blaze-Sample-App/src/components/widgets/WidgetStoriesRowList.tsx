import React, { JSX } from 'react';
import { ViewStyle } from 'react-native';
import { widgetLayoutStoriesRow } from '../../utils/widgetLayout.utils';
import { storyPlayerRowStyle } from '../../utils/blazePlayersTheme.utils';
import {
  BlazeStoriesRowView,
  BlazeWidgetLabel,
  PresetRowWidgetLayout,
} from '@wscsports/blaze-rtn-sdk';
import { createWidgetDelegate } from '../../utils';

export interface WidgetStoriesRowListProps {
  style?: ViewStyle;
}

export function WidgetStoriesRowList(
  props: WidgetStoriesRowListProps,
): JSX.Element {
  const { style } = props;
  const presetRowLayout: PresetRowWidgetLayout = 'widgetCircle';

  return (
    <>
      <BlazeStoriesRowView
        style={style}
        dataSource={{
          labels: BlazeWidgetLabel.singleLabel('live-stories'),
          orderType: 'aToZ',
          maxItems: 10,
          labelsPriority: [BlazeWidgetLabel.singleLabel('live-stories')],
        }}
        presetWidgetLayout={presetRowLayout}
        // blazeWidgetLayout={widgetLayoutStoriesRow} // Uncomment this if you want to customize the widget's appearence.        
        // blazeStoryPlayerStyle={storyPlayerRowStyle} // Uncomment this if you want to customize the player's appearence.
        widgetDelegate={createWidgetDelegate('Stories Row')}
      />
    </>
  );
}