import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ChatMainScreen, ChatScreen } from "screens/chat-screens/index";

const Stack = createNativeStackNavigator();

function ChatNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="ChatMainScreen"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        stackPresentation: "modal",
      }}
    >
      <Stack.Screen name="ChatMainScreen" component={ChatMainScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  );
}

export default ChatNavigation;
