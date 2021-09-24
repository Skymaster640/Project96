import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import ReactPlayer from 'react-player'

export default class PokemonHeartGoldSoulSilver extends React.Component {

  openTrailer=()=>{
   window.open("https://www.youtube.com/watch?v=-d09yVJ6Ix4") 
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Skymaster's Gamepedia</Text>
        </View>


        
        <ScrollView>
        <View style = {{marginRight:252,borderRadius:9,borderColor:'black',backgroundColor:'white'}}>

        <TouchableOpacity
        onPress={()=>{
            this.props.navigation.navigate('Home')
          }}>
<Text>Return</Text>

</TouchableOpacity>
        </View>

        <View style = {{marginLeft:200,borderRadius:9,borderColor:'black',backgroundColor:'white'}}>
<TouchableOpacity
        onPress={()=>{
            this.props.navigation.navigate('PGHSSWalkthrough')
          }}>
<Text>Walkthrough</Text>

</TouchableOpacity>
        </View>

        <View style = {styles.gameScreen}>

<Text style = {styles.gameTitleText}>Pokemon HeartGold and SoulSilver</Text>

<Image
source = {require('../assets/PokemonHeartGoldSoulSilver.jpg')}
style = {{width:250,height:150}}
/>

<Text style = {styles.gameText}>Consoles: Nintendo DS</Text>
<Text style = {styles.gameText}>Date of Release: September 12, 2009</Text>
<Text style = {styles.gameDiscription}>Pokemon HeartGold Version and Pokemon SoulSilver Version are the remakes of the original Pokemon Gold and Silver from the GameBoy Color now on your Nintendo DS. Made in the 4th Generation of Pokemon games, HeartGold and SoulSilver bring many of the luxuries that you would see in that era. Improved graphics, wifi support, polished battle mechanics, and most importantly, MORE POKEMON! HeartGold and SoulSilver are notable for being some of the best Pokemon games ever released, not only can you explore the Johto Region and Kanto Region again, like in the originals. These games are notable for letting your Pokemon follow behind you, a feature fans still want in every Pokemon game to this day. Also, in case you never played a Pokemon game, here is what it is about. You play as a Pokemon Trainer, and your goal is to become the very best, like no one ever was. You have to explore the Johto region, catching Pokemon and battling Pokemon, challenging Gym Leaders to gain Gym Badges. Until eventually, you reach the Pokemon League and become Champion. But that's not all. You will be challenged constantly, having to figure out what team you need for each important battle. And throughout your adventure, you will have to challenge the evil Team Rocket. But if you choose, you can spend your time catching every single Pokemon, aiming to complete the Pokedex.</Text>

<Button

title = "Watch the trailer here!"
onPress={()=>{
  this.openTrailer()
}}
>



</Button>

<Text style = {styles.gameText}>If it doesn't work, use this link. https://www.youtube.com/watch?v=-d09yVJ6Ix4</Text>


</View>



</ScrollView>
        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#F5F5F1',
  },
  titleContainer: {
    backgroundColor: 'black',
    alignItems: 'center',
    height: 40,
  },
  titleText: {
    color: 'black',
    fontSize: 25,
    fontFamily: 'bold',
  },
  gameScreen: {
    alignItems: 'center',
  },
  gameTitleText:{
    color:'black',
    fontFamily:'bold',
    fontSize:20
  },
  gameText:{
    color:' black',
  },
  gameDiscription:{
    color:'black',
    marginTop:10,
    alignSelf:'center'
  },

});
