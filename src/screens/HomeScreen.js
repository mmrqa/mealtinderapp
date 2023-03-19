import { View, Text, StyleSheet } from "react-native"

import ColorStyleSheet from '../../components/ColorStyleSheet';

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: ColorStyleSheet.primaryBackground.backgroundColor,
    }
});

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>Hi</Text>
        </View>
    )

}
