import HomeScreen from './src/screens/HomeScreen';
import ChooseMealScreen from './src/screens/ChooseMealScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from './src/screens/ProfileScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { DefaultTheme, Provider } from 'react-native-paper';

import { Amplify } from 'aws-amplify'
import awsconfig from './aws-exports'

Amplify.configure(awsconfig)

const Tab = createMaterialBottomTabNavigator();

import ColorStyleSheet from './components/ColorStyleSheet';

function App() {
  const activeColor = ColorStyleSheet.primaryBackground.backgroundColor;

  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName='Go'
          activeColor={activeColor}
          inactiveColor='white'
          barStyle={{
            backgroundColor: 'black',

          }}

          labeled={false}

        >
          <Tab.Screen name="+" component={HomeScreen} options={{
            tabBarColor: 'black',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="plus" color={color} size={26} />
            ),
          }} />
          <Tab.Screen name="Go" component={ChooseMealScreen} options={{
            tabBarColor: 'black',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="food" color={color} size={26} />
            ),
          }} />
          <Tab.Screen name="Profile" component={ProfileScreen} options={{
            tabBarColor: 'black',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }} />

        </Tab.Navigator>
      </NavigationContainer>
    </Provider>

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