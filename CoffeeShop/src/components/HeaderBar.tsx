import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import GradientBGIcon from './GradientBGIcon';
import ProfilePic from './ProfilePic';

interface HeaderBarProps {
  title?: string;
  cartTab: () => void;
  menuTab: () => void;
}

const HeaderBar: React.FC<HeaderBarProps> = ({title, cartTab, menuTab}) => {
  return (
    <View style={styles.HeaderContainer}>
      <TouchableOpacity onPress={() => menuTab}>
        <GradientBGIcon
          name="menu"
          color={COLORS.primaryLightGreyHex}
          size={FONTSIZE.size_16}
        />
      </TouchableOpacity>
      <Text style={styles.HeaderText}>{title}</Text>
      <TouchableOpacity onPress={() => cartTab}>
        <GradientBGIcon
          name="wallet"
          color={COLORS.primaryOrangeHex}
          size={FONTSIZE.size_16}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HeaderText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
});

export default HeaderBar;
