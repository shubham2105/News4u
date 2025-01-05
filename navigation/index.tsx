import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from '../screens/GetStarted';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  <NavigationContainer>
    <Stack.Navigator initialRouteName="GetStarted">
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>;
}
