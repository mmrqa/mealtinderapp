import { View, Text, StyleSheet} from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ColorStyleSheet from "../../components/ColorStyleSheet"

export default function ProfileScreen() {
    return (
        <View style={styles.mainViewContainer}>
            <View style={styles.boxContainer}>
                <View style={styles.box}>
                    <MaterialCommunityIcons name="account" color="white" size={50} />
                    <Text style={styles.boxText}>Profile</Text>
                </View>
            </View>
            <View style={styles.boxContainer}>
                <View style={styles.box}>
                    <MaterialCommunityIcons name="cog" color="white" size={50} />
                    <Text style={styles.boxText}>Settings</Text>
                </View>
            </View>
            <View style={styles.boxContainer}>
                <View style={styles.box}>
                    <MaterialCommunityIcons name="help-circle" color="white" size={50} />
                    <Text style={styles.boxText}>Help</Text>
                </View>
            </View>
            <View style={styles.boxContainer}>
                <View style={styles.box}>
                    <MaterialCommunityIcons name="information" color="white" size={50} />
                    <Text style={styles.boxText}>About</Text>
                </View>
            </View>
            <View style={styles.boxContainer}>
                <View style={styles.box}>
                    <MaterialCommunityIcons name="credit-card" color="white" size={50} />
                    <Text style={styles.boxText}>Subscribtion</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainViewContainer: {
        flex: 1,
        backgroundColor: ColorStyleSheet.primaryBackground.backgroundColor,
        paddingTop: 100,
        justifyContent: "flex-end",   
    },
    boxContainer: {
        flexDirection: "row",
        alignContent: "space-between",
    },
    box: {
        flex: 1,
        backgroundColor: "black",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        margin: 10,
        padding: 10,
        borderColor: "white",
        borderWidth: 3,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 20,
    },
    boxText: {
        color: "white",
        fontSize: 20,
    }
})