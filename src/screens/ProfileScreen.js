import { View, Text, StyleSheet, Pressable } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ColorStyleSheet from "../../components/ColorStyleSheet"

export default function ProfileScreen() {
    function onPressAccount() {
        alert("Account")
    }

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
            <Pressable onPress={onPressAccount}>
                <View style={styles.boxContainer}>
                    <View style={styles.topBox}>
                        <MaterialCommunityIcons name="account" color="white" size={50} />
                        <Text style={styles.boxText}>Profile</Text>
                        <MaterialCommunityIcons name="chevron-right" color="white" size={50} />
                    </View>
                </View>
            </Pressable>

            <Pressable onPress={onPressSettings}>
                <View style={styles.boxContainer}>
                    <View style={styles.box}>
                        <MaterialCommunityIcons name="cog" color="white" size={50} />
                        <Text style={styles.boxText}>Settings</Text>
                        <MaterialCommunityIcons name="chevron-right" color="white" size={50} />
                    </View>
                </View>
            </Pressable>

            <Pressable onPress={onPressHelp}>
                <View style={styles.boxContainer}>
                    <View style={styles.box}>
                        <MaterialCommunityIcons name="help-circle" color="white" size={50} />
                        <Text style={styles.boxText}>Help</Text>
                        <MaterialCommunityIcons name="chevron-right" color="white" size={50} />
                    </View>
                </View>
            </Pressable>

            <Pressable onPress={onPressAbout}>
                <View style={styles.boxContainer}>
                    <View style={styles.box}>
                        <MaterialCommunityIcons name="information" color="white" size={50} />
                        <Text style={styles.boxText}>About</Text>
                        <MaterialCommunityIcons name="chevron-right" color="white" size={50} />
                    </View>
                </View>
            </Pressable>

            <Pressable onPress={onPressSubscribtion}>
                <View style={styles.boxContainer}>
                    <View style={styles.bottomBox}>
                        <MaterialCommunityIcons name="credit-card" color="white" size={50} />
                        <Text style={styles.boxText}>Subscribtion</Text>
                        <MaterialCommunityIcons name="chevron-right" color="white" size={50} />
                    </View>
                </View>
            </Pressable>
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
    },
    topBox: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5,
        backgroundColor: "black",
        alignContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderColor: "white",
        borderTopWidth: 3,
        borderLeftWidth: 3,
        borderRightWidth: 3,
        borderBottomWidth: 3,
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
        borderBottomWidth: 3,
        borderLeftWidth: 3,
        borderRightWidth: 3,
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
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderColor: "white",
        borderLeftWidth: 3,
        borderRightWidth: 3,
        borderBottomWidth: 3,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 20,
    },
    boxText: {
        color: "white",
        fontSize: 20,
    }
})