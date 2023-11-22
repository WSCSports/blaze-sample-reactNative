import {PresetThemeRowType} from '@wscsports/blaze-rtn-sdk/src/BlazeStoriesRowViewNativeComponent';
import {BlazeWidgetLabel} from '@wscsports/blaze-rtn-sdk/src/classes/blaze-widget-label';
import React from 'react';
import {ViewStyle} from 'react-native';
import {BlazePlayerStoryTheme} from '@wscsports/blaze-rtn-sdk/src/interfaces';
import {BlazeStoriesRowView} from '../native';

export interface WidgetStoriesRowListProps {
  style?: ViewStyle; // You can adjust the type based on your styling needs
  dataSourceScreen?: boolean;
}

const blazeStoryTheme: BlazePlayerStoryTheme = {
  backgroundColor: '#ffffff',
  headerGradient: {
    startColor: '#000000',
    endColor: '#ffffff',
  },
  title: {
    font: {
      fontName: 'Agbalumo-Regular',
      fontFileName: 'agbalumo_regular',
    },
    textColor: '#3c4ae7',
    textSize: 18,
  },
};

export function WidgetStoriesRowList(
  props: WidgetStoriesRowListProps,
): JSX.Element {
  const {style} = props;

  return (
    <BlazeStoriesRowView
      onWidgetDataLoadStarted={() => {
        console.log('Stories row', 'onWidgetDataLoadStarted');
      }}
      onWidgetDataLoadCompleted={() => {
        console.log('Stories row', 'onWidgetDataLoadCompleted');
      }}
      onWidgetPlayerDismissed={() => {
        console.log('Stories row', 'onWidgetPlayerDismissed');
      }}
      onItemClicked={() => {
        console.log('Stories row', 'onItemClicked');
      }}
      onTriggerCTA={event => {
        const widgetId = event.nativeEvent.widgetId;
        const actionType = event.nativeEvent.actionType;
        const actionParam = event.nativeEvent.actionParam;
        console.log(
          'Stories row',
          'onTriggerCTA with widgetId: ',
          widgetId,
          ' actionType: ',
          actionType,
          ' actionParam: ',
          actionParam,
        );
      }}
      dataSource={{
        labels: BlazeWidgetLabel.singleLabel('live-stories'),
      }}
      presetTheme={PresetThemeRowType.CIRCLE}
      style={style}
      blazePlayerStoryTheme={blazeStoryTheme}
    />
  );
}
