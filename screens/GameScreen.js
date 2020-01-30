import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert, ScrollView } from 'react-native';
import NumberContainer from '../componets/NumberContainer';
import Card from '../componets/Card';
import MainButton from '../componets/MainButton';
import { Ionicons } from '@expo/vector-icons';
import BodyText from '../componets/BodyText';
const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if (randomNumber === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return randomNumber;
    }
};
const renderList = (value, numOfRounds) => {
    return (
        <View key={value} style={styles.list}>
            <BodyText>#{numOfRounds}</BodyText>
            <BodyText>{value}</BodyText>
        </View>
    );
};

const GameScreen = props => {
    const initialGuess = generateRandomBetween(1, 100, props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses, setPassedGuesses] = useState([initialGuess]);
    //  const [rounds, setRounds] = useState(0);

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice)) {
            Alert.alert('Nigga dont fuck with the game', 'y\'all know its wrong', [{ text: 'Sorry', style: 'cancel' }]);
            return;
        }
        if (direction === 'lower') {

            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess + 1;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setPassedGuesses(curPastGuesses => [nextNumber, ...curPastGuesses]);
        // setRounds(curRounds => curRounds + 1);
    };
    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    const { userChoice, onGameOver } = props;
    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(pastGuesses.length);
        }
    }, [currentGuess, userChoice, onGameOver]);



    return (
        <View style={styles.screen}>
            <Text>Opponet's guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <MainButton onPress={nextGuessHandler.bind(this, 'lower')} >
                    <Ionicons name="md-remove" size={24} color="white" />
                </MainButton>
                <MainButton onPress={nextGuessHandler.bind(this, 'greater')} >
                    <Ionicons name="md-add" size={24} color="white" />
                </MainButton>
            </Card>
            <View style={styles.listItems}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                {pastGuesses.map((guess,index) => renderList(guess,pastGuesses.length - index))}

            </ScrollView>
            </View>
        </View>
    );

};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
        width: 400,
        maxWidth: '80%',
        padding: 10,
        maxWidth: '80%',
        justifyContent: 'space-around'
    },
    list:{
        borderColor:'#ccc',
        padding:15,
        marginVertical:10,
        backgroundColor:"white",
        borderWidth:1,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'60%'
    },
    listItems:{
        width:'80%',
        flex:1
    },
    scrollView:{
        alignItems:'center',
        justifyContent:'flex-end',
        flexGrow:1
    }
});

export default GameScreen;