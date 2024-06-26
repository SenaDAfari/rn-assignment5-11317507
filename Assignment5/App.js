import * as React from 'react';
import { NavigationContainer, DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider, DefaultTheme as PaperDefaultTheme, DarkTheme as PaperDarkTheme } from 'react-native-paper';
import merge from 'deepmerge';
import { useState } from 'react';
import { Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from '../Assignment5/Screens/Homepage';
import MyCardsScreen from '../Assignment5/Screens/MyCardsScreen';
import StatisticsScreen from '../Assignment5/Screens/StatisticsScreen';
import SettingsScreen from '../Assignment5/Screens/SettingsPage';

const Tab = createBottomTabNavigator();

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconSource;

              if (route.name === 'Home') {
                iconSource = require('../Assignment5/assets/home.png');
              } else if (route.name === 'My Cards') {
                iconSource = require('../Assignment5/assets/myCards.png');
              } else if (route.name === 'Statistics') {
                iconSource = require('../Assignment5/assets/statictics.png');
              } else if (route.name === 'Settings') {
                iconSource = require('../Assignment5/assets/settings.png');
              }

              return <Image source={iconSource} style={{ width: size, height: size, tintColor: color }} />;
            },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home">
            {(props) => <HomeScreen {...props} toggleTheme={toggleTheme} />}
          </Tab.Screen>
          <Tab.Screen name="My Cards" component={MyCardsScreen} />
          <Tab.Screen name="Statistics" component={StatisticsScreen} />
          <Tab.Screen name="Settings">
            {(props) => <SettingsScreen {...props} toggleTheme={toggleTheme} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}