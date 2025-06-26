import React, { JSX, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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

const Tab = createBottomTabNavigator();

interface TabItemProps {
  text?: string;
  icon: JSX.Element;
  isFocused: boolean;
  style?: ViewStyle;
}

const TabItem = ({ text, icon, isFocused, style }: TabItemProps) => {
  return (
    <View
      style={[styles.tabView, style]}>
      {icon}
      {text && (
        <View style={styles.textView}>
          <Text
            style={[styles.textStyle, { color: isFocused ? 'blue' : 'gray' }]}>
            {text}
          </Text>
        </View>
      )}
    </View>
  );
};

const HomeTab = () => (
  <Tab.Screen
    name="Home"
    component={HomeScreen}
    options={{
      tabBarIcon: ({ focused = false }) => (
        <TabItem
          text={'Home'}
          icon={<CupIcon isFocused={focused} />}
          isFocused={focused}
        />
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
        <TabItem
          text={'Stories'}
          icon={<HomeIcon isFocused={focused} />}
          isFocused={focused}
        />
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
        <TabItem
          text={'Moments'}
          icon={<CameraIcon isFocused={focused} />}
          isFocused={focused}
        />
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
        <TabItem
          text={'SDK Actions'}
          icon={<ActionIcon isFocused={focused} />}
          isFocused={focused}
        />
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
        <TabItem
          text={'Play'}
          icon={<PlayIcon isFocused={isHighlighted} />}
          isFocused={isHighlighted}
        />
      ),

      tabBarButton: (props) => (
        <Pressable
          {...props} // Pass default props to maintain styling
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
              .catch(error => {
                showAlerts && Alert.alert(`Error playing moments: ${error}`)
                console.error('Error playing moments:', error);
              });
          }}
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        />
      ),
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
          tabBarItemStyle: styles.tabBarItem,
          tabBarShowLabel: false,
          tabBarLabelPosition: 'below-icon'
        }}>
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
    paddingBottom: 0, // Remove padding from the bottom of the tab bar
    alignItems: 'center',
    alignSelf: 'center',
  },
  tabBarItem: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  textView: {
    marginTop: 8,
  },
  tabView: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: 12,
  },
});

export default TabsNavigator;
