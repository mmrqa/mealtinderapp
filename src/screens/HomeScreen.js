import { View, Text, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#1b5866',
    }
});

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>Hi</Text>
        </View>
    )

}
