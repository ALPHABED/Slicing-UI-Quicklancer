import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import GlobalStyles from '../../Style/GlobalStyles';
// {title, company, prince, rating, type, publish}

const CardWork = ({title, name, image}) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={image} style={styles.img} />
      <View style={{flex: 1}}>
        <Text style={styles.titleCard}>{name}</Text>
        <Text numberOfLines={2}>{title}</Text>
      </View>
    </View>
  );
};

export default CardWork;

const styles = StyleSheet.create({
  cardContainer: {
    gap: 15,
    width: GlobalStyles.SIZE.width - 30,
    borderRadius: GlobalStyles.PADDING.p20,
    borderWidth: 1,
    borderColor: GlobalStyles.COLORS.borderColor,
    backgroundColor: GlobalStyles.COLORS.white,
    flexDirection: 'row',
    paddingHorizontal: GlobalStyles.PADDING.p15,
    paddingVertical: GlobalStyles.PADDING.p20,
    alignItems: 'center',
  },
  img: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  titleCard: {
    color: GlobalStyles.COLORS.Gray900,
    fontFamily: GlobalStyles.FONTS.poppinsBold,
    fontSize: GlobalStyles.FONTSIZE.fontText,
  },
  textCard: {
    color: GlobalStyles.COLORS.Gray900,
    fontFamily: GlobalStyles.FONTS.poppinsRegular,
    fontSize: GlobalStyles.FONTSIZE.fontSubText,
  },
  textInfo: {
    color: GlobalStyles.COLORS.Gray900,
    fontFamily: GlobalStyles.FONTS.poppinsRegular,
    fontSize: GlobalStyles.FONTSIZE.fontSubText,
  },
  companyContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  chipsWrapper: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 5,
  },
  chipsContainer: {
    backgroundColor: GlobalStyles.COLORS.whiteCard,
    paddingHorizontal: 8,
    paddingVertical: 2.5,
    borderRadius: 5,
  },
  chipsText: {
    fontSize: 14,
    fontFamily: GlobalStyles.FONTS.poppinsRegular,
    lineHeight: 20,
    color: GlobalStyles.COLORS.Gray900,
  },
});
