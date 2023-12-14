import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import BlazeSDK, {
  RegisterGlobalEvents,
} from '@wscsports/blaze-rtn-sdk/src/NativeBlazeSdk';
import React, {useEffect, useState} from 'react';
import {
  EmitterSubscription,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import TabsNavigator from './navigation/TabsNavigator';
import {
  CachingLevel,
  InitOptions,
} from '@wscsports/blaze-rtn-sdk/src/interfaces/init-options.interface';

const Tab = createBottomTabNavigator();

const blazeSdkInitOptions: InitOptions = {
  apiKey: '<API_KEY>',
  cachingSize: 512,
  cachingLevel: CachingLevel.DEFAULT,
};

function App(): JSX.Element {
  const [initialized, setInitialized] = useState<boolean>();

  const blazeSDKInit = async () => {
    try {
      const isInitialized = BlazeSDK?.isInitialized();
      console.log(isInitialized);
      if (!isInitialized) {
        await BlazeSDK?.init(blazeSdkInitOptions);
      }
      setInitialized(true);
    } catch (e) {
      console.log('Init error', e);
      setInitialized(true);
    }
  };

  useEffect(() => {
    blazeSDKInit();

    const onEventTriggered: EmitterSubscription =
      RegisterGlobalEvents.onEventTriggered(data => {
        console.log('onEventTriggered', data.event_action);
      });

    return () => {
      onEventTriggered.remove();
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
