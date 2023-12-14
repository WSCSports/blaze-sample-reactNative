import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, StyleSheet, ViewStyle, Text} from 'react-native';
import {StoriesFixedHeightScreen} from '../components/screens/StoriesFixedHeightScreen';
import {
  StoriesFullScrollScreen,
  MomentsScreen,
  SdkActionsScreen,
} from '../components/screens';
import HomeIcon from '../assets/tabsIcons/HomeIcon';
import CupIcon from '../assets/tabsIcons/CupIcon';
import CameraIcon from '../assets/tabsIcons/CameraIcon';
import ActionIcon from '../assets/tabsIcons/ActionIcon';

const Tab = createBottomTabNavigator();

interface TabItemProps {
  text?: string;
  icon: JSX.Element;
  isFocused: boolean;
  style?: ViewStyle;
}

const TabItem = ({text, icon, isFocused, style}: TabItemProps) => {
  return (
    <View
      style={[styles.tabView, style]}
      hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}>
      {icon}
      {text && (
        <View style={styles.textView}>
          <Text
            style={[styles.textStyle, {color: isFocused ? 'blue' : 'gray'}]}>
            {text}
          </Text>
        </View>
      )}
    </View>
  );
};

const TabsNavigator = () => {
  return (
    <View style={styles.view}>
      <Tab.Navigator
        // need for reload data in android
        detachInactiveScreens={false}
        screenOptions={{
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: styles.tabBar,
          tabBarItemStyle: styles.tabBarItem,
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          name="Stories Fixed"
          component={StoriesFixedHeightScreen}
          options={{
            title: 'Stories Sticky Row Widget',
            tabBarLabel: 'Stories Fixed',
            tabBarIcon: ({focused = false}) => (
              <TabItem
                text={'Stories'}
                icon={<HomeIcon isFocused={focused} />}
                isFocused={focused}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Stories Full Scroll"
          options={{
            tabBarLabel: 'Stories Full',
            tabBarIcon: ({focused = false}) => (
              <TabItem
                text={'Stories #2'}
                icon={<CupIcon isFocused={focused} />}
                isFocused={focused}
              />
            ),
          }}
          component={StoriesFullScrollScreen}
        />
        <Tab.Screen
          name="Moments"
          component={MomentsScreen}
          options={{
            tabBarIcon: ({focused = false}) => (
              <TabItem
                text={'Moments'}
                icon={<CameraIcon isFocused={focused} />}
                isFocused={focused}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Actions"
          component={SdkActionsScreen}
          options={{
            tabBarIcon: ({focused = false}) => (
              <TabItem
                text={'SDK Actions'}
                icon={<ActionIcon isFocused={focused} />}
                isFocused={focused}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabBar: {
    backgroundColor: '#fff',
    height: 84,
    alignItems: 'center',
    alignSelf: 'center',
  },
  tabBarItem: {
    height: 84,
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
