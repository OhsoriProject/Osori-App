import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Navigation1Screen} from 'screens/container/index';

const Stack = createNativeStackNavigator();

function Navigation1() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        stackPresentation: 'modal',
      }}>
      <Stack.Screen name="Navigation1Screen" component={Navigation1Screen} />
    </Stack.Navigator>
  );
}

export default Navigation1;
