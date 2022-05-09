import React, { useEffect, useState } from "react";
import { Text, Platform, TouchableOpacity, BackHandler } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import ChatNavigation from "./ChatNavigation";
import PlaylistNavigation from "./PlaylistNavigation";

const Tab = createBottomTabNavigator();

const isTabBarVisible = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "ChatMainScreen";
  console.log(getFocusedRouteNameFromRoute(route));
  return ["ChatMainScreen", "PlaylistMainScreen"].includes(routeName);
};

const mainRoutes = [
  {
    name: "ChatNavigation",
    component: ChatNavigation,
    initRouteName: "ChatMainScreen",
    label: "채팅",
  },
  {
    name: "PlaylistNavigation",
    component: PlaylistNavigation,
    initRouteName: "PlaylistMainScreen",
    label: "플레이리스트",
  },
];

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="ChatMainScreen"
      navigationOptions={{ headerShown: false }}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { display: isTabBarVisible(route) ? "flex" : "none" },
      })}
      tabBarOptions={{
        tabStyle: {
          paddingBottom: Platform.OS == "ios" ? 0 : 4,
        },
        // showLabel: false,
        labelStyle: {},
      }}
    >
      {mainRoutes.map((data) => (
        <Tab.Screen
          key={`screen-${data.name}`}
          name={data.name}
          component={data.component}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              // Prevent default action
              e.preventDefault();
              if (route) {
                navigation.navigate({
                  key: route.key,
                  name: data.initRouteName,
                });
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
            tabBarInactiveTintColor: "#4F4F4F",
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
