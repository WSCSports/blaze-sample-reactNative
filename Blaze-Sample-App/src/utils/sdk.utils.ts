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
  BlazeGlobalDelegate,
  BlazePlayerEntryPointDelegate,
} from '@wscsports/blaze-rtn-sdk';

import { MutableRefObject } from 'react';
import { Alert } from 'react-native';
import { momentPlayerGridTheme, storyPlayerGridTheme } from './blazePlayersTheme.utils';

import { BlazeGAMDelegate } from '@wscsports/blaze-rtn-gam-ads';

export let showAlerts = true;

export const setShowAlerts = (show: boolean) => {
  showAlerts = show;
};

export const playMoment = async (momentId: string): Promise<void> => {
  try {
    await BlazeSDK.playMoment({
      momentId,
      // playerTheme: momentPlayerGridTheme // Uncomment this if you want to customize the player's appearence.
    });
    console.log('playMoment success');
  } catch (error) {
    showAlerts && Alert.alert(`${error}`)
    console.error('Error playing moment:', error);
  }
};

export const playStory = async (
  storyId: string,
  pageId?: string,
): Promise<void> => {
  try {
    await BlazeSDK.playStory({
      storyId, 
      pageId,
      // playerTheme: storyPlayerGridTheme // Uncomment this if you want to customize the player's appearence.
    });
    console.log('playStory success');
  } catch (error) {
    showAlerts && Alert.alert(`${error}`)
    console.error('Error playing Story:', error);
  }
};

export const setDoNotTrack = async (): Promise<void> => {
  try {
    await BlazeSDK.setDoNotTrack(true);
    console.log('set Do Not Track success');
  } catch (error) {
    showAlerts && Alert.alert(`${error}`)
    console.error('Error set Do Not Track:', error);
  }
};

export const dismissPlayer = async (): Promise<void> => {
  try {
    await BlazeSDK.dismissPlayer();
    console.log('dismissPlayer success');
  } catch (error) {
    showAlerts && Alert.alert(`${error}`)
    console.error('Error dismiss Player:', error);
  }
};

export const setExternalUserId = async (userId?: string): Promise<void> => {
  try {
    await BlazeSDK.setExternalUserId(userId);
    console.log('setExternalUserId success');
  } catch (error) {
    showAlerts && Alert.alert(`${error}`)
    console.error('Error set External UserId:', error);
  }
};

export const handleUniversalLink = async (link: string): Promise<void> => {
  try {
    await BlazeSDK.handleUniversalLink(link);
    console.log('set universal link success');
  } catch (error) {
    showAlerts && Alert.alert(`${error}`)
    console.error('Error set universal link:', error);
  }
};

export const updateGeoRestriction = async (geoLocation: string): Promise<void> => {
  try {
    await BlazeSDK.updateGeoRestriction(geoLocation);
    console.log('updateGeoRestriction success');
  } catch (error) {
    showAlerts && Alert.alert(`${error}`)
    console.error(error);
  }
};

export const playStories = async (
  dataSource: BlazeDataSourceType,
): Promise<void> => {
  try {
    await BlazeSDK.playStories({
      dataSource: dataSource,
      // playerTheme: storyPlayerGridTheme, // Uncomment this if you want to customize the player's appearence.
    });
    console.log('playStories success');
  } catch (error) {
    showAlerts && Alert.alert(`Error playing stories: ${error}`)
    console.error('Error playing stories:', error);
  }
};

export const playMoments = async (
  dataSource: BlazeDataSourceType,
): Promise<void> => {
  try {
    await BlazeSDK.playMoments({
      dataSource: dataSource,
      // playerTheme: momentPlayerGridTheme, // Uncomment this if you want to customize the player's appearence.
    });
    console.log('playMoments success');
  } catch (error) {
    showAlerts && Alert.alert(`Error playing moments: ${error}`)
    console.error('Error playing moments:', error);
  }
};

export const prepareStories = async (
  dataSource: BlazeDataSourceType,
): Promise<void> => {
  try {
    await BlazeSDK.prepareStories({dataSource});
    console.log('prepareStories success');
  } catch (error) {
    showAlerts && Alert.alert(`Error prepareStories: ${error}`)
    console.error('Error prepareStories:', error);
  }
};

export const prepareMoments = async (
  dataSource: BlazeDataSourceType,
): Promise<void> => {
  try {
    await BlazeSDK.prepareMoments({dataSource});
    console.log('prepareMoments success');
  } catch (error) {
    showAlerts && Alert.alert(`Error prepareMoments: ${error}`)
    console.error('Error prepareMoments:', error);
  }
};

export const updateDataSourceHandler = (
  ref: MutableRefObject<any> | null,
  newDataSource: BlazeDataSourceType,
) => {
  if (ref?.current) {
    ref?.current?.updateDataSource(newDataSource);
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
}

export const googleCustomNativeAdsDelegate: BlazeGAMDelegate = {
  onAdEvent: (params => {
    console.log('BlazeGAMDelegate - onAdEvent - evenType: ' + params.eventType);
  })
}