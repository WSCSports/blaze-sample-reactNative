import React, { JSX, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';

import {
  View,
  StyleSheet,
  ViewStyle,
  Text,
  Alert,
  Pressable
} from 'react-native';

import {
  HomeScreen,
  MomentsScreen,
  StoriesScreen,
  SdkActionsScreen,
} from '../components/screens';

import HomeIcon from '../assets/tabsIcons/HomeIcon';
import CupIcon from '../assets/tabsIcons/CupIcon';
import CameraIcon from '../assets/tabsIcons/CameraIcon';
import ActionIcon from '../assets/tabsIcons/ActionIcon';
import BlazeSDK, { BlazeWidgetLabel } from '@wscsports/blaze-rtn-sdk';
import { showAlerts } from '../utils';
import PlayIcon from '../assets/tabsIcons/PlayIcon';

// Disable native screens to prevent ViewManager recreation
enableScreens(false);

const Tab = createBottomTabNavigator();

const HomeTab = () => (
  <Tab.Screen
    name="Home"
    component={HomeScreen}
    options={{
      tabBarIcon: ({ focused = false }) => (
        <HomeIcon isFocused={focused} />
      ),

    }}
  />
);

const StoriesFixedTab = () => (
  <Tab.Screen
    name="Stories"
    component={StoriesScreen}
    options={{
      title: 'Stories',
      tabBarIcon: ({ focused = false }) => (
        <CupIcon isFocused={focused} />
      ),
    }}
  />
);

const MomentsTab = () => (
  <Tab.Screen
    name="Moments"
    component={MomentsScreen}
    options={{
      tabBarIcon: ({ focused = false }) => (
        <CameraIcon isFocused={focused} />
      ),
    }}
  />
);

const SdkActionsTab = () => (
  <Tab.Screen
    name="Actions"
    component={SdkActionsScreen}
    options={{
      tabBarIcon: ({ focused = false }) => (
        <ActionIcon isFocused={focused} />
      ),
    }}
  />
);

const MomentsContainerTab = () => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  return <Tab.Screen
    name="Play"
    component={SdkActionsScreen} // Component is ignored since it's non-selectable
    options={{
      tabBarIcon: ({ focused = false }) => (
        <PlayIcon isFocused={isHighlighted} />
      ),

      tabBarButton: (props: any) => {
        const { onPress, ...restProps } = props;
        return (
          <Pressable
            {...restProps}
            onPressIn={() => {
              setIsHighlighted(true);
              console.log('Button pressed down');
            }}
            onPressOut={() => {
              setIsHighlighted(false);
              console.log('Button pressed up');
            }}
            onPress={() => {
              BlazeSDK.playMoments({
                dataSource: {
                  labels: BlazeWidgetLabel.singleLabel('moments'),
                },
              })
                .then(() => console.log('playMoments success'))
                .catch((error: any) => {
                  showAlerts && Alert.alert(`Error playing moments: ${error}`)
                  console.error('Error playing moments:', error);
                });
            }}
          />
        );
      },
    }}
  />
};

const TabsNavigator = () => {
  return (
    <View style={styles.view}>
      <Tab.Navigator
        detachInactiveScreens={false}
        screenOptions={{
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: styles.tabBar,
          tabBarShowLabel: true,
          tabBarLabelPosition: 'below-icon',
          tabBarItemStyle: {
            paddingVertical: 8,
          },
          tabBarLabelStyle: {
            paddingVertical: 8,
            fontSize: 12,
            fontWeight: '600',
          },
        }
        }>
        {/* Extracted tab screens */}
        {HomeTab()}
        {StoriesFixedTab()}
        {MomentsContainerTab()}
        {MomentsTab()}
        {SdkActionsTab()}
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fff'
  },
  tabBar: {
    backgroundColor: '#fff',
    height: 80,
    paddingBottom: 0,
  },
});

export default TabsNavigator;
