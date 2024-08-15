import { NavigationContainer } from '@react-navigation/native';
import BlazeSDK from '@wscsports/blaze-rtn-sdk';
import BlazeGAM from '@wscsports/blaze-rtn-gam-ads';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import TabsNavigator from './navigation/TabsNavigator';
import {
  InitOptions,
} from '@wscsports/blaze-rtn-sdk';
import {
  momentPlayerRowStyle,
  storyPlayerRowStyle
} from './utils/blazePlayersTheme.utils';
import { 
  entryPointDelegate, 
  globalDelegate, 
  googleCustomNativeAdsDelegate, 
  imaAdsDelegate
} from './utils';
import BlazeIMA from '@wscsports/blaze-rtn-ima-ads';

const blazeSdkInitOptions: InitOptions = {
  apiKey: '<API_KEY>',
  cachingSize: 512,
  cachingLevel: 'DEFAULT',
  // defaultStoryPlayerStyle: storyPlayerRowStyle, // Uncomment this if you want to customize the player's appearence.
  // defaultMomentsPlayerStyle: momentPlayerRowStyle, // Uncomment this if you want to customize the player's appearence.
  globalDelegate: globalDelegate,
  playerEntryPointDelegate: entryPointDelegate
};

function App(): JSX.Element {
  enum LoadingState {
    LOADED,
    LOADING,
    ERROR,
  }

  const [loadingState, setLoadingState] = useState<LoadingState>();

  const blazeSDKInit = async () => {
    try {
      // BlazeSDK init.
      const isInitialized = BlazeSDK.isInitialized();
      console.log(isInitialized);
      if (!isInitialized) {
        setLoadingState(LoadingState.LOADING)
        await BlazeSDK.init(blazeSdkInitOptions);
      }

      // GAM Setup (If you want to support Google's CustomNativeAds)
      BlazeGAM.enableCustomNativeAds({
        defaultAdConfig: {
            adUnit: "[Your default ad unit id]",
            templateId: "[Your default template id]"
        },
        delegate: googleCustomNativeAdsDelegate
      })

      BlazeIMA.enableAds({
        delegate: imaAdsDelegate
      })

      setLoadingState(LoadingState.LOADED)

    } catch (e) {
      console.log('Init error', e);
      setLoadingState(LoadingState.ERROR)
    }
  };

  useEffect(() => {
    blazeSDKInit();

    return () => {
    };
  }, []);

  const contentView = () => {
    switch (loadingState) {
      case LoadingState.LOADING:
        return (
          <View style={styles.centered}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        );
      case LoadingState.LOADED:
        return <TabsNavigator />;
      case LoadingState.ERROR:
        // Assuming TabsNavigator is shown on error for example purposes
        return (
          <View style={styles.centered}>
            <Button
              title='Retry loading the SDK'
              onPress={() =>
                blazeSDKInit()
              } />
          </View>
        );
    }
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <NavigationContainer>
        <View style={styles.view}>
          {contentView()}
        </View>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
const styles = StyleSheet.create({
  view: {
    height: '100%',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
