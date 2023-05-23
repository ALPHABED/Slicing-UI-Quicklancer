import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import GlobalStyles from '../../Style/GlobalStyles';
// {title, company, prince, rating, type, publish}
import Arrow from 'react-native-vector-icons/Fontisto';
import person from '../../Assets/Img/person1.jpg';
import {useNavigation} from '@react-navigation/native';

const InterviewCard = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.cardContainer}>
      <View style={styles.containerTop}>
        <Text style={styles.titleCard}>Interview</Text>
        <Text style={styles.subTitleCard}>Call with Design Team</Text>
      </View>

      <View style={styles.companyContainer}>
        <Image source={person} style={styles.img} />
        <View>
          <Text style={styles.subTitleCard}>Tuesday, 4th October</Text>
          <Text style={styles.time}>10.00 AM GMT +7</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.pressable}
        onPress={() => navigation.navigate('Prepare')}>
        <Text style={styles.textPressable}>What do you need to prepare?</Text>
        <Arrow name="arrow-right-l" size={24} color={'black'} />
      </TouchableOpacity>
    </View>
  );
};

export default InterviewCard;

const styles = StyleSheet.create({
  cardContainer: {
    gap: 15,
    width: GlobalStyles.SIZE.width - 30,
    borderRadius: GlobalStyles.PADDING.p20,
    backgroundColor: GlobalStyles.COLORS.white,
    paddingHorizontal: GlobalStyles.PADDING.p20,
    paddingTop: GlobalStyles.PADDING.p20,
    paddingBottom: GlobalStyles.PADDING.p50,
  },

  img: {
    width: 60,
    height: 60,
    borderRadius: 15,
  },

  titleCard: {
    color: GlobalStyles.COLORS.Gray900,
    fontFamily: GlobalStyles.FONTS.poppinsBold,
    fontSize: GlobalStyles.FONTSIZE.fontText,
  },

  subTitleCard: {
    color: GlobalStyles.COLORS.Gray500,
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

  time: {
    color: GlobalStyles.COLORS.Gray500,
    fontFamily: GlobalStyles.FONTS.poppinsRegular,
    fontSize: GlobalStyles.FONTSIZE.fontText,
  },

  containerTop: {
    flexDirection: 'column',
  },

  pressable: {
    backgroundColor: GlobalStyles.COLORS.buttonColor,
    paddingHorizontal: GlobalStyles.PADDING.p20,
    paddingVertical: GlobalStyles.PADDING.p10,
    marginTop: GlobalStyles.MARGIN.m10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 166,
    borderBottomLeftRadius: GlobalStyles.PADDING.p20,
    borderBottomRightRadius: GlobalStyles.PADDING.p20,
  },

  textPressable: {
    color: GlobalStyles.COLORS.Gray800,
    fontFamily: GlobalStyles.FONTS.poppinsRegular,
    fontSize: GlobalStyles.FONTSIZE.fontText,
    fontWeight: GlobalStyles.FONTWEIGHT.w800,
  },

  companyContainer: {
    flexDirection: 'row',
    gap: 15,
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
