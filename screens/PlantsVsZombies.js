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

export default class PlantsVsZombies extends React.Component {

  openTrailer=()=>{
   window.open("https://www.youtube.com/watch?v=CHAbHz8iYHc") 
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
            this.props.navigation.navigate('PVZWalkthrough')
          }}>
<Text>Walkthrough</Text>

</TouchableOpacity>
        </View>

        <View style = {styles.gameScreen}>

<Text style = {styles.gameTitleText}>Plants vs. Zombies</Text>

<Image
source = {require('../assets/PlantsVsZombies.jpg')}
style = {{width:250,height:150}}
/>

<Text style = {styles.gameText}>Consoles: PC, Xbox One, Mobile, Nintendo DS</Text>
<Text style = {styles.gameText}>Date of Release: May 5, 2009</Text>
<Text style = {styles.gameDiscription}>Plants vs. Zombies is a strategy game released by PopCap, where you play as just an average guy who needs to defend himself against the incoming zombie horde. You need to plant plants to defeat zombies each day. You also need to manage your "sun", which you require to place plants down. Each plant has their own function, like the Sunflower, which spawns more sun over time. Or the Peashooter, which shoots peas at the zombies to damage them. Over the course of the game, you will unlock more plants and will face tougher zombies. And with the help of your neighbor Crazy Dave, you can get hints on how to face them. He can even give you new tools to face them and defeat the evil Doctor Zomboss. There are 5 different settings of levels. Day, which is the normal map. With sun dropping over time. Night, where sun does not spawn besides from a plant, and mushrooms will be awake to use. Pool, where you have to deal with two rows of water. And Fog, which is the pool at night, with fog to make zombies difficult to see. And finally, Roof. Where you have to place flower pots before you can place down plants. And everything is at a slant. There are also many minigames for you to play when you want something new. Like I, Zombie for example. Where you get to play on the zombies side. Or Last Stand, where you have to place your plants before the round and hope they can get you through. </Text>

<Button

title = "Watch the trailer here!"
onPress={()=>{
  this.openTrailer()
}}
>



</Button>

<Text style = {styles.gameText}>If it doesn't work, use this link. https://www.youtube.com/watch?v=CHAbHz8iYHc</Text>


</View>



</ScrollView>
        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#FFDD00',
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
    color:'black',
    fontFamily:'bold',
    fontSize:20
  },
  gameText:{
    color:'black',
  },
  gameDiscription:{
    color:'black',
    marginTop:10,
    alignSelf:'center'
  },

});
