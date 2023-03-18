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

export default App;