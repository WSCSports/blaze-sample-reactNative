import { 
    BlazeWidgetItemCustomMapping,
    BlazeWidgetItemStyleOverrides
  } from '@wscsports/blaze-rtn-sdk';

  export function initialWidgetStyleOverrides(): Map<BlazeWidgetItemCustomMapping, BlazeWidgetItemStyleOverrides> {
    const initialMapping: BlazeWidgetItemCustomMapping = {
        key: "gameId",
        value: "0022300858"
    };

    const initialStyleOverrides: BlazeWidgetItemStyleOverrides = {
        statusIndicator: {
            isVisible: true,
            position: {
                xPosition: 'CenterX',
                yPosition: 'CenterToBottom',
            },
        },
        imageBorder: {
          isVisible: true,
          liveReadState: {
            isVisible: true,
            color: '#0000FF',
            margin: 2,
            width: 20,
          },
          liveUnreadState: {
            isVisible: true,
            color: '#00FF00',
            margin: 2,
            width: 20,
          },
          readState: {
            isVisible: true,
            color: '#FFA500',
            margin: 2,
            width: 20,
          },
          unreadState: {
            isVisible: true,
            color: '#131313',
            margin: 2,
            width: 20,
          },
        },
        badge: {
          position: {
            xPosition: 'TrailingToTrailing',
            yPosition: 'TopToTop',
          },
          isVisible: true,
          margins: {
            top: 30,
            leading: 0,
            bottom: 0,
            trailing: 10,
          },
          titlePadding: {
            top: 4,
            leading: 8,
            trailing: 8,
            bottom: 4,
          },
          liveUnreadState: {
            isVisible: true,
            width: 100,
            height: 100,
            backgroundColor: '#ff0000',
            text: 'Live Unread',
            textStyle: {
              textColor: '#ffffff',
            },
            cornerRadius: 5,
            borderColor: '#333333',
            borderWidth: 15,
            backgroundImage: {
              imageName: 'like',
            }
          },
          liveReadState: {
            isVisible: true,
            width: 100,
            height: 100,
            backgroundColor: '#ff0000',
            text: 'Live Read',
            textStyle: {
              textColor: '#ffffff',
            },
            cornerRadius: 5,
            borderColor: '#333333',
            borderWidth: 15,
            backgroundImage: {
              imageName: 'like',
            }
          },
          unreadState: {
            isVisible: true,
            width: 100,
            height: 100,
            backgroundColor: '#ff0000',
            text: 'Unread',
            textStyle: {
              textColor: '#ffffff',
            },
            cornerRadius: 5,
            borderColor: '#333333',
            borderWidth: 15,
            backgroundImage: {
              imageName: 'like',
            }
          },
          readState: {
            isVisible: true,
            width: 100,
            height: 100,
            backgroundColor: '#ff0000',
            text: 'Read',
            textStyle: {
              textColor: '#ffffff',
            },
            cornerRadius: 0,
            borderColor: '#333333',
            borderWidth: 15,
            backgroundImage: {
              imageName: 'like',
            }
          },
        },
    };

    const styleMap = new Map<BlazeWidgetItemCustomMapping, BlazeWidgetItemStyleOverrides>();
    styleMap.set(initialMapping, initialStyleOverrides);

    return styleMap;
}

export function updateWidgetStyleOverrides(): Map<BlazeWidgetItemCustomMapping, BlazeWidgetItemStyleOverrides> {
  const teamMapping: BlazeWidgetItemCustomMapping = {
      // key: "teamId",
      // value: "1610612738"
      key: "gameId",
      value: "0022300858"
  };
  const playerMapping: BlazeWidgetItemCustomMapping = {
      key: "playerId",
      value: "1628436" 
  };

  const updateStyleOverrides: BlazeWidgetItemStyleOverrides = {
      statusIndicator: {
        isVisible: true,
        position: {
            xPosition: 'LeadingToLeading',
            yPosition: 'BottomToBottom',
        },
      },
      imageBorder: {
        isVisible: true,
        liveReadState: {
          isVisible: true,
          color: '#FF6347',
          margin: 2,
          width: 30,
        },
        liveUnreadState: {
          isVisible: true,
          color: '#4682B4',
          margin: 2,
          width: 30,
        },
        readState: {
          isVisible: true,
          color: '#32CD32',
          margin: 2,
          width: 30,
        },
        unreadState: {
          isVisible: true,
          color: '#FFD700',
          margin: 2,
          width: 30,
        },
      },
      badge: {
        position: {
          xPosition: 'CenterX',
          yPosition: 'TopToTop',
      },
        isVisible: true,
        margins: {
          top: 5,
          leading: 5,
          bottom: 5,
          trailing: 5,
      },
        titlePadding: {
          top: 4,
          leading: 8,
          trailing: 8,
          bottom: 4,
        },
        liveUnreadState: {
          isVisible: true,
          width: 20,
          height: 20,
          backgroundColor: '#ff0000',
          text: 'Live Unread',
          textStyle: {
            textColor: '#ffffff',
          },
          cornerRadius: 5,
          borderColor: '#4682B4',
          borderWidth: 10,
        },
        liveReadState: {
          isVisible: true,
          width: 20,
          height: 20,
          backgroundColor: '#ff0000',
          text: 'Live Read',
          textStyle: {
            textColor: '#000000',
          },
          cornerRadius: 5,
          borderColor: '#4682B4',
          borderWidth: 10,
        },
        unreadState: {
          isVisible: true,
          width: 20,
          height: 20,
          backgroundColor: '#000000',
          text: 'Unread',
          textStyle: {
            textColor: '#111111',
          },
          cornerRadius: 5,
          borderColor: '#4682B4',
          borderWidth: 10,
        },
        readState: {
          isVisible: true,
          width: 20,
          height: 20,
          backgroundColor: '#123123',
          text: 'Read',
          textStyle: {
            textColor: '#222222',
          },
          cornerRadius: 0,
          borderColor: '#4682B4',
          borderWidth: 10,
        },
      },
  };

  const styleMap = new Map<BlazeWidgetItemCustomMapping, BlazeWidgetItemStyleOverrides>();
  styleMap.set(teamMapping, updateStyleOverrides);
  styleMap.set(playerMapping, updateStyleOverrides);

  return styleMap;
}
  
  export function widgetItemStyleOverrides(): Map<BlazeWidgetItemCustomMapping, BlazeWidgetItemStyleOverrides> {

    const teamMapping: BlazeWidgetItemCustomMapping = {
      key: "teamId",
      value: "1610612744"
    };
  
    const teamMapping2: BlazeWidgetItemCustomMapping = {
      key: "teamId",
      value: "1610612745"
    };
    
    const teamStyleOverrides: BlazeWidgetItemStyleOverrides = {
      statusIndicator: {
        position: {
          xPosition: 'CenterX',
          yPosition: 'CenterToBottom',
        },
        isVisible: true,
        margins: {
          top: 2,
          leading: 2,
          trailing: 2,
          bottom: 2,
        },
        statusTitlePadding: {
          top: 4,
          leading: 8,
          trailing: 8,
          bottom: 4,
        },
        liveUnreadState: {
          isVisible: true,
          backgroundColor: '#ff0000',
          text: 'Live Unread',
          textStyle: {
            textColor: '#ffffff',
          },
          cornerRadius: 5,
          borderWidth: 1,
          borderColor: '#f0f0f0',
        },
        liveReadState: {
          isVisible: true,
          backgroundColor: '#ff0000',
          text: 'Live Read',
          textStyle: {
            textColor: '#000000',
          },
          cornerRadius: 5,
          borderWidth: 1,
          borderColor: '#f0f0f0',
        },
        unreadState: {
          isVisible: true,
          backgroundColor: '#000000',
          text: 'Unread',
          textStyle: {
            textColor: '#111111',
          },
          cornerRadius: 5,
          borderWidth: 1,
          borderColor: '#f0f0f0',
        },
        readState: {
          isVisible: true,
          backgroundColor: '#123123',
          text: 'Read',
          textStyle: {
            textColor: '#222222',
          },
          cornerRadius: 0,
          borderWidth: 1,
          borderColor: '#f0f0f0',
        },
      },
      imageBorder: {
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
          color: '#131313',
          margin: 2,
          width: 3,
        },
      },
      badge: {
        position: {
          xPosition: 'TrailingToTrailing',
          yPosition: 'TopToTop',
        },
        isVisible: true,
        margins: {
          top: 30,
          leading: 0,
          bottom: 0,
          trailing: 10,
        },
        titlePadding: {
          top: 4,
          leading: 8,
          trailing: 8,
          bottom: 4,
        },
        liveUnreadState: {
          isVisible: true,
          width: 100,
          height: 100,
          backgroundColor: '#ff0000',
          text: 'Live Unread',
          textStyle: {
            textColor: '#ffffff',
          },
          cornerRadius: 5,
          borderColor: '#333333',
          borderWidth: 15,
          backgroundImage: {
            imageName: 'like',
          }
        },
        liveReadState: {
          isVisible: true,
          width: 100,
          height: 100,
          backgroundColor: '#ff0000',
          text: 'Live Read',
          textStyle: {
            textColor: '#ffffff',
          },
          cornerRadius: 5,
          borderColor: '#333333',
          borderWidth: 15,
          backgroundImage: {
            imageName: 'like',
          }
        },
        unreadState: {
          isVisible: true,
          width: 100,
          height: 100,
          backgroundColor: '#ff0000',
          text: 'Unread',
          textStyle: {
            textColor: '#ffffff',
          },
          cornerRadius: 5,
          borderColor: '#333333',
          borderWidth: 15,
          backgroundImage: {
            imageName: 'like',
          }
        },
        readState: {
          isVisible: true,
          width: 100,
          height: 100,
          backgroundColor: '#ff0000',
          text: 'Read',
          textStyle: {
            textColor: '#ffffff',
          },
          cornerRadius: 0,
          borderColor: '#333333',
          borderWidth: 15,
          backgroundImage: {
            imageName: 'like',
          }
        },
      },
    }
  
    const customMappingToStyleOverrides = new Map<BlazeWidgetItemCustomMapping, BlazeWidgetItemStyleOverrides>([
      [teamMapping, teamStyleOverrides]
    ]);
  
    customMappingToStyleOverrides.set(teamMapping2, teamStyleOverrides);
    
    return customMappingToStyleOverrides;
  }