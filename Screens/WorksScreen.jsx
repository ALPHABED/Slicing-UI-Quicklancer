import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import GlobalStyles from '../Style/GlobalStyles';
import Stats from '../Components/Stats/Stats';
import {
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

import person from '../Assets/Img/user.jpg';
import Hire from '../Data/HireData';
import CardWork from '../Components/Cards/CardWork';

const Works = () => {
  return (
    <View style={styles.container}>
      <Stats />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.wrapperContainer}>
          <View style={styles.cardContainer}>
            <Image source={person} style={styles.img} />

            <View style={styles.column}>
              <View style={styles.chipsContainer}>
                <Text style={styles.userTitle}>Isabela Mia Harper</Text>
              </View>

              <View style={styles.column}>
                <View style={{width: '80%'}}>
                  <Text style={styles.chipsText} numberOfLines={2}>
                    hi, i am sehior content creator, need help? contact me and
                    we can talk it more see yah
                  </Text>
                </View>
                <View style={{width: '80%'}}>
                  <TouchableWithoutFeedback
                    style={{alignSelf: 'flex-end', marginTop: 15}}>
                    <Text>Edit</Text>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.containerJobs}>
          <Text style={[styles.titleCard, styles.titleTop]}>
            Look Who is Looking You
          </Text>
          {Hire.map(item => {
            const key = item.id;
            return (
              <View key={key}>
                <TouchableOpacity style={[styles.card, styles.shadowCard]}>
                  <CardWork {...item} />
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Works;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.COLORS.blue,
  },
  wrapperContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
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
    width: 90,
    height: 90,
    borderRadius: 50,
    resizeMode: 'center',
  },
  titleCard: {
    color: GlobalStyles.COLORS.Gray900,
    fontFamily: GlobalStyles.FONTS.poppinsBold,
    fontSize: GlobalStyles.FONTSIZE.fontSubTitle,
  },

  column: {
    flexDirection: 'column',
  },
  containerJobs: {
    marginTop: 40,
    height: 720,
    backgroundColor: GlobalStyles.COLORS.white,
    paddingHorizontal: GlobalStyles.MARGIN.m15,
    borderTopRightRadius: GlobalStyles.PADDING.p20,
    borderTopLeftRadius: GlobalStyles.PADDING.p20,
  },
  title: {
    fontFamily: GlobalStyles.FONTS.poppinsBold,
    fontSize: GlobalStyles.FONTSIZE.fontSubTitle,
    color: GlobalStyles.COLORS.Gray900,
  },
  titleTop: {
    marginTop: 40,
  },
  shadowCard: {
    shadowColor: GlobalStyles.COLORS.Gray500,
    shadowOpacity: 0.5,
    shadowRadius: 6.84,
    borderRadius: 20,
    elevation: 5,
  },
  card: {
    alignItems: 'center',
    marginTop: 20,
  },
  userTitle: {
    fontFamily: GlobalStyles.FONTS.poppinsMedium,
    fontSize: GlobalStyles.FONTSIZE.fontText,
    color: GlobalStyles.COLORS.Gray900,
    fontWeight: GlobalStyles.FONTWEIGHT.w700,
  },
});
