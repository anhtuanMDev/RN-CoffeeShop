import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {container} from '../../components/styles/screens';
import {COLORS, FONTFAMILY, FONTSIZE} from '../../theme/theme';
import InputForm from '../../components/InputForm';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {ParamList} from '../../navigator/Naviagtion';
import AxiosInstance from '../../../helper/AxiosInstance';
import {useSelector} from 'react-redux';
import {selectHost} from '../../../helper/redux/globalSlice';
import axios from 'axios';
import { AccountFunction } from '../../../utils/accountFunction';

const {width, height} = Dimensions.get('window');

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const host = useSelector(selectHost);
  const utils = new AccountFunction();
  const navigation = useNavigation<NavigationProp<ParamList, 'Login'>>();

  const signIn = async () => {
    try {
      if (email.length === 0 || password.length === 0) {
        throw new Error('Please input all the fields required');
      }

      if(!utils.checkEmail(email)){
        throw new Error("Please input a valid email");
      }
  
      const data = { email, password };
      const response = await AxiosInstance().post(`${host}/user/signin`, data);
      console.log("Response:", response);
      const user: UserLogin = response.data;
      console.log("user",user);
    } catch (error) {

      //check throwing error from nodejs
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.log("Error data:", error.response.data);
        } else if (error.request) {
          console.log("Error request:", error.request);
        } else {
          console.log("Error message:", error.message);
        }
        console.log("Error config:", error.config);
      } else {
        // If the error is not an AxiosError, handle it differently
        console.log("Unexpected error:", error);
      }
    }
  };
  

  return (
    <View
      style={[
        container.container,
        {backgroundColor: COLORS.primaryBlackHex, alignItems: 'stretch'},
      ]}>
      <InputForm
        value={email}
        onChangeText={text => {
          setEmail(text);
        }}
        styles={{
          marginTop: 50,
          marginBottom: 20,
        }}
        placeholder="Email"
      />

      <InputForm
        value={password}
        onChangeText={text => {
          setPassword(text);
        }}
        placeholder="Password"
      />

      <TouchableOpacity
        onPress={() => {
          signIn();
        }}
        style={{
          alignSelf: 'center',
          alignItems: 'center',
          width: width - 60,
          marginTop: 40,
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 15,
          backgroundColor: COLORS.primaryOrangeHex,
        }}>
        <Text
          style={{
            fontFamily: FONTFAMILY.poppins_extrabold,
            fontSize: FONTSIZE.size_18,
            color: COLORS.primaryWhiteHex,
          }}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
