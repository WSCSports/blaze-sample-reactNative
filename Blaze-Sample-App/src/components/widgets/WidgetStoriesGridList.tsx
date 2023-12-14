import {BlazeWidgetLabel} from '@wscsports/blaze-rtn-sdk/src/classes/blaze-widget-label';
import {BlazeViewComponentMethods} from '@wscsports/blaze-rtn-sdk/src/interfaces';
import React, {useRef} from 'react';
import {Button, ViewStyle} from 'react-native';
import {storyPlayerGridTheme} from '../../utils/blazePlayersTheme.utils';
import {widgetLayoutStoriesGrid} from '../../utils/widgetLayout.utils';
import {BlazeStoriesGridView} from '../native';
import {
  OnTriggerCTANativeEvent,
  PresetThemeGridType,
} from '@wscsports/blaze-rtn-sdk/src/interfaces/widgets-props.interface';

interface WidgetStoriesGridListProps {
  style?: ViewStyle;
  adjustSizeAutomatically?: boolean;
}

export function WidgetStoriesGridList(
  props: WidgetStoriesGridListProps,
): JSX.Element {
  const {style, adjustSizeAutomatically} = props;
  const presetRowTheme: PresetThemeGridType = 'twoColumnsTheme';
  const storiesGridRef = useRef<BlazeViewComponentMethods | null>(null);

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
        onWidgetDataLoadStarted={() => {
          console.log('Stories grid', 'onWidgetDataLoadStarted');
        }}
        onWidgetDataLoadCompleted={() => {
          console.log('Stories grid', 'onWidgetDataLoadCompleted');
        }}
        onWidgetPlayerDismissed={() => {
          console.log('Stories grid', 'onWidgetPlayerDismissed');
        }}
        onItemClicked={() => {
          console.log('Stories grid', 'onItemClicked');
        }}
        onTriggerCTA={(event: OnTriggerCTANativeEvent) => {
          const widgetId = event.nativeEvent.widgetId;
          const actionType = event.nativeEvent.actionType;
          const actionParam = event.nativeEvent.actionParam;
          console.log(
            'Stories grid',
            'onTriggerCTA with widgetId: ',
            widgetId,
            ' actionType: ',
            actionType,
            ' actionParam: ',
            actionParam,
          );
        }}
        adjustSizeAutomatically={adjustSizeAutomatically}
        dataSource={{
          labels: BlazeWidgetLabel.singleLabel('live-stories'),
        }}
        presetTheme={presetRowTheme}
        style={style}
        blazeWidgetLayout={widgetLayoutStoriesGrid}
        blazePlayerStoryTheme={storyPlayerGridTheme}
      />
    </>
  );
}
