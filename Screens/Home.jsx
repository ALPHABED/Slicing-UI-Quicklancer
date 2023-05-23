import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Flatlist, ScrollView} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import Stats from '../Components/Stats/Stats';
import GlobalStyles from '../Style/GlobalStyles';
import Chips from '../Components/ChipsButtons/Chips';
import Category from '../Data/CategoryData';
import Card from '../Components/Cards/Card';
import JobData from '../Data/JobData';

const Home = () => {
  return (
    <View style={styles.container}>
      <Stats />
      <ScrollView
        style={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.searchContainer}>
            <TextInput
              placeholderTextColor={GlobalStyles.COLORS.Gray500}
              placeholder="Cari"
              editable={true}
              style={{
                flex: 1,
                paddingLeft: 10,
                color: GlobalStyles.COLORS.Gray900,
                fontSize: 18,
              }}
            />
            <Feather
              name="search"
              size={24}
              color={GlobalStyles.COLORS.Gray500}
            />
          </View>

          <View>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={Category}
              contentContainerStyle={{paddingHorizontal: 20}}
              renderItem={({item}) => (
                <TouchableOpacity style={styles.chips}>
                  <Chips {...item} />
                </TouchableOpacity>
              )}
              keyExtractor={item => item.id}
            />
          </View>

          <View style={styles.containerFloating}>
            <View style={[styles.floatingBox, styles.shadowFload]}>
              <Text style={styles.title}>Fill in your resume</Text>
              <Text style={styles.paragraph}>
                Get more attention and better chance of finding a great job
              </Text>
            </View>
          </View>

          <View style={styles.containerJobs}>
            <Text style={[styles.title, styles.titleCard]}>
              Recommended for you
            </Text>
            <View style={{alignItems: 'center'}}>
              {JobData.map(item => {
                const key = item.id;
                return (
                  <View key={key}>
                    <TouchableOpacity style={[styles.card, styles.shadowCard]}>
                      <Card {...item} />
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.COLORS.blue,
  },

  searchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: GlobalStyles.COLORS.whiteCard,
    marginHorizontal: GlobalStyles.MARGIN.m25,
    paddingHorizontal: GlobalStyles.PADDING.p15,
    marginTop: GlobalStyles.MARGIN.m85,
    borderRadius: GlobalStyles.PADDING.p10,
  },

  chips: {
    marginTop: GlobalStyles.MARGIN.m25,
  },

  containerFloating: {
    flex: 1,
    alignItems: 'center',
    position: 'absolute',
    top: 215,
    zIndex: 100,
    left: 0,
    right: 0,
  },

  floatingBox: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: GlobalStyles.COLORS.whiteCard,
    width: 320,
    height: 124,
    paddingHorizontal: GlobalStyles.PADDING.p20,
    borderRadius: GlobalStyles.PADDING.p10,
  },

  shadowFload: {
    shadowColor: GlobalStyles.COLORS.Gray500,
    shadowOpacity: 1,
    shadowRadius: 6.84,
    shadowOffset: {width: 2, height: -6},
    borderRadius: 10,
    elevation: 5,
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

  containerJobs: {
    marginTop: 100,
    height: 980,
    backgroundColor: GlobalStyles.COLORS.white,
    paddingHorizontal: GlobalStyles.MARGIN.m15,
    borderTopRightRadius: GlobalStyles.PADDING.p20,
    borderTopLeftRadius: GlobalStyles.PADDING.p20,
  },

  titleCard: {
    marginTop: 80,
  },

  card: {
    marginTop: 20,
  },

  contentContainer: {
    paddingBottom: 190,
  },

  shadowCard: {
    shadowColor: GlobalStyles.COLORS.Gray500,
    shadowOpacity: 0.5,
    shadowRadius: 6.84,
    borderRadius: 20,
    elevation: 5,
  },
});
