import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// Tabbar
import TabBar from './Navigation/TabBar';

// page
import TalkingPage from './Pages/TalkingPage';
import SpeakingPage from './Pages/SpeakingPage';
import Splash from './SplashScreen/Splash';
import Login from './Login/Login';

const forFade = ({current}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const Stack = createStackNavigator();

const Entries = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyleInterpolator: forFade,
          }}>
          <Stack.Screen name="splash" component={Splash} />
          <Stack.Screen name="Login" component={Login} />

          <Stack.Screen name="tabbar" component={TabBar} />
          <Stack.Screen name="Prepare" component={TalkingPage} />
          <Stack.Screen name="Speak" component={SpeakingPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Entries;
