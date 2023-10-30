import React from 'react';
import {ViewStyle} from 'react-native';
import {PresetThemeGridType} from '@wscsports/blaze-rtn-sdk/src/BlazeStoriesGridViewNativeComponent';
import {BlazeWidgetLayout} from '@wscsports/blaze-rtn-sdk/src/interfaces';
import {BlazeStoriesGridView} from '../native';

interface WidgetStoriesGridListProps {
  style?: ViewStyle; // You can adjust the type based on your styling needs
  adjustSizeAutomatically?: boolean;
}

const blazeWidgetLayout: BlazeWidgetLayout = {
  horizontalItemsSpacing: 10,
  verticalItemsSpacing: 10,
  // itemRatio: 9/16,
  widgetItemAppearance: {
    title: {
      isVisible: true,
      readStyle: {
        font: {
            fontName: 'Agbalumo-Regular', 
            fontFileName: 'agbalumo_regular'
        },
        textSize: 20,
        // letterSpacing: 5,
        textColor: '#FFFF00',
        // lineHeight: 25,
        maxLines: 2,
        textAlign: 'Start',
      },
      unreadStyle: {
        // font: {
        //     fontName: 'Agbalumo-Regular', 
        //     fontFileName: 'agbalumo_regular'
        // },
        textSize: 12,
        letterSpacing: 0,
        textColor: '#F100AA',
        // lineHeight: 26,
        maxLines: 3,
        textAlign: 'End',
      },
    },
    image: {
      position: 'TopStart',
      // width:100,
      // height:100,
      // ratio:10,
      // cornerRadiusRatio:6,
      border: {
        isVisible: true,
        liveReadBorder: {
          isVisible: true,
          color: '#0000FF',
          margin: 2,
          width: 1,
        },
        liveUnreadBorder: {
          isVisible: true,
          color: '#00FF00',
          margin: 2,
          width: 1,
        },
        readBorder: {
          isVisible: true,
          color: '#FFA500',
          margin: 2,
          width: 1,
        },
        unreadBorder: {
          isVisible: true,
          color: '#FF0000',
          margin: 0,
          width: 1,
        },
      },
      type: 'VerticalTwoByThree',
    },
  },
};

export function WidgetStoriesGridList(
  props: WidgetStoriesGridListProps,
): JSX.Element {
  const {style, adjustSizeAutomatically} = props;

  return (
    <BlazeStoriesGridView
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
      onTriggerCTA={event => {
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
        labels: 'live-stories',
      }}
      presetTheme={PresetThemeGridType.TWO}
      style={style}
      blazeWidgetLayout={blazeWidgetLayout}
    />
  );
}
