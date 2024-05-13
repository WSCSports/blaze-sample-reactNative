import { NavigationContainer } from '@react-navigation/native';
import BlazeSDK from '@wscsports/blaze-rtn-sdk';
import BlazeGAM from '@wscsports/blaze-rtn-gam-ads';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import TabsNavigator from './navigation/TabsNavigator';
import {
  CachingLevel,
  InitOptions,
} from '@wscsports/blaze-rtn-sdk';
import { 
  momentPlayerRowTheme, 
  storyPlayerRowTheme 
} from './utils/blazePlayersTheme.utils';
import { 
  entryPointDelegate, 
  globalDelegate, 
  googleCustomNativeAdsDelegate 
} from './utils';

const blazeSdkInitOptions: InitOptions = {
  apiKey: '<API_KEY>',
  cachingSize: 512,
  cachingLevel: CachingLevel.DEFAULT,
  // globalPlayerStoryTheme: storyPlayerRowTheme, // Uncomment this if you want to customize the player's appearence.
  // globalPlayerMomentTheme: momentPlayerRowTheme, // Uncomment this if you want to customize the player's appearence.
  globalDelegate: globalDelegate,
  playerEntryPointDelegate: entryPointDelegate
};

function App(): JSX.Element {
  const [initialized, setInitialized] = useState<boolean>();

  const blazeSDKInit = async () => {
    try {
      // BlazeSDK init.
      const isInitialized = BlazeSDK.isInitialized();
      console.log(isInitialized);
      if (!isInitialized) {
        await BlazeSDK.init(blazeSdkInitOptions);
      }
      setInitialized(true);

      // GAM Setup (If you want to support Google's CustomNativeAds)
      BlazeGAM.enableWith({
        defaultAdConfig: {
          adUnit: "[Your default ad unit id]",
          templateId: "[Your default template id]"
        }
      })
      BlazeGAM.setDelegate(googleCustomNativeAdsDelegate)

    } catch (e) {
      console.log('Init error', e);
      setInitialized(true);
    }
  };

  useEffect(() => {
    blazeSDKInit();

    return () => {
    };
  }, []);

  return (
    <SafeAreaView>
      <StatusBar />
      <NavigationContainer>
        <View style={styles.view}>{initialized && <TabsNavigator />}</View>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
const styles = StyleSheet.create({
  view: {
    height: '100%',
  },
});
