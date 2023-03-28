import React, { useState } from 'react';
import {
    View,
    KeyboardAvoidingView,
    TextInput,
    StyleSheet,
    Text,
    Platform,
    Image,
    TouchableWithoutFeedback,
    Button,
    Keyboard,
} from 'react-native';

import ColorStyleSheet from '../../components/ColorStyleSheet';
import * as ImagePicker from 'expo-image-picker';
import { ImageBackground } from 'react-native-web';

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
    btnAddImage: {
        position: 'absolute',
        right: 1,
        bottom: 1,
        borderRadius: 10,
        margin: 5,
    },
    textAddImage: {
        backgroundColor: '#2196F3',
        color: 'white',
        fontSize: 16,
        padding: 3,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 20,
    }
});


export default function HomeScreen() {
    const [image, setImage] = useState(require('../../assets/img/upload_food.jpg'));

    
    const uploadRecipe = async () => {
        fetch('https://webhook.site/61eb2c5d-35f9-45d5-bf94-8a8782adbe41', {
            method: 'POST',
            body: image,
        }).then(
            response => response.json()
        ).then(
            json => {
               console.log(json);
            }
        )
    };


    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

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

                    <ImageBackground source={{ uri: image }} style={{ width: '100%', height: 200, borderRadius: 5, shadowOpacity: 0.3 }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.textAddImage}>Hit the + and add a picture</Text>
                        </View>
                        <View style={styles.btnAddImage}>
                            <Button title="+" onPress={pickImage} />
                        </View>
                    </ImageBackground>
                    <View style={styles.btnContainer}>
                        <Button title="Add" onPress={uploadRecipe} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )

}
