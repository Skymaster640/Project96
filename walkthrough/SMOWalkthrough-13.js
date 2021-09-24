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

export default class BowsersKingdomMoons extends React.Component {

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
source = {require('../assets/SMOWalkthrough13.jpg')}
style = {{width:250,height:150}}
/>


<Text style = {styles.gameDiscription}>Bowser's Kingdom is your thirteenth stop in Super Mario Odyssey. You have chased Bowser all around the world to make it to this point. You must traverse through the kingdom in order to confront him and save Princess Peach. But you have to go up against Topper and Harriet yet again. And now you must face all four of the broodals in their giant robot known as RoboBrood. </Text>

<Text style = {styles.topicTitleText}>Moon 1: "Infiltrate Bowser's Castle!"</Text>

<Text style = {styles.walkthroughInstruction}>Get the moon by defeating the first Stairface Ogre. </Text>

<Text style = {styles.topicTitleText}>Moon 2: "Smart Bombing"</Text>

<Text style = {styles.walkthroughInstruction}>You must collect 5 moon shards in the area after moon 1. </Text>

<Text style = {styles.topicTitleText}>Moon 3: "Big Broodal Battle"</Text>

<Text style = {styles.walkthroughInstruction}>In the area after moon 2, you must beat both Topper and Harriet again. </Text>

<Text style = {styles.topicTitleText}>Moon 4: "Showdown at Bowser's Castle"</Text>

<Text style = {styles.walkthroughInstruction}>Defeat RoboBrood. </Text>

<Text style = {styles.topicTitleText}>Moon 5: "Behind the Big Wall"</Text>

<Text style = {styles.walkthroughInstruction}>At the Third Courtyard. Capture a Pokio and climb the wall. The moon is behind the wall. </Text>

<Text style = {styles.topicTitleText}>Moon 6: "Treasure Inside the Turret"</Text>

<Text style = {styles.walkthroughInstruction}>At the Second Courtyard, capture a Pokio and climb a wall to reach the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 7: "From the Side Above the Castle Gate"</Text>

<Text style = {styles.walkthroughInstruction}>At the end of the Second Courtyard, climb the wall to get to the roof where the moon is. </Text>

<Text style = {styles.topicTitleText}>Moon 8: "Sunken Treasure in the Moat"</Text>

<Text style = {styles.walkthroughInstruction}>Go to the main Courtyard. The moon is at the bottom of the pool of water. </Text>

<Text style = {styles.topicTitleText}>Moon 9: "Past the Moving Wall"</Text>

<Text style = {styles.walkthroughInstruction}>Beneath the Keep, there are some moving walls that will lead you straight to the moon. But you can only do this with Pokio. </Text>

<Text style = {styles.topicTitleText}>Moon 10: "Above the Poison Swamp"</Text>

<Text style = {styles.walkthroughInstruction}>Beneath the Keep, capture Lakitu to reach the other side of the poison. Use the slingshot to get ot another roof with the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 11: "Knocking Down the Nice Frame"</Text>

<Text style = {styles.walkthroughInstruction}>At the roof of a building Beneath the Keep, knock over the back of the frame to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 12: "Caught on the Iron Fence"</Text>

<Text style = {styles.walkthroughInstruction}>Behind the Odyssey, one of the fence frames give you the moon if you throw Cappy at it. </Text>

<Text style = {styles.topicTitleText}>Moon 13: "On the Giant Bowser Statue's Nose"</Text>

<Text style = {styles.walkthroughInstruction}>Go to the nose of the Giant Bowser Statue near the end of the kingdom and ground pound on it. </Text>

<Text style = {styles.topicTitleText}>Moon 14: "Inside a Block in the Castle"</Text>

<Text style = {styles.walkthroughInstruction}>At the Outer Wall, lure a Stairface Ogre over to a glowing block and have it destroy it. </Text>

<Text style = {styles.topicTitleText}>Moon 15: "Caught Hopping at Bowser's Castle!"</Text>

<Text style = {styles.walkthroughInstruction}>At the top of the Keep there are two rabbits. One of which has the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 16: "Exterminate the Ogres!"</Text>

<Text style = {styles.walkthroughInstruction}>At the Main Courtyard Enterance, you must destroy all the Stairface Ogres. </Text>

<Text style = {styles.topicTitleText}>Moon 17: "Bowser's Kingdom Timer Challenge 1"</Text>

<Text style = {styles.walkthroughInstruction}>At the Showdown Arena there is a starecrow that activates the challenge. Reach the top of the structure to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 18: "Taking Notes: Between Spinies"</Text>

<Text style = {styles.walkthroughInstruction}>At the Third Courtyard there is a music note near some Spinies. Collect them all to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 19: "Stack Up Above the Wall"</Text>

<Text style = {styles.walkthroughInstruction}>At the beginning of the kingdom you need to make a Goomba Stack of 10 and hit the corresponding button. </Text>

<Text style = {styles.topicTitleText}>Moon 20: "Hidden Corridor Under the Floor"</Text>

<Text style = {styles.walkthroughInstruction}>At the Outer Wall, there is a moon hidden in the wall blocked by some crates. </Text>

<Text style = {styles.topicTitleText}>Moon 21: "Poking Your Nose in the Plaster Wall"</Text>

<Text style = {styles.walkthroughInstruction}>At the end of the Third Courtyard there is a path leading to a Pokio. Poke through a hold in the wall to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 22: "Poking the Turret Wall"</Text>

<Text style = {styles.walkthroughInstruction}>At the end of the Second Courtyard there is another hole you can poke with a Pokio next to a cannon. Poke in it to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 23: "Poking Your Nose by the Great Gate"</Text>

<Text style = {styles.walkthroughInstruction}>At the inner wall by the spark pylon there are some crates blocking another pokible hole. </Text>

<Text style = {styles.topicTitleText}>Moon 24: "Jizo All in a Row"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Crazy Cap you can capture a Jizo and bring it next to some more Jizos to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 25: "Underground Jizo"</Text>

<Text style = {styles.walkthroughInstruction}>Bring the same Jizo to some nearby cracked floor, you will fall through and line up the other Jizo to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 26: "Found Behind Bars!"</Text>

<Text style = {styles.walkthroughInstruction}>At the Main Courtyard, go to the roof of the enterance and find a Spark Pylon. It will take you in the jail cell to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 27: "Fishing(?) in Bowser's Castle"</Text>

<Text style = {styles.walkthroughInstruction}>Beneath the Keep, capture a Lakitu and fish in the poison water. Poochy will appear and give you the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 28: "Good to See You, Captain Toad!"</Text>

<Text style = {styles.walkthroughInstruction}>At the Outer Wall, you can find Captain Toad at the far right. Talk to him and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 29: "Shopping at Bowser's Castle"</Text>

<Text style = {styles.walkthroughInstruction}>In the middle of the kingdom is the Crazy Cap shop. You can buy the moon for 100 coins. </Text>

<Text style = {styles.topicTitleText}>Moon 30: "Bowser's Castle Treasure Vault"</Text>

<Text style = {styles.walkthroughInstruction}>Beneath the Keep, if you drop from the wall at the right side you will find a door with many coins and a chest with the moon in it. </Text>

<Text style = {styles.topicTitleText}>Moon 31: "Scene of Crossing the Poison Swamp"</Text>

<Text style = {styles.walkthroughInstruction}>Behind the Crazy Cap shop is a door that is locked with a New Donker in front of it. You need the Samurai Outfit and hat to enter. The whole thing is a 8-bit section with the moon at the end. </Text>

<Text style = {styles.topicTitleText}>Moon 32: "Taking Notes: In the Folding Screen"</Text>

<Text style = {styles.walkthroughInstruction}>At the previous area, there is a music note that will start the challenge. Collect them all to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 33: "On Top of the Spinning Tower"</Text>

<Text style = {styles.walkthroughInstruction}>Beneath the Keep there is a Stairface Ogre that must be destroyed to open a door that leads to a bonus area. There you must go through with a Pokio to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 34: "Down and Up the Spinning Tower"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous section, there is an alcove at the bottom of the tower with a key. You must reach the top with the key to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 35: "Jizo's Big Adventure"</Text>

<Text style = {styles.walkthroughInstruction}>At the Showdown Arena there is a Pipe that leads to a bonus area. In this area you must use Jizos to complete the puzzle and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 36: "Jizo and the Hidden Room"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area, you must get the Jizos on the 3 P Switches and you will get access to the moon in a secret alcove. </Text>

<Text style = {styles.topicTitleText}>Moon 37: "Dashing Above the Clouds"</Text>

<Text style = {styles.walkthroughInstruction}>Beneath the Keep, fall off the left side and you will find a seed. Throw it in the pot later in the path and climb the beanstalk that grows from it. In this bonus area you must use Rocket Flowers to jump across large gaps. </Text>

<Text style = {styles.topicTitleText}>Moon 38: "Dashing Through the Clouds"</Text>

<Text style = {styles.walkthroughInstruction}>At the end of the previous area there is the moon on a narrow path. </Text>

<Text style = {styles.topicTitleText}>NOTE: These Moons can only be obtained after beating Bowser in the Moon Kingdom.</Text>

<Text style = {styles.topicTitleText}>Moon 39: "Sphynx Over Bowser's Castle"</Text>

<Text style = {styles.walkthroughInstruction}>Capture some Binoculars, and look in the sky for a flying Sphynx. Look at it long enough to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 40: "I Met a Pokio!"</Text>

<Text style = {styles.walkthroughInstruction}>At the main Courtyard, capture a Pokio and go to the roof and find a hat ghost. They will give you a moon for talking to them. </Text>

<Text style = {styles.topicTitleText}>Moon 41: "Bowser's Kingdom Regular Cup"</Text>

<Text style = {styles.walkthroughInstruction}>Beneath the Keep there is a Koopa Troopa who invites you to Koopa Freerunning. Win the race and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 42: "A Rumble Under the Arena Floor"</Text>

<Text style = {styles.walkthroughInstruction}>At the Showdown Arena, look for a rumble in your controller and ground pound where it is at it's highest. </Text>

<Text style = {styles.topicTitleText}>Moon 43: "Secret Path to Bowser's Castle!"</Text>

<Text style = {styles.walkthroughInstruction}>Look for a secret painting in the Cascade Kingdom to bring you to a floating island way above the rest of the kingdom and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 44: "Peach in Bowser's Kingdom"</Text>

<Text style = {styles.walkthroughInstruction}>At the Crazy Cap you can find Peach and Tiara. Talk to them and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 45: "Found with Bowser's Kingdom Art"</Text>

<Text style = {styles.walkthroughInstruction}>At the Main Courtyard there is a piece of Hint Art that leads to the Sand Kingdom. Ground Pound the spot in the picture to get the moon. </Text>

<Text style = {styles.topicTitleText}>NOTE: These Moons can only be obtained by breaking open the Moon Rock in the kingdom.</Text>

<Text style = {styles.topicTitleText}>Moon 46: "Behind the Tall Wall: Poke, Poke!"</Text>

<Text style = {styles.walkthroughInstruction}>At the Third Courtyard capture a Pokio and go behind the wall and keep poking until you can find a hole. Poke the hole to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 47: "From Crates in the Moat"</Text>

<Text style = {styles.walkthroughInstruction}>At the Main Courtyard go into the pool of water and break the glowing crate that is inside. </Text>

<Text style = {styles.topicTitleText}>Moon 48: "Caught on the Giant Horn"</Text>

<Text style = {styles.walkthroughInstruction}>At the top of the Keep, throw Cappy on the horn at the left. </Text>

<Text style = {styles.topicTitleText}>Moon 49: "Inside a Block at the Gate"</Text>

<Text style = {styles.walkthroughInstruction}>At the Main Courtyard, be a Pokio and poke a bomb right towards a glowing crate by the enterance. </Text>

<Text style = {styles.topicTitleText}>Moon 50: "Small Bird in Bowser's Castle"</Text>

<Text style = {styles.walkthroughInstruction}>Near the beginning of the kingdom is a bird that gives a moon when caught. </Text>

<Text style = {styles.topicTitleText}>Moon 51: "Invader in Bowser's Castle"</Text>

<Text style = {styles.walkthroughInstruction}>At Topper's arena, there is a Yoofoe that gives a moon when defeated. </Text>

<Text style = {styles.topicTitleText}>Moon 52: "Jumping from Flag to Flag"</Text>

<Text style = {styles.walkthroughInstruction}>At the Main Courtyard, there is a line of flags that you can climb. There is a key at the end of it and you must come back to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 53: "Bowser's Kingdom Timer Challenge 2"</Text>

<Text style = {styles.walkthroughInstruction}>Beneath the Keep to the right is another starecrow. Start the challenge then drop down to land on the moon below you. </Text>

<Text style = {styles.topicTitleText}>Moon 54: "Taking Notes: On the Wall"</Text>

<Text style = {styles.walkthroughInstruction}>At the end of the Third Courtyard there is a music note that will start the challenge. You need a Pokio to collect all of the notes. </Text>

<Text style = {styles.topicTitleText}>Moon 55: "Taking Notes with a Spinning Throw"</Text>

<Text style = {styles.walkthroughInstruction}>At Harriet's arena there is a music note that will start the challenge. Collect all the notes to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 56: "Third Courtyard Outskirts"</Text>

<Text style = {styles.walkthroughInstruction}>When using the Spark Pylon in between the Front and Rear Third Courtyard, shake the controller to collect the moon on the way. </Text>

<Text style = {styles.topicTitleText}>Moon 57: "Stone Wall Circuit"</Text>

<Text style = {styles.walkthroughInstruction}>At the Second Courtyard there is a Spark Pyloin with a Key near it. Get the key and return to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 58: "Bowser's Kingdom Master Cup"</Text>

<Text style = {styles.walkthroughInstruction}>Beat Koopa Freerunning again with faster racers. </Text>

<Text style = {styles.topicTitleText}>Moon 59: "Searching Hexagon Tower"</Text>

<Text style = {styles.walkthroughInstruction}>To the west of the Main Courtyard is a building that can only be reached with a slingshot. There is a Moon Pipe that leads you to a bonus area where you have to collect five moon shards using Parabones. </Text>

<Text style = {styles.topicTitleText}>Moon 60: "Center of Hexagon Tower"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area. There is a key at the bottom of the tower that unlocks a moon at the top. </Text>

<Text style = {styles.topicTitleText}>Moon 61: "Climb the Wooden Tower"</Text>

<Text style = {styles.walkthroughInstruction}>To the east of the Main Courtyard is a building that can only be reached with a slingshot. There is a Moon Pipe that leads you to a bonus area where you have to navigate a wooden tower using a Pokio. </Text>

<Text style = {styles.topicTitleText}>Moon 62: "Poke the Wooden Tower"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area, there are some hidden crates behind the first wall. </Text>

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
  gameTitleText:{
    color:'white',
    fontFamily:'bold',
    fontSize:20
  },
  gameDiscription:{
    color:'white',
    marginTop:10,
    alignSelf:'center'
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
