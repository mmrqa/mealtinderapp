import { View, Text, StyleSheet, Pressable } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ColorStyleSheet from "../../components/ColorStyleSheet";
import { useState } from "react";

import LoginScreen from "./LoginScreen";

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
            <Pressable onPress={() => setShowLoginScreen(true)}>
                <View style={styles.boxContainer}>
                    <View style={styles.topBox}>
                        <MaterialCommunityIcons
                            name="account"
                            color={styles.iconStyle.color}
                            size={styles.iconStyle.size}
                        />
                        <Text style={styles.boxText}>Profile</Text>
                        <MaterialCommunityIcons
                            name="chevron-right"
                            color={styles.iconStyle.color}
                            size={styles.iconStyle.size}
                        />
                    </View>
                </View>
            </Pressable>

            <Pressable onPress={onPressSubscribtion}>
                <View style={styles.boxContainer}>
                    <View style={styles.bottomBox}>
                        <MaterialCommunityIcons name="credit-card"
                            color={styles.iconStyle.color}
                            size={styles.iconStyle.size}
                        />
                        <Text style={styles.boxText}>Subscribtion</Text>
                        <MaterialCommunityIcons
                            name="chevron-right"
                            color={styles.iconStyle.color}
                            size={styles.iconStyle.size}
                        />
                    </View>
                </View>
            </Pressable>

            <Text style={styles.headerText} >Help & Informations</Text>
            <Pressable onPress={onPressHelp}>
                <View style={styles.boxContainer}>
                    <View style={styles.topBox}>
                        <MaterialCommunityIcons
                            name="help-circle"
                            color={styles.iconStyle.color}
                            size={styles.iconStyle.size}
                        />
                        <Text style={styles.boxText}>Help</Text>
                        <MaterialCommunityIcons
                            name="chevron-right"
                            color={styles.iconStyle.color}
                            size={styles.iconStyle.size}
                        />
                    </View>
                </View>
            </Pressable>

            <Pressable onPress={onPressAbout}>
                <View style={styles.boxContainer}>
                    <View style={styles.bottomBox}>
                        <MaterialCommunityIcons
                            name="information"
                            color={styles.iconStyle.color}
                            size={styles.iconStyle.size}
                        />
                        <Text style={styles.boxText}>About</Text>
                        <MaterialCommunityIcons
                            name="chevron-right"
                            color={styles.iconStyle.color}
                            size={styles.iconStyle.size}
                        />
                    </View>
                </View>
            </Pressable>

            <Text style={styles.headerText} >Settings & Preferences</Text>
            <Pressable onPress={onPressSettings}>
                <View style={styles.boxContainer}>
                    <View style={styles.singleBox}>
                        <MaterialCommunityIcons
                            name="cog"
                            color={styles.iconStyle.color}
                            size={styles.iconStyle.size}
                        />
                        <Text style={styles.boxText}>Settings</Text>
                        <MaterialCommunityIcons
                            name="chevron-right"
                            color={styles.iconStyle.color}
                            size={styles.iconStyle.size}
                        />
                    </View>
                </View>
            </Pressable>
            <View style={styles.mainViewContainer}>
                <LoginScreen isVisible={showLoginScreen} onClose={() => setShowLoginScreen(false)}>
                </LoginScreen>
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
    boxContainer: {
        flexDirection: "row",
        paddingHorizontal: 5,
    },
    topBox: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5,
        backgroundColor: "black",
        alignContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderColor: "white",
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 20,
    },
    box: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5,
        backgroundColor: "black",
        alignContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: "white",
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 20,
    },
    bottomBox: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5,
        backgroundColor: "black",
        alignContent: "center",
        alignItems: "center",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderColor: "white",
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 20,
    },
    singleBox: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5,
        backgroundColor: "black",
        alignContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderColor: "white",
        borderWidth: 1,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 20,
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
    boxText: {
        color: "white",
        fontSize: 20,
    },
    iconStyle: {
        color: "white",
        size: 35,
    },
})