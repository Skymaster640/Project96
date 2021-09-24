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

export default class CascadeKingdomMoons extends React.Component {

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
source = {require('../assets/SMOWalkthrough2.jpg')}
style = {{width:250,height:150}}
/>


<Text style = {styles.gameDiscription}>The Cascade Kingdom is the second kingdom visited in Super Mario Odyssey. After leaving the Cap Kingdom, you are brought here to Fossil Falls. The land of forgotten stone structures and dinosaur skeletons. You and Cappy's job is to find some Power Moons to repair the abandoned ship, the Odyssey. You will climb the mountain and face off against Madam Broode, and soon begin your journey to save Princess Peach! </Text>

<Text style = {styles.topicTitleText}>Moon 1: "Our First Power Moon"</Text>

<Text style = {styles.walkthroughInstruction}>Near the start, capture a Chain Chomp and launch it at the rock structure to spawn the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 2: "Multi Moon Atop the Falls"</Text>

<Text style = {styles.walkthroughInstruction}>You must defeat Madam Broode at the top of the kingdom. </Text>

<Text style = {styles.topicTitleText}>Moon 3: "Chomp Through the Rocks"</Text>

<Text style = {styles.walkthroughInstruction}>In the area with all the Chain Chomps, capture the one on the left and aim it for a rock structure in the wall. In it is the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 4: "Behind the Waterfall"</Text>

<Text style = {styles.walkthroughInstruction}>In the 8-bit section, you can find a hidden block to the far left of the wall, which brings you to the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 5: "On Top of the Rubble"</Text>

<Text style = {styles.walkthroughInstruction}>Near the start of the kingdom, you can find the moon on some rubble. </Text>

<Text style = {styles.topicTitleText}>Moon 6: "Treasure of the Waterfall Basin"</Text>

<Text style = {styles.walkthroughInstruction}>Near the giant rock structure, you can find an alcove by the river with a chest inside, open it and the moon is yours. </Text>

<Text style = {styles.topicTitleText}>Moon 7: "Above a High Cliff"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Odyssey's original location, you will find a rock structure you can break with a chain chomp. Go through the exposed pipe and the moon is yours. </Text>

<Text style = {styles.topicTitleText}>Moon 8: "Across the Floating Isles"</Text>

<Text style = {styles.walkthroughInstruction}>Go back to Madame Broode's arena, and you will find floating platforms you can jup across to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 9: "Cascade Kingdom Timer Challenge 1"</Text>

<Text style = {styles.walkthroughInstruction}>At the river at the start of the kingdom, there is a starecrow you can throw Cappy on to to activate a timer, platforms will appear with the moon at the end of it. </Text>

<Text style = {styles.topicTitleText}>Moon 10: "Cascade Kingdom Timer Challenge 2"</Text>

<Text style = {styles.walkthroughInstruction}>In Madame Broode's arena, there is a starecrow which you can throw Cappy on to to activate a timer, climb the newly spawned structure to reach the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 11: "Good Morning, Captain Toad!"</Text>

<Text style = {styles.walkthroughInstruction}>From Madame Broode's arena, there is a cliff you can see underneath the edge where Captain Toad is. Talk to him and you get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 12: "Dinosaur Nest: Big Cleanup!"</Text>

<Text style = {styles.walkthroughInstruction}>At the site of moon 7, there is a door you can enter to find a new area, capture the T-rex and defeat all the Burrbos to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 13: "Dinosaur Nest: Running Wild!"</Text>

<Text style = {styles.walkthroughInstruction}>In the dinosaur nest, bring the T-rex to a lower area with rocks on it, inside one of the rocks is the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 14: "Nice Shot with the Chain Chomp!"</Text>

<Text style = {styles.walkthroughInstruction}>You can find a door near the back of the kingdom, which brings you to an area with Chain Chomps that you can capture to fire at wooden holes, at the end is the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 15: "Very Nice Shot with the Chain Chomp!"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area, at the final room, go through the right wall to find another section with a Chain Chomp. Finish that one and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 16: "Past the Chasm Lifts"</Text>

<Text style = {styles.walkthroughInstruction}>At the Stone Bridge, there is a door which leads you to another 8-bit section, at the end is the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 17: "Hidden Chasm Passage"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous section, there is a secret pipe that will take you to another part of the 8-bit section, at the end of that is the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 18: "Secret Path to Fossil Falls!"</Text>

<Text style = {styles.walkthroughInstruction}>You must find a secret painting in either the Snow or Seaside Kingdoms to reach a floating island above the kingdom with the moon on it. </Text>

<Text style = {styles.topicTitleText}>Moon 19: "A Tourist in the Cascade Kingdom"</Text>

<Text style = {styles.walkthroughInstruction}>After speaking to the taxi driver in Metro Kingdom, you will find them here at the start of the kingdom. Talk to the driver again to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 20: "Rolling Rock by the Falls"</Text>

<Text style = {styles.walkthroughInstruction}>At the Odyssey's original location, you will find a rock that you can break and get the moon. </Text>

<Text style = {styles.topicTitleText}>NOTE: These Moons can only be obtained after beating Bowser in the Moon Kingdom except for moon 24.</Text>

<Text style = {styles.topicTitleText}>Moon 21: "Peach in the Cascade Kingdom"</Text>

<Text style = {styles.walkthroughInstruction}>At the top of Fossil Falls, you can find Peach and Tiara at the edge, talk to them and the moon is yours. </Text>

<Text style = {styles.topicTitleText}>Moon 22: "Cascade Kingdom Regular Cup"</Text>

<Text style = {styles.walkthroughInstruction}>At the start of the kingdom, you will find a Koopa Troopa who will invite you to Koopa Freerunning. Beat them in the race to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 23: "Caveman Cave-Fan"</Text>

<Text style = {styles.walkthroughInstruction}>At Madame Broode's arena, there is a hat ghost who will give you a moon if you speak to him while wearing the full Caveman costume. </Text>

<Text style = {styles.topicTitleText}>Moon 24: "Shopping in Fossil Falls"</Text>

<Text style = {styles.walkthroughInstruction}>Near the start of the kingdom, there is a Crazy Cap shop with the moon you can buy for 100 coins. </Text>

<Text style = {styles.topicTitleText}>Moon 25: "Sphynx Traveling to the Waterfall"</Text>

<Text style = {styles.walkthroughInstruction}>At the start of the kingdom, there are binoculars that you can use to find the Sphynx flying in the skies of the kingdom. Look at him long enough and you get the moon. </Text>

<Text style = {styles.topicTitleText}>NOTE: These Moons can only be obtained by breaking open the Moon Rock in the kingdom.</Text>

<Text style = {styles.topicTitleText}>Moon 26: "Bottom of the Waterfall Basin"</Text>

<Text style = {styles.walkthroughInstruction}>Underneath the location of moon 1, there is a glowing spot underneath the bridge which when ground-pounded, gives you the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 27: "Just a Hat, Skip, and a Jump"</Text>

<Text style = {styles.walkthroughInstruction}>Near the first 8-bit section, there are some hat clouds that you can go across to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 28: "Treasure Under the Cliff"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Stone Bridge, you can find the moon just chilling on the wall. </Text>

<Text style = {styles.topicTitleText}>Moon 29: "Next to the Stone Arch"</Text>

<Text style = {styles.walkthroughInstruction}>At the bridge leading up to Madame Broode's arena, just find the moon in the air and jump to it. </Text>

<Text style = {styles.topicTitleText}>Moon 30: "Guarded by a Colossal Fossil"</Text>

<Text style = {styles.walkthroughInstruction}>Go on top of the Triceratops fossil, and on it's nose, throw Cappy on it to find the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 31: "Under the Old Electrical Pole"</Text>

<Text style = {styles.walkthroughInstruction}>Capture the T-rex, and bring it to the Odyssey to destroy the electrical pole and find the moon via a glowing spot on the ground. </Text>

<Text style = {styles.topicTitleText}>Moon 32: "Under the Ground"</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 33: "Inside the Busted Fossil"</Text>

<Text style = {styles.walkthroughInstruction}>At the top of fossil falls, capture a Chain Chomp and break one of the rock structures to spawn the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 34: "Caught Hopping at the Waterfall!"</Text>

<Text style = {styles.walkthroughInstruction}>Near Crazy Cap, there will be a rabbit that if you catch them, you get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 35: "Taking Notes: Hurry Upward"</Text>

<Text style = {styles.walkthroughInstruction}>In the 8-bit section, you must collect all the music notes in order to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 36: "Cascade Kingdom Master Cup"</Text>

<Text style = {styles.walkthroughInstruction}>In Koopa Freerunning, you must beat it again but the other racers will be faster. </Text>

<Text style = {styles.topicTitleText}>Moon 37: "Across the Mysterious Clouds"</Text>

<Text style = {styles.walkthroughInstruction}>At the Stone Bridge, you will find a Moon Pipe which brings you to an area where you go across hat clouds to reach the end and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 38: "Atop a Wall Among the Clouds"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area, there is a wall you can jump on to find a new path to reach the secret moon. </Text>

<Text style = {styles.topicTitleText}>Moon 39: "Across the Gusty Bridges"</Text>

<Text style = {styles.walkthroughInstruction}>At the Odyssey's original location there is a Moon Pipe which brings you to an area where you go across platforms that are pushed by strong winds to reach the end and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 40: "Flying Far Away from Gusty Bridges"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area, on one of the platforms there is a secret lever that when pulled, will reveal another platform moving towards the side, at the end of that path is the moon. </Text>

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
gameDiscription:{
    color:'white',
    marginTop:10,
    alignSelf:'center'
  },
  gameScreen: {
    alignItems: 'center',
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
