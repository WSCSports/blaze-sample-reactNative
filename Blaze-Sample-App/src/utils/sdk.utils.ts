import {DataSourceType} from '@wscsports/blaze-rtn-sdk/src/interfaces/widgets-props.interface';
import {BlazeSDK} from '../components/native';

export const playMoment = async (momentId: string): Promise<void> => {
  try {
    await BlazeSDK?.playMoment({momentId});
  } catch (error) {
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
    console.error('Error playing Story:', error);
  }
};

export const setDoNotTrack = async (): Promise<void> => {
  try {
    const res = await BlazeSDK?.setDoNotTrack(true);
    console.log('set Do Not Track:', res);
  } catch (error) {
    console.error('Error set Do Not Track:', error);
  }
};

export const dismissPlayer = async (): Promise<void> => {
  try {
    await BlazeSDK?.dismissPlayer();
    console.log('dismissPlayer success');
  } catch (error) {
    console.error('Error dismiss Player:', error);
  }
};

export const setExternalUserId = async (userId?: string): Promise<void> => {
  try {
    await BlazeSDK?.setExternalUserId(userId);
    console.log('setExternalUserId success');
  } catch (error) {
    console.error('Error set External UserId:', error);
  }
};

export const handleUniversalLink = async (link: string): Promise<void> => {
  try {
    await BlazeSDK?.handleUniversalLink(link);
    console.log('set universal link success');
  } catch (error) {
    console.error('Error set universal link:', error);
  }
};

export const playMoments = async (
  dataSource: DataSourceType,
): Promise<void> => {
  try {
    await BlazeSDK?.playMoments(dataSource);
    console.log('playMoments success');
  } catch (error) {
    console.error('Error playing moments:', error);
  }
};
