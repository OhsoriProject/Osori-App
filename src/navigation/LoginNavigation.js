import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TutorialScreen from "screens/login-screens/tutorials/TutorialScreen";
import LoginScreen from "screens/login-screens/logins/LoginScreen/LoginScreen";
import SignupScreen from "screens/login-screens/logins/SignupScreen/SignupScreen";

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
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
    </Stack.Navigator>
  );
}

export default LoginNavigation;
