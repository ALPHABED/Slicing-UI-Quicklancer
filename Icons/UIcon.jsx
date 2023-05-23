import React from 'react';
import AntDesign from 'react-native-vector-icons/MaterialIcons';
import GlobalStyles from '../Style/GlobalStyles';

const Loveicon = props => {
  return (
    <AntDesign
      name={props.name}
      size={30}
      style={{marginBottom: 8}}
      color={
        props.focused
          ? GlobalStyles.COLORS.active
          : GlobalStyles.COLORS.inactive
      }
    />
  );
};

export default Loveicon;
