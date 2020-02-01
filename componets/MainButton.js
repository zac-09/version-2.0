import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors';
import colors from '../constants/colors';
const MainButton = props => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={props.onPress}>
            <View style={{ ...styles.button, ...props.style }}>
                <Text style={{ ...styles.buttonText, ...props.textStyle }}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,

    },
    buttonText: {
        color: colors.accent,
        fontFamily: 'lato',
        fontSize: 18,
        padding: 2,
        textAlign: 'center'

    }
});

export default MainButton;