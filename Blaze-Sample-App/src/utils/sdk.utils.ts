import BlazeSDK, {
  BlazeDataSourceType,
  BlazeWidgetDelegate,
  BlazeGlobalDelegate,
  BlazePlayerEntryPointDelegate,
  BlazeSearchScreenOptions,
  BlazeCastingDelegate,
  BlazePipDelegate,
  BlazePlayerSoundState,
  BlazePlayerContainerTabsDelegate,
} from '@wscsports/blaze-rtn-sdk';

import { RefObject } from 'react';
import { Alert, Platform, ToastAndroid } from 'react-native';
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
    // playbackConfiguration: { bufferingSpinnerDelayMs: 500 }, // Uncomment this if you want to customize the playback configuration.
  }).then(() => {
    console.log('playStory success');
  }).catch(error => {
    const message = `Error playing Story: ${error}`
    showAlerts && Alert.alert(message)
    console.error(message);
  });
};
const showPlayerAlert = (title: string, message: string) => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(`${title}: ${message}`, ToastAndroid.SHORT);
  } else {
    Alert.alert(title, message);
  }
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
  entryContentId?: string,
) => {
  BlazeSDK.playStories({
    dataSource: dataSource,
    entryContentId: entryContentId,
    // playerStyle: storyPlayerGridStyle, // Uncomment this if you want to customize the player's appearence.
    // playbackConfiguration: { bufferingSpinnerDelayMs: 500 }, // Uncomment this if you want to customize the playback configuration.
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
  entryContentId?: string,
) => {
  BlazeSDK.playMoments({
    dataSource: dataSource,
    entryContentId: entryContentId,
    // playerStyle: momentPlayerGridStyle, // Uncomment this if you want to customize the player's appearence.
  }).then(() => {
    console.log('playMoments success');
  }).catch(error => {
    const message = `Error playing moments: ${error}`
    showAlerts && Alert.alert(message)
    console.error(message);
  });
};

export const appendMomentsToPlayer = (
  sourceId: string,
  dataSource: BlazeDataSourceType,
  shouldOrderContentByReadStatus: boolean = false
) => {
  BlazeSDK.appendMomentsToPlayer({
    sourceId,
    dataSource,
    shouldOrderContentByReadStatus,
  }).then(() => {
    console.log('appendMomentsToPlayer success');
  }).catch(error => {
    const message = `Error append moments to player: ${error}`
    showAlerts && Alert.alert(message)
    console.error(message);
  });
};

export const prepareStories = (
  dataSource: BlazeDataSourceType,
  entryContentId?: string,
) => {
  BlazeSDK.prepareStories({
    dataSource: dataSource,
    entryContentId: entryContentId,
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
  entryContentId?: string,
) => {
  BlazeSDK.prepareMoments({
    dataSource: dataSource,
    entryContentId: entryContentId,
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
  entryContentId?: string,
) => {
  BlazeSDK.playVideos({
    dataSource: dataSource,
    entryContentId: entryContentId,
    // playerStyle: videosPlayerStyle, // Uncomment this if you want to customize the player's appearence.
    // playbackConfiguration: { multiAspectRatio: true, shouldOpenInLandscape: false, bufferingSpinnerDelayMs: 500 }, // Uncomment this if you want to customize the playback configuration.
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
    // playbackConfiguration: { multiAspectRatio: true, shouldOpenInLandscape: true, bufferingSpinnerDelayMs: 500 },
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
  entryContentId?: string,
) => {
  BlazeSDK.prepareVideos({
    dataSource: dataSource,
    entryContentId: entryContentId,
  }).then(() => {
    console.log('prepareVideos success');
  }).catch(error => {
    const message = `Error prepareVideos: ${error}`
    showAlerts && Alert.alert(message)
    console.error(message);
  });
};

// Forces the global mute state for every Blaze player (Stories / Moments / Videos).
// The SDK does not persist this value, so the host app must re-apply it on each launch.
export const setPlayerSoundState = (
  state: BlazePlayerSoundState
): Promise<void> => {
  return BlazeSDK.setPlayerSoundState(state).then(() => {
    console.log(`setPlayerSoundState('${state}') success`);
  }).catch(error => {
    const message = `Error setPlayerSoundState: ${error}`
    showAlerts && Alert.alert(message)
    console.error(message);
  });
};

export const getIsMuted = async (): Promise<boolean> => {
  const muted = await BlazeSDK.isMuted().then((result) => {
    console.log('isMuted success, result -> ', result);
    return result;
  }).catch(error => {
    const message = `Error isMuted: ${error}`
    showAlerts && Alert.alert(message)
    console.error(message);
    return true; // native default is muted
  });
  return muted;
};

export const showSearchScreen = (
  options?: BlazeSearchScreenOptions
) => {
  BlazeSDK.showSearchScreen(options).then(() => {
    console.log('showSearchScreen success');
  }).catch(error => {
    const message = `Error showSearchScreen: ${error}`
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
    onTriggerCustomActionButton: (params) => {
      console.log(widgetName + ' - onTriggerCustomActionButton - params: ' + JSON.stringify(params));
      showPlayerAlert('Custom Action', `${params.buttonName} (${params.buttonId})`);
    },
  }
}

export const globalDelegate: BlazeGlobalDelegate = {
  onEventTriggered: (params => {
    console.log('GlobalDelegate - onEventTriggered - params: ' + JSON.stringify(params));
  }),
  onErrorThrown: (params => {
    console.error('GlobalDelegate - onErrorThrown - params: ' + JSON.stringify(params));
  }),
  // playbackModificationHandler: (request) => {
  //   return { modifiedURL: 'https://example.com/modified-url.mp4' };
  // },
};

export const castingDelegate: BlazeCastingDelegate = {
  onCastingStateChanged: (params) => {
    console.log('CastingDelegate - onCastingStateChanged - params: ' + JSON.stringify(params));
  },
};

export const pipDelegate: BlazePipDelegate = {
  onPiPStateChanged: (params) => {
    console.log('PipDelegate - onPiPStateChanged - params: ' + JSON.stringify(params));
  },
};

// Delegate for the Moments "widget to tabs" fullscreen container. Pass it per-widget via the
// `momentsContainerTabsDelegate` prop on `BlazeMomentsRowView` / `BlazeMomentsGridView`.
export const momentsContainerTabsDelegate: BlazePlayerContainerTabsDelegate = {
  onTabSelected: (params) => {
    console.log('MomentsContainerTabsDelegate - onTabSelected - params: ' + JSON.stringify(params));
  },
  onDataLoadStarted: (params) => {
    console.log('MomentsContainerTabsDelegate - onDataLoadStarted - params: ' + JSON.stringify(params));
  },
  onDataLoadComplete: (params) => {
    console.log('MomentsContainerTabsDelegate - onDataLoadComplete - params: ' + JSON.stringify(params));
  },
  onPlayerDidAppear: (params) => {
    console.log('MomentsContainerTabsDelegate - onPlayerDidAppear - params: ' + JSON.stringify(params));
  },
  onPlayerDidDismiss: (params) => {
    console.log('MomentsContainerTabsDelegate - onPlayerDidDismiss - params: ' + JSON.stringify(params));
  },
  onTriggerCTA: (params) => {
    console.log('MomentsContainerTabsDelegate - onTriggerCTA - params: ' + JSON.stringify(params));
  },
  onTriggerPlayerBodyTextLink: (params) => {
    console.log('MomentsContainerTabsDelegate - onTriggerPlayerBodyTextLink - params: ' + JSON.stringify(params));
  },
  onPlayerEventTriggered: (params) => {
    console.log('MomentsContainerTabsDelegate - onPlayerEventTriggered - params: ' + JSON.stringify(params));
  },
  onTriggerCustomActionButton: (params) => {
    console.log('MomentsContainerTabsDelegate - onTriggerCustomActionButton - params: ' + JSON.stringify(params));
    showPlayerAlert('Custom Action (Tabs)', `${params.buttonName} (${params.buttonId})`);
  },
};

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
  onTriggerCustomActionButton: (params) => {
    console.log('EntryPointDelegate - onTriggerCustomActionButton - params: ' + JSON.stringify(params));
    showPlayerAlert('Custom Action', `${params.buttonName} (${params.buttonId})`);
  },
  onReadStatusChanged: (params) => {
    console.log('EntryPointDelegate - onReadStatusChanged - params: ' + JSON.stringify(params));
  },
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