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

export default class SnowKingdomMoons extends React.Component {

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
source = {require('../assets/SMOWalkthrough9.jpg')}
style = {{width:250,height:150}}
/>


<Text style = {styles.gameDiscription}>The Snow Kingdom is one of two kingdoms you can choose from as your ninth stop in Super Mario Odyssey. This kingdom is being terrorized by a dangerous blizzard. And nobody can gain access to the Shiverian Races. You must go through all the challenges and claim the trophy to complete the Kingdom. </Text>

<Text style = {styles.topicTitleText}>Moon 1: "The Icicle Barrier"</Text>

<Text style = {styles.walkthroughInstruction}>It is at the end of the Ice Grotto. </Text>

<Text style = {styles.topicTitleText}>Moon 2: "The Ice Wall Barrier"</Text>

<Text style = {styles.walkthroughInstruction}>In the Hollow Crevasse area, you must collect all 5 moon shards. </Text>

<Text style = {styles.topicTitleText}>Moon 3: "The Gusty Barrier"</Text>

<Text style = {styles.walkthroughInstruction}>In the Wind-Chill Cavern, you must use the Ty-foo to blow off all the Spinies on the last platform. </Text>

<Text style = {styles.topicTitleText}>Moon 4: "The Snowy Mountain Barrier"</Text>

<Text style = {styles.walkthroughInstruction}>You must defeat Rango again on top of the Snowy Mountain. </Text>

<Text style = {styles.topicTitleText}>Moon 5: "The Bound Bowl Grand Prix"</Text>

<Text style = {styles.walkthroughInstruction}>Get the first place in this race to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 6: "Entrance to Shiveria"</Text>

<Text style = {styles.walkthroughInstruction}>The moon is on top of some boxes at the enterance to the town. </Text>

<Text style = {styles.topicTitleText}>Moon 7: "Behind Snowy Mountain"</Text>

<Text style = {styles.walkthroughInstruction}>In the Snowy Mountain, there is a moon at the end of a secret path. </Text>

<Text style = {styles.topicTitleText}>Moon 8: "Shining in the Snow in Town"</Text>

<Text style = {styles.walkthroughInstruction}>At the top level of Shiveria, there is a pile of snow that is glowing. Ground pound on it to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 9: "Atop a Blustery Arch"</Text>

<Text style = {styles.walkthroughInstruction}>In Wind-Chill Cavern there is a X on top of an arch. Ground pound it to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 10: "Caught Hopping in the Snow!"</Text>

<Text style = {styles.walkthroughInstruction}>Southeast of the Odyssey, there is a rabbit that gives a moon when caught. </Text>

<Text style = {styles.topicTitleText}>Moon 11: "The Shiverian Treasure Chest"</Text>

<Text style = {styles.walkthroughInstruction}>Near moon 8, there is a hole that leads to a chest with the moon in it. </Text>

<Text style = {styles.topicTitleText}>Moon 12: "Treasure in the Ice Wall"</Text>

<Text style = {styles.walkthroughInstruction}>In the Hollow Crevasse, there is a indent in the wall that Mario can climb. At the end is a chest with the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 13: "Snow Kingdom Timer Challenge 1"</Text>

<Text style = {styles.walkthroughInstruction}>In the northeast there is a starecrow. Complete the challenge by going across some circular ice platforms. </Text>

<Text style = {styles.topicTitleText}>Moon 14: "Snow Kingdom Timer Challenge 2"</Text>

<Text style = {styles.walkthroughInstruction}>In the southeast there is a starecrow. Complete the challenge by climbing up some poles in the time limit. </Text>

<Text style = {styles.topicTitleText}>Moon 15: "Moon Shards in the Snow"</Text>

<Text style = {styles.walkthroughInstruction}>In the outside area, there are 5 moon shards to collect. </Text>

<Text style = {styles.topicTitleText}>Moon 16: "Taking Notes: Snow Path Dash"</Text>

<Text style = {styles.walkthroughInstruction}>Above the Ice Well there is a music note that will start the challenge. Collect all the notes in the time limit. </Text>

<Text style = {styles.topicTitleText}>Moon 17: "Fishing in the Glacier!"</Text>

<Text style = {styles.walkthroughInstruction}>Capture a Lakitu, and fish up a Big Cheep Cheep to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 18: "Ice-Dodging Goomba Stack"</Text>

<Text style = {styles.walkthroughInstruction}>In the Icicle Cavern, you need a Goomba Stack of 4. Press the Goomba Switch with that stack to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 19: "Captain Toad is Chilly!"</Text>

<Text style = {styles.walkthroughInstruction}>To the north, there is a hole of snow with Captain Toad in it. Talk to him to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 20: "I'm Not Cold!"</Text>

<Text style = {styles.walkthroughInstruction}>UIn Shiveria there is a Shiverian who will give you the moon for talking to him in Boxer Shorts. </Text>

<Text style = {styles.topicTitleText}>Moon 21: "Shopping in Shiveria"</Text>

<Text style = {styles.walkthroughInstruction}>In the town, there is a Crazy Cap shop where you can bu the moon for 100 coins. </Text>

<Text style = {styles.topicTitleText}>Moon 22: "Walking on Ice!"</Text>

<Text style = {styles.walkthroughInstruction}>In the Corner of The Freezing Sea there is a door that leads to a Koopa Troopa. He will challenge you to Trace-Walking. Get at least 80 points to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 23: "Snowline Circuit Class S"</Text>

<Text style = {styles.walkthroughInstruction}>Do Moon 5 again with an added challenge. </Text>

<Text style = {styles.topicTitleText}>Moon 24: "Dashing Over Cold Water!"</Text>

<Text style = {styles.walkthroughInstruction}>To the west in the outside area there is a door that leads to a bonus area. You need Rocket Flowers to dash your way through the area. </Text>

<Text style = {styles.topicTitleText}>Moon 25: "Dashing Above and Beyond!"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area. Dash past the first moons and further up the ramp to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 26: "Jump 'n' Swim in the Freezing Water"</Text>

<Text style = {styles.walkthroughInstruction}>North of the Odyssey there is another door with a starecrow. You have to make it through the cave with freezing water without Cappy. </Text>

<Text style = {styles.topicTitleText}>Moon 27: "Freezing Water Near the Ceiling"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area, you must jump on top of the last block of freezing water, This will lead you to some poles that lead to the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 28: "Blowing and Sliding"</Text>

<Text style = {styles.walkthroughInstruction}>Get a Ty-foo and head to the east of the outside area. Blow a block to reveal a door and enter. There you must blow a staircase until you can climb up to the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 29: "Moon Shards in the Cold Room"</Text>

<Text style = {styles.walkthroughInstruction}>In the town, there is a Shiverian next to a locked door. They will only let you enter if you are wearing the Snow Hood and Suit. There is a 8-bit section where you need to get Moon Shards. </Text>

<Text style = {styles.topicTitleText}>Moon 30: "Slip Behind the Ice"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous section, next to the enterence/exit pipe there are some hidden blocks which will lead up to the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 31: "Spinning Above the Clouds"</Text>

<Text style = {styles.walkthroughInstruction}>Above the Ice Well is a frozen seed. Bring it to the pot next to the Odyssey to grow a beanstalk. Go up to the beanstalk to find another secret area. You must go across many hat trampolines to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 32: "High-Altitude Spinning"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area, you must float to the hat trampoline with the moon near it from the side. </Text>

<Text style = {styles.topicTitleText}>NOTE: These Moons can only be obtained after beating Bowser in the Moon Kingdom except for moon 34.</Text>

<Text style = {styles.topicTitleText}>Moon 33: "Secret Path to Shiveria!"</Text>

<Text style = {styles.walkthroughInstruction}>Find a secret painting in either Bowser's Kingdom or the Mushroom Kingdom. You will be taken to a cliff in the main area with the moon on it. </Text>

<Text style = {styles.topicTitleText}>Moon 34: "Found with Snow Kingdom Art"</Text>

<Text style = {styles.walkthroughInstruction}>To the left of the enterence to the Shiverian Town there is some Hint Art that leads you to the Lost Kingdom. Ground pound the spot on that art and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 35: "Snow Kingdom Regular Cup"</Text>

<Text style = {styles.walkthroughInstruction}>At the northwest corner of the kingdom, there is a Koopa Troopa who wants to do Koopa Freerunning. Win the race to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 36: "Hat-and-Seek in the Snow"</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 37: "Peach in the Snow Kingdom"</Text>

<Text style = {styles.walkthroughInstruction}>Near the bounding enterance, you can find Peach and Tiara. Talk to them and get the moon. </Text>

<Text style = {styles.topicTitleText}>NOTE: These Moons can only be obtained by breaking open the Moon Rock in the kingdom.</Text>

<Text style = {styles.topicTitleText}>Moon 38: "Shining on High"</Text>

<Text style = {styles.walkthroughInstruction}>The moon is right above the Odyssey. You can jump from the Odyssey to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 39: "Above the Freezing Fish Pond"</Text>

<Text style = {styles.walkthroughInstruction}>To the south, you can find the moon above a freezing pool of water. </Text>

<Text style = {styles.topicTitleText}>Moon 40: "Ice Floe Swimming"</Text>

<Text style = {styles.walkthroughInstruction}>Near moon 39, you can use a Snow Cheep Cheep to go into a pool and get the moon at the bottom. </Text>

<Text style = {styles.topicTitleText}>Moon 41: "Icy Jump Challenge"</Text>

<Text style = {styles.walkthroughInstruction}>In the Wind-Chill Cavern, you must get on top of a moving block to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 42: "Forgotten in the Holding Room"</Text>

<Text style = {styles.walkthroughInstruction}>In the waiting room, the moon is in a stack of breakable crates. </Text>

<Text style = {styles.topicTitleText}>Moon 43: "It Popped Out of the Ice"</Text>

<Text style = {styles.walkthroughInstruction}>The moon is hidden in one of the tall blocks of ice near the Ice Well.</Text>

<Text style = {styles.topicTitleText}>Moon 44: "Deep in the Cold, Cold Water"</Text>

<Text style = {styles.walkthroughInstruction}>In a deep pool of freezing water, the moon can be dug up and obtained. </Text>

<Text style = {styles.topicTitleText}>Moon 45: "Water Pooling in the Crevasse"</Text>

<Text style = {styles.walkthroughInstruction}>In the Hollow Crevasse, the moon is to the right in the pool of freezing water. </Text>

<Text style = {styles.topicTitleText}>Moon 46: "Squirming Under Ice"</Text>

<Text style = {styles.walkthroughInstruction}>In Rango's arena, there is a moving bump that when jumped on grants the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 47: "Snow Kingdom Timer Challenge 3"</Text>

<Text style = {styles.walkthroughInstruction}>At the Corner of the Frozen Sea, there is a P Switch that will spawn the moon. Use a Snow Cheep Cheep to get it fast enough. </Text>

<Text style = {styles.topicTitleText}>Moon 48: "Stacked-Up Ice Climb"</Text>

<Text style = {styles.walkthroughInstruction}>In the Icicle Cavern you must get a Goomba Stack of at least 10 and press the corresponding Goomba Switch. </Text>

<Text style = {styles.topicTitleText}>Moon 49: "I Met a Snow Cheep Cheep!"</Text>

<Text style = {styles.walkthroughInstruction}>To the west of the Ice Well there is a hat ghost that wants to meet a Snow Cheep Cheep. Bring one to him and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 50: "Even More Walking on Ice!"</Text>

<Text style = {styles.walkthroughInstruction}>Do the Trace-Walking minigame with at least 90 points. </Text>

<Text style = {styles.topicTitleText}>Moon 51: "Snow Kingdom Master Cup"</Text>

<Text style = {styles.walkthroughInstruction}>Beat Koopa Freerunning again with faster racers. </Text>

<Text style = {styles.topicTitleText}>Moon 52: "Iceburn Circuit Class A"</Text>

<Text style = {styles.walkthroughInstruction}>Behind where the Moon Rock was is another racetrack. Win first place to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 53: "Iceburn Circuit Class S"</Text>

<Text style = {styles.walkthroughInstruction}>Do moon 52 again with an added challenge. </Text>

<Text style = {styles.topicTitleText}>Moon 54: "Running the Flower Road"</Text>

<Text style = {styles.walkthroughInstruction}>Above the Ice Well there is a Moon Pipe that will take you to a bonus area. Here you must make flower roads while avoiding Banzai Bills. </Text>

<Text style = {styles.topicTitleText}>Moon 55: "Looking Back on the Flower Road"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area, the moon is behind the first Banzai Bill cannon. </Text>



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
