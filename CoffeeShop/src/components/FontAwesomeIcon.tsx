import { View, Text, ColorValue } from 'react-native'
import React, {PropsWithChildren} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

type IconProps = PropsWithChildren<{
  name: string;
  color?: ColorValue;
  size?: number;
}>;
const FontAwesomeIcon = ({name, color, size}: IconProps) => {
    return <FontAwesome name={name} size={size || 20} color={color} />;
  };

export default FontAwesomeIcon