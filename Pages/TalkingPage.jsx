import {View, StyleSheet, Text, FlatList} from 'react-native';
import GlobalStyles from '../Style/GlobalStyles';
import HeaderComponent from '../Components/Header/HeaderComponent';
import DataAI from '../Data/DataAI';
import TalkCard from '../Components/Cards/TalkCard';
import Stats from '../Components/Stats/Stats';

const TalkingPage = props => {
  return (
    <View style={styles.container}>
      <Stats />
      <View style={styles.containerHeader}>
        <HeaderComponent back={() => props.navigation.goBack()} />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.smallBoxes}>
          <Text style={styles.textBox}>HI, Isabela</Text>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.boxes}>
          <Text style={styles.textBox}>
            We have tasks to preapre your interview. Let's take a look
          </Text>
        </View>
        <View style={styles.triangle}></View>
      </View>

      <View style={{marginTop: GlobalStyles.MARGIN.m40}}>
        <FlatList
          data={DataAI}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={i => i.id}
          ItemSeparatorComponent={() => <View style={{marginHorizontal: 10}} />}
          contentContainerStyle={{paddingHorizontal: 15}}
          snapToInterval={100}
          bounces={true}
          renderItem={({item}) => (
            <View>
              <TalkCard {...item} />
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default TalkingPage;

const styles = StyleSheet.create({
  containerHeader: {
    marginTop: GlobalStyles.MARGIN.m30,
    paddingHorizontal: GlobalStyles.PADDING.p15,
  },
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.COLORS.blue,
  },
  contentContainer: {
    paddingHorizontal: GlobalStyles.PADDING.p15,
    marginTop: GlobalStyles.MARGIN.m20,
  },
  boxes: {
    backgroundColor: GlobalStyles.COLORS.white,
    paddingHorizontal: GlobalStyles.PADDING.p20,
    paddingVertical: GlobalStyles.PADDING.p10,
    borderRadius: GlobalStyles.PADDING.p15,
  },
  smallBoxes: {
    backgroundColor: GlobalStyles.COLORS.white,
    paddingHorizontal: GlobalStyles.PADDING.p20,
    paddingTop: GlobalStyles.PADDING.p10,
    paddingBottom: GlobalStyles.PADDING.p5,
    borderRadius: GlobalStyles.PADDING.p15,
    width: GlobalStyles.SIZE.width / 2 - 65,
  },
  textBox: {
    fontSize: GlobalStyles.FONTSIZE.fontText,
    color: GlobalStyles.COLORS.Gray500,
    fontWeight: GlobalStyles.FONTWEIGHT.w600,
    fontFamily: GlobalStyles.FONTS.poppinsMedium,
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: GlobalStyles.PADDING.p15,
    borderRightWidth: GlobalStyles.PADDING.p15,
    borderBottomWidth: GlobalStyles.PADDING.p20,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: GlobalStyles.COLORS.white,
    transform: [{rotate: '180deg'}],
    left: 40,
  },
});
