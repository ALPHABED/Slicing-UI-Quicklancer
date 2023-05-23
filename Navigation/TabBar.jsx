import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Arrow from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Screens/Home';
import Message from '../Screens/MessageScreen';
import Works from '../Screens/WorksScreen';

import GlobalStyles from '../Style/GlobalStyles';
import Homeicon from '../Icons/HIcon';
import Loveicon from '../Icons/UIcon';
import BookIcon from '../Icons/BIcon';

const Tab = createBottomTabNavigator();

const Language = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,

        tabBarStyle: {
          backgroundColor: GlobalStyles.COLORS.blue,
          height: 60,
          borderTopWidth: 0,
          borderTopLeftRadius: GlobalStyles.MARGIN.m15,
          borderTopRightRadius: GlobalStyles.MARGIN.m15,
          position: 'absolute',
          overflow: 'hidden',
          elevation: 20,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => <Homeicon focused={focused} name="home" />,
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={Message}
        options={{
          tabBarIcon: ({focused}) => (
            <BookIcon focused={focused} name="mail-outline" />
          ),
          // tabBarBadge={}
        }}
      />
      <Tab.Screen
        name="UI"
        component={Works}
        options={{
          tabBarIcon: ({focused}) => (
            <Loveicon focused={focused} name="work-outline" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Language;
