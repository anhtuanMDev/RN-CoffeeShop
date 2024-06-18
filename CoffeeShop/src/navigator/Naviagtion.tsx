import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../screens/users/Welcome';
import Login from '../screens/users/Login';

export type ParamList = {
    Welcome: undefined;
    Login: undefined;
}

const Stack = createNativeStackNavigator();

const Naviagtion = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Welcome'>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Naviagtion;
