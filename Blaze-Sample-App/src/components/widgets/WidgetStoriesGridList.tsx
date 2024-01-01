import React, { useRef } from 'react';
import { Button, ViewStyle } from 'react-native';
import { storyPlayerGridTheme } from '../../utils/blazePlayersTheme.utils';
import { widgetLayoutStoriesGrid } from '../../utils/widgetLayout.utils';
import { 
  BlazeStoriesGridView,
  BlazeWidgetLabel,
  PresetThemeGridType,
  OnWidgetDataLoadStartedEvent,
  OnWidgetDataLoadCompleteEvent,
  OnWidgetPlayerDismissedEvent,
  OnWidgetItemClickedEvent,
  OnCTATriggeredEvent,
} from '@wscsports/blaze-rtn-sdk';

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
        ref={storiesGridRef}
        onWidgetDataLoadStarted={(event: OnWidgetDataLoadStartedEvent) => {
          console.log('Stories grid - onWidgetDataLoadStarted - widgetId: ' + event.widgetId);
        }}
        onWidgetDataLoadCompleted={(event: OnWidgetDataLoadCompleteEvent) => {
          console.log('Stories grid - onWidgetDataLoadCompleted - widgetId: ' + event.widgetId + ', itemCount: ' + event.itemsCount + ', error: ' + event.error);
        }}
        onWidgetPlayerDismissed={(event: OnWidgetPlayerDismissedEvent) => {
          console.log('Stories grid - onWidgetPlayerDismissed - widgetId: ' + event.widgetId);
        }}
        onItemClicked={(event: OnWidgetItemClickedEvent) => {
          console.log('Stories grid - onItemClicked - widgetId: ' + event.widgetId + ', widgetItemId: ' + event.widgetItemId + ', widgetItemTitle: ' + event.widgetItemTitle);
        }}
        onTriggerCTA={(event: OnCTATriggeredEvent) => {
          console.log('Stories grid - onTriggerCTA - widgetId: ' + event.widgetId + ', actionType: ' + event.actionType + ', actionParam: ' + event.actionParam);
        }}
        adjustSizeAutomatically={adjustSizeAutomatically}
        dataSource={{
          labels: BlazeWidgetLabel.singleLabel('live-stories'),
        }}
        presetTheme={presetGridTheme}
        style={style}
        blazeWidgetLayout={widgetLayoutStoriesGrid}
        blazePlayerStoryTheme={storyPlayerGridTheme}
      />
    </>
  );
}
