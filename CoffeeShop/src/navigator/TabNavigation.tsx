import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/app/Home';
import Love from '../screens/app/Love';
import Cart from '../screens/app/Cart';
import Message from '../screens/app/Message';
import {StyleSheet} from 'react-native';
import {COLORS} from '../theme/theme';
import CustomIcon from '../components/CustomIcon';
import PaymentScreen from '../screens/app/PaymentScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: style.tabrStyle,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <CustomIcon
              name="home"
              size={25}
              color={focused ? COLORS.primaryOrangeHex : COLORS.primaryGreyHex}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Love"
        component={Love}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <CustomIcon
              name="like"
              size={25}
              color={focused ? COLORS.primaryOrangeHex : COLORS.primaryGreyHex}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <CustomIcon
              name="cart"
              size={25}
              color={focused ? COLORS.primaryOrangeHex : COLORS.primaryGreyHex}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <CustomIcon
              name="bell"
              size={25}
              color={focused ? COLORS.primaryOrangeHex : COLORS.primaryGreyHex}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const style = StyleSheet.create({
  tabrStyle: {
    height: 80,
    backgroundColor: COLORS.primaryBlackHex,
    position: 'absolute',
    borderWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
});
