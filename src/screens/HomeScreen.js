import { View, Text, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center' 
    }
});

function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>Hi</Text>
        </View>
    )

}

export default HomeScreen