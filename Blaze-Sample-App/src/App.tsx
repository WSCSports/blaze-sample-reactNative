import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import BlazeSDK, {
  CachingLevel,
  InitOptions,
} from '@wscsports/blaze-rtn-sdk/src/NativeBlazeSdk';
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
  }, []);

  return (
    <SafeAreaView>
      <StatusBar />
      <NavigationContainer>
        <View style={styles.view}>
          {initialized && (
            <Tab.Navigator
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
    fontSize: 9,
  },
  tab_icon_style: {display: 'none'},
});
