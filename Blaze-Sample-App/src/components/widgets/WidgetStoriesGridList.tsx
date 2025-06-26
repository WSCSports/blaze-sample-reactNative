import React, { JSX, useRef } from 'react';
import { Button, ViewStyle } from 'react-native';
import { storyPlayerGridStyle } from '../../utils/blazePlayersTheme.utils';
import { widgetLayoutStoriesGrid } from '../../utils/widgetLayout.utils';
import {
  BlazeStoriesGridView,
  BlazeWidgetLabel,
  BlazeWidgetLayoutPreset,
} from '@wscsports/blaze-rtn-sdk';
import { createWidgetDelegate, updateDataSourceHandler } from '../../utils';
import { initialWidgetStyleOverrides } from '../../utils/widgetItemStyleOverrides.utils';

interface WidgetStoriesGridListProps {
  style?: ViewStyle;
  isEmbeddedInScrollView?: boolean;
  shouldShowActionButtons?: boolean;
  shouldLimitItemCount?: boolean;
}

export function WidgetStoriesGridList(
  props: WidgetStoriesGridListProps,
): JSX.Element {
  const { style, isEmbeddedInScrollView, shouldShowActionButtons = false, shouldLimitItemCount = false } = props;
  const presetGridLayout: BlazeWidgetLayoutPreset = 'StoriesWidget.Grid.twoColumnsVerticalRectangles';
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
      {shouldShowActionButtons && (
        <>
          <Button title="Reload Data" onPress={handleReloadData} />
          <Button title="Play Widget" onPress={handlePlayWidget} />
          <Button title="Update Data Source" onPress={handleUpdateDataSource} />
        </>
      )}
      <BlazeStoriesGridView
        style={style}
        ref={storiesGridRef}
        isEmbeddedInScrollView={isEmbeddedInScrollView}
        dataSource={{
          labels: BlazeWidgetLabel.singleLabel('live-stories'),
          maxItems: shouldLimitItemCount == true ? 4 : undefined
        }}
        presetWidgetLayout={presetGridLayout}
        // blazeWidgetLayout={widgetLayoutStoriesGrid} // Uncomment this if you want to customize the widget's appearence.
        // playerStyle={storyPlayerGridStyle} // Uncomment this if you want to customize the player's appearence.
        widgetDelegate={createWidgetDelegate('Stories Grid')}
        perItemStyleOverrides={initialWidgetStyleOverrides()}
      />
    </>
  );
}

