import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {container} from './styles/screens';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';

type Prop = {
  onChangeText: (text: string) => void;
  value: string;
  placeholder: string;
  styles?: ViewStyle | ViewStyle[];
  lead?: string;
  action?: string;
  leadSize?: number;
  actionSize?: number;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
  onPressAction?: () => void;
  onPressLead?: () => void;
};

const InputForm = (props: Prop) => {
  const {
    lead,
    action,
    leadSize,
    actionSize,
    onPressAction,
    onPressLead,
    secureTextEntry,
    keyboardType,
    styles,
    onChangeText,
    value,
    placeholder,
  } = props;
  return (
    <View style={[style.container, styles]}>
      {lead && (
        <TouchableOpacity
          onPress={() => {
            onPressLead && onPressLead();
          }}>
          <FontAwesome5Icon
            name={lead}
            size={leadSize}
            color="white"
            style={style.inputIcon}
          />
        </TouchableOpacity>
      )}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholderTextColor={COLORS.primaryLightGreyHex}
        style={style.inputContainer}
      />
      {action && (
        <TouchableOpacity
          onPress={() => {
            onPressAction && onPressAction();
          }}>
          <FontAwesome5Icon
            name={action}
            size={actionSize}
            color="white"
            style={style.inputIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: SPACING.space_30,
    height: 55,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: 'center',
  },
  inputIcon: {
    marginHorizontal: SPACING.space_20,
  },
  inputContainer: {
    flex: 1,
    height: SPACING.space_20 * 3,
    fontFamily: FONTFAMILY.poppins_medium,
    marginHorizontal: SPACING.space_10,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
});

export default InputForm;
