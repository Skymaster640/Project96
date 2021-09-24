import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
  Alert,
} from 'react-native';
import ReactPlayer from 'react-player'
import axios from 'axios';

export default class CapKingdomMoons extends React.Component {

    constructor() {
    super();
    this.state = {
      apod: [],
    };
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
            this.props.navigation.navigate('SMOWalkthrough')
          }}>
<Text>Return</Text>

</TouchableOpacity>
        </View>

        <View style = {styles.gameScreen}>

<Text style = {styles.gameTitleText}>Super Mario Odyssey</Text>

<Image
source = {require('../assets/SMOWalkthrough1.jpg')}
style = {{width:250,height:150}}
/>


<Text style = {styles.gameDiscription}>The Cap Kingdom is the first world you explore in Super Mario Odyssey. It is a land full of hat-themed buildings and a fog that flows at the bottom of the kingdom. On your first visit at the beginning of the game, all you have to do is follow the tutorial, defeat Topper at the top of Top-Hat Tower, then go to the Cascade Kingdom. This walkthrough will show you how to obtain every single Power Moon in the Cap Kingdom. </Text>

<Text style = {styles.topicTitleText}>Moon 1: "Frog-Jumping Above the Fog"</Text>

<Text style = {styles.walkthroughInstruction}> Near the beginning of the kingdom, you will find a few frogs. Capture one then jump across some hat-shaped platforms in the south. </Text>

<Text style = {styles.topicTitleText}>Moon 2: "Frog-Jumping from the Top Deck"</Text>

<Text style = {styles.walkthroughInstruction}> Using the aforementioned frogs, head to the central plaza and jump from the hat-ship with two stories. </Text>

<Text style = {styles.topicTitleText}>Moon 3: "Cap Kingdom Timer Challenge 1"</Text>

<Text style = {styles.walkthroughInstruction}> Head to the base of Top-Hat Tower, then throw Cappy on a starecrow by the bridge. The moon will appear at the other end of the bridge, and you have to reach it in the time limit. </Text>

<Text style = {styles.topicTitleText}>Moon 4: "Good Evening, Captain Toad!"</Text>

<Text style = {styles.walkthroughInstruction}> Head back to where you fought Topper, and you will find Captain Toad in the middle of the arena. Talk to him and you get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 5: "Shopping in Bonneton"</Text>

<Text style = {styles.walkthroughInstruction}> Head to the central plaza, and talk to the hat ghost wearing a bunch of yellow hats, they will sell the moon to you for 100 coins. </Text>

<Text style = {styles.topicTitleText}>Moon 6: "Skimming the Poison Tide"</Text>

<Text style = {styles.walkthroughInstruction}> Capture a Paragoomba at the base of Top-Hat Tower, then fly to the back of the tower, land on the platform and go through the door. This will lead to a bonus section filled with rising and sinking waves of poison, which instantly kills you if you touch it. You need to collect 5 Moon shards to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 7: "Slipping Through the Poison Tide"</Text>

<Text style = {styles.walkthroughInstruction}> In the area with the previous moon, head to the back of the area with a Paragoomba and slip through the iron fence, Scale the platforms to reach the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 8: "Push-Block Peril"</Text>

<Text style = {styles.walkthroughInstruction}> Near the top of Top-Hat Tower, there is a door leading to another bonus section. There are blocks that extend and retract from the wall, reach the end to find the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 9: "Hidden Among the Push-Blocks"</Text>

<Text style = {styles.walkthroughInstruction}> In the Push Block section, look at the backs of the L-shaped blocks. In one of them is the moon hiding away. </Text>

<Text style = {styles.topicTitleText}>Moon 10: "Searching the Frog Pond"</Text>

<Text style = {styles.walkthroughInstruction}> At central plaza, go north and you will find a secret hideaway with a door. Go in the door and you will be in a room filled with water and frogs. Use the frogs to find the 5 Moon Shards. </Text>

<Text style = {styles.topicTitleText}>Moon 11: "Secrets of the Frog Pond"</Text>

<Text style = {styles.walkthroughInstruction}> In the previous room, head to the back wall with a frog and jump up to a ledge with the moon on it. </Text>

<Text style = {styles.topicTitleText}>NOTE: These Moons can only be obtained after beating Bowser in the Moon Kingdom.</Text>

<Text style = {styles.topicTitleText}>Moon 12: "The Forgotten Treasure"</Text>

<Text style = {styles.walkthroughInstruction}> In central plaza, there will be a hat ghost that will tell you about Cappy's lost treasure. You will then be sent on a wild goose chase while following Cappy's directions. You will eventually find the moon near the Glasses Bridge. </Text>

<Text style = {styles.topicTitleText}>Moon 13: "Taxi Flying Through Bonneton"</Text>

<Text style = {styles.walkthroughInstruction}> At central plaza, there will be a pair of binoculars that you can capture. After that look towards The Moon and search for the taxi car with a sail on top of it. Look at it long enough and the moon will appear. </Text>

<Text style = {styles.topicTitleText}>Moon 14: "Bonneter Blockade"</Text>

<Text style = {styles.walkthroughInstruction}> At central plaza, you can see the moon in a hatship. But there is a hat ghost blocking it. You need to capture a Paragoomba to scare them off and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 15: "Cap Kingdom Regular Cup"</Text>

<Text style = {styles.walkthroughInstruction}> Head to the top of Top-Hat Tower, you will find a Koopa Troopa next to a signboard. This will bring you to Koopa Freerunning. You have to reach the Odyssey before the others to win and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 16: "Peach in the Cap Kingdom"</Text>

<Text style = {styles.walkthroughInstruction}> At central plaza, you can find Princess Peach and Tiara at the west end of town. Talk to them and you will get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 17: "Found with Cap Kingdom Art"</Text>

<Text style = {styles.walkthroughInstruction}> At central plaza, there will be a picture on a wall. Interact with it and you will get a piece of Hint Art. This will lead you to the Moon Kingdom, where near the start there will be a group of people that match the picture. Ground Pound at the spot where the picture lists and you will get the moon. </Text>

<Text style = {styles.topicTitleText}>NOTE: These Moons can only be obtained by breaking open the Moon Rock in the kingdom.</Text>

<Text style = {styles.topicTitleText}>Moon 18: "Next to Glasses Bridge"</Text>

<Text style = {styles.walkthroughInstruction}> Go to Glasses Bridge, and off the side of the bridge you can find the moon on top of a hatship. </Text>

<Text style = {styles.topicTitleText}>Moon 19: "Danger Sign"</Text>

<Text style = {styles.walkthroughInstruction}> Capture a Paragoomba, and in the distance you will find a lone danger sign in the fog. Fly to it and grab the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 20: "Under the Big One's Brim"</Text>

<Text style = {styles.walkthroughInstruction}> Head to the base of Top-Hat Tower, find the moon underneath the "brim" and fall from the brim onto the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 21: "Fly to the Edge of the Fog"</Text>

<Text style = {styles.walkthroughInstruction}> Capture a Paragoomba, and fly to the edge of the fog around Top-Hat Tower, and you will find the moon shining through the fog. </Text>

<Text style = {styles.topicTitleText}>Moon 22: "Spin the Hat, Get a Prize"</Text>

<Text style = {styles.walkthroughInstruction}> At the entrance to Central Plaza, go on top of the arch, and spin the hat emblem to make the moon appear. </Text>

<Text style = {styles.topicTitleText}>Moon 23: "Hidden in a Sunken Hat"</Text>

<Text style = {styles.walkthroughInstruction}> You will find a hatship with the moon on it in the distance. Capture a Paragoomba and fly to it. </Text>

<Text style = {styles.topicTitleText}>Moon 24: "Fog-Shrouded Platform"</Text>

<Text style = {styles.walkthroughInstruction}> Head to where the frog pond entrance is, and there will be a fog covered area to the left. The moon will be on that platform. </Text>

<Text style = {styles.topicTitleText}>Moon 25: "Bird Traveling in the Fog"</Text>

<Text style = {styles.walkthroughInstruction}> Capture a Paragoomba, and you will find a bird flying in the fog, touch it and the moon will appear above it. </Text>

<Text style = {styles.topicTitleText}>Moon 26: "Caught Hopping Near the Ship!"</Text>

<Text style = {styles.walkthroughInstruction}> At the tallest hill near the Odyssey, there will be a rabbit that is shining. Catch it and the moon is yours. </Text>

<Text style = {styles.topicTitleText}>Moon 27: "Taking Notes: In the Fog"</Text>

<Text style = {styles.walkthroughInstruction}> Capture a Paragoomba, and look for a hatship in the fog with a rainbow music note on it. Touch it and grab the rest of the music notes to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 28: "Cap Kingdom Timer Challenge 2"</Text>

<Text style = {styles.walkthroughInstruction}> In central plaza, there will be a starecrow you can throw Cappy on. Some platforms will spawn and so will the moon. Get the moon before the time limit. </Text>

<Text style = {styles.topicTitleText}>Moon 29: "Cap Kingdom Master Cup"</Text>

<Text style = {styles.walkthroughInstruction}> Return to where Koopa Freerunning is, and do the race again but the Koopa Troopas will get to the goal faster. </Text>

<Text style = {styles.topicTitleText}>Moon 30: "Roll On and On"</Text>

<Text style = {styles.walkthroughInstruction}> In central plaza, find a Moon Pipe and go in it, you will be in a bonus room where you need to roll your way down to the bottom. At the end the moon can be gotten. </Text>

<Text style = {styles.topicTitleText}>Moon 31: "Precision Rolling"</Text>

<Text style = {styles.walkthroughInstruction}> In the Roll On and On room, there will be a split path where you can roll to the end of to get another moon. It will then lead back to the main path. </Text>

</View>

</ScrollView>
        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#E11200',
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
  gameDiscription:{
    color:'white',
    marginTop:10,
    alignSelf:'center'
  },
  gameTitleText:{
    color:'white',
    fontFamily:'bold',
    fontSize:20
  },
  topicTitleText:{
    color:'white',
    fontFamily:'bold',
    fontSize:20,
    marginTop:20
  },
  walkthroughInstruction:{
    color:'white',
    marginTop:10,
    alignSelf:'center'
  },
});
