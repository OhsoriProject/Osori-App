import React, {useEffect, useState} from 'react';
import {Text, Platform, TouchableOpacity, BackHandler} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import Navigation1 from './Navigation1';
import Navigation2 from './Navigation2';

const Tab = createBottomTabNavigator();

const isTabBarVisible = route => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Navigation2Home';
  // console.log('routeName', routeName);
  return ['Navigation1Screen', 'Navigation2Screen'].includes(routeName);
};

const mainRoutes = [
  {
    name: 'Navigation1',
    component: Navigation1,
    initRouteName: 'Navigation1Screen',
    label: 'Nav1',
  },
  {
    name: 'Navigation2',
    component: Navigation2,
    initRouteName: 'Navigation2Screen',
    label: 'Nav2',
  },
];

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Navigation1Home"
      navigationOptions={{headerShown: false}}
      screenOptions={({route}) => ({
        headerShown: false,
        // tabBarStyle: {display: isTabBarVisible(route) ? 'flex' : 'none'},
      })}
      tabBarOptions={{
        tabStyle: {
          paddingBottom: Platform.OS == 'ios' ? 0 : 4,
        },
        // showLabel: false,
        labelStyle: {},
      }}>
      {mainRoutes.map(data => (
        <Tab.Screen
          key={`screen-${data.name}`}
          name={data.name}
          component={data.component}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              // Prevent default action
              e.preventDefault();
              if (route) {
                navigation.navigate({key: route.key, name: data.initRouteName});
              }
            },
          })}
          options={{
            // tabBarIcon: ({focused}) => {
            //   return focused
            //     ? data.activeIcon(focused)
            //     : data.activeIcon(focused);
            //   // return focused ? route.activeIcon() : route.activeIcon()
            // },
            tabBarLabel: data.label,
            tabBarInactiveTintColor: '#4F4F4F',
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
