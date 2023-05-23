import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ArrowLeft from 'react-native-vector-icons/Fontisto';
const HeaderComponent = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.back}>
      <ArrowLeft name="arrow-left-l" size={30} color={'white'} />
    </TouchableOpacity>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {height: 40},
});
