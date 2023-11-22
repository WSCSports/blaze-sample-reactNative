import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import BlazeSDK, {
  CachingLevel,
  InitOptions,
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
import {
  MomentsScreen,
  SdkActionsScreen,
  StoriesFullScrollScreen,
} from './components/screens';
import {StoriesFixedHeightScreen} from './components/screens/StoriesFixedHeightScreen';

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

    const onStoryPlayerDidAppear: EmitterSubscription =
      RegisterGlobalEvents.onStoryPlayerDidAppear(() => {
        console.log('onStoryPlayerDidAppear');
      });
      
  }, []);

  return (
    <SafeAreaView>
      <StatusBar />
      <NavigationContainer>
        <View style={styles.view}>
          {initialized && (
            <Tab.Navigator
              detachInactiveScreens={false}
              screenOptions={{
                tabBarLabelPosition: 'beside-icon',
                tabBarLabelStyle: styles.tab_label_style,
                tabBarIconStyle: styles.tab_icon_style,
              }}>
              <Tab.Screen
                name="Stories Fixed"
                component={StoriesFixedHeightScreen}
                options={{
                  title: 'Stories Sticky Row Widget',
                  tabBarLabel: 'Stories Fixed',
                }}
              />
              <Tab.Screen
                name="Stories Full Scroll"
                options={{
                  tabBarLabel: 'Stories Full',
                }}
                component={StoriesFullScrollScreen}
              />
              <Tab.Screen name="Moments" component={MomentsScreen} />
              <Tab.Screen name="Actions" component={SdkActionsScreen} />
            </Tab.Navigator>
          )}
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
  tab_label_style: {
    fontWeight: '700',
    fontSize: 10,
    textAlign: 'center',
    width: 60,
  },
  tab_icon_style: {display: 'none'},
});
