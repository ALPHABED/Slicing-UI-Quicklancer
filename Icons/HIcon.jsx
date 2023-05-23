import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons'; //home\
import GlobalStyles from '../Style/GlobalStyles';

const Homeicon = props => {
  return (
    <Octicons
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

export default Homeicon;
