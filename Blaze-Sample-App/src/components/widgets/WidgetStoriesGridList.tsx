import {PresetThemeGridType} from '@wscsports/blaze-rtn-sdk/src/BlazeStoriesGridViewNativeComponent';
import {BlazeWidgetLabel} from '@wscsports/blaze-rtn-sdk/src/classes/blaze-widget-label';
import {
  BlazePlayerStoryTheme,
  BlazeWidgetLayout,
} from '@wscsports/blaze-rtn-sdk/src/interfaces';
import React from 'react';
import {ViewStyle} from 'react-native';
import {BlazeStoriesGridView} from '../native';

interface WidgetStoriesGridListProps {
  style?: ViewStyle; // You can adjust the type based on your styling needs
  adjustSizeAutomatically?: boolean;
}

export const blazeWidgetLayout: BlazeWidgetLayout = {
  horizontalItemsSpacing: 10,
  verticalItemsSpacing: 10,
  margins: {
    top: 0,
    leading: 10,
    bottom: 30,
    trailing: 10,
  },
  widgetItemAppearance: {
    title: {
      isVisible: true,
      readStyle: {
        font: {
          fontName: 'Agbalumo-Regular',
          fontFileName: 'agbalumo_regular',
        },
        textSize: 20,
        letterSpacing: 5,
        textColor: '#FFFF00',
        maxLines: 2,
        textAlign: 'Start',
      },
      unreadStyle: {
        font: {
          fontName: 'Agbalumo-Regular',
          fontFileName: 'agbalumo_regular',
        },
        textSize: 12,
        letterSpacing: 0,
        textColor: '#ffffff',
        maxLines: 3,
        textAlign: 'End',
      },
    },
    image: {
      position: 'TopStart',
      border: {
        isVisible: true,
        liveReadBorder: {
          isVisible: true,
          color: '#0000FF',
          margin: 2,
          width: 3,
        },
        liveUnreadBorder: {
          isVisible: true,
          color: '#00FF00',
          margin: 2,
          width: 3,
        },
        readBorder: {
          isVisible: true,
          color: '#FFA500',
          margin: 2,
          width: 3,
        },
        unreadBorder: {
          isVisible: true,
          color: '#131313',
          margin: 2,
          width: 3,
        },
      },
    },
  },
};

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
    textColor: '548d00',
    textSize:18
  },
  iconThumbnail: {
    width: 40,
    height: 20,
  },
  buttons: {
    mute: {
      width: 40,
      height: 40,
      color: '#F7DC6F',
    },
    exit: {
      width: 60,
      height: 60,
      color: '#646464',
      scaleType: 'CENTER_CROP',
    },
    share: {
      width: 70,
      height: 70,
      color: '#3498DB',
    },
  },
  chips: {
    ad: {
      text: 'LIVE',
      textColor: '#ECF0F1',
      backgroundColor: '#2C3E50',
    },
    live: {
      text: 'LIVE',
      textColor: '#FF0000',
      backgroundColor: '#ffffff',
    },
  },
  firstTimeSlideAppearance: {
    backgroundColor: {colorFileName: 'first_time_color', colorName: '#E74C3C'},
    show: true,
    mainTitle: {
      text: 'Demo WSC',
      font: {        
        fontName: 'Agbalumo-Regular',
        fontFileName: 'agbalumo_regular',
      },
    },
    BlazeFirstTimeSlideText: {
      text: 'Subtitle',
      font: {        
        fontName: 'Agbalumo-Regular',
        fontFileName: 'agbalumo_regular',
      },
    },
  },
  progressBarStyle: {
    backgroundColor: '#929292',
    progressColor: '#548d00',
  },
  ctaStyle: {
    cornerRadius: 16,
    font: {
      fontName: 'Agbalumo-Regular',
      fontFileName: 'agbalumo_regular',
    },
    textSize: 20,
  }
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
        labels: BlazeWidgetLabel.singleLabel('live-stories'),
      }}
      presetTheme={PresetThemeGridType.TWO}
      style={style}
      blazeWidgetLayout={blazeWidgetLayout}
      blazePlayerStoryTheme={blazeStoryTheme}
    />
  );
}
