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

export default class SeasideKingdomMoons extends React.Component {

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
source = {require('../assets/SMOWalkthrough10.jpg')}
style = {{width:250,height:150}}
/>


<Text style = {styles.gameDiscription}>The Seaside Kingdom is one of two kingdoms that can be chosen as your ninth stop in Super Mario Odyssey. This is yet another water world, and you must get the Sparkling Water back from Mollusque-Lanceur so everything can go back to normal. </Text>

<Text style = {styles.topicTitleText}>Moon 1: "The Stone Pillar Seal"</Text>

<Text style = {styles.walkthroughInstruction}>Capture a Gushen and fly to a grassy platform in the middle of the area. </Text>

<Text style = {styles.topicTitleText}>Moon 2: "The Lighthouse Seal"</Text>

<Text style = {styles.walkthroughInstruction}>Reach the top of the lighthouse. </Text>

<Text style = {styles.topicTitleText}>Moon 3: "The Hot Spring Seal"</Text>

<Text style = {styles.walkthroughInstruction}>Go to Hot Spring Island and get rid of all the lava with a Gushen. </Text>

<Text style = {styles.topicTitleText}>Moon 4: "The Seal Above the Canyon"</Text>

<Text style = {styles.walkthroughInstruction}>Make it to the end of the Rolling Canyon. </Text>

<Text style = {styles.topicTitleText}>Moon 5: "The Glass Is Half Full!"</Text>

<Text style = {styles.walkthroughInstruction}>Defeat Mollusque-Lancur. </Text>

<Text style = {styles.topicTitleText}>Moon 6: "On the Cliff Overlooking the Beach"</Text>

<Text style = {styles.walkthroughInstruction}>Capture a Gushen, and go to the right of the Odyssey and the moon is on a cliff. </Text>

<Text style = {styles.topicTitleText}>Moon 7: "Ride the Jetstream"</Text>

<Text style = {styles.walkthroughInstruction}>Capture a Gushen and go to the alcove next to the binoculars. Reach the end of the area and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 8: "Ocean-Bottom Maze: Treasure"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Glass Palace there is a 8-bit Pipe. The moon is at the end of the 8-bit section. </Text>

<Text style = {styles.topicTitleText}>Moon 9: "Ocean-Bottom Maze: Hidden Room"</Text>

<Text style = {styles.walkthroughInstruction}>In the 8-bit section, go in the bottom-right pipe and break some blocks with a Koopa shell to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 10: "Underwater Highway Tunnel"</Text>

<Text style = {styles.walkthroughInstruction}>Northwest of the Lighthouse are 3 Cheep Cheeps. Capture one and go into the hole of brick blocks to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 11: "Shh! It's a Shortcut!"</Text>

<Text style = {styles.walkthroughInstruction}>Grab a Cheep Cheep and go to the East Ocean Trench. There is ahole with the moon inside. </Text>

<Text style = {styles.topicTitleText}>Moon 12: "Gap in the Ocean Trench"</Text>

<Text style = {styles.walkthroughInstruction}>In the East Ocean Trench go down to the Sphynx. There is a hole to the right of him with the moon inside. </Text>

<Text style = {styles.topicTitleText}>Moon 13: "Slip Through the Nesting Spot"</Text>

<Text style = {styles.walkthroughInstruction}>Grab a Cheep Cheep and go to Hot Spring Island. There is a hole underneath the island with the moon at the end. </Text>

<Text style = {styles.topicTitleText}>Moon 14: "Merci, Dorrie!"</Text>

<Text style = {styles.walkthroughInstruction}>Find the purple Dorrie, and the moon is underneath them. </Text>

<Text style = {styles.topicTitleText}>Moon 15: "Bonjour, Dorrie!"</Text>

<Text style = {styles.walkthroughInstruction}>Find the Yellow Dorrie, and the moon is above them. </Text>

<Text style = {styles.topicTitleText}>Moon 16: "Under a Dangerous Ceiling"</Text>

<Text style = {styles.walkthroughInstruction}>Near the East Ocean Trench, there is a glowing spot by some Komboos. </Text>

<Text style = {styles.topicTitleText}>Moon 17: "What the Waves Left Behind"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Rolling Canyon, there is a Komboo guarding the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 18: "The Back Canyon: Excavate!"</Text>

<Text style = {styles.walkthroughInstruction}>To the left of the Rolling Canyon, there are some grassy platforms with a glowing spot on one of them. </Text>

<Text style = {styles.topicTitleText}>Moon 19: "Bubblaine Northern Reaches"</Text>

<Text style = {styles.walkthroughInstruction}>Near the East Ocean Trench there are some glowing mounds that you must ground pound. </Text>

<Text style = {styles.topicTitleText}>Moon 20: "Wriggling on the Sandy Bottom"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Lighthouse is a door. In it you must ground pound the mound to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 21: "Glass Palace Treasure Chest"</Text>

<Text style = {styles.walkthroughInstruction}>Underneath the Glass Palace is a chest with the moon inside. </Text>

<Text style = {styles.topicTitleText}>Moon 22: "Treasure Trap Hidden in the Inlet"</Text>

<Text style = {styles.walkthroughInstruction}>There is a hole near the beach house with some chests. Open them in the right order to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 23: "Sea Gardening: Inlet Seed"</Text>

<Text style = {styles.walkthroughInstruction}>In the river next to the Beach House is a seed that can be taken to a flower pot on the roof of the Beach House to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 24: "Sea Gardening: Canyon Seed"</Text>

<Text style = {styles.walkthroughInstruction}>Near moon 18 is another seed that can be taken to another flower pot. </Text>

<Text style = {styles.topicTitleText}>Moon 25: "Sea Gardening: Hot-Spring Seed"</Text>

<Text style = {styles.walkthroughInstruction}>Near Hot Spring Island is a seed on a rocky island. Bring it to another flower pot. </Text>

<Text style = {styles.topicTitleText}>Moon 26: "Sea Gardening: Ocean Trench Seed"</Text>

<Text style = {styles.walkthroughInstruction}>This seed is right next to the Sphynx in the East Ocean Trench. </Text>

<Text style = {styles.topicTitleText}>Moon 27: "Seaside Kingdom Timer Challenge 1"</Text>

<Text style = {styles.walkthroughInstruction}>Near Hot Spring Island is a ground pound switch. Press it and go in the 8-bit section near it to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 28: "Seaside Kingdom Timer Challenge 2"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Glass Palace is a starecrow that starts the challenge when Cappy is thrown on it. Swim to the moon to get it. </Text>

<Text style = {styles.topicTitleText}>Moon 29: "Found on the Beach! Good Dog!"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Odyssey is a dog that will lead you to the moon after following it long enough. </Text>

<Text style = {styles.topicTitleText}>Moon 30: "Moon Shards in the Sea"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Rolling Canyon is a starecrow that will open a gate once Cappy is thrown on it. Collect all 5 moon shards in the area. </Text>

<Text style = {styles.topicTitleText}>Moon 31: "Taking Notes: Ocean Surface Dash"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Beach House is a music note. Start the challenge and you will need a Rocket Flower to get them all. </Text>

<Text style = {styles.topicTitleText}>Moon 32: "Love by the Seaside"</Text>

<Text style = {styles.walkthroughInstruction}>Make a Goomba Tower and go to the Rolling Canyon and reach Goombette to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 33: "Lighthouse Leaper"</Text>

<Text style = {styles.walkthroughInstruction}>Capture Glydon at the Lighthouse then glide over to the Glass Palace and talk to the snail to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 34: "Good Job, Captain Toad!"</Text>

<Text style = {styles.walkthroughInstruction}>Take a Gushen and go to the end of the Rolling Canyon. You can reach a cliff where Captain Toad is camping. Talk to him and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 35: "Ocean Quiz: Good!"</Text>

<Text style = {styles.walkthroughInstruction}>Answer all of the Sphynx's riddles correctly. </Text>

<Text style = {styles.topicTitleText}>Moon 36: "Shopping in Bubblaine"</Text>

<Text style = {styles.walkthroughInstruction}>In the ocean are two Dorries. The yellow one is the Crazy Cap shop where you can buy the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 37: "Beach Volleyball: Champ"</Text>

<Text style = {styles.walkthroughInstruction}>Get 15 points in the Beach Volleyball game. </Text>

<Text style = {styles.topicTitleText}>Moon 38: "Beach Volleyball: Hero of the Beach!"</Text>

<Text style = {styles.walkthroughInstruction}>Get 100 points in the Beach Volleyball game. </Text>

<Text style = {styles.topicTitleText}>Moon 39: "Looking Back in the Dark Waterway"</Text>

<Text style = {styles.walkthroughInstruction}>On the wall in the Underwater Tunnel to the Lighthouse, there is a moon. </Text>

<Text style = {styles.topicTitleText}>Moon 40: "The Sphynx's Underwater Vault"</Text>

<Text style = {styles.walkthroughInstruction}>In the East Ocean Trench is a Sphynx. Answer one of his riddles correctly to get access to the vault and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 41: "A Rumble on the Seaside Floor"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Odyssey is a pipe that leads to a bonus area where you need to listen to your controler's rumble to find the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 42: "A Relaxing Dance"</Text>

<Text style = {styles.walkthroughInstruction}>With the Resort Outfit and hat you can enter the Beach House and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 43: "Wading in the Cloud Sea"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Beach House is a rocket that will take you to an area with Pulse Beams and Burrbos. At the end is the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 44: "Sunken Treasure in the Cloud Sea"</Text>

<Text style = {styles.walkthroughInstruction}>There are some thin platforms hidden by clouds in the previous area. At the end is the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 45: "Fly Through the Narrow Valley"</Text>

<Text style = {styles.walkthroughInstruction}>To the right of the Beach Volleyball minigame is an alcove with a door at the end. You need a Gushen to reach it. In the area you need to reach the end with a Gushen. </Text>

<Text style = {styles.topicTitleText}>Moon 46: "Treasure Chest in the Narrow Valley"</Text>

<Text style = {styles.walkthroughInstruction}>At the end of the previous area, instead of falling down to get the moon, continue upwards to find a chest with the other moon inside. </Text>

<Text style = {styles.topicTitleText}>Moon 47: "Hurry and Stretch"</Text>

<Text style = {styles.walkthroughInstruction}>In the northeast of the kingdom there is a door that leads you to an area where you need to outrun the rising water with an Uproot. </Text>

<Text style = {styles.topicTitleText}>Moon 48: "Stretch on the Side Path"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area, the moon is found on a side path. </Text>

<Text style = {styles.topicTitleText}>Moon 49: "Secret Path to Bubblaine!"</Text>

<Text style = {styles.walkthroughInstruction}>Find a secret painting in either Bowser's Kingdom or Mushroom Kingdom. You will be brought up to a ledge with the moon on it. </Text>

<Text style = {styles.topicTitleText}>Moon 50: "Found with Seaside Kingdom Art"</Text>

<Text style = {styles.walkthroughInstruction}>Near the gray boulders near the Odyssey is some Hint Art that will lead to the Metro Kingdom. You must ground pound the giant KEEP on the road in Main Street. </Text>

<Text style = {styles.topicTitleText}>NOTE: These Moons can only be obtained after beating Bowser in the Moon Kingdom.</Text>

<Text style = {styles.topicTitleText}>Moon 51: "Seaside Kingdom Regular Cup"</Text>

<Text style = {styles.walkthroughInstruction}>On the island above the East Ocean Trench is a Koopa Troopa who will invite you to Koopa Freerunning. Win the race and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 52: "Peach in the Seaside Kingdom"</Text>

<Text style = {styles.walkthroughInstruction}>On top of the Sparkling Water Fountain is Peach and Tiara, talk to them and get the moon.  </Text>

<Text style = {styles.topicTitleText}>NOTE: These Moons can only be obtained by breaking open the Moon Rock in the kingdom.</Text>

<Text style = {styles.topicTitleText}>Moon 53: "Above the Parasol: Catch!"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Beach House is a parasol with a moon above it. Jump on the parasol to get it. </Text>

<Text style = {styles.topicTitleText}>Moon 54: "What Shines Inside the Glass"</Text>

<Text style = {styles.walkthroughInstruction}>Go inside the Glass Palace and reach the bottom to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 55: "A Fine Detail on the Glass"</Text>

<Text style = {styles.walkthroughInstruction}>On one of the Glass Palace's handles, there is a moon. </Text>

<Text style = {styles.topicTitleText}>Moon 56: "Underwater Highway West: Explore!"</Text>

<Text style = {styles.walkthroughInstruction}>The moon is to the west near some moonsnakes. </Text>

<Text style = {styles.topicTitleText}>Moon 57: "Underwater Highway East: Explore!"</Text>

<Text style = {styles.walkthroughInstruction}>The moon is near Hot Spring Island. </Text>

<Text style = {styles.topicTitleText}>Moon 58: "Rapid Ascent on Hot Spring Island"</Text>

<Text style = {styles.walkthroughInstruction}>Get a Gushen and reach the top of Hot Spring Island. Fly above the top to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 59: "A Light Next to the Lighthouse"</Text>

<Text style = {styles.walkthroughInstruction}>On the Lighthouse, throw Cappy on the pole used to get on it. </Text>

<Text style = {styles.topicTitleText}>Moon 60: "The Tall Rock Shelf in the Deep Ocean"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Sphynx is a glowing rock that you must throw Cappy on. </Text>

<Text style = {styles.topicTitleText}>Moon 61: "At the Base of the Lighthouse"</Text>

<Text style = {styles.walkthroughInstruction}>Next to the Lighthouse is a glowing spot that must be ground pounded. </Text>

<Text style = {styles.topicTitleText}>Moon 62: "Bird Traveling Over the Ocean"</Text>

<Text style = {styles.walkthroughInstruction}>Flying around the kingdom is a bird that will give a moon once caught. </Text>

<Text style = {styles.topicTitleText}>Moon 63: "Caught Hopping at Glass Palace!"</Text>

<Text style = {styles.walkthroughInstruction}>Near Glass Palace is a rabbit that will give a moon once caught. </Text>

<Text style = {styles.topicTitleText}>Moon 64: "Seaside Kingdom Timer Challenge 3"</Text>

<Text style = {styles.walkthroughInstruction}>On the Lighthouse is a starecrow that will start the challenge once Cappy is thrown on it. The moon will spawn on a faraway platform on the water. </Text>

<Text style = {styles.topicTitleText}>Moon 65: "Taking Notes: Ocean-Bottom Maze"</Text>

<Text style = {styles.walkthroughInstruction}>In the 8-bit maze, there is a music note that will start the challenge. Collect all the notes to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 66: "Taking Notes in the Sea"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Glass Palace there is a music note that will start the challenge. Collect all the notes to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 67: "Seaside Kingdom Master Cup"</Text>

<Text style = {styles.walkthroughInstruction}>Beat Koopa Freerunning again with faster racers. </Text>

<Text style = {styles.topicTitleText}>Moon 68: "Aim! Poke!"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Rolling Canyon is an underwater Moon Pipe. In this area you must use a Pokio to launch boulders at breakable blocks. </Text>

<Text style = {styles.topicTitleText}>Moon 69: "Poke! Roll!"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area you must launch a boulder behind the enterance to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 70: "The Spinning Maze: Search!"</Text>

<Text style = {styles.walkthroughInstruction}>Next to the Lighthouse is another Moon Pipe. In it you must navigate through a spinning maze to collect all 5 moon shards. </Text>

<Text style = {styles.topicTitleText}>Moon 71: "The Spinning Maze: Open!"</Text>

<Text style = {styles.walkthroughInstruction}>At the back of the previous area is a chest with the moon inside. </Text>


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
