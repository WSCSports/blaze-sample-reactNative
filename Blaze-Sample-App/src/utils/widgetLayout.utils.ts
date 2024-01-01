import { BlazeWidgetLayout } from '@wscsports/blaze-rtn-sdk';

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
  widgetItemAppearance: {
    backgroundColor: '#99ff00',
    title: {
      isVisible: true,
      readStyle: {
        textSize: 13,
        textColor: '#c3c3c3',
        maxLines: 2,
        textAlign: 'Start',
      },
      unreadStyle: {
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
        liveReadBorder: {
          isVisible: true,
          margin: 2,
          width: 3,
        },
        liveUnreadBorder: {
          isVisible: true,
          margin: 2,
          width: 3,
        },
        readBorder: {
          isVisible: true,
          margin: 2,
          width: 3,
        },
        unreadBorder: {
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
  widgetItemAppearance: {
    title: {
      isVisible: true,
      readStyle: {
        maxLines: 2,
      },
      unreadStyle: {
      },
    },
    image: {
      border: {
        isVisible: true,
        liveReadBorder: {
          isVisible: true,
          margin: 2,
          width: 3,
        },
        liveUnreadBorder: {
          isVisible: true,
          margin: 2,
          width: 3,
        },
        readBorder: {
          isVisible: true,
          margin: 2,
          width: 3,
        },
        unreadBorder: {
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
  widgetItemAppearance: {
    title: {
      isVisible: true,
      readStyle: {
        font: {
          fontName: 'Agbalumo-Regular',
          fontFileName: 'agbalumo_regular',
        },
        textSize: 14,
        textColor: '#FFFFFF',
        maxLines: 2,
      },
      unreadStyle: {
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
  widgetItemAppearance: {
    title: {
      isVisible: true,
      readStyle: {
        font: {
          fontName: 'Agbalumo-Regular',
          fontFileName: 'agbalumo_regular',
        },
        textSize: 14,
        maxLines: 2,
      },
      unreadStyle: {
        textSize: 12,
        letterSpacing: 0,
        maxLines: 2,
      },
    },
    image: {
      position: 'TopStart',
      border: {
        isVisible: true,
        liveReadBorder: {
          isVisible: true,
          margin: 2,
          width: 3,
        },
        liveUnreadBorder: {
          isVisible: true,
          margin: 2,
          width: 3,
        },
        readBorder: {
          isVisible: true,
          margin: 2,
          width: 3,
        },
        unreadBorder: {
          isVisible: true,
          margin: 0,
          width: 3,
        },
      },
    },
  },
};
