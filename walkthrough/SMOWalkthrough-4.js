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

export default class LakeKingdomMoons extends React.Component {

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
source = {require('../assets/SMOWalkthrough4.jpg')}
style = {{width:250,height:150}}
/>


<Text style = {styles.gameDiscription}>The Lake Kingdom is one of 2 kingdoms you can choose to be your fourth kingdom in Super Mario Odyssey. It is a kingdom filled with water, having you to manage your air. The main goal of the kingdom is to defeat Rango at the end of the kingdom. </Text>

<Text style = {styles.topicTitleText}>Moon 1: "Broodals Over the Lake"</Text>

<Text style = {styles.walkthroughInstruction}>You get the moon by defeating Rango. </Text>

<Text style = {styles.topicTitleText}>Moon 2: "Dorrie-Back Rider"</Text>

<Text style = {styles.walkthroughInstruction}>In the second lake, there is a moon on Dorrie's back. </Text>

<Text style = {styles.topicTitleText}>Moon 3: "Cheep Cheep Crossing"</Text>

<Text style = {styles.walkthroughInstruction}>Above the Underwater Entrance, there is a series of alcoves being guarded by Cheep Cheeps. In one of them is the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 4: "End of the Hidden Passage"</Text>

<Text style = {styles.walkthroughInstruction}>In the courtyard, there is a bouncy flower that will lead you to a higher platform. There is a zipper that can be captured to reveal a secret path to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 5: "What's in the Box?"</Text>

<Text style = {styles.walkthroughInstruction}>At the top of the Water Plaza, there is a few boxes, one of which contains the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 6: "On the Lakeshore"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Odyssey, there is a glowing spot in the sand that gives the moon when ground pounded. </Text>

<Text style = {styles.topicTitleText}>Moon 7: "From the Broken Pillar"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Water Plaza entrance, there is a glowing spot on a pillar that gives the moon when ground pounded. </Text>

<Text style = {styles.topicTitleText}>Moon 8: "Treasure in the Spiky Waterway"</Text>

<Text style = {styles.walkthroughInstruction}>At the start of the kingdom, there is a path filled with spikes, it has a chest at the end with the moon inside. </Text>

<Text style = {styles.topicTitleText}>Moon 9: "Lake Gardening: Spiky Passage Seed"</Text>

<Text style = {styles.walkthroughInstruction}>In the same spiky tunnel, there is a seed that can be brought to the Water Plaza entrance to grow in a flower pot. </Text>

<Text style = {styles.topicTitleText}>Moon 10: "Lake Kingdom Timer Challenge 1"</Text>

<Text style = {styles.walkthroughInstruction}>At the Underwater Entrance, there is a platform with a starecrow on it. Throw Cappy to begin the challenge. Travel across platforms to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 11: "Lake Kingdom Timer Challenge 2"</Text>

<Text style = {styles.walkthroughInstruction}>Return to Rango's arena, there is another starecrow to begin the challenge on. Throw Cappy and jump on top of the platforms to reach the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 12: "Moon Shards in the Lake"</Text>

<Text style = {styles.walkthroughInstruction}>At the large lake, there are 5 moon shards. Collect them and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 13: "Taking Notes: Dive and Swim"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Odyssey, there is a small lake with music notes in it. Collect them all to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 14: "Taking Notes: In the Cliffside"</Text>

<Text style = {styles.walkthroughInstruction}>At the Underwater Entrance, there is a 8-bit Pipe you can enter to find a secret 8-bit section. Hop on the platform and collect all the notes to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 15: "Lake Fishing"</Text>

<Text style = {styles.walkthroughInstruction}>At the Courtyard, capture Lakitu and fish up the big Cheep Cheep to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 16: "I Met a Lake Cheep Cheep!"</Text>

<Text style = {styles.walkthroughInstruction}>Capture a Cheep Cheep, and bring it to the Lochlady on a lone platform with a bubble underneath it. Put it into the pond and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 17: "Our Secret Little Room"</Text>

<Text style = {styles.walkthroughInstruction}>At the Water Plaza, there is a secret alcove you can enter to find a Locklady. Talk to her and the moon is yours. </Text>

<Text style = {styles.topicTitleText}>Moon 18: "Let's Go Swimming, Captain Toad!"</Text>

<Text style = {styles.walkthroughInstruction}>Bring a Cheep Cheep to the pond in the middle of the Water Plaza, and swim down to the bottom to find Captain Toad. Talk to him and you get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 19: "Shopping in Lake Lamode"</Text>

<Text style = {styles.walkthroughInstruction}>In the Water Plaza, enter the Crazy Cap shop and buy the moon for 100 coins. </Text>

<Text style = {styles.topicTitleText}>Moon 20: "A Successful Repair Job"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Water Plaza, there is a door which brings you to a bonus area where you need to solve the puzzle to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 21: "I Feel Underdressed"</Text>

<Text style = {styles.walkthroughInstruction}>At the Water Plaza, there is a Lochlady at a locked door. Wear the Swimwear outfit and talk to her to open the door and go inside to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 22: "Unzip the Chasm"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Water Plaza, there is a Zipper underwater, unzip it and enter the door to get to a bonus area where you need to use zippers to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 23: "Super-Secret Zipper"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous section, you need to find a secret zipper to make a bridge to the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 24: "Jump, Grab, Cling, and Climb"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Water Plaza, there is another door that will lead you to another bonus area with the moon at the end. </Text>

<Text style = {styles.topicTitleText}>Moon 25: "Jump, Grab, and Climb Some More"</Text>

<Text style = {styles.walkthroughInstruction}>Near the end of the previous area, find a bouncy flower that will get you on top of the wall with the moon in a chest. </Text>

<Text style = {styles.topicTitleText}>Moon 26: "Secret Path to Lake Lamode!"</Text>

<Text style = {styles.walkthroughInstruction}>Find a secret painting in either the Snow, Seaside, or Metro Kingdoms to reach a ledge near Rango's arena with the moon there. </Text>

<Text style = {styles.topicTitleText}>Moon 27: "Found with Lake Kingdom Art"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Odyssey, there are some stairs leading to the courtyard. There is some hint art that leads you to the Cascade Kingdom. Where near the Odyssey there, there are some fossils that you can ground pound near the one in the picture to get the moon. </Text>

<Text style = {styles.topicTitleText}>NOTE: These Moons can only be obtained after beating Bowser in the Moon Kingdom.</Text>

<Text style = {styles.topicTitleText}>Moon 28: "Taxi Flying Through Lake Lamode"</Text>

<Text style = {styles.walkthroughInstruction}>Find some binocuclars and look up in the sky to find the taxi flying and look at it long enough for the moon to appear. </Text>

<Text style = {styles.topicTitleText}>Moon 29: "That Trendy "Pirate" Look"</Text>

<Text style = {styles.walkthroughInstruction}>At the Water Plaza, there are 3 Lockladys who call themselves the Style Sisters. Talk to the one in the middle while wearing the Pirate costume to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 30: "Space Is "In" Right Now"</Text>

<Text style = {styles.walkthroughInstruction}>Back to the Style Sisters, talk to the one on the left while wearing the Astronaut costume to get another moon. </Text>

<Text style = {styles.topicTitleText}>Moon 31: "That "Old West" Style"</Text>

<Text style = {styles.walkthroughInstruction}>Talk to the Style Sister on the right while wearing the Cowboy costume to get another moon. </Text>

<Text style = {styles.topicTitleText}>Moon 32: "Lake Kingdom Regular Cup"</Text>

<Text style = {styles.walkthroughInstruction}>At the start of the kingdom, there is a Koopa Troopa who will invite you to Koopa Freerunning. Win the race to get the moon.  </Text>

<Text style = {styles.topicTitleText}>Moon 33: "Peach in the Lake Kingdom"</Text>

<Text style = {styles.walkthroughInstruction}>At Rango's arena, you can find Peach and Tiara and if you speak with them, you will get another moon. </Text>

<Text style = {styles.topicTitleText}>NOTE: These Moons can only be obtained by breaking open the Moon Rock in the kingdom.</Text>

<Text style = {styles.topicTitleText}>Moon 34: "Behind the Floodgate"</Text>

<Text style = {styles.walkthroughInstruction}>North of the Odyssey, you can use the zipper to get to the other side of the floodgate and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 35: "High-Flying Leap"</Text>

<Text style = {styles.walkthroughInstruction}>Southeast of the Water Plaza, there is a bouncy flower that you can use to get the moon from above. </Text>

<Text style = {styles.topicTitleText}>Moon 36: "Deep, Deep Down"</Text>

<Text style = {styles.walkthroughInstruction}>Go down to where Captain Toad's campsite is. The moon is at the front wall across from the campsite. </Text>

<Text style = {styles.topicTitleText}>Moon 37: "Rooftop of the Water Plaza"</Text>

<Text style = {styles.walkthroughInstruction}>On top of the Water Plaza, there is a platform you can ground pound to spawn the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 38: "Bird Traveling Over the Lake"</Text>

<Text style = {styles.walkthroughInstruction}>A bird flying around the east side of the kingdom will give a moon when caught. </Text>

<Text style = {styles.topicTitleText}>Moon 39: "Love by the Lake"</Text>

<Text style = {styles.walkthroughInstruction}>Capture a Goomba in the Courtyard and take them to the Odyssey where Goombette will be. The moon will appear after bringing the Goomba to Goombette. </Text>

<Text style = {styles.topicTitleText}>Moon 40: "Lake Kingdom Master Cup"</Text>

<Text style = {styles.walkthroughInstruction}>Complete Koopa Freerunning again with faster racers. </Text>

<Text style = {styles.topicTitleText}>Moon 41: "Waves of Poison: Hoppin' Over"</Text>

<Text style = {styles.walkthroughInstruction}>Next to the Odyssey, there is a Moon Pipe which brings you to a bonus area with rising and falling waves of poison that you need frogs to jump over. </Text>

<Text style = {styles.topicTitleText}>Moon 42: "Waves of Poison: Hop to It!"</Text>

<Text style = {styles.walkthroughInstruction}>There are some platforms to the left of moon 41, at the end of those platforms is the other moon for this area. </Text>

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
