import {View, Text, TouchableOpacity, Dimensions, Image} from 'react-native';
import React from 'react';
import {COLORS} from '../../theme/theme';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {ParamList} from '../../navigator/Naviagtion';
import {container} from '../../components/styles/screens';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Tab = createMaterialTopTabNavigator();
const {width, height} = Dimensions.get('window');

const Login = () => {
  const navigate = useNavigation<NavigationProp<ParamList, 'Login'>>();
  return (
    <View style={[container.flexAll, {paddingTop: height/2 - 60}]}>
      <Image
        source={require('../../assets/app_images/login.jpg')}
        style={{width, height: height / 2, position: 'absolute', top: 0}}
      />
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: COLORS.primaryGreyHex,
        tabBarIndicatorStyle: {
          backgroundColor: COLORS.secondaryGreyHex,
          height: 5,
        },
        tabBarStyle: {
          backgroundColor: 'transparent',
        },
        tabBarLabelStyle: {
          fontSize: 18,
          fontWeight: 'bold',
        },
        tabBarItemStyle:{
          width: 'auto'
        }
      }}>
        <Tab.Screen name="Sign In" component={SignIn} />
        <Tab.Screen name="Sign Up" component={SignUp} />
      </Tab.Navigator>
    </View>
  );
};

export default Login;
