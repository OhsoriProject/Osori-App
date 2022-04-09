import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Navigation2Screen} from 'screens/container';

const Stack = createNativeStackNavigator();

function Navigation2() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        stackPresentation: 'modal',
      }}>
      <Stack.Screen name="Navigation2Screen" component={Navigation2Screen} />
    </Stack.Navigator>
  );
}

export default Navigation2;
