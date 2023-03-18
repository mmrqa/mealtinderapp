import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Choosemeals from './src/screens/Choosemeals';

export default function App() {
  return (
    <View style={styles.container}>
      <Choosemeals></Choosemeals>
    </View>
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
