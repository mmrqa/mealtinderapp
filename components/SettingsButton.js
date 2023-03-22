import { View, Text, Pressable, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SettingsButton({ onPressFunction, iconName, title, styleProps }) {
    const bottomOrientation = (styleProps) => {
        if (styleProps == "top") {
            return styles.topBox;
        } else if (styleProps == "bottom") {
            return styles.bottomBox;
        } else if (styleProps == "center") {
            return styles.box;
        }
        else if (styleProps == "single") {
            return [styles.topBox, styles.bottomBox];
        }
    }

    return (
        <Pressable onPress={onPressFunction}>
            <View style={styles.boxContainer}>
                <View
                    style={[styles.box, bottomOrientation(styleProps)]}>
                    <MaterialCommunityIcons
                        name={iconName}
                        color={styles.iconStyle.color}
                        size={styles.iconStyle.size}
                    />
                    <Text style={styles.boxText}>{title}</Text>
                    <MaterialCommunityIcons
                        name="chevron-right"
                        color={styles.iconStyle.color}
                        size={styles.iconStyle.size}
                    />
                </View>
            </View>
        </Pressable >
    );
}

const styles = StyleSheet.create({
    boxContainer: {
        flexDirection: "row",
        paddingHorizontal: 5,
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
    topBox: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderTopWidth: 1,
    },
    bottomBox: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },

    boxText: {
        color: "white",
        fontSize: 20,
    },
    iconStyle: {
        color: "white",
        size: 35,
    },
});