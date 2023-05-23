import React from 'react';
import Feather from 'react-native-vector-icons/Ionicons'; //book-open
import GlobalStyles from '../Style/GlobalStyles';
const BookIcon = props => {
  return (
    <Feather
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

export default BookIcon;
