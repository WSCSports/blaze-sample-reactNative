import React, { JSX, useRef } from 'react';
import { Button, ViewStyle } from 'react-native';
import { storyPlayerGridStyle } from '../../utils/blazePlayersTheme.utils';
import { widgetLayoutStoriesGrid } from '../../utils/widgetLayout.utils';
import {
  BlazeStoriesGridView,
  BlazeWidgetLabel,
  PresetGridWidgetLayout,
} from '@wscsports/blaze-rtn-sdk';
import { createWidgetDelegate, updateDataSourceHandler } from '../../utils';
import { BlazeWidgetLayout } from '@wscsports/blaze-rtn-sdk';
import { initialWidgetStyleOverrides } from '../../utils/widgetItemStyleOverrides.utils';

interface WidgetStoriesGridListProps {
  style?: ViewStyle;
  isEmbeddedInScrollView?: boolean;
}

export function WidgetStoriesGridList(
  props: WidgetStoriesGridListProps,
): JSX.Element {
  const { style, isEmbeddedInScrollView } = props;
  const presetGridLayout: PresetGridWidgetLayout = 'twoColumnsTheme';
  const storiesGridRef = useRef<BlazeStoriesGridView | null>(null);

  const handleReloadData = () => {
    if (storiesGridRef?.current) {
      storiesGridRef?.current.reloadData();
    }
  };

  const handlePlayWidget = () => {
    if (storiesGridRef?.current) {
      storiesGridRef?.current.play();
    }
  }

  const handleUpdateDataSource = () => {
    const newDataSource = {
      /* Your updated data source */
      labels: BlazeWidgetLabel.atLeastOneOf('messi', 'ronaldo'),
    };
    updateDataSourceHandler(storiesGridRef, newDataSource, false);
  };

  return (
    <>
      <Button title="Reload Data" onPress={handleReloadData} />
      <Button title="Play Widget" onPress={handlePlayWidget} />
      <Button title="Update Data Source" onPress={handleUpdateDataSource} />
      <BlazeStoriesGridView
        style={style}
        ref={storiesGridRef}
        isEmbeddedInScrollView={isEmbeddedInScrollView}
        dataSource={{
          labels: BlazeWidgetLabel.singleLabel('live-stories'),
        }}
        presetWidgetLayout={presetGridLayout}
        // blazeWidgetLayout={widgetLayoutStoriesGrid} // Uncomment this if you want to customize the widget's appearence.
        // blazeStoryPlayerStyle={storyPlayerGridStyle} // Uncomment this if you want to customize the player's appearence.
        widgetDelegate={createWidgetDelegate('Stories Grid')}
        perItemStyleOverrides={initialWidgetStyleOverrides()}
      />
    </>
  );
}

