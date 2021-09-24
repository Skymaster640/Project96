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

export default class DarkerSideMoons extends React.Component {

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
source = {require('../assets/SMOWalkthrough17.jpg')}
style = {{width:250,height:150}}
/>


<Text style = {styles.gameDiscription}>The Darker Side of the Moon is the final world of Super Mario Odyssey. It only contains one Power Moon, specifically a Multi Moon. No Purple Coins and it is considered to be the hardest level of the game. This level will test all of your learned skills throughout the game. </Text>

<Text style = {styles.topicTitleText}>Moon 1: "Long Journey's End."</Text>

<Text style = {styles.walkthroughInstruction}>From the start of the level, go past the crowd of people and Capture a Frog. Use the Frog to jump up to the top of the cliff and go in the pipe. Now the level REALLY starts. You will first appear in an arena with a bunch of Goombas and a Yoofoe, Capture a Goomba and make a Goomba Tower to jump on the Yoofoe. Do that three times and a Life-Up Heart will appear. This will give you a advantage throughout the level. This would be a good time to say, if you die once in the level, you have to do it all again. Now you must manage traversing across sinking platforms and sinking poles. Time your jumps carefully so you don't fall in the lava. After that you will have to jump across platforms that slide across the lava. Jump quickly so you don't fall in. In the next section, you will see a Lava Bubble and some spikes around pools of lava. Capture the Lava Bubble and jump across the lava pools. You will eventually reach a Lava Bubble Cannon to reach the next section. If you need some more health, go behind the wall to find a Heart. Go onto the platform and capture an Uproot. You will have to use the Uproot to raise and lower platforms. You can also grab another heart on the way. (Note: There is a shortcut in this section. You can use the Uproot to get on top of a ? block, then use the Uproot again to find a hidden block. Go on top of that block and you can skip the next section.) Next will be an underwater section with Fuzzies and freezing water. You have to go through it quickly to avoid taking damage. Next section you will Capture Yoshi and climb up the conveyor wall while avoiding more Fuzzies. Next section you will press a P Switch to spawn a Flower Road. There will be Pulse Beams that will stand in your way. Near the end there will be a Sphynx that you can solve his riddle to get coins and another Life-Up Heart. The next section will require you to throw Cappy at a Starecrow to bring the wall forward. (Alternatively you can stand on top of the platform with the starecrow. Throw Cappy on the starecrow and the platform will raise, allowing you to skip the section.) Next section has Glydon, whom you capture to glide across a swarm of Urban Stingbies to reach the next section, if you shake you controller, you can maintain your height to skip the next 4 sections. Or even skip to the end of it's entirety. Next section has you capture some Volbonan Poles to reach the end. Next section has you go into a pipe, and it will bring you to a section with a moving platform with a bunch of Burrbos and Pulse Beams, if you hit a single Pulse Beam it will cause a chain reaction. Next section has you Capture a Pokio to scale some walls to reach the top. Next section has you go into a 2D Section, and you have to jump across some DK Barrels and take down Donkey Kong. Go into the pipe at the end and you will be taken to a picture of Bowser. Go in it and you will be controlling Bowser, making you reach the end of the section whilst avoiding boulders. In the next section, you will capture a Spark Pylon to bring you to a series of Spark Pylons spelling out 'Thank You!!' At the end is a pipe which will bring you to some Frogs. Capture the frogs to scale up the copy of the New Donk City Hall. At the top you will climb a pole with the Multi Moon. Congratulations.  </Text>

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
