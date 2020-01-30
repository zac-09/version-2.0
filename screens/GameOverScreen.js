import React from 'react';
import {View,Text,StyleSheet,Button,Image} from 'react-native';
import BodyText from '../componets/BodyText';
import TitleText from '../componets/TitleText';
import Colors from '../constants/colors';
import MainButton from '../componets/MainButton';
const GameOverScreen = props =>{
 return (
      <View style={styles.screen}>
          <TitleText>the game is over my nigga</TitleText>
          <View style={styles.imageContainer}>
          <Image
           source={require('../assets/success.png')}
            style={styles.image} 
            resizeMode="cover"
            />
            </View>
            <View style ={styles.resultContainer}>
            <BodyText style={styles.resultText}>Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}  </Text> </BodyText>

            </View>
          <MainButton  onPress={props.onRestart} >
                RESTART GAME
          </MainButton>

      </View>
 );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    image:{
        width:'100%',
        height:'100%',
        
    },
    imageContainer:{
        borderRadius:150,
        borderColor:'black',
        borderWidth:3,
        width:300,
        height:300,
        overflow:'hidden',
        marginVertical: 30,

    },
    highlight:{
        color:Colors.primary
    },
    resultContainer:{
        marginHorizontal:30,
        marginVertical:15
    },
    resultText:{
        textAlign:'center',
        fontSize:20
    }
});

export default GameOverScreen;