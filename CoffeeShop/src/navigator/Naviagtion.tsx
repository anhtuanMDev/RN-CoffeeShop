import {View, Text} from 'react-native';
import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';
import { setHost } from '../../helper/redux/globalSlice';
import Welcome from '../screens/users/Welcome';
import Login from '../screens/users/Login';
import Home from '../screens/app/Home';
import Cart from '../screens/app/Cart';
import Love from '../screens/app/Love';
import Message from '../screens/app/Message';
import Profile from '../screens/app/Profile';
import DetailsScreen from '../screens/app/DetailsScreen';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();

const Naviagtion = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHost('http://192.168.1.3:2101'));
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Welcome'>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomePage" component={TabNavigation} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Naviagtion;
