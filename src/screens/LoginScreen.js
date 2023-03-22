import { View, Text, Modal, Pressable, StyleSheet, TextInput } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from "react"

export default function LoginScreen({ isVisible, children, onClose }) {
    function onPressLogin() {
        alert("Login")
    }

    return (
        <Modal
            visible={isVisible}
            transparent={true}
            animationType="fade"
        >
            <View style={styles.modalContent}>
                <View style={styles.titleContainer}>
                    <Pressable>
                        <MaterialCommunityIcons name="close" color={styles.titleContainer.backgroundColor} size={30} />
                    </Pressable>
                    <Text style={styles.title}>Account Settings</Text>
                    <Pressable onPress={onClose}>
                        <MaterialCommunityIcons name="close" color={styles.iconStyle.color} size={styles.iconStyle.size} />
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContent: {
        flex: 1,
        height: '80%',
        width: '100%',
        backgroundColor: 'white',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: 'absolute',
        bottom: 114,
    },
    titleContainer: {
        height: '10%',
        backgroundColor: 'grey',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        color: '#fff',
        fontSize: 20,
        alignContent: 'center',
        justifyContent: 'center',
    },
    iconStyle: {
        color: '#fff',
        size: 30,
    },
});
