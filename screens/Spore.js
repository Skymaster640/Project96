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

export default class Spore extends React.Component {

  openTrailer=()=>{
   window.open("https://www.youtube.com/watch?v=zi2GvqboQfY") 
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
            this.props.navigation.navigate('SporeWalkthrough')
          }}>
<Text>Walkthrough</Text>

</TouchableOpacity>
        </View>

        <View style = {styles.gameScreen}>

<Text style = {styles.gameTitleText}>Spore</Text>

<Image
source = {require('../assets/Spore.jpg')}
style = {{width:250,height:150}}
/>

<Text style = {styles.gameText}>Consoles: PC</Text>
<Text style = {styles.gameText}>Date of Release: September 4, 2008</Text>
<Text style = {styles.gameDiscription}>Spore is a simulation game released by EA and Maxis, the same team that made The Sims. It is a game where you can create almost anything, creatures, vehicles, buildings, even entire planets! The main game is split up into 5 different stages, where you build up your creature from a cell into the ruler of the galaxy. First, the Cell Stage. The Cell Stage is at a top-down perspective and your goal is just to grow by eating food, plants or meat. Survive and reach the next stage. Depending on what you do in this stage and the next ones, you will get a trait which will decide your final trait at the end of the game. You also collect parts to use in the editors to customize your cells/creatures even more! The second stage is the Creature Stage. Where you once again have to try to survive and interact with other species, whether you make friends with them or you kill them. As you play, you will be able to add members to your pack. Once you finish the Creature Stage, you get one last chance to edit your creature, as what you are left with is what you have for the rest of the game. The third stage is the Tribal Stage, where you control a group of your species in a village to try to take control of the entire continent. You have to manage your resources, interact with other tribes, and most importantly, survive. You can even customize the outfits of your tribe members, giving them more stats and style. Next up, the Civilization Stage. You start off by making a land vehicle for your nation. Depending on what you did in the Tribal Stage, you will be either Military based, Religious, or Economic. You have to control your vehicles to defend your cities and your goal is to take control of every city on the planet. Earning Sea and Sky vehicles. Once you take control of the planet, you move on to the final stage, the final frontier if you will, the Space Stage. You start off by making a spaceship, and now you are no longer bound by the confines of your planet. You can explore outside your solar system, interact with alien empires, and make it to the Galactic Core. Or even find Earth itself if you so wanted. There are two expansions to Spore, the Creepy and Cute parts pack which just adds more creature parts. And Galactic Adventures, which allows you to make your own missions on other planets, with similar gameplay to the Creature Stage. You can even share your creations online using Sporepedia.com.</Text>

<Button

title = "Watch the trailer here!"
onPress={()=>{
  this.openTrailer()
}}
>



</Button>

<Text style = {styles.gameText}>If it doesn't work, use this link. https://www.youtube.com/watch?v=zi2GvqboQfY</Text>


</View>



</ScrollView>
        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#02041C',
  },
  titleContainer: {
    backgroundColor: 'black',
    alignItems: 'center',
    height: 40,
  },
  titleText: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'bold',
  },
  gameScreen: {
    alignItems: 'center',
  },
  gameTitleText:{
    color:'white',
    fontFamily:'bold',
    fontSize:20
  },
  gameText:{
    color:'white',
  },
  gameDiscription:{
    color:'white',
    marginTop:10,
    alignSelf:'center'
  },

});
