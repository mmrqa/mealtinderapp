import React from 'react';
import { View, Text, ImageBackground, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const SignInScreen = ({navigation}) => {
  const handleLogin = () => {
    navigation.navigate('AppContent');
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic
  };

  return (
    <ImageBackground
    source={require('../../assets/img/essen.jpg')}
    style={styles.backgroundImage}>
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
        </View>
    </View>
  </ImageBackground>
  );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 50,
      },
      formContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        maxWidth: 400,
      },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007aff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#007aff',
    marginTop: 20,
  },
});

export default SignInScreen;
