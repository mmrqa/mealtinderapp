import { React, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import LoginComponent from '../../components/LoginComponent';

const WelcomeScreen = ({ navigation }) => {
    const [showLoginScreen, setShowLoginScreen] = useState(false);

    const handleSignIn = () => {
        navigation.navigate('SignIn');
    };
    const handleSignUp = () => {
        navigation.navigate('SignUp');
    };

    return (
        <View style={styles.containerBackground}>
            <Svg height="100%" width="100%" viewBox="0 0 1440 320" style={styles.svg}>
                <Path
                    fill="#ff7f50"
                    d="M0,256L60,245.3C120,235,240,213,360,192C480,171,600,149,720,128C840,107,960,85,1080,96C1200,107,1320,149,1380,170.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                />
                <Path
                    fill="#ffd700"
                    d="M0,192L60,202.7C120,213,240,235,360,229.3C480,224,600,192,720,165.3C840,139,960,117,1080,133.3C1200,149,1320,203,1380,229.3L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                />
            </Svg>
            <View style={styles.container}>
            <Text style={styles.title}>Welcome to Mealtinder</Text>
            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerBackground: {
        flex: 1,
        backgroundColor: '#fff',
      },
      svg: {
        position: 'absolute',
        bottom: 0,
      },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007aff',
        padding: 10,
        margin: 5,
        width: 200,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default WelcomeScreen;
