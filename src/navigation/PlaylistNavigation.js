import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  PlaylistDetailScreen,
  PlaylistMainScreen,
} from "screens/playlist-screens/index";

const Stack = createNativeStackNavigator();

function PlaylistNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        stackPresentation: "modal",
      }}
    >
      <Stack.Screen name="PlaylistMainScreen" component={PlaylistMainScreen} />
      <Stack.Screen
        name="PlaylistDetailScreen"
        component={PlaylistDetailScreen}
      />
    </Stack.Navigator>
  );
}

export default PlaylistNavigation;
