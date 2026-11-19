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
  widgetId: string;
  overridePreset?: BlazeWidgetLayoutPreset;
}

export function WidgetStoriesRowList(
  props: WidgetStoriesRowListProps,
): JSX.Element {
  const { style, widgetId, overridePreset } = props;
  const presetRowLayout: BlazeWidgetLayoutPreset = 'StoriesWidget.Row.circles';

  return (
    <>
      <BlazeStoriesRowView
        style={style}
        dataSource={{
          labels: BlazeWidgetLabel.singleLabel('live-stories')
        }}
        // dataSource={{ type: 'followedEntities' }} // Uncomment (instead of the dataSource above) to build the row from the entities the user follows.
        presetWidgetLayout={overridePreset ?? presetRowLayout}
        // blazeWidgetLayout={widgetLayoutStoriesRow} // Uncomment this if you want to customize the widget's appearence.
        // playerStyle={storyPlayerRowStyle} // Uncomment this if you want to customize the player's appearence.
        // playbackConfiguration={{ bufferingSpinnerDelayMs: 500 }} // Uncomment this if you want to customize the playback configuration.
        // interactionLinkHandling="Deeplink" // Uncomment this if you want to customize how this widget's interaction links are handled.
        widgetId={widgetId}
        widgetDelegate={createWidgetDelegate('Stories Row')}
      />
    </>
  );
}
