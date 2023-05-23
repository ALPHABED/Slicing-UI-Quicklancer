import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import topLeft from '../Assets/Img/top-left.png';
import leftBottom from '../Assets/Img/left-bottom.png';
import bottomRight from '../Assets/Img/right-bottom.png';
import logo from '../Assets/Img/icon-logo.png';
import Stats from '../Components/Stats/Stats';
import GlobalStyles from '../Style/GlobalStyles';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Stats />

      <View>
        <Image source={topLeft} />
      </View>

      <View style={styles.leftBottom}>
        <Image source={leftBottom} />
      </View>

      <View style={styles.rightBottom}>
        <Image source={bottomRight} />
      </View>
      <View style={styles.logo}>
        <Image source={logo} resizeMode="contain" />
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.COLORS.blue,
  },

  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },

  leftBottom: {
    position: 'absolute',
    top: '50%',
  },

  rightBottom: {
    position: 'absolute',
    top: '80%',
    right: 0,
  },
});
