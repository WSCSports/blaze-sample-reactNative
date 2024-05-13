import React from 'react';
import { ViewStyle } from 'react-native';
import { widgetLayoutStoriesRow } from '../../utils/widgetLayout.utils';
import { storyPlayerRowTheme } from '../../utils/blazePlayersTheme.utils';
import {
  BlazeStoriesRowView,
  BlazeWidgetLabel,
  PresetThemeRowType,
} from '@wscsports/blaze-rtn-sdk';
import { createWidgetDelegate } from '../../utils';

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
        style={style}
        dataSource={{
          labels: BlazeWidgetLabel.singleLabel('live-stories'),
          orderType: 'aToZ',
          maxItems: 10,
          labelsPriority: [BlazeWidgetLabel.singleLabel('live-stories')],
        }}
        presetTheme={presetRowTheme}
        // blazeWidgetLayout={widgetLayoutStoriesRow} // Uncomment this if you want to customize the widget's appearence.        
        // blazePlayerStoryTheme={storyPlayerRowTheme} // Uncomment this if you want to customize the player's appearence.
        widgetDelegate={ createWidgetDelegate('Stories Row') }
      />
    </>
  );
}