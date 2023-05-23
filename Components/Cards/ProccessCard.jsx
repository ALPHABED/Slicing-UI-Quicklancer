import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import GlobalStyles from '../../Style/GlobalStyles';

const ProcessCard = ({icon1, title, date, icon2}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.leftContent}>
        <View style={styles.icon}>
          <Image source={icon1} style={{resizeMode: 'contain'}} />
        </View>

        <View style={{}}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.dates}>{date}</Text>
        </View>
      </View>

      <View>
        <Image source={icon2} style={{resizeMode: 'contain'}} />
      </View>
    </View>
  );
};

export default ProcessCard;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    color: GlobalStyles.COLORS.Gray900,
    fontFamily: GlobalStyles.FONTS.poppinsBold,
    fontSize: GlobalStyles.FONTSIZE.fontSubText,
  },

  icon: {
    backgroundColor: GlobalStyles.COLORS.whiteCard,
    width: 46,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 46 / 2,
  },

  dates: {
    color: GlobalStyles.COLORS.Gray500,
    fontFamily: GlobalStyles.FONTS.poppinsRegular,
    fontSize: GlobalStyles.FONTSIZE.fontSubText,
  },

  leftContent: {
    flexDirection: 'row',
    flex: 5,
    gap: 20,
    alignItems: 'center',
  },
});
