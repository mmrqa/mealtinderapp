import React from 'react';
import {
    View,
    KeyboardAvoidingView,
    TextInput,
    StyleSheet,
    Text,
    Platform,
    TouchableWithoutFeedback,
    Button,
    Keyboard,
} from 'react-native';

import ColorStyleSheet from '../../components/ColorStyleSheet';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ColorStyleSheet.primaryBackground.backgroundColor,
    },
    inner: {
        padding: 24,
    },
    header: {
        fontSize: 36,
        marginBottom: 48,
    },
    textInput: {
        height: 40,
        borderColor: '#000000',
        borderBottomWidth: 1,
        marginBottom: 15,
    },
    btnContainer: {
        backgroundColor: 'white',
        marginTop: 12,
    },
});

export default function HomeScreen() {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <TouchableWithoutFeedback onPress={Platform.OS === "web" ? null : Keyboard.dismiss}>
                <View style={styles.inner}>
                    <Text style={styles.header}>Add new recipe</Text>
                    <TextInput placeholder="Name" style={styles.textInput} />
                    <TextInput editable multiline={true}
                        maxLength={253} placeholder="Description" style={styles.textInput} />
                    <TextInput placeholder="Link" style={styles.textInput} />
                    <TextInput placeholder="Duration" style={styles.textInput} />
                    <TextInput placeholder="image" style={styles.textInput} />
                    
                    <View style={styles.btnContainer}>
                        <Button title="Add" onPress={() => null} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )

}
