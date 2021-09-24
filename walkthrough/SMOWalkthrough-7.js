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

export default class LostKingdomMoons extends React.Component {

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
source = {require('../assets/SMOWalkthrough7.jpg')}
style = {{width:250,height:150}}
/>


<Text style = {styles.gameDiscription}>The Lost Kingdom is where you go after fighting Bowser in the Cloud Kingdom. He shot down the Odyssey, and now you must repair it and rescue Cappy from Klepto. </Text>

<Text style = {styles.topicTitleText}>Moon 1: "Atop a Propeller Pillar"</Text>

<Text style = {styles.walkthroughInstruction}>You will find the moon just chilling on top of a rotating platform near the Swamp Hill. </Text>

<Text style = {styles.topicTitleText}>Moon 2: "Below the Cliff's Edge"</Text>

<Text style = {styles.walkthroughInstruction}>On the northeastern side of the kingdom, there is a moon on a lower ledge. </Text>

<Text style = {styles.topicTitleText}>Moon 3: "Inside the Stone Cage"</Text>

<Text style = {styles.walkthroughInstruction}>Near the start of the kingdom, there is a moon behind stone bars. Ground pound the pillar next to it to give you access. </Text>

<Text style = {styles.topicTitleText}>Moon 4: "On a Tree in the Swamp"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Swamp Hill, capture a Tropical Wiggler and bring it behind the tree with the moon on it. Then stretch from the platform to the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 5: "Over the Fuzzies, Above the Swamp"</Text>

<Text style = {styles.walkthroughInstruction}>At the Mountainside Platform, bring a Tropical Wiggler over here to stretch to the moving platform and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 6: "Avoiding Fuzzies Inside the Wall"</Text>

<Text style = {styles.walkthroughInstruction}>At the same area, go into the door to enter the 8-bit section. Ride on the moving platforms to reach the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 7: "Inside the Rising Stone Pillar"</Text>

<Text style = {styles.walkthroughInstruction}>Head to the stairs leading up to the Swamp HIll, and ground Pound on the highest step to expose the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 8: "Enjoying the View of Forgotten Isle"</Text>

<Text style = {styles.walkthroughInstruction}>Go to the Crazy Cap, and climb the tree that is right next to it. </Text>

<Text style = {styles.topicTitleText}>Moon 9: "On the Mountain Road"</Text>

<Text style = {styles.walkthroughInstruction}>On your way to the Crazy Cap on top of the central mountain, you can find the moon on the path. </Text>

<Text style = {styles.topicTitleText}>Moon 10: "A Propeller Pillar's Secret"</Text>

<Text style = {styles.walkthroughInstruction}>On the first propeller pillar, ground pound the middle of it to spawn the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 11: "Wrecked Rock Block"</Text>

<Text style = {styles.walkthroughInstruction}>In the northeastern corner of the kingdom, lure a Trapeetle to launch itself against the glowing stone. </Text>

<Text style = {styles.topicTitleText}>Moon 12: "A Butterfly's Treasure"</Text>

<Text style = {styles.walkthroughInstruction}>Close to the top of the central mountain, there will be a glowing butterfly. Hit it quickly to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 13: "Caught Hopping in the Jungle!"</Text>

<Text style = {styles.walkthroughInstruction}>At the same location as moon 10, there will be a rabbit that will give you a moon if you catch it. </Text>

<Text style = {styles.topicTitleText}>Moon 14: "Cave Gardening"</Text>

<Text style = {styles.walkthroughInstruction}>Near the ground pound switch on the way up the mountain, there will be a little cave where you can make all the flowers bloom. Doing this grants you the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 15: "Moon Shards in the Jungle"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Mountainside Platform, there will be 5 moon shards that you will need Tropical Wigglers to get. </Text>

<Text style = {styles.topicTitleText}>Moon 16: "Peeking Out from Under the Bridge"</Text>

<Text style = {styles.walkthroughInstruction}>Under the stone bridge at the beginning of the kingdom, bring a Tropical Wiggler to stretch under the bridge to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 17: "Twist 'n' Turn-Up Treasure"</Text>

<Text style = {styles.walkthroughInstruction}>Near the start of the kingdom there will be aledge on a lower elevation. Bring a Tropical Wiggler here so you can stretch over to the key in the alcove and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 18: "Soaring Over Forgotten Isle!"</Text>

<Text style = {styles.walkthroughInstruction}>Go to the Crazy Cap and capture Glydon. Then glide over to the island in the distance. On the island is the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 19: "The Caged Gold"</Text>

<Text style = {styles.walkthroughInstruction}>You will see the moon in a cage. Get a Trapeetle from the ledge to the north and have them launched over to the cage. Freeing the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 20: "Get Some Rest, Captain Toad"</Text>

<Text style = {styles.walkthroughInstruction}>On the north side of the kingdom, there will be an opening into a cave. You require a Tropical Wiggler to reach this. Inside is Captain Toad, who will give you a moon for speaking to him. </Text>

<Text style = {styles.topicTitleText}>Moon 21: "Shopping on Forgotten Isle"</Text>

<Text style = {styles.walkthroughInstruction}>On top of the central mountain is the Crazy Cap Shop, where you can buy the moon for 100 coins. </Text>

<Text style = {styles.topicTitleText}>NOTE: These Moons can only be obtained after beating Bowser in the Moon Kingdom.</Text>

<Text style = {styles.topicTitleText}>Moon 22: "Taxi Flying Through Forgotten Isle"</Text>

<Text style = {styles.walkthroughInstruction}>Capture a pair of binoculars, and look up in the sky until you see a flying Taxi. Look at it long enough for the moon to appear. </Text>

<Text style = {styles.topicTitleText}>Moon 23: "I Met a Tropical Wiggler!"</Text>

<Text style = {styles.walkthroughInstruction}>On the wall east of the Swamp Hill, bring a Tropical Wiggler to the hat ghost for them to give you a moon. </Text>

<Text style = {styles.topicTitleText}>Moon 24: "Lost Kingdom Regular Cup"</Text>

<Text style = {styles.walkthroughInstruction}>Next to the Odyssey, there is a Koopa Troopa who will start Koopa Freerunning. Win the race to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 25: "Peach in the Lost Kingdom"</Text>

<Text style = {styles.walkthroughInstruction}>Next to the Crazy Cap, you will find Peach and Tiara. Talk to them and get the moon. </Text>

<Text style = {styles.topicTitleText}>NOTE: These Moons can only be obtained by breaking open the Moon Rock in the kingdom.</Text>

<Text style = {styles.topicTitleText}>Moon 26: "The Shining Fruit"</Text>

<Text style = {styles.walkthroughInstruction}>You will find the moon hanging from a tree near the Odyssey. </Text>

<Text style = {styles.topicTitleText}>Moon 27: "Jump Down to the Top of a Tree"</Text>

<Text style = {styles.walkthroughInstruction}>You will find the moon on top of a tree stump near the Swamp Hill. Use Glydon to reach it. </Text>

<Text style = {styles.topicTitleText}>Moon 28: "Line It Up, Blow It Up"</Text>

<Text style = {styles.walkthroughInstruction}>Near where Klepto was, there is a stack of blocks with one glowing. You must get a Trapeetle to destroy it and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 29: "Taking Notes: Stretch and Shrink"</Text>

<Text style = {styles.walkthroughInstruction}>On the western Propeller Pillar there is a music note that will start the challenge. Use a Tropical Wiggler to collect all the notes. </Text>

<Text style = {styles.topicTitleText}>Moon 30: "Lost Kingdom Master Cup"</Text>

<Text style = {styles.walkthroughInstruction}>Beat Koopa Freerunning again with faster racers. </Text>

<Text style = {styles.topicTitleText}>Moon 31: "Lost Kingdom Timer Challenge"</Text>

<Text style = {styles.walkthroughInstruction}>At the southeast corner of the Rocky Mountain there is a starecrow. Throw Cappy on it and start the challenge. The moon will spawn near the Odyssey. The timing is strict. </Text>

<Text style = {styles.topicTitleText}>Moon 32: "Stretch and Traverse the Jungle"</Text>

<Text style = {styles.walkthroughInstruction}>There is a Moon Pipe next to the Odyssey. The bonus area inside has you traverse the level by using Tropical Wigglers. </Text>

<Text style = {styles.topicTitleText}>Moon 33: "Aglow in the Jungle"</Text>

<Text style = {styles.walkthroughInstruction}>In the middle of the previous area, get a Fire Piranha Plant to light up both torches on either side of the platform. Doing this grants you the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 34: "Chasing Klepto"</Text>

<Text style = {styles.walkthroughInstruction}>At the Rocky Mountain there is a Moon Pipe that takes you to another bonus area. Klepto will steal Cappy again and you must get him back. After doing this just pull the lever and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 35: "Extremely Hot Bath"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area, capture a Lava Bubble and head to the back structure, behind it is the moon. </Text>

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
