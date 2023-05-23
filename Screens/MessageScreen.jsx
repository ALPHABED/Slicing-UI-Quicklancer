import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Stats from '../Components/Stats/Stats';
import GlobalStyles from '../Style/GlobalStyles';
import InterviewCard from '../Components/Cards/InterviewCard';
import ProcessCard from '../Components/Cards/ProccessCard';

import ProcessData from '../Data/ProcessData';
import IncompleteCard from '../Components/Cards/IncompleteCard';
import JobData from '../Data/JobData';
import CompanyCard from '../Components/Cards/CompanyCard';

const Message = () => {
  return (
    <View style={styles.container}>
      <Stats />

      <ScrollView style={styles.containerJobs}>
        <View style={styles.containerHeader}>
          <Text style={styles.header}>Aircnc</Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <View style={{gap: 20}}>
            <InterviewCard />

            <View style={{marginTop: 20}}>
              {JobData.map((item, index) => {
                const key = item.id;
                return (
                  <View key={key}>
                    {index === 0 ? (
                      <View style={styles.shadowCard}>
                        <CompanyCard {...item} />
                      </View>
                    ) : (
                      ''
                    )}
                  </View>
                );
              })}
            </View>

            <View style={[styles.cardContainer, styles.shadowCard]}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={styles.title}>Process</Text>
                <Text style={styles.subTitleCard}>Details</Text>
              </View>
              <View>
                {ProcessData.map((item, index) => {
                  const key = item.id;
                  return (
                    <View key={key} style={{marginBottom: 15}}>
                      {index >= 2 ? (
                        <IncompleteCard {...item} />
                      ) : (
                        <ProcessCard {...item} />
                      )}
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        </View>
        <View style={{marginBottom: '30%'}}></View>
      </ScrollView>
    </View>
  );
};

export default Message;
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

  cardContainer: {
    gap: 15,
    width: GlobalStyles.SIZE.width - 30,
    borderRadius: GlobalStyles.PADDING.p20,
    backgroundColor: GlobalStyles.COLORS.white,
    paddingHorizontal: GlobalStyles.PADDING.p20,
    paddingVertical: GlobalStyles.PADDING.p20,
  },

  containerHeader: {
    marginTop: GlobalStyles.MARGIN.m40,
  },

  subTitleCard: {
    color: GlobalStyles.COLORS.Gray500,
    fontFamily: GlobalStyles.FONTS.poppinsMedium,
    fontSize: GlobalStyles.FONTSIZE.fontSubText,
  },

  header: {
    fontFamily: GlobalStyles.FONTS.poppinsBold,
    fontSize: GlobalStyles.FONTSIZE.fontHeading,
    color: GlobalStyles.COLORS.Gray900,
  },
  title: {
    fontFamily: GlobalStyles.FONTS.poppinsBold,
    fontSize: GlobalStyles.FONTSIZE.fontSubTitle,
    color: GlobalStyles.COLORS.Gray900,
  },

  containerJobs: {
    height: 980,

    paddingHorizontal: GlobalStyles.MARGIN.m15,
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
    elevation: 6,
  },
});
