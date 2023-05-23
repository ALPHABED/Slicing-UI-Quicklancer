import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import GlobalStyles from '../../Style/GlobalStyles';
import {useNavigation} from '@react-navigation/native';

const TalkCard = ({image, title, desc, to}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.containerCard}>
      <Image source={image} resizeMode="contain" />
      <View style={{marginTop: 20}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.desc, styles.paragraph]}>{desc}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(to)}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TalkCard;

const styles = StyleSheet.create({
  containerCard: {
    backgroundColor: GlobalStyles.COLORS.white,
    flexDirection: 'column',
    width: GlobalStyles.SIZE.height / 2 - 130,
    height: GlobalStyles.SIZE.height / 2,
    borderRadius: GlobalStyles.PADDING.p30,
    alignItems: 'center',
    paddingHorizontal: GlobalStyles.PADDING.p10,
    paddingBottom: GlobalStyles.PADDING.p10,
  },

  button: {
    backgroundColor: GlobalStyles.COLORS.blue,
    width: GlobalStyles.SIZE.height / 4 - 60,
    alignSelf: 'center',
    borderRadius: GlobalStyles.PADDING.p15,
    marginTop: GlobalStyles.MARGIN.m20,
  },

  buttonText: {
    alignSelf: 'center',
    padding: GlobalStyles.PADDING.p10,
    fontSize: GlobalStyles.FONTSIZE.fontText,
    color: GlobalStyles.COLORS.whiteCard,
    fontWeight: GlobalStyles.FONTWEIGHT.w800,
    fontFamily: GlobalStyles.FONTS.poppinsSemiBold,
  },

  desc: {
    marginTop: GlobalStyles.MARGIN.m10,
  },

  title: {
    fontFamily: GlobalStyles.FONTS.poppinsBold,
    fontSize: GlobalStyles.FONTSIZE.fontSubTitle,
    color: GlobalStyles.COLORS.Gray900,
  },

  paragraph: {
    fontFamily: GlobalStyles.FONTS.poppinsSemiBold,
    fontSize: GlobalStyles.FONTSIZE.fontText,
    color: GlobalStyles.COLORS.Gray500,
  },
});
