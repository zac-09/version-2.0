import React from 'react';
import { Text, StyleSheet } from 'react-native';
const TitleText = props => <Text style={{ ...styles.title, ...props.style }}>{props.children}</Text>;


const styles = StyleSheet.create({
    title: {
        fontFamily: 'nunito-bold',
        fontSize: 18,
        textTransform: 'uppercase'
    }
});

export default TitleText;