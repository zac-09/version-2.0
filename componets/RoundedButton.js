import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from "../constants/colors";


const RoundedButton = props => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{ ...styles.button, ...props.style }}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
             backgroundColor:Colors.primary,
            paddingVertical: 12,
            paddingHorizontal: 30,
            borderRadius:35,
            height:70,
            width:70
    },
    buttonText:{
        color:'white',
        fontFamily: 'lato',
        fontSize:18,
        padding:2,
        textAlign:'center'

    }
});


export default RoundedButton;