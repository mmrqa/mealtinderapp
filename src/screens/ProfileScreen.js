import { View, Text, StyleSheet } from "react-native"

export default function ProfileScreen() {
    return (
        <View style={styles.mainViewContainer}>
            <Text>Profile</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    mainViewContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#1b5866',
    },
})