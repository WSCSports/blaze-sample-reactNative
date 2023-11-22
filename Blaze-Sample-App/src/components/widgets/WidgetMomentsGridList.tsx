import {BlazeWidgetLabel} from '@wscsports/blaze-rtn-sdk/src/classes/blaze-widget-label';
import {BlazePlayerMomentTheme} from '@wscsports/blaze-rtn-sdk/src/interfaces/widget-moment-theme.interface';
import React from 'react';
import {ViewStyle} from 'react-native';
import {BlazeWidgetLayout} from '@wscsports/blaze-rtn-sdk/src/interfaces';
import {BlazeMomentsGridView} from '../native';

export interface WidgetMomentsGridListProps {
  style?: ViewStyle; // You can adjust the type based on your styling needs
  adjustSizeAutomatically?: boolean;
}

export function WidgetMomentsGridList(
  props: WidgetMomentsGridListProps,
): JSX.Element {
  const {style, adjustSizeAutomatically} = props;

  const blazeWidgetLayout: BlazeWidgetLayout = {
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
          textColor: '#FFFF00',
          maxLines: 2,
          textAlign: 'Start',
        },
        unreadStyle: {
          textSize: 12,
          letterSpacing: 0,
          textColor: '#F100AA',
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
            color: '#FF0000',
            margin: 0,
            width: 3,
          },
        },
      },
    },
  };

  const blazeMomentTheme: BlazePlayerMomentTheme = {
    title: {
      textColor: '#ffffff',
    },
    collectionTitle: {
      textColor: '#F8C471',
    },
    buttons: {
      mute: {
        width: 40,
        height: 40,
        color: '#F8C471',
        isVisible: true,
      },
      exit: {
        width: 40,
        height: 40,
        color: '#fcfcfc',
        isVisible: true,
        scaleType: 'FIT_END',
        isVisibleForAds: false,
      },
      share: {
        width: 60,
        height: 60,
        color: '#00ff5e',
        isVisible: true,
      },
      like: {
        width: 60, 
        height: 60, 
        color: '#ffaaaa', 
        isVisible: true,
        scaleType: 'FIT_XY',
        image: {
          selectedImage: {
            imageName: 'exit',
          },
          unselectedImage: {
            imageName: 'like',
          },
        },
      },
    },
    ctaStyle: {cornerRadius: 16},
    headerGradient: {
      isVisible: true,
      startColor: '#0022ff',
      endColor: '#000000',
    },
    footerGradient: {
      isVisible: true,
      startColor: '#000000',
      endColor: '#0040ff',
    },
    shouldShowCloseButtonForAds: true,
    firstTimeSlideAppearance: {
      backgroundColor: {
        colorFileName: 'first_time_color',
        colorName: '#E74C3C',
      },
      mainTitle: {
        text: 'hello WSC',
      },
      instructions: {
        previous: {
          headerText: {
            text: 'previous',
          },
        },
        pause: {
          headerText: {
            text: 'pause',
          },
        },
        play: {
          headerText: {
            text: 'play',
          },
        },
        next: {
          headerText: {
            text: 'next',
          },
        },
      },
    },

    playerSeekBar: {
      isVisible: true,
      progressColor: '#1c3434',
      thumbColor: '#b3ffFF',
      thumbImage: {
        imageName: 'exit',
      },
    },
  };

  return (
    <BlazeMomentsGridView
      onWidgetDataLoadStarted={() => {
        console.log('Moments grid', 'onWidgetDataLoadStarted');
      }}
      onWidgetDataLoadCompleted={() => {
        console.log('Moments grid', 'onWidgetDataLoadCompleted');
      }}
      onWidgetPlayerDismissed={() => {
        console.log('Moments grid', 'onWidgetPlayerDismissed');
      }}
      onItemClicked={() => {
        console.log('Moments grid', 'onItemClicked');
      }}
      onTriggerCTA={event => {
        const widgetId = event.nativeEvent.widgetId;
        const actionType = event.nativeEvent.actionType;
        const actionParam = event.nativeEvent.actionParam;
        console.log(
          'Moments grid',
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
        labels: BlazeWidgetLabel.singleLabel('moments'),
      }}
      style={style}
      blazeWidgetLayout={blazeWidgetLayout}
      blazePlayerMomentTheme={blazeMomentTheme}
    />
  );
}
