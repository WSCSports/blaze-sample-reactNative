import BlazeSDK, {
  BlazeDataSourceType,
  BlazeWidgetDelegate,
  BlazeGlobalDelegate,
  BlazePlayerEntryPointDelegate,
} from '@wscsports/blaze-rtn-sdk';

import { RefObject } from 'react';
import { Alert } from 'react-native';
import { momentPlayerGridStyle, storyPlayerGridStyle, videosPlayerStyle } from './blazePlayersTheme.utils';

import { BlazeGAMBannerAdsDelegate, BlazeGAMCustomNativeAdsDelegate } from '@wscsports/blaze-rtn-gam-ads';
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
    const message = `Error playing moment: ${error}`
    showAlerts && Alert.alert(message)
    console.error(message);
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
    const message = `Error playing Story: ${error}`
    showAlerts && Alert.alert(message)
    console.error(message);
  });
};

export const setDoNotTrack = () => {
  BlazeSDK.setDoNotTrack(true).then(() => {
    console.log('set Do Not Track success');
  }).catch(error => {
    const message = `Error set Do Not Track: ${error}`
    showAlerts && Alert.alert(message)
    console.error(message);
  });
};

export const dismissPlayer = () => {
  BlazeSDK.dismissPlayer().then(() => {
    console.log('dismissPlayer success');
  }).catch(error => {
    const message = `Error dismiss Player: ${error}`
    showAlerts && Alert.alert(message)
    console.error(message);
  });
};

export const setExternalUserId = (
  userId?: string
) => {
  BlazeSDK.setExternalUserId(userId).then(() => {
    console.log('setExternalUserId success');
  }).catch(error => {
    const message = `Error set External UserId: ${error}`
    showAlerts && Alert.alert(message)
    console.error(message);
  });
};

export const handleUniversalLink = (
  link: string
) => {
  BlazeSDK.handleUniversalLink(link).then(() => {
    console.log('set universal link success');
  }).catch(error => {
    const message = `Error set universal link: ${error}`
    showAlerts && Alert.alert(message)
    console.error(message);
  });
};

export const canHandleUniversalLink = async (link: string): Promise<boolean> => {
  const result = await BlazeSDK.canHandleUniversalLink(link).then((result) => {
    console.log('canHandleUniversalLink success, result -> ', result);
    return result
  }).catch(error => {
    const message = `Error handle universal link: ${error}`
    showAlerts && Alert.alert(message)
    console.error(message);
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
    const message = `Error updateGeoRestriction: ${error}`
    showAlerts && Alert.alert(message)
    console.error(message);
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
    const message = `Error playing stories: ${error}`
    showAlerts && Alert.alert(message)
    console.error(message);
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
    const message = `Error playing moments: ${error}`
    showAlerts && Alert.alert(message)
    console.error(message);
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
    const message = `Error prepareStories: ${error}`
    showAlerts && Alert.alert(message)
    console.error(message);
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
    const message = `Error prepareMoments: ${error}`
    showAlerts && Alert.alert(message)
    console.error(message);
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
    const message = `Error playing videos: ${error}`
    showAlerts && Alert.alert(message)
    console.error(message);
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
    const message = `Error playing video: ${error}`
    showAlerts && Alert.alert(message)
    console.error(message);
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
    const message = `Error prepareVideos: ${error}`
    showAlerts && Alert.alert(message)
    console.error(message);
  });
};

export const updateDataSourceHandler = (
  ref: RefObject<any> | null,
  newDataSource: BlazeDataSourceType,
  isSilentRefresh: Boolean
) => {
  if (ref?.current) {
    ref?.current?.updateDataSource(newDataSource, isSilentRefresh);
  }
};

export const createWidgetDelegate = (widgetName: string): BlazeWidgetDelegate => {
  return {
    onDataLoadStarted: (params) => {
      console.log(widgetName + ' - onWidgetDataLoadStarted - params: ' + JSON.stringify(params));
    },
    onDataLoadComplete: (params) => {
      console.log(widgetName + ' - onWidgetDataLoadCompleted - params: ' + JSON.stringify(params));
    },
    onPlayerDidAppear: (params) => {
      console.log(widgetName + ' - onWidgetPlayerDidAppear - params: ' + JSON.stringify(params));
    },
    onPlayerDidDismiss: (params) => {
      console.log(widgetName + ' - onWidgetPlayerDismissed - params: ' + JSON.stringify(params));
    },
    onItemClicked: (params) => {
      console.log(widgetName + ' - onItemClicked - params: ' + JSON.stringify(params));
    },
    onTriggerCTA: (params) => {
      console.log(widgetName + ' - onTriggerCTA  - params: ' + JSON.stringify(params));
    },
    onTriggerPlayerBodyTextLink: (params) => {
      console.log(widgetName + ' - onTriggerPlayerBodyTextLink - params: ' + JSON.stringify(params));
    },
    onPlayerEventTriggered: (params) => {
      switch (params.playerEvent.type) {
        case 'OnMomentStart': {
          console.log(widgetName + ' - onPlayerEventTriggered - widgetId: ' + params.sourceId + ' playerEvent: MomentId ' + params.playerEvent.momentId);
          break
        }
        case 'OnStoryStart': {
          console.log(widgetName + ' - onPlayerEventTriggered - widgetId: ' + params.sourceId + ' playerEvent: StoryId ' + params.playerEvent.storyId);
          break
        }
        case 'OnVideoStart': {
          console.log(widgetName + ' - onPlayerEventTriggered - widgetId: ' + params.sourceId + ' playerEvent: VideoId ' + params.playerEvent.videoId);
          break
        }
      }
    },
  }
}

export const globalDelegate: BlazeGlobalDelegate = {
  onEventTriggered: (params => {
    console.log('GlobalDelegate - onEventTriggered - params: ' + JSON.stringify(params));
  }),
  onErrorThrown: (params => {
    console.error('GlobalDelegate - onErrorThrown - params: ' + JSON.stringify(params));
  })
}

export const entryPointDelegate: BlazePlayerEntryPointDelegate = {
  onDataLoadStarted: (params => {
    console.log('EntryPointDelegate - onDataLoadStarted - params: ' + JSON.stringify(params));
  }),
  onDataLoadComplete: (params => {
    console.log('EntryPointDelegate - onDataLoadComplete - params: ' + JSON.stringify(params));
  }),
  onPlayerDidAppear: (params => {
    console.log('EntryPointDelegate - onPlayerDidAppear - params: ' + JSON.stringify(params));
  }),
  onPlayerDidDismiss: (params => {
    console.log('EntryPointDelegate - onPlayerDidDismiss - params: ' + JSON.stringify(params));
  }),
  onTriggerCTA: (params => {
    console.log('EntryPointDelegate - onTriggerCTA - params: ' + JSON.stringify(params));
  }),
  onTriggerPlayerBodyTextLink: (params => {
    console.log('EntryPointDelegate - onTriggerPlayerBodyTextLink - params: ' + JSON.stringify(params));
  }),
  onPlayerEventTriggered: (params => {
    const playerEvent = params.playerEvent
    switch (playerEvent.type) {
      case 'OnMomentStart': {
        console.log('EntryPointDelegate - onPlayerEventTriggered - params: ' + JSON.stringify(params));
        break
      }
      case 'OnStoryStart': {
        console.log('EntryPointDelegate - onPlayerEventTriggered - params: ' + JSON.stringify(params));
        break
      }
      case 'OnVideoStart': {
        console.log('EntryPointDelegate - onPlayerEventTriggered - params: ' + JSON.stringify(params));
        break
      }
    }
  }),
}

export const googleCustomNativeAdsDelegate: BlazeGAMCustomNativeAdsDelegate = {
  onGAMAdEvent: (params => {
    console.log('BlazeGAMDelegate - CustomNativeAds  - onGAMAdEvent - eventType: ' + params.eventType);
  }),
  onGAMAdError: (errorMessage => {
    console.log('BlazeGAMDelegate - CustomNativeAds  - onGAMAdError - errorMessage: ' + errorMessage);
  }),
  customGAMTargetingProperties: (params) => {
    console.log('BlazeGAMDelegate - CustomNativeAds  - customGAMTargetingProperties - params: ' + JSON.stringify(params));
    // return {
    //   'test_1': 'custom_targeting_value 1',
    //   'test_2': 'custom_targeting_value 2'
    // };
    return {}
  },
  publisherProvidedId: (params) => {
    console.log('BlazeGAMDelegate - CustomNativeAds  - publisherProvidedId - params: ' + JSON.stringify(params));
    // return 'test_publisherProvidedId';
    return undefined;
  },
  networkExtras: (params) => {
    console.log('BlazeGAMDelegate - CustomNativeAds  - networkExtras - params: ' + JSON.stringify(params));
    // return {
    //   'test_string': 'custom_targeting_value 1',
    //   'test_double': 5.5,
    //   'test_bool': true
    // };
    return {}
  }
}

export const googleBannerAdsDelegate: BlazeGAMBannerAdsDelegate = {
  onGAMBannerAdsAdEvent: (params => {
    console.log('BlazeGAMDelegate - BannerAds - onGAMBannerAdsAdEvent - eventType: ' + params.eventType);
  }),
  onGAMBannerAdsAdError: (errorMessage => {
    console.log('BlazeGAMDelegate - BannerAds - onGAMBannerAdsAdEvent - errorMessage: ' + errorMessage);
  })
}

export const imaAdsDelegate: BlazeIMADelegate = {
  onIMAAdEvent: (params => {
    console.log('BlazeIMADelegate - onIMAAdEvent - eventType: ' + params.eventType);
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