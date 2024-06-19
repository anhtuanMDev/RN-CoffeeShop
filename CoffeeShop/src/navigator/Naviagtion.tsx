import {View, Text} from 'react-native';
import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../screens/users/Welcome';
import Login from '../screens/users/Login';
import { useDispatch } from 'react-redux';
import { setHost } from '../../helper/redux/globalSlice';

export type ParamList = {
    Welcome: undefined;
    Login: undefined;
    "Sign In": undefined;
    Register: undefined;
}

const Stack = createNativeStackNavigator();

const Naviagtion = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHost('http://192.168.1.5:2101'));
  }, []);

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
