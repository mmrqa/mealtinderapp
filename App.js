import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DefaultTheme, Provider } from 'react-native-paper';
import React, { useState } from 'react';

import { Amplify } from 'aws-amplify'
import awsconfig from './aws-exports'

Amplify.configure(awsconfig)

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

import ColorStyleSheet from './components/ColorStyleSheet';
import WelcomeScreen from './src/screens/WelcomeScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import AppContentScreen from './src/screens/AppContentScreen';

function App() {
  const activeColor = ColorStyleSheet.primaryBackground.backgroundColor;

  return (
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Welcome" component={WelcomeScreen}/>
              <Stack.Screen name="SignIn" component={SignInScreen}/>
              <Stack.Screen name="SignUp" component={SignUpScreen}/>
              <Stack.Screen name="AppContent" component={AppContentScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
          </NavigationContainer>
  );
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondaryContainer: 'transparent', // Use transparent to disable the little highlighting oval
  },
};


export default App;