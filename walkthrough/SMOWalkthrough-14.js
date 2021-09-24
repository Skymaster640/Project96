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

export default class MoonKingdomMoons extends React.Component {

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
source = {require('../assets/SMOWalkthrough14.png')}
style = {{width:250,height:150}}
/>


<Text style = {styles.gameDiscription}>The Moon Kingdom is your last stop in Super Mario Odyssey. The wedding between Peach and Bowser has almost begun. And its Mario's job to put a stop to it. You must travel through the kingdom, through the Moon's cave. Defeat Madame Broode again, and stop Bowser once and for all. </Text>

<Text style = {styles.topicTitleText}>Moon 1: "Shining Above the Moon"</Text>

<Text style = {styles.walkthroughInstruction}>Next to the Odyssey, there is a crater with three hidden blocks. Get on top of the third hidden block to reach the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 2: "Along the Cliff Face"</Text>

<Text style = {styles.walkthroughInstruction}>To the left of the Odyssey is a lower platform that leads to a 8-bit section. At the end is the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 3: "The Tip of a White Spire"</Text>

<Text style = {styles.walkthroughInstruction}>On top of the Wedding Hall is a spire that is glowing at the tip. Throw Cappy on it to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 4: "Rolling Rock on the Moon"</Text>

<Text style = {styles.walkthroughInstruction}>On one of the large craters, there is a rock that you can break to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 5: "Caught Hopping on the Moon!"</Text>

<Text style = {styles.walkthroughInstruction}>At the southeast side of the kingdom is a rabbit that gives a moon when caught. </Text>

<Text style = {styles.topicTitleText}>Moon 6: "Cliffside Treasure Chest"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Ringing-Bells Plateau is a platform across a large gap with a chest with a moon in it. </Text>

<Text style = {styles.topicTitleText}>Moon 7: "Moon Kingdom Timer Challenge 1"</Text>

<Text style = {styles.walkthroughInstruction}>At the northeast side of the kingdom is a starecrow that you throw Cappy on to start the challenge. Go across the platforms to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 8: "Taking Notes: On the Moon's Surface"</Text>

<Text style = {styles.walkthroughInstruction}>To the far right of the Ringing-Bells Plateau is a music note that has you collect all the notes across a large gap to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 9: "Under the Bowser Statue"</Text>

<Text style = {styles.walkthroughInstruction}>At the beginning of the Moon Cave, there is a Bowser Statue you can capture. Move it and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 10: "In a Hole in the Magma"</Text>

<Text style = {styles.walkthroughInstruction}>Near a Spark Pylon in the Moon Cave is a moon in a hole of lava. Capture a Parabones and fly to it to obtain it. </Text>

<Text style = {styles.topicTitleText}>Moon 11: "Around the Barrier Wall"</Text>

<Text style = {styles.walkthroughInstruction}>In the Banzai Bill section of the Moon Cave, the moon is behind the second wall. </Text>

<Text style = {styles.topicTitleText}>Moon 12: "On Top of the Cannon"</Text>

<Text style = {styles.walkthroughInstruction}>At the beginning of the Banzai Bill section of the Moon Cave, ground pound on top of the Banzai Bill launcher to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 13: "Fly to the Treasure Chest and Back"</Text>

<Text style = {styles.walkthroughInstruction}>In the Moon Cave, capture a Banzai Bill and fly back to the beginning of the cave. There is a newly accessible treasure chest with the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 14: "Up in the Rafters"</Text>

<Text style = {styles.walkthroughInstruction}>On top of the Wedding Hall, there is a hole under the bell that leads to a higher area inside the Hall. The moon can be found here. </Text>

<Text style = {styles.topicTitleText}>NOTE: These Moons can only be obtained after beating Bowser in the Moon Kingdom.</Text>

<Text style = {styles.topicTitleText}>Moon 15: "Sneaking Around in the Crater"</Text>

<Text style = {styles.walkthroughInstruction}>In a large crater, there is a bump inside the crater that once you jump on it you get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 16: "Found on the Moon, Good Dog!"</Text>

<Text style = {styles.walkthroughInstruction}>At the Crazy Cap there is a dog that will lead you to the moon if you follow it enough. </Text>

<Text style = {styles.topicTitleText}>Moon 17: "Moon Shards on the Moon"</Text>

<Text style = {styles.walkthroughInstruction}>At the Wedding Hall, there are 5 Moon Shards around the roof of the building. </Text>

<Text style = {styles.topicTitleText}>Moon 18: "Moon Quiz: Amazing!"</Text>

<Text style = {styles.walkthroughInstruction}>Talk to the Sphynx and complete all of his riddles to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 19: "Thanks, Captain Toad!"</Text>

<Text style = {styles.walkthroughInstruction}>Behind the Odyssey, you will find Captain Toad alongside the crowd of people. Talk to him and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 20: "Shopping in Honeylune Ridge"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Odyssey, there is a Crazy Cap shop where you can buy the moon for 100 coins. </Text>

<Text style = {styles.topicTitleText}>Moon 21: "Walking on the Moon!"</Text>

<Text style = {styles.walkthroughInstruction}>Near a large crater and some Moonsnakes, there is a Koopa Troopa who will invite you to the Trace-Walking minigame. get at least 80 points to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 22: "Moon Kingdom Regular Cup"</Text>

<Text style = {styles.walkthroughInstruction}>At the Wedding Hall, there is a Koopa Troopa who will invite you to Koopa Freerunning. Win the race and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 23: "Doctor in the House"</Text>

<Text style = {styles.walkthroughInstruction}>Inside the Wedding Hall, there is a Shiverian that will give you a moon if you speak to him while wearing the Doctor costume. </Text>

<Text style = {styles.topicTitleText}>Moon 24: "Sphynx's Hidden Vault"</Text>

<Text style = {styles.walkthroughInstruction}>Go behind the enterance to the Moon Cave and you will find the Sphynx. Complete one of his riddles to enter a secret room with the moon in it. </Text>

<Text style = {styles.topicTitleText}>Moon 25: "A Tourist in the Moon Kingdom!"</Text>

<Text style = {styles.walkthroughInstruction}>Near the crowd of people next to the Odyssey, there is a Taxi driver who will give you a moon if you talk to them. </Text>

<Text style = {styles.topicTitleText}>Moon 26: "Peach in the Moon Kingdom"</Text>

<Text style = {styles.walkthroughInstruction}>On the Wedding Hall, you will find Peach and Tiara. Talk to them and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 27: "Found with Moon Kingdom Art"</Text>

<Text style = {styles.walkthroughInstruction}>In the Wedding Hall, there is a piece of Hint Art on the right wall that leads you to the Wooded Kingdom. Ground pound the spot on the art to get the moon. </Text>

<Text style = {styles.topicTitleText}>NOTE: These Moons can only be obtained by breaking open the Moon Rock in the kingdom.</Text>

<Text style = {styles.topicTitleText}>Moon 28: "Mysterious Flying Object"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Wedding Hall, there is a glowing UFO-like creature. Throw Cappy at it to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 29: "Hidden on the Side of the Cliff"</Text>

<Text style = {styles.walkthroughInstruction}>The moon can be found above the Sphynx, and you must get it from above. </Text>

<Text style = {styles.topicTitleText}>Moon 30: "Jumping High as a Frog"</Text>

<Text style = {styles.walkthroughInstruction}>Bring a Frog to the easternmost platform in the kingdom, then do a high jump to reach the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 31: "Moon Kingdom Timer Challenge 2"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Ringing-Bells Plateau, there is a starecrow that when Cappy is thrown on it will start the challenge. Jump across the moon pillars to reach the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 32: "Walking on the Moon: Again!"</Text>

<Text style = {styles.walkthroughInstruction}>Complete the Trace-Walking minigame with at least 90 points. </Text>

<Text style = {styles.topicTitleText}>Moon 33: "Moon Kingdom Master Cup"</Text>

<Text style = {styles.walkthroughInstruction}>Complete Koopa Freerunning again but with faster racers. </Text>

<Text style = {styles.topicTitleText}>Moon 34: "Taking Notes: In Low Gravity"</Text>

<Text style = {styles.walkthroughInstruction}>Return to the 8-bit area, but now you are able to collect some music notes to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 35: "Center of the Galaxy"</Text>

<Text style = {styles.walkthroughInstruction}>On top of the cliff near the Odyssey, there is a Moon Pipe that will take you to an area with a 8-bit section. You must reach the center of this section to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 36: "Edge of the Galaxy"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area, you must make a precise jump from the 2-D Moon onto another 2-D moon. And there is another moon there you can collect. </Text>

<Text style = {styles.topicTitleText}>Moon 37: "Navigating Giant Swings"</Text>

<Text style = {styles.walkthroughInstruction}>On top of another cliff near the Odyssey is another Moon Pipe. In this bonus area you must jump across many blue swings. </Text>

<Text style = {styles.topicTitleText}>Moon 38: "A Swing on Top of a Swing"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area, after the second Astro-Lanceur is a swing with another swing above it. Get on top of the latter swing and there is the moon. </Text>

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
