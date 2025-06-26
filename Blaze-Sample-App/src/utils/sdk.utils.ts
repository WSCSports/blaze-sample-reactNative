import BlazeSDK, {
  BlazeDataSourceType,
  BlazeWidgetDelegate,
  OnDataLoadStartedEvent,
  OnDataLoadCompleteEvent,
  OnPlayerDidAppearEvent,
  OnPlayerDidDismissEvent,
  OnItemClickedEvent,
  OnTriggerCTAEvent,
  OnTriggerPlayerBodyTextLinkEvent,
  OnPlayerEventTriggeredEvent,
  BlazeGlobalDelegate,
  BlazePlayerEntryPointDelegate,
} from '@wscsports/blaze-rtn-sdk';

import { MutableRefObject } from 'react';
import { Alert } from 'react-native';
import { momentPlayerGridStyle, storyPlayerGridStyle, videosPlayerStyle } from './blazePlayersTheme.utils';

import { BlazeGAMDelegate } from '@wscsports/blaze-rtn-gam-ads';
import { BlazeIMADelegate } from '@wscsports/blaze-rtn-ima-ads';

export let showAlerts = true;

export const setShowAlerts = (show: boolean) => {
  showAlerts = show;
};

export const playMoment = (
  momentId: string
) => {
  BlazeSDK.playMoment({
    momentId,
    // playerStyle: momentPlayerGridStyle // Uncomment this if you want to customize the player's appearence.
  }).then(() => {
    console.log('playMoment success');
  }).catch(error => {
    showAlerts && Alert.alert(`${error}`)
    console.error('Error playing moment:', error);
  });
};

export const playStory = (
  storyId: string,
  pageId?: string,
) => {
  BlazeSDK.playStory({
    storyId,
    pageId,
    // playerStyle: storyPlayerGridStyle // Uncomment this if you want to customize the player's appearence.
  }).then(() => {
    console.log('playStory success');
  }).catch(error => {
    showAlerts && Alert.alert(`${error}`)
    console.error('Error playing Story:', error);
  });
};

export const setDoNotTrack = () => {
  BlazeSDK.setDoNotTrack(true).then(() => {
    console.log('set Do Not Track success');
  }).catch(error => {
    showAlerts && Alert.alert(`${error}`)
    console.error('Error set Do Not Track:', error);
  });
};

export const dismissPlayer = () => {
  BlazeSDK.dismissPlayer().then(() => {
    console.log('dismissPlayer success');
  }).catch(error => {
    showAlerts && Alert.alert(`${error}`)
    console.error('Error dismiss Player:', error);
  });
};

export const setExternalUserId = (
  userId?: string
) => {
  BlazeSDK.setExternalUserId(userId).then(() => {
    console.log('setExternalUserId success');
  }).catch(error => {
    showAlerts && Alert.alert(`${error}`)
    console.error('Error set External UserId:', error);
  });
};

export const handleUniversalLink = (
  link: string
) => {
  BlazeSDK.handleUniversalLink(link).then(() => {
    console.log('set universal link success');
  }).catch(error => {
    showAlerts && Alert.alert(`${error}`)
    console.error('Error set universal link:', error);
  });
};

export const canHandleUniversalLink = async (link: string): Promise<boolean> => {
  const result = await BlazeSDK.canHandleUniversalLink(link).then((result) => {
    console.log('canHandleUniversalLink success, result -> ', result);
    return result
  }).catch(error => {
    showAlerts && Alert.alert(`${error}`)
    console.error('Error handle universal link:', error);
    return false
  });
  return result
};

export const updateGeoRestriction = (
  geoLocation: string
) => {
  BlazeSDK.updateGeoRestriction(geoLocation).then(() => {
    console.log('updateGeoRestriction success');
  }).catch(error => {
    showAlerts && Alert.alert(`${error}`)
    console.error('Error updateGeoRestriction:', error);
  });
};

export const playStories = (
  dataSource: BlazeDataSourceType,
) => {
  BlazeSDK.playStories({
    dataSource: dataSource,
    // playerStyle: storyPlayerGridStyle, // Uncomment this if you want to customize the player's appearence.
  }).then(() => {
    console.log('playStories success');
  }).catch(error => {
    showAlerts && Alert.alert(`Error playing stories: ${error}`)
    console.error('Error playing stories:', error);
  });
};

export const playMoments = (
  dataSource: BlazeDataSourceType,
) => {
  BlazeSDK.playMoments({
    dataSource: dataSource,
    // playerStyle: momentPlayerGridStyle, // Uncomment this if you want to customize the player's appearence.
  }).then(() => {
    console.log('playMoments success');
  }).catch(error => {
    showAlerts && Alert.alert(`Error playing moments: ${error}`)
    console.error('Error playing moments:', error);
  });
};

export const prepareStories = (
  dataSource: BlazeDataSourceType,
) => {
  BlazeSDK.prepareStories({
    dataSource: dataSource
  }).then(() => {
    console.log('prepareStories success');
  }).catch(error => {
    showAlerts && Alert.alert(`Error prepareStories: ${error}`)
    console.error('Error prepareStories:', error);
  });
};

export const prepareMoments = (
  dataSource: BlazeDataSourceType,
) => {
  BlazeSDK.prepareMoments({
    dataSource: dataSource
  }).then(() => {
    console.log('prepareMoments success');
  }).catch(error => {
    showAlerts && Alert.alert(`Error prepareMoments: ${error}`)
    console.error('Error prepareMoments:', error);
  });
};

export const playVideos = (
  dataSource: BlazeDataSourceType,
) => {
  BlazeSDK.playVideos({
    dataSource: dataSource,
    // playerStyle: videosPlayerStyle, // Uncomment this if you want to customize the player's appearence.
  }).then(() => {
    console.log('playVideos success');
  }).catch(error => {
    showAlerts && Alert.alert(`Error playing videos: ${error}`)
    console.error('Error playing videos:', error);
  });
};

export const playVideo = (
  videoId: string
) => {
  BlazeSDK.playVideo({
    videoId,
    // playerStyle: videosPlayerStyle // Uncomment this if you want to customize the player's appearence.
  }).then(() => {
    console.log('playVideo success');
  }).catch(error => {
    showAlerts && Alert.alert(`${error}`)
    console.error('Error playing video:', error);
  });
};

export const prepareVideos = (
  dataSource: BlazeDataSourceType,
) => {
  BlazeSDK.prepareVideos({
    dataSource: dataSource
  }).then(() => {
    console.log('prepareVideos success');
  }).catch(error => {
    showAlerts && Alert.alert(`Error prepareVideos: ${error}`)
    console.error('Error prepareVideos:', error);
  });
};

export const updateDataSourceHandler = (
  ref: MutableRefObject<any> | null,
  newDataSource: BlazeDataSourceType,
  isSilentRefresh: Boolean
) => {
  if (ref?.current) {
    ref?.current?.updateDataSource(newDataSource, isSilentRefresh);
  }
};

export const createWidgetDelegate = (widgetName: string): BlazeWidgetDelegate => {
  return {
    onDataLoadStarted: (event: OnDataLoadStartedEvent) => {
      console.log(widgetName + ' - onWidgetDataLoadStarted - widgetId: ' + event.widgetId);
    },
    onDataLoadComplete: (event: OnDataLoadCompleteEvent) => {
      console.log(widgetName + ' - onWidgetDataLoadCompleted - widgetId: ' + event.widgetId + ', itemCount: ' + event.itemsCount + ', error: ' + event.error);
    },
    onPlayerDidAppear: (event: OnPlayerDidAppearEvent) => {
      console.log(widgetName + ' - onWidgetPlayerDidAppear - widgetId: ' + event.widgetId);
    },
    onPlayerDidDismiss: (event: OnPlayerDidDismissEvent) => {
      console.log(widgetName + ' - onWidgetPlayerDismissed - widgetId: ' + event.widgetId);
    },
    onItemClicked: (event: OnItemClickedEvent) => {
      console.log(widgetName + ' - onItemClicked - widgetId: ' + event.widgetId + ', widgetItemId: ' + event.widgetItemId + ', widgetItemTitle: ' + event.widgetItemTitle);
    },
    onTriggerCTA: (event: OnTriggerCTAEvent) => {
      console.log(widgetName + ' - onTriggerCTA - widgetId: ' + event.widgetId + ', actionType: ' + event.actionType + ', actionParam: ' + event.actionParam);
    },
    onTriggerPlayerBodyTextLink: (event: OnTriggerPlayerBodyTextLinkEvent) => {
      console.log(widgetName + ' - onTriggerPlayerBodyTextLink - widgetId: ' + event.widgetId + ', actionParam: ' + event.actionParam);
    },
    onPlayerEventTriggered: (event: OnPlayerEventTriggeredEvent) => {
      switch (event.playerEvent.type) {
        case 'OnMomentStart': {
          console.log(widgetName + ' - onPlayerEventTriggered - widgetId: ' + event.widgetId + ' playerEvent: MomentId ' + event.playerEvent.momentId);
          break
        }
        case 'OnStoryStart': {
          console.log(widgetName + ' - onPlayerEventTriggered - widgetId: ' + event.widgetId + ' playerEvent: StoryId ' + event.playerEvent.storyId);
          break
        }
        case 'OnVideoStart': {
          console.log(widgetName + ' - onPlayerEventTriggered - widgetId: ' + event.widgetId + ' playerEvent: StoryId ' + event.playerEvent.videoId);
          break
        }
      }
    },
  }
}

export const globalDelegate: BlazeGlobalDelegate = {
  onEventTriggered: (params => {
    console.log('GlobalDelegate - onEventTriggered - event_action: ' + params.event.event_action);
  }),
  onErrorThrown: (params => {
    console.error('GlobalDelegate - onErrorThrown - error: ' + params.error);
  })
}

export const entryPointDelegate: BlazePlayerEntryPointDelegate = {
  onDataLoadStarted: (params => {
    console.log('EntryPointDelegate - onDataLoadStarted - playerType: ' + params.playerType + ' sourceId: ' + params.sourceId);
  }),
  onDataLoadComplete: (params => {
    console.log('EntryPointDelegate - onDataLoadComplete - playerType: ' + params.playerType + ' sourceId: ' + params.sourceId + ' itemsCount: ' + params.itemsCount + ' error: ' + params.error);
  }),
  onPlayerDidAppear: (params => {
    console.log('EntryPointDelegate - onPlayerDidAppear - playerType: ' + params.playerType + ' sourceId: ' + params.sourceId);
  }),
  onPlayerDidDismiss: (params => {
    console.log('EntryPointDelegate - onPlayerDidDismiss - playerType: ' + params.playerType + ' sourceId: ' + params.sourceId);
  }),
  onTriggerCTA: (params => {
    console.log('EntryPointDelegate - onTriggerCTA - playerType: ' + params.playerType + ' sourceId: ' + params.sourceId + ' actionType: ' + params.actionType + ' actionParam: ' + params.actionParam);
  }),
  onTriggerPlayerBodyTextLink: (params => {
    console.log('EntryPointDelegate - onTriggerPlayerBodyTextLink - playerType: ' + params.playerType + ' sourceId: ' + params.sourceId + ' actionParam: ' + params.actionParam);
  }),
  onPlayerEventTriggered: (params => {
    const playerEvent = params.event
    switch (playerEvent.type) {
      case 'OnMomentStart': {
        console.log('EntryPointDelegate - onPlayerEventTriggered - playerType: ' + params.playerType + ' sourceId: ' + params.sourceId + ' playerEvent: MomentId ' + playerEvent.momentId);
        break
      }
      case 'OnStoryStart': {
        console.log('EntryPointDelegate - onPlayerEventTriggered - playerType: ' + params.playerType + ' sourceId: ' + params.sourceId + ' playerEvent: StoryId ' + playerEvent.storyId);
        break
      }
      case 'OnVideoStart': {
        console.log('EntryPointDelegate - onPlayerEventTriggered - playerType: ' + params.playerType + ' sourceId: ' + params.sourceId + ' playerEvent: StoryId ' + playerEvent.videoId);
        break
      }
    }
  }),
}

export const googleCustomNativeAdsDelegate: BlazeGAMDelegate = {
  onGAMAdEvent: (params => {
    console.log('BlazeGAMDelegate - onGAMAdEvent - evenType: ' + params.eventType);
  }),
  onGAMAdError: (errorMessage => {
    console.log('BlazeGAMDelegate - onGAMAdError - errorMessage: ' + errorMessage);
  }),
  customGAMTargetingProperties: (params) => {
    console.log('BlazeGAMDelegate - customGAMTargetingProperties - params: ' + JSON.stringify(params));
    // return {
    //   'test_1': 'custom_targeting_value 1',
    //   'test_2': 'custom_targeting_value 2'
    // };
    return {}
  },
  publisherProvidedId: (params) => {
    console.log('BlazeGAMDelegate - publisherProvidedId - params: ' + JSON.stringify(params));
    // return 'test_publisherProvidedId';
    return undefined;
  },
  networkExtras: (params) => {
    console.log('BlazeGAMDelegate - networkExtras - params: ' + JSON.stringify(params));
    // return {
    //   'test_string': 'custom_targeting_value 1',
    //   'test_double': 5.5,
    //   'test_bool': true
    // };
    return {}
  }
}

export const imaAdsDelegate: BlazeIMADelegate = {
  onIMAAdEvent: (params => {
    console.log('BlazeIMADelegate - onIMAAdEvent - evenType: ' + params.eventType);
  }),
  onIMAAdError: (errorMessage => {
    console.log('BlazeIMADelegate - onIMAAdError - errorMessage: ' + errorMessage);
  }),
  additionalIMATagQueryParams: (params) => {
    console.log('BlazeIMADelegate - additionalIMATagQueryParams - params: ' + JSON.stringify(params));
    // return {
    //   'test_1': 'param 1',
    //   'test_2': 'param 2'
    // };
    return {}
  },
  customIMASettings: (params) => {
    console.log('BlazeIMADelegate - customIMASettings - params: ' + JSON.stringify(params));
    // return {
    //   ppid: 'test_ppid',
    //   language: 'es',
    //   sessionId: 'test_session_id',
    // };
    return {}
  },
  overrideAdTagUrl: (params) => {
    console.log('BlazeIMADelegate - overrideAdTagUrl - params: ' + JSON.stringify(params));
    // return 'https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/single_preroll_skippable&sz=640x480&ciu_szs=300x250%2C728x90&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=';
    return undefined
  }
}