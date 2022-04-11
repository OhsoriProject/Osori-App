import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNavigation from "./BottomNavigation";
import LoginNavigation from "./LoginNavigation";

const Stack = createNativeStackNavigator();

function RootNavigation() {
  let initRouteName = "LoginNavigation";

  return (
    <Stack.Navigator
      initialRouteName={initRouteName}
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        stackPresentation: "modal",
        style: { backgroundColor: "pink" },
        cardStyle: {
          //Does not work,
        },
      }}
    >
      <Stack.Screen name="LoginNavigation" component={LoginNavigation} />
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
    </Stack.Navigator>
  );
}

export default RootNavigation;
