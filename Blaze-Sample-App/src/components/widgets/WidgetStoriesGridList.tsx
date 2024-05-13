import React, { useRef } from 'react';
import { Button, ViewStyle } from 'react-native';
import { storyPlayerGridTheme } from '../../utils/blazePlayersTheme.utils';
import { widgetLayoutStoriesGrid } from '../../utils/widgetLayout.utils';
import { 
  BlazeStoriesGridView,
  BlazeWidgetLabel,
  PresetThemeGridType,
} from '@wscsports/blaze-rtn-sdk';
import { createWidgetDelegate } from '../../utils';

interface WidgetStoriesGridListProps {
  style?: ViewStyle;
  adjustSizeAutomatically?: boolean;
}

export function WidgetStoriesGridList(
  props: WidgetStoriesGridListProps,
): JSX.Element {
  const {style, adjustSizeAutomatically} = props;
  const presetGridTheme: PresetThemeGridType = 'twoColumnsTheme';
  const storiesGridRef = useRef<BlazeStoriesGridView | null>(null);

  const handleReloadData = () => {
    if (storiesGridRef?.current) {
      storiesGridRef?.current.reloadData();
    }
  };

  return (
    <>
      <Button title="Reload Data" onPress={handleReloadData} />
      <BlazeStoriesGridView
        style={style}
        ref={storiesGridRef}
        adjustSizeAutomatically={adjustSizeAutomatically}
        dataSource={{
          labels: BlazeWidgetLabel.singleLabel('live-stories'),
        }}
        presetTheme={presetGridTheme}        
        // blazeWidgetLayout={widgetLayoutStoriesGrid} // Uncomment this if you want to customize the widget's appearence.
        // blazePlayerStoryTheme={storyPlayerGridTheme} // Uncomment this if you want to customize the player's appearence.
        widgetDelegate={ createWidgetDelegate('Stories Grid') }
      />
    </>
  );
}
