import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';

import Header from './componets/Header'
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-BoldItalic.ttf'),
    'lato': require('./assets/fonts/Lato-Regular.ttf'),
    'lato-bold': require('./assets/fonts/Lato-BoldItalic.ttf'),




  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [dataLoaded, setDataLoaded] = useState(false);
  const [guessRounds, setguessRounds] = useState(0);



  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  const configureNewGameHandler = () => {
    setguessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    // setguessRounds(0);
  };
  const gameOverHandler = numOfRounds => {
    setguessRounds(numOfRounds);
  };





  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen
        userChoice={userNumber}
        onGameOver={gameOverHandler} />
    );
    fetchFonts();
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userNumber={userNumber}
        onRestart={configureNewGameHandler} />
    );
  }
  return (
    <View style={styles.screen} >

      <Header title="guess a number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});


