import BlazeSDK, { BlazeDataSourceType } from '@wscsports/blaze-rtn-sdk';
import { MutableRefObject } from 'react';
import { Alert } from 'react-native';

export let showAlerts = true;

export const setShowAlerts = (show: boolean) => {
  showAlerts = show;
};

export const playMoment = async (momentId: string): Promise<void> => {
  try {
    await BlazeSDK?.playMoment({momentId});
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
    await BlazeSDK?.playStory({storyId, pageId});
    console.log('playStory success');
  } catch (error) {
    showAlerts && Alert.alert(`${error}`)
    console.error('Error playing Story:', error);
  }
};

export const setDoNotTrack = async (): Promise<void> => {
  try {
    await BlazeSDK?.setDoNotTrack(true);
    console.log('set Do Not Track success');
  } catch (error) {
    showAlerts && Alert.alert(`${error}`)
    console.error('Error set Do Not Track:', error);
  }
};

export const dismissPlayer = async (): Promise<void> => {
  try {
    await BlazeSDK?.dismissPlayer();
    console.log('dismissPlayer success');
  } catch (error) {
    showAlerts && Alert.alert(`${error}`)
    console.error('Error dismiss Player:', error);
  }
};

export const setExternalUserId = async (userId?: string): Promise<void> => {
  try {
    await BlazeSDK?.setExternalUserId(userId);
    console.log('setExternalUserId success');
  } catch (error) {
    showAlerts && Alert.alert(`${error}`)
    console.error('Error set External UserId:', error);
  }
};

export const handleUniversalLink = async (link: string): Promise<void> => {
  try {
    await BlazeSDK?.handleUniversalLink(link);
    console.log('set universal link success');
  } catch (error) {
    showAlerts && Alert.alert(`${error}`)
    console.error('Error set universal link:', error);
  }
};

export const updateGeoRestriction = async (geoLocation: string): Promise<void> => {
  try {
    await BlazeSDK?.updateGeoRestriction(geoLocation);
    console.log('updateGeoRestriction success');
  } catch (error) {
    showAlerts && Alert.alert(`${error}`)
    console.error(error);
  }
};

export const playMoments = async (
  dataSource: BlazeDataSourceType,
): Promise<void> => {
  try {
    await BlazeSDK?.playMoments(dataSource);
    console.log('playMoments success');
  } catch (error) {
    showAlerts && Alert.alert(`Error playing moments: ${error}`)
    console.error('Error playing moments:', error);
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
