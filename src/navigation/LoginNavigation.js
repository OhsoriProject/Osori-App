import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TutorialScreen from "screens/login-screens/tutorials/TutorialScreen";

const Stack = createNativeStackNavigator();

function LoginNavigation() {
  return (
    <Stack.Navigator
      //   initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        stackPresentation: "modal",
      }}
    >
      <Stack.Screen name="TutorialScreen" component={TutorialScreen} />
    </Stack.Navigator>
  );
}

export default LoginNavigation;
