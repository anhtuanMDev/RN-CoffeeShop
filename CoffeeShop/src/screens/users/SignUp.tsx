import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { container } from '../../components/styles/screens';
import { COLORS, FONTFAMILY, FONTSIZE } from '../../theme/theme';
import InputForm from '../../components/InputForm';
import AxiosInstance from '../../../helper/AxiosInstance';
import { useSelector } from 'react-redux';
import { selectHost } from '../../../helper/redux/globalSlice';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AccountFunction } from '../../../utils/accountFunction';
import { ParamList } from '../../models/fileParam';
import { Response } from '../../models/response';

const { width } = Dimensions.get('window');

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const host = useSelector(selectHost);
  const utils = new AccountFunction(host);
  const navigation = useNavigation<NavigationProp<ParamList, 'Login'>>();


  return (
    <View style={[container.container, { backgroundColor: COLORS.primaryBlackHex }]}>
      <InputForm
        value={email}
        onChangeText={(text) => setEmail(text)}
        styles={{
          marginTop: 50,
          marginBottom: 20,
        }}
        placeholder="Email"
      />

      <InputForm
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
      />

      <TouchableOpacity
        style={{
          alignSelf: 'center',
          alignItems: 'center',
          width: width - 60,
          marginTop: 40,
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 15,
          backgroundColor: COLORS.primaryOrangeHex,
        }}
        onPress={async()=>{
          const api: Response = await utils.register(email,password);
          if(api?.status && api != null) {
            navigation.navigate("Sign In");
          }
        }}
      >
        <Text
          style={{
            fontFamily: FONTFAMILY.poppins_extrabold,
            fontSize: FONTSIZE.size_18,
            color: COLORS.primaryWhiteHex,
          }}
        >
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
