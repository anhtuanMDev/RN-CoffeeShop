import {View, Text, Image, Dimensions, TouchableOpacity, StatusBar} from 'react-native';
import React from 'react';
import {container} from '../../components/styles/screens';
import {COLORS} from '../../theme/theme';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ParamList } from '../../navigator/Naviagtion';

const {width, height} = Dimensions.get('window');

const Welcome = () => {
    const navigate = useNavigation<NavigationProp<ParamList, 'Welcome'>>();
  return (
    <View style={[container.flexAll]}>
      <StatusBar backgroundColor={'transparent'} translucent/>
      <Image
        source={require('../../assets/app_images/wallpaper.jpg')}
        style={{width, height: height / 1.3}}
      />
      <View
        style={{
          position: 'absolute',
          height: height,
          top: height / 1.5,
          left: 0,
          right: 0,
          alignItems: 'center',
          backgroundColor: COLORS.secondaryGreyHex,
          borderTopLeftRadius: 100,
          paddingTop: 50,
        }}>
        <Text style={{fontSize: 30, color: 'white'}}>Welcome to Coffee</Text>
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            width: width - 80,
            textAlign: 'center',
            marginTop: 20,
            marginBottom: 40,
          }}>
          Get wide range of speciallity coffee, tea and beverages
        </Text>
        <TouchableOpacity
        onPress={() => navigate.navigate('Login')}
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: COLORS.primaryOrangeHex,
            borderRadius: 20,
          }}>
          <Text style={{fontSize: 20, color: 'white'}}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
