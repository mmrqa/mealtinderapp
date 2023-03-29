import { View, Text, StyleSheet, Pressable } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ColorStyleSheet from "../../components/ColorStyleSheet";
import { useState } from "react";

import LoginComponent from "../../components/LoginComponent";
import SettingsButton from "../../components/SettingsButton";

export default function ProfileScreen() {
    const [showLoginScreen, setShowLoginScreen] = useState(false);

    function onPressSettings() {
        alert("Settings")
    }

    function onPressHelp() {
        alert("Help")
    }

    function onPressAbout() {
        alert("About")
    }

    function onPressSubscribtion() {
        alert("Subscribtion")
    }



    return (
        <View style={styles.mainViewContainer}>
            <Text style={styles.headerText} >Account Settings</Text>
            <SettingsButton
                onPressFunction={() => setShowLoginScreen(true)}
                iconName="account"
                title="Profile"
                styleProps="top"
            />
            <SettingsButton
                onPressFunction={onPressSubscribtion}
                iconName="credit-card"
                title="Subscribtion"
                styleProps="bottom"
            />

            <Text style={styles.headerText} >Help & Informations</Text>
            <SettingsButton
                onPressFunction={onPressHelp}
                iconName="help-circle"
                title="Help"
                styleProps="top"
            />
            <SettingsButton
                onPressFunction={onPressAbout}
                iconName="information"
                title="About"
                styleProps="bottom"
            />

            <Text style={styles.headerText} >Settings & Preferences</Text>
            <SettingsButton
                onPressFunction={onPressSettings}
                iconName="cog"
                title="Settings"
                styleProps="single"
            />

            <View style={styles.mainViewContainer}>
                <LoginComponent isVisible={showLoginScreen} onClose={() => setShowLoginScreen(false)}>
                </LoginComponent>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainViewContainer: {
        flex: 1,
        backgroundColor: ColorStyleSheet.primaryBackground.backgroundColor,
        paddingTop: 100,
    },
    headerText: {
        color: "white",
        fontSize: 20,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        paddingTop: 20,
        paddingBottom: 5,
    },
})