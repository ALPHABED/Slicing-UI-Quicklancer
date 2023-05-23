import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import GlobalStyles from '../../Style/GlobalStyles';
import iconInfo from '../../Assets/Img/info-icon.png';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CompanyCard = ({title, company, image}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.content}>
        <Image source={image} style={styles.img} />
        <View>
          <Text style={styles.titleCard}>{title}</Text>
          <Text style={styles.textCard}>{company}</Text>
        </View>
      </View>

      <TouchableOpacity>
        <Image source={iconInfo} />
      </TouchableOpacity>
    </View>
  );
};

export default CompanyCard;

const styles = StyleSheet.create({
  cardContainer: {
    gap: 15,
    width: GlobalStyles.SIZE.width - 30,
    borderRadius: GlobalStyles.PADDING.p20,
    borderWidth: 1,
    borderColor: GlobalStyles.COLORS.Gray800,
    backgroundColor: GlobalStyles.COLORS.blue,
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

  content: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    gap: 15,
  },
});
