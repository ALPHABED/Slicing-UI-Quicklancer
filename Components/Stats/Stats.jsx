import React from 'react';
import {View, StatusBar} from 'react-native';
import GlobalStyles from '../../Style/GlobalStyles';

const Stats = () => {
  return (
    <View>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={GlobalStyles.COLORS.Gray900}
      />
    </View>
  );
};

export default Stats;
