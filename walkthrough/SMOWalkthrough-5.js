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

export default class WoodedKingdomMoons extends React.Component {

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
source = {require('../assets/SMOWalkthrough5.jpg')}
style = {{width:250,height:150}}
/>


<Text style = {styles.gameDiscription}>The Wooded Kingdom is one of two possible kingdoms that you can choose to be the fourth kingdom you visit. This is a place filed with nature, flowers, and machines. Here you must explore, defeat Spewart and Torkdrift, to protect the flowers. </Text>

<Text style = {styles.topicTitleText}>Moon 1: "Road to Sky Garden"</Text>

<Text style = {styles.walkthroughInstruction}>Travel through the Iron Road and defeat the Big Piranha Plant to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 2: "Flower Thieves of Sky Garden"</Text>

<Text style = {styles.walkthroughInstruction}>You must defeat Spewart. </Text>

<Text style = {styles.topicTitleText}>Moon 3: "Path to the Secret Flower Field"</Text>

<Text style = {styles.walkthroughInstruction}>Use a Sherm to destroy the cannons guarding the Secret Flower Field. </Text>

<Text style = {styles.topicTitleText}>Moon 4: "Defend the Secret Flower Field!"</Text>

<Text style = {styles.walkthroughInstruction}>You must defeat Torkdrift. </Text>

<Text style = {styles.topicTitleText}>Moon 5: "Behind the Rock Wall"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Summit Path, there is a Sherm next to a rock wall. Use the Sherm to make a path to the topleft part of the wall and get the moon from inside. </Text>

<Text style = {styles.topicTitleText}>Moon 6: "Back Way Up the Mountain"</Text>

<Text style = {styles.walkthroughInstruction}>Near Station 8, you can find a platform with an Uproot. Use the uproot to break some bricks to find a 8-bit Pipe. The moon is at the end of the 8-bit section. </Text>

<Text style = {styles.topicTitleText}>Moon 7: "Rolling Rock in the Woods"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Odyssey, there is a rock you can break with a moon inside. </Text>

<Text style = {styles.topicTitleText}>Moon 8: "Caught Hopping in the Forest!"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Odyssey, there is a rabbit you can catch to get a moon. </Text>

<Text style = {styles.topicTitleText}>Moon 9: "Thanks for the Charge!"</Text>

<Text style = {styles.walkthroughInstruction}>At the Forest Charging Station, there is a glowing spot on the rightmost charger with a moon inside. </Text>

<Text style = {styles.topicTitleText}>Moon 10: "Atop the Tall Tree"</Text>

<Text style = {styles.walkthroughInstruction}>At the southeastern part of the kingdom, you can use an Uproot to climb a tall tree with a nut at the top that you can break to get a moon. </Text>

<Text style = {styles.topicTitleText}>Moon 11: "Tucked Away Inside the Tunnel"</Text>

<Text style = {styles.walkthroughInstruction}>Grab the same Uproot as before, and take it to the river and go upstream to find another nut. </Text>

<Text style = {styles.topicTitleText}>Moon 12: "Over the Cliff's Edge"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Summit Path, there is a few platforms that lead to another nut. </Text>

<Text style = {styles.topicTitleText}>Moon 13: "The Nut 'Round the Corner"</Text>

<Text style = {styles.walkthroughInstruction}>Near Talkatoo, there is an iron path you can take that leads to another nut. </Text>

<Text style = {styles.topicTitleText}>Moon 14: "Climb the Cliff to Get the Nut"</Text>

<Text style = {styles.walkthroughInstruction}>At the start of the kingdom, keep going upstream to find a lever, pull it and keep going until you reach a cliff with another nut. </Text>

<Text style = {styles.topicTitleText}>Moon 15: "The Nut in the Red Maze"</Text>

<Text style = {styles.walkthroughInstruction}>In the Iron Road, there is another nut at the topleft corner of the maze. </Text>

<Text style = {styles.topicTitleText}>Moon 16: "The Nut at the Dead End"</Text>

<Text style = {styles.walkthroughInstruction}>At moon 1's location, there is a secret iron road to the side that leads to another nut. </Text>

<Text style = {styles.topicTitleText}>Moon 17: "Cracked Nut on a Crumbling Tower"</Text>

<Text style = {styles.walkthroughInstruction}>Before heading to Sky Garden Tower, there is a side path filled with crumbling platforms. At the end of the path is the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 18: "The Nut that Grew on the Tall Fence"</Text>

<Text style = {styles.walkthroughInstruction}>Near Station 8, head across the iron wall to find another nut. </Text>

<Text style = {styles.topicTitleText}>Moon 19: "Fire in the Cave"</Text>

<Text style = {styles.walkthroughInstruction}>Near the entrance to Iron Road, there is a starecrow you can throw Cappy on to enter a mini-arena with Fire Bros. Defeat them all to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 20: "Hey Out There, Captain Toad!"</Text>

<Text style = {styles.walkthroughInstruction}>At the Observation Deck, capture Glydon and fly to an island to the east. On it is Captain Toad, who you can talk to to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 21: "Love in the Forest Ruins"</Text>

<Text style = {styles.walkthroughInstruction}>At the Forest Charging Station, there are many Goombas, you can stack them to get to Goombette. </Text>

<Text style = {styles.topicTitleText}>Moon 22: "Inside a Rock in the Forest"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Summit Path, there is a Sherm. Capture it and head back to the Odyssey where there is a dirt rock. Destroy it and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 23: "Shopping in Steam Gardens"</Text>

<Text style = {styles.walkthroughInstruction}>At the start of the kingdom there is a Crazy Cap Shop, you can buy the moon for 100 coins. </Text>

<Text style = {styles.topicTitleText}>Moon 24: "Nut Planted in the Tower"</Text>

<Text style = {styles.walkthroughInstruction}>In the Sky Garden Tower, there is a nut on the central column. </Text>

<Text style = {styles.topicTitleText}>Moon 25: "Stretching Your Legs"</Text>

<Text style = {styles.walkthroughInstruction}>Head to the top of the central column in the Sky Garden Tower with an Uproot. Stretch on top of the column to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 26: "Spinning-Platforms Treasure"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Secret Flower Field, there is a path of spinning platforms which leads to a room with the moon inside. </Text>

<Text style = {styles.topicTitleText}>Moon 27: "Make the Secret Flower Field Bloom"</Text>

<Text style = {styles.walkthroughInstruction}>In Torkdrift's arena, you will see 3 groups of unbloomed flowers. Spin Cappy near them to make them bloom. Make all of them bloom to get the moon.</Text>

<Text style = {styles.topicTitleText}>Moon 28: "Rolling Rock in the Deep Woods"</Text>

<Text style = {styles.walkthroughInstruction}>In the Deep Woods, there is a rock you can break to get another moon. </Text>

<Text style = {styles.topicTitleText}>Moon 29: "Glowing in the Deep Woods"</Text>

<Text style = {styles.walkthroughInstruction}>In the Deep Woods, there is a starecrow that you throw Cappy on. The moon will appear and you must collect it in the time limit. </Text>

<Text style = {styles.topicTitleText}>Moon 30: "Past the Peculiar Pipes"</Text>

<Text style = {styles.walkthroughInstruction}>At the eastern wall of the Deep Woods, there is a Pipe which leads to a Pipe maze and at the end is a moon. </Text>

<Text style = {styles.topicTitleText}>Moon 31: "By the Babbling Brook in Deep Woods"</Text>

<Text style = {styles.walkthroughInstruction}>In the Deep Woods, there is a T-rex that you must knock out before you can capture it. Bring it to the large rock at the north-western corner of Deep Woods and destroy it. The moon will appear at the glowing spot. </Text>

<Text style = {styles.topicTitleText}>Moon 32: "The Hard Rock in Deep Woods"</Text>

<Text style = {styles.walkthroughInstruction}>Same as the last moon but in the southeastern corner of Deep Woods. </Text>

<Text style = {styles.topicTitleText}>Moon 33: "A Treasure Made from Coins"</Text>

<Text style = {styles.walkthroughInstruction}>In Deep Woods, capture a Coin Coffer, take it to the pool of the river and fire 500 coins at the plant for it to bloom. </Text>

<Text style = {styles.topicTitleText}>Moon 34: "Beneath the Roots of the Moving Tree"</Text>

<Text style = {styles.walkthroughInstruction}>In the Deep Woods, there is a tree that you can capture. Move it and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 35: "Deep Woods Treasure Trap"</Text>

<Text style = {styles.walkthroughInstruction}>In Deep Woods, there is a Pipe at the southern end that once you enter, you must open the chests in the right order to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 36: "Exploring for Treasure"</Text>

<Text style = {styles.walkthroughInstruction}>In Deep Woods, there is a Steam Gardener by the waterfall. Talk to him while wearing the Explorer outfit for them to open the door and you get the moon by the chest inside. </Text>

<Text style = {styles.topicTitleText}>Moon 37: "Wooded Kingdom Timer Challenge 1"</Text>

<Text style = {styles.walkthroughInstruction}>Halfway through Iron Road, there is a Starecrow that once you throw Cappy onto it, the challenge will start and you must swing up from poles to reach the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 38: "Wooded Kingdom Timer Challenge 2"</Text>

<Text style = {styles.walkthroughInstruction}>At the Forest Charging Station, there is a Starecrow that once you throw Cappy onto it, the challenge will start and you must jump from different platforms to reach the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 39: "Flooding Pipeway"</Text>

<Text style = {styles.walkthroughInstruction}>Near the entrance to Iron Road, there is a pond with a Pipe at the bottom. Enter it and you will be in a bonus area with rising and lowering water. At the end is the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 40: "Flooding Pipeway Ceiling Secret"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area, look for an opening in the ceiling, there is a moon in that opening. </Text>

<Text style = {styles.topicTitleText}>Moon 41: "Wandering in the Fog"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Forest Charging Station there is a rocket that you can capture to bring you to a bonus area, it is covered in fog and you need to collect 5 moon shards. </Text>

<Text style = {styles.topicTitleText}>Moon 42: "Nut Hidden in the Fog"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area, there is a hidden iron platform with a nut at the end of it. </Text>

<Text style = {styles.topicTitleText}>Moon 43: "Flower Road Run"</Text>

<Text style = {styles.walkthroughInstruction}>From the Summit Path, there is a door behind the ramp, going in it brings you to another bonus area with you making flower roads to reach the moon at the end. </Text>

<Text style = {styles.topicTitleText}>Moon 44: "Flower Road Reach"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area, make a Goomba Tower in order to reach a moon on a platform you couldn't normally reach. </Text>

<Text style = {styles.topicTitleText}>Moon 45: "Elevator Escalation"</Text>

<Text style = {styles.walkthroughInstruction}>At the Summit Path, there is a door at the top of the sloped ramp. It will bring you to a bonus area with an elevator and a Sherm. Defeat all the enemies to reach the end. </Text>

<Text style = {styles.topicTitleText}>Moon 46: "Elevator Blind Spot"</Text>

<Text style = {styles.walkthroughInstruction}>At the start of the previous area, aim the Sherm at the back wall and destroy the rock on the platform. You can now get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 47: "Walking on Clouds"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Secret Flower Field, there is a Steam Gardener that will dispense a large seed. Throw this into a large pot to grow a beanstalk. This will bring you to a bonus area with the moon at the end. </Text>

<Text style = {styles.topicTitleText}>Moon 48: "Above the Clouds"</Text>

<Text style = {styles.walkthroughInstruction}>At the previous area, capture an Uproot and bring it to the center of the area to stretch and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 49: "Secret Path to the Steam Gardens!"</Text>

<Text style = {styles.walkthroughInstruction}>Find a secret painting in either the Snow, Seaside, or Metro kingdoms to bring you to an area above the entire kingdom with the moon on it. </Text>

<Text style = {styles.topicTitleText}>Moon 50: "Found with Wooded Kingdom Art"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Odyssey, there is Hint Art that leads you to the Sand Kingdom. Where the Moon is located near the Trace-Walking minigame. </Text>

<Text style = {styles.topicTitleText}>NOTE: These Moons can only be obtained after beating Bowser in the Moon Kingdom.</Text>

<Text style = {styles.topicTitleText}>Moon 51: "Swing Around Secret Flower Field"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Secret Flower Field, there is a series of obstacles that will eventually lead to the moon.</Text>

<Text style = {styles.topicTitleText}>Moon 52: "Jammin' in the Wooded Kingdom"</Text>

<Text style = {styles.walkthroughInstruction}>Next to the waterfall in the Southwest area of the kingdom, there is a Jammin Toad who asks for a certain type of music. Playing Above the Clouds will get you the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 53: "Wooded Kingdom Regular Cup"</Text>

<Text style = {styles.walkthroughInstruction}>At the Forest Charging Station, there is a Koopa Troopa who wants to play Koopa Freerunning. Beat the minigame and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 54: "Peach in the Wooded Kingdom"</Text>

<Text style = {styles.walkthroughInstruction}>At the Observation Deck, you will find Peach and Tiara. Talk to them and you get the moon. </Text>

<Text style = {styles.topicTitleText}>NOTE: These Moons can only be obtained by breaking open the Moon Rock in the kingdom.</Text>

<Text style = {styles.topicTitleText}>Moon 55: "High Up in the Cave"</Text>

<Text style = {styles.walkthroughInstruction}>In the cave connecting the woods to Steam Gardens, capture an Uproot to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 56: "Lost in the Tall Trees"</Text>

<Text style = {styles.walkthroughInstruction}>Go to the Observation Deck and capture Glydon, then glide over to the tall pine tree with a crate in it. Break the crate and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 57: "Looking Down on the Goombas"</Text>

<Text style = {styles.walkthroughInstruction}>Get Glydon, and glide over to where Goombette was. There is a nut you can break to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 58: "High Up on a Rock Wall"</Text>

<Text style = {styles.walkthroughInstruction}>Capture an Uproot and go to the gray blocks near the red maze. Above them is a nut with the moon in it. </Text>

<Text style = {styles.topicTitleText}>Moon 59: "The Nut in the Robot Storeroom"</Text>

<Text style = {styles.walkthroughInstruction}>Above the enterance to the storeroom, there is a nut. </Text>

<Text style = {styles.topicTitleText}>Moon 60: "Above the Iron Mountain Path"</Text>

<Text style = {styles.walkthroughInstruction}>Near Station 8, there is a brittle path that leads to a flower road. That brings you to the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 61: "The Nut Under the Observation Deck"</Text>

<Text style = {styles.walkthroughInstruction}>Get an Uproot to the Observation Deck and find some hidden blocks against the wall to reach the nut. </Text>

<Text style = {styles.topicTitleText}>Moon 62: "Bird Traveling the Forest"</Text>

<Text style = {styles.walkthroughInstruction}>A bird is flying all around the kingdom, you must figure out it's pattern and catch it. </Text>

<Text style = {styles.topicTitleText}>Moon 63: "Invader in the Sky Garden"</Text>

<Text style = {styles.walkthroughInstruction}>Go to Spewart's arena and defeat the Yoofoe that's there. </Text>

<Text style = {styles.topicTitleText}>Moon 64: "Hot, Hot, Hot from the Campfire"</Text>

<Text style = {styles.walkthroughInstruction}>Capture a Fire Bro and take them to where Talkatoo is, throw a fireball at the campfire to light it up. </Text>

<Text style = {styles.topicTitleText}>Moon 65: "Wooded Kingdom Timer Challenge 3"</Text>

<Text style = {styles.walkthroughInstruction}>Near Station 8, there is a starecrow that starts the challenge. You must go across many platforms to get to the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 66: "Moon Shards in the Forest"</Text>

<Text style = {styles.walkthroughInstruction}>In the red maze, there are 5 moon shards you need to collect. </Text>

<Text style = {styles.topicTitleText}>Moon 67: "Taking Notes: On Top of the Wall"</Text>

<Text style = {styles.walkthroughInstruction}>Behind the Odyssey you must collect all the notes that appear. But the time limit is strict. </Text>

<Text style = {styles.topicTitleText}>Moon 68: "Taking Notes: Stretching"</Text>

<Text style = {styles.walkthroughInstruction}>Below the Iron Cage there are many notes along the wall in a V shape. But only once you collect the big note. </Text>

<Text style = {styles.topicTitleText}>Moon 69: "Wooded Kingdom Master Cup"</Text>

<Text style = {styles.walkthroughInstruction}>Complete Koopa Freerunning again with faster racers. </Text>

<Text style = {styles.topicTitleText}>Moon 70: "I Met an Uproot!"</Text>

<Text style = {styles.walkthroughInstruction}>Bring an Uproot to the northernmost tower of the kingdom and show it to the hat ghost. He will give you the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 71: "Invisible Road: Danger!"</Text>

<Text style = {styles.walkthroughInstruction}>There is a Moon Pipe next to the enterance to the Secret Flower Field, it will take you to a secret area where you have to navigate through an invisible road. But the Piranha Plant's poison will show the path. Defeat the 3 big Piranha Plants to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 72: "Invisible Road: Hidden Room"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area, there is a secret alcove along a side path that will lead you to a chest. </Text>

<Text style = {styles.topicTitleText}>Moon 73: "Herding Sheep Above the Forest Fog"</Text>

<Text style = {styles.walkthroughInstruction}>In the field with all the Goombas, there is a Moon Pipe that you can enter. In this area you must bring a sheep to the pen in order to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 74: "Herding Sheep on the Iron Bridge"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area, there is a Pipe that will take you to another part of the area with another sheep. Bring that sheep to the pen to get another moon. </Text>

<Text style = {styles.topicTitleText}>Moon 75: "Down and Back Breakdown Road"</Text>

<Text style = {styles.walkthroughInstruction}>Near the enterance to Iron Road, there is a Moon Pipe that you can enter. In this area you must go to the back of the area while avoiding all the Bullet Bills to get the key, but also go back before your path gets destroyed. </Text>

<Text style = {styles.topicTitleText}>Moon 76: "Below Breakdown Road"</Text>

<Text style = {styles.walkthroughInstruction}>Reach the end of the previous area, then go to a lower path with a Banzai Bill, head back to the beginning while the Banzai Bill is following you and break the wall open to get the moon. </Text>

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
