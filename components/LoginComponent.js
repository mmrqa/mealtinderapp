import { View, Text, Modal, Pressable, StyleSheet, TextInput } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from "react";

import SettingsButton from "./SettingsButton";

export default function LoginComponent({ isVisible, children, onClose }) {
    const [loggedIn, setLoggedIn] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function onPressLogin() {
        setLoggedIn(true)
    }

    function onPressLogout() {
        setLoggedIn(false)
    }

    function onPressSignUp() {
        alert("Sign Up")
    }

    function onPressSeeUserInformation() {
        alert("User Information")
    }

    function onPressResetPassword() {
        alert("Reset Password")
    }

    function onPressUpdateEmail() {
        alert("Update Email")
    }

    function onPressDeleteAccount() {
        alert("Delete Account")
    }

    return (
        <Modal
            visible={isVisible}
            transparent={true}
            animationType="fade"
        >
            <View style={styles.modalContent}>
                <View style={styles.titleContainer}>
                    <Pressable>
                        <MaterialCommunityIcons name="close" color={styles.titleContainer.backgroundColor} size={30} />
                    </Pressable>
                    <Text style={styles.title}>Account Settings</Text>
                    <Pressable onPress={onClose}>
                        <MaterialCommunityIcons name="close" color={styles.iconStyle.color} size={styles.iconStyle.size} />
                    </Pressable>
                </View>

                {loggedIn ? (
                    <View>
                        <SettingsButton
                            onPressFunction={onPressLogout}
                            iconName="logout"
                            title="Logout"
                            styleProps="top"
                        />
                        <SettingsButton
                            onPressFunction={onPressSeeUserInformation}
                            iconName="account"
                            title={username}
                            styleProps="center"
                        />
                        <SettingsButton
                            onPressFunction={onPressResetPassword}
                            iconName="lock-reset"
                            title="Reset Password"
                            styleProps="center"
                        />
                        <SettingsButton
                            onPressFunction={onPressUpdateEmail}
                            iconName="email"
                            title="Update Email"
                            styleProps="center"
                        />
                        <SettingsButton
                            onPressFunction={onPressDeleteAccount}
                            iconName="account-remove"
                            title="Delete Account"
                            styleProps="bottom"
                        />
                    </View>

                ) : (
                    <View>
                        <TextInput
                            style={{ height: 40, borderColor: 'black', borderWidth: 1, alignContent: 'center', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', textAlign: 'center', width: '50%', alignSelf: 'center' }}
                            onChangeText={text => setUsername(text)}
                            value={username}
                        />

                        <TextInput
                            style={{ height: 40, borderColor: 'black', borderWidth: 1, alignContent: 'center', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', textAlign: 'center', width: '50%', alignSelf: 'center' }}
                            onChangeText={text => setPassword(text)}
                            value={password}
                        />

                        <SettingsButton
                            onPressFunction={onPressLogin}
                            iconName="login"
                            title="Login"
                            styleProps="top"
                        />

                        <SettingsButton
                            onPressFunction={onPressSignUp}
                            iconName="account"
                            title="Create Account"
                            styleProps="bottom"
                        />
                    </View>
                )
                }
            </View>
        </Modal >
    );
}

const styles = StyleSheet.create({
    modalContent: {
        flex: 1,
        height: '80%',
        width: '100%',
        backgroundColor: 'grey',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: 'absolute',
        bottom: 114,
    },
    titleContainer: {
        height: '10%',
        backgroundColor: 'grey',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        color: '#fff',
        fontSize: 20,
        alignContent: 'center',
        justifyContent: 'center',
    },
    iconStyle: {
        color: 'white',
        size: 35,
    },
});
