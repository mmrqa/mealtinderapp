import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import ChooseMealScreen from './src/screens/ChooseMealScreen';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import ProfileScreen from './src/screens/ProfileScreen';

const Tab = createMaterialBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name="+" component={HomeScreen}/>
        <Tab.Screen name="Go" component={ChooseMealScreen}/>
        <Tab.Screen name="Profile" component={ProfileScreen}/>
      </Tab.Navigator>
      </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;