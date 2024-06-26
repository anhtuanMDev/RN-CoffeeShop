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
import AxiosInstance from '../../../helper/AxiosInstance';
import {useSelector} from 'react-redux';
import {selectHost} from '../../../helper/redux/globalSlice';
import axios from 'axios';
import {AccountFunction} from '../../../utils/accountFunction';
import { Response, ResponseApi } from '../../models/response';
import { ParamList } from '../../models/fileParam';
import { NativeStackNavigationProp } from 'react-native-screens/native-stack';

const {width, height} = Dimensions.get('window');

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const host = useSelector(selectHost);
  const utils = new AccountFunction(host);
  const navigation = useNavigation<NativeStackNavigationProp<ParamList, 'Login'>>();

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
        onPress={async () => {
          const api: ResponseApi = await utils.signIn(email, password);

          if(api.status) {
            navigation.navigate('HomePage');
          }
          else console.log("error");
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
