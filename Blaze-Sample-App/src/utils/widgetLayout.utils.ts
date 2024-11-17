import {
  BlazeWidgetLayout,
  BlazeWidgetItemCustomMapping,
  BlazeWidgetItemStyleOverrides
} from '@wscsports/blaze-rtn-sdk';

// json object fot story grid
export const widgetLayoutStoriesGrid: BlazeWidgetLayout = {
  horizontalItemsSpacing: 10,
  verticalItemsSpacing: 10,
  margins: {
    top: 0,
    leading: 10,
    bottom: 30,
    trailing: 10,
  },
  widgetItemStyle: {
    backgroundColor: '#99ff00',
    title: {
      isVisible: true,
      // insets:2,
      readState: {
        font: {
          fontName: 'Agbalumo-Regular',
          fontFileName: 'agbalumo_regular',
        },
        textSize: 14,
        // letterSpacing: 3,
        textColor: '#c3c3c3',
        maxLines: 2,
        textAlign: 'Start',
      },
      unreadState: {
        font: {
          fontName: 'Agbalumo-Regular',
          fontFileName: 'agbalumo_regular',
        },
        textSize: 14,
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
        liveReadState: {
          isVisible: true,
          margin: 2,
          width: 3,
        },
        liveUnreadState: {
          isVisible: true,
          margin: 2,
          width: 3,
        },
        readState: {
          isVisible: true,
          margin: 2,
          width: 3,
        },
        unreadState: {
          isVisible: true,
          margin: 2,
          width: 3,
        },
      },
    },
  },
};

// json object fot story row
export const widgetLayoutStoriesRow: BlazeWidgetLayout = {
  // horizontalItemsSpacing: 10,
  // verticalItemsSpacing: 10,
  // itemRatio: 9/16,
  // margins: {
  //   top: 0,
  //   leading: 10,
  //   bottom: 30,
  //   trailing: 10,
  // },
  widgetItemStyle: {
    // backgroundColor: '#99ff00',
    title: {
      isVisible: true,
      readState: {
        // font: {
        //   fontName: 'Agbalumo-Regular',
        //   fontFileName: 'agbalumo_regular',
        // },
        // textSize: 20,
        // letterSpacing: 5,
        // textColor: '#FFFF00',
        // lineHeight: 25,
        maxLines: 2,
      },
      unreadState: {
        // font: {
        //   fontName: 'Agbalumo-Regular',
        //   fontFileName: 'agbalumo_regular',
        // },
        // textSize: 12,
        // letterSpacing: 0,
        // textColor: '#ffffff',
        // // lineHeight: 26,
        // maxLines: 3,
        // textAlign: 'End',
      },
    },
    image: {
      border: {
        isVisible: true,
        liveReadState: {
          isVisible: true,
          margin: 2,
          width: 3,
        },
        liveUnreadState: {
          isVisible: true,
          margin: 2,
          width: 3,
        },
        readState: {
          isVisible: true,
          margin: 2,
          width: 3,
        },
        unreadState: {
          isVisible: true,
          margin: 2,
          width: 3,
        },
      },
    },
  },
};

export const widgetLayoutMomentsGrid: BlazeWidgetLayout = {
  horizontalItemsSpacing: 10,
  verticalItemsSpacing: 10,
  margins: {
    top: 0,
    leading: 10,
    bottom: 30,
    trailing: 10,
  },
  // columns:3,
  widgetItemStyle: {
    title: {
      isVisible: true,
      readState: {
        font: {
          fontName: 'Agbalumo-Regular',
          fontFileName: 'agbalumo_regular',
        },
        textSize: 14,
        textColor: '#FFFFFF',
        maxLines: 2,
      },
      unreadState: {
        // font: {
        //     fontName: 'Agbalumo-Regular',
        //     fontFileName: 'agbalumo_regular'
        // },
        textSize: 12,
        letterSpacing: 0,
        textColor: '#FFFF00',
        maxLines: 3,
      },
    },
    image: {
      position: 'TopStart',
      border: {
        isVisible: true,
        liveReadState: {
          isVisible: true,
          color: '#0000FF',
          margin: 2,
          width: 3,
        },
        liveUnreadState: {
          isVisible: true,
          color: '#00FF00',
          margin: 2,
          width: 3,
        },
        readState: {
          isVisible: true,
          color: '#FFA500',
          margin: 2,
          width: 3,
        },
        unreadState: {
          isVisible: true,
          color: '#FFFF00',
          margin: 0,
          width: 3,
        },
      },
    },
  },
};

export const widgetLayoutMomentsRow: BlazeWidgetLayout = {
  margins: {
    top: 0,
    leading: 10,
    trailing: 10,
  },
  // columns:3,
  widgetItemStyle: {
    title: {
      isVisible: true,
      readState: {
        font: {
          fontName: 'Agbalumo-Regular',
          fontFileName: 'agbalumo_regular',
        },
        textSize: 14,
        maxLines: 2,
      },
      unreadState: {
        // font: {
        //     fontName: 'Agbalumo-Regular',
        //     fontFileName: 'agbalumo_regular'
        // },
        textSize: 12,
        letterSpacing: 0,
        maxLines: 2,
      },
    },
    image: {
      position: 'TopStart',
      border: {
        isVisible: true,
        liveReadState: {
          isVisible: true,
          margin: 2,
          width: 3,
        },
        liveUnreadState: {
          isVisible: true,
          margin: 2,
          width: 3,
        },
        readState: {
          isVisible: true,
          margin: 2,
          width: 3,
        },
        unreadState: {
          isVisible: true,
          margin: 0,
          width: 3,
        },
      },
    },
  },
};