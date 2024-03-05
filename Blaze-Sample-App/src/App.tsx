import { NavigationContainer } from '@react-navigation/native';
import BlazeSDK from '@wscsports/blaze-rtn-sdk';
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
import { entryPointDelegate, globalDelegate } from './utils';

const blazeSdkInitOptions: InitOptions = {
  apiKey: '<API_KEY>',
  cachingSize: 512,
  cachingLevel: CachingLevel.DEFAULT,
  globalPlayerStoryTheme: storyPlayerRowTheme,
  globalPlayerMomentTheme: momentPlayerRowTheme,
  globalDelegate: globalDelegate,
  playerEntryPointDelegate: entryPointDelegate
};

function App(): JSX.Element {
  const [initialized, setInitialized] = useState<boolean>();

  const blazeSDKInit = async () => {
    try {
      const isInitialized = BlazeSDK.isInitialized();
      console.log(isInitialized);
      if (!isInitialized) {
        await BlazeSDK.init(blazeSdkInitOptions);
      }
      setInitialized(true);
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
