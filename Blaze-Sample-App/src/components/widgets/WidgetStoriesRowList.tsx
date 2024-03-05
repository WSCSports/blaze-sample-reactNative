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
        dataSource={{
          labels: BlazeWidgetLabel.singleLabel('<STORIES_LABEL>'),
          orderType: 'aToZ',
          maxItems: 10,
          labelsPriority: [BlazeWidgetLabel.singleLabel('<STORIES_LABEL>')],
        }}
        blazeWidgetLayout={widgetLayoutStoriesRow}
        presetTheme={presetRowTheme}
        style={style}
        blazePlayerStoryTheme={storyPlayerRowTheme}
        widgetDelegate={ createWidgetDelegate('Stories Row') }
      />
    </>
  );
}