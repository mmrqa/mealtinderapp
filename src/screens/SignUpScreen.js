import React, { useState } from 'react';
import { View, Text, ImageBackground, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import zxcvbn from 'zxcvbn'; // Import zxcvbn library for password strength analysis

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');

  const handleSignUp = () => {
    // Check if passwords match
    if (password1 !== password2) {
      alert('Passwords do not match');
      return;
    }
    // Handle sign-up logic
  };

  const handlePasswordChange = (password) => {
    setPassword1(password);
    setPasswordStrength(zxcvbn(password).score); // Set password strength based on zxcvbn analysis
  };

  return (
    <ImageBackground
    source={require('../../assets/img/essen.jpg')}
    style={styles.backgroundImage}>
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up!</Text>
      <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        autoCapitalize="none"
        value={password1}
        onChangeText={handlePasswordChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={true}
        autoCapitalize="none"
        value={password2}
        onChangeText={(text) => setPassword2(text)}
      />
      {passwordStrength > 0 && (
        <View style={styles.passwordStrength}>
          <Text>Password Strength:</Text>
          <Text style={{ color: passwordStrength < 3 ? 'red' : 'green' }}>
            {passwordStrength < 3 ? 'Weak' : 'Strong'}
          </Text>
        </View>
      )}
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Finish</Text>
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
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  passwordStrength: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
});

export default SignUpScreen;
