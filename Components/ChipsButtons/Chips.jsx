import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GlobalStyles from '../../Style/GlobalStyles';
const Chips = ({title}) => {
  return (
    <View style={styles.chipsContainer}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Chips;

const styles = StyleSheet.create({
  chipsContainer: {
    paddingHorizontal: GlobalStyles.PADDING.p20,
    paddingVertical: GlobalStyles.PADDING.p5,
    backgroundColor: GlobalStyles.COLORS.whiteCard,
    marginHorizontal: GlobalStyles.MARGIN.m5,
    borderRadius: GlobalStyles.PADDING.p10,
  },
  text: {
    color: GlobalStyles.COLORS.Gray800,
    fontSize: GlobalStyles.FONTSIZE.fontSubText,
    fontWeight: GlobalStyles.FONTWEIGHT.w500,
  },
});
