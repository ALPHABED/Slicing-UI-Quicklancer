import React from 'react';
import {View, StyleSheet, Text, FlatList, Pressable} from 'react-native';
import Stats from '../Components/Stats/Stats';
import HeaderComponent from '../Components/Header/HeaderComponent';
import GlobalStyles from '../Style/GlobalStyles';
import {Image} from 'react-native';

import wifi from '../Assets/Img/3d-icon-1.png';
import robot from '../Assets/Img/3d-icon-2.png';
import computer from '../Assets/Img/3d-icon-3.png';
import mic from '../Assets/Img/mic-icon.png';
import keyboard from '../Assets/Img/keyboard.png';
import check from '../Assets/Img/check.png';

const SpeakingPage = props => {
  return (
    <View style={styles.container}>
      <Stats />
      <View style={[styles.containerHeader, {zIndex: 100}]}>
        <HeaderComponent back={() => props.navigation.goBack()} />
      </View>
      <View style={{flex: 2, marginTop: -90, zIndex: 1}}>
        <View style={{position: 'absolute', top: 265}}>
          <Image source={wifi} />
        </View>

        <View
          style={{
            position: 'absolute',
            top: 90,
            zIndex: 100,
            left: 0,
            right: 0,
            alignItems: 'center',
          }}>
          <Image source={robot} />
        </View>

        <View style={{position: 'absolute', top: 60, left: 225, right: 0}}>
          <Image source={computer} />
        </View>
      </View>

      <View style={styles.containerTalk}>
        <View style={styles.contentTalk}>
          <View style={styles.contentText}>
            <Text style={styles.title}>Hi IsaIsabela, I'm Jobdy</Text>
            <Text style={styles.header}>Tell me about yourself</Text>
          </View>

          <View style={{flexDirection: 'row', gap: 60, marginTop: 15}}>
            <Pressable>
              <Image source={keyboard} />
            </Pressable>
            <Pressable>
              <Image source={mic} />
            </Pressable>
            <Pressable>
              <Image source={check} />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SpeakingPage;
const styles = StyleSheet.create({
  containerTalk: {
    alignItems: 'center',
    flex: 2,
    zIndex: 100,
    marginTop: 170,
    paddingVertical: GlobalStyles.PADDING.p15,
  },

  contentTalk: {
    backgroundColor: 'white',
    justifyContent: 'center',
    width: GlobalStyles.SIZE.width - 30,
    borderRadius: 30,
    height: GlobalStyles.SIZE.height / 2 - 110,

    alignItems: 'center',
    paddingVertical: GlobalStyles.PADDING.p15,
    flexDirection: 'column',
  },

  contentText: {
    alignItems: 'center',
    width: '80%',
  },

  containerHeader: {
    marginTop: GlobalStyles.MARGIN.m30,
    paddingHorizontal: GlobalStyles.PADDING.p15,
  },

  container: {
    flex: 1,
    backgroundColor: GlobalStyles.COLORS.blue,
  },

  header: {
    fontFamily: GlobalStyles.FONTS.poppinsBold,
    fontSize: GlobalStyles.FONTSIZE.fontTitle,
    color: GlobalStyles.COLORS.Gray900,
    textAlign: 'center',
  },

  title: {
    fontFamily: GlobalStyles.FONTS.poppinsBold,
    fontSize: GlobalStyles.FONTSIZE.fontSubTitle,
    color: GlobalStyles.COLORS.Gray500,
    textAlign: 'center',
    width: '60%',
  },
});
