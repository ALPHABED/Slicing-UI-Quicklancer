import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import GlobalStyles from '../Style/GlobalStyles';
import logo from '../Assets/Img/icon-logo.png';
import Stats from '../Components/Stats/Stats';
import Feather from 'react-native-vector-icons/Feather';

import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View style={styles.container}>
      <Stats />

      <View style={styles.headingContainer}>
        <View style={styles.heading}>
          <Image source={logo} style={styles.img} />
          <Text style={styles.title}>Quicklancer</Text>
        </View>
        <Text style={styles.text}>Find Work fits to you</Text>
      </View>

      <View style={styles.containerLogin}>
        <View style={styles.content}>
          <View style={styles.inputContainer}>
            <Text style={styles.labelInput}>Your email address</Text>

            <View style={styles.textInput}>
              <TextInput
                placeholder="yourname@gmail.com"
                placeholderTextColor={GlobalStyles.COLORS.Gray500}
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.labelInput}>Your password </Text>

            <View style={styles.textInput}>
              <TextInput
                placeholder=".*_z'`\/x"
                placeholderTextColor={GlobalStyles.COLORS.Gray500}
                secureTextEntry={secureTextEntry}
              />
              <Feather
                name={secureTextEntry ? 'eye-off' : 'eye'}
                size={20}
                onPress={toggleSecureTextEntry}
              />
            </View>
            <View style={{alignItems: 'flex-end', marginTop: 10}}>
              <Text>Forget password</Text>
            </View>
          </View>
        </View>

        <View style={styles.buttonArea}>
          <Button
            mode="contained"
            style={styles.button}
            onPress={() => navigation.replace('tabbar')}>
            Continue
          </Button>
          <View style={styles.center}>
            <Text>or</Text>
          </View>
          <View style={styles.buttonGap}>
            <Button
              icon="google"
              mode="outlined"
              style={styles.buttonAlt}
              theme={{
                colors: {
                  primary: GlobalStyles.COLORS.Gray900,
                },
              }}>
              Continue with Google
            </Button>
            <Button
              icon="apple"
              mode="outlined"
              style={styles.buttonAlt}
              theme={{
                colors: {
                  primary: GlobalStyles.COLORS.Gray900,
                },
              }}>
              Continue with Apple
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: GlobalStyles.COLORS.blue,
  },
  imgIcon: {
    width: 24,
    height: 24,
  },

  center: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  img: {
    width: 50,
    height: 50,
  },

  headingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 50,
  },

  heading: {
    flexDirection: 'row',
    gap: GlobalStyles.PADDING.p10,
    alignItems: 'center',
  },

  title: {
    fontSize: GlobalStyles.FONTSIZE.fontTitle,
    fontFamily: GlobalStyles.FONTS.poppinsSemiBold,
    color: GlobalStyles.COLORS.Gray900,
  },

  text: {
    paddingTop: GlobalStyles.MARGIN.m10,
    fontSize: GlobalStyles.FONTSIZE.fontText,
    fontFamily: GlobalStyles.FONTS.poppinsMedium,
    color: GlobalStyles.COLORS.Gray800,
  },

  inputContainer: {
    marginTop: 25,
  },

  containerLogin: {
    backgroundColor: GlobalStyles.COLORS.whiteCard,
    flex: 1,
    borderTopRightRadius: GlobalStyles.PADDING.p15,
    borderTopLeftRadius: GlobalStyles.PADDING.p15,
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  labelInput: {
    fontSize: GlobalStyles.FONTSIZE.fontSubText,
    color: GlobalStyles.COLORS.Gray800,
    fontFamily: GlobalStyles.FONTS.poppinsMedium,
  },

  labelButton: {
    fontSize: 16,
    color: GlobalStyles.COLORS.Gray800,
    fontFamily: GlobalStyles.FONTS.poppinsMedium,
    alignItems: 'center',
  },

  content: {
    marginTop: 10,
  },

  textInput: {
    width: GlobalStyles.SIZE.width - 45,
    borderRadius: 50,
    borderWidth: 1,
    marginTop: 5,
    borderColor: GlobalStyles.COLORS.borderColor,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
  },

  buttonGap: {
    flexDirection: 'column',
    gap: 20,
    marginTop: 20,
  },

  buttonArea: {
    marginTop: 20,
  },
  button: {
    backgroundColor: GlobalStyles.COLORS.amber,
    overflow: 'visible',
    justifyContent: 'center',
    borderRadius: 50,
    height: 50,
  },

  buttonAlt: {
    width: GlobalStyles.SIZE.width - 45,
    height: 50,
    paddingHorizontal: GlobalStyles.PADDING.p15,
    justifyContent: 'center',
    borderRadius: 50,
    overflow: 'visible',
  },
});
