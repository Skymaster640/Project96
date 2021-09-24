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

export default class SandKingdomMoons extends React.Component {

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
source = {require('../assets/SMOWalkthrough3.jpg')}
style = {{width:250,height:150}}
/>


<Text style = {styles.gameDiscription}>The Sand Kingdom is the third kingdom visited in Super Mario Odyssey, this kingdom is a vast desert, home to the town of Tosterina, and there are many different moons to find here. In the main story, you must travel through the kingdom, collecting moons, defeating Harriet and Knucklotec as they are the main bosses. And after that, the kingdom will no longer be a cold wasteland. </Text>

<Text style = {styles.topicTitleText}>Moon 1: "Atop the Highest Tower"</Text>

<Text style = {styles.walkthroughInstruction}>At the center of the Kingdom, there will be this temple that you must reach the top of in order to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 2: "Moon Shards in the Sand"</Text>

<Text style = {styles.walkthroughInstruction}>Head to the Moe-Eye Habitat, there you must collect Moon Shards while using the Moe-Eyes. </Text>

<Text style = {styles.topicTitleText}>Moon 3: "Showdown on the Inverted Pyramid"</Text>

<Text style = {styles.walkthroughInstruction}>After reaching the top of the Inverted Pyramid, you must defeat Harriet to get a Multi Moon. </Text>

<Text style = {styles.topicTitleText}>Moon 4: "The Hole in the Desert"</Text>

<Text style = {styles.walkthroughInstruction}>Go to the Deepest Underground and defeat Knucklotec and get a Multi Moon. </Text>

<Text style = {styles.topicTitleText}>Moon 5: "Overlooking the Desert Town"</Text>

<Text style = {styles.walkthroughInstruction}>In Tosterina, you can find the moon on top of one of the buildings. </Text>

<Text style = {styles.topicTitleText}>Moon 6: "Alcove in the Ruins"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Sand Pillar, you can find the moon in an alcove near the quicksand. </Text>

<Text style = {styles.topicTitleText}>Moon 7: "On the Leaning Pillar"</Text>

<Text style = {styles.walkthroughInstruction}>At Tosterina Ruins, capture a Bullet Bill and fly your way to the moon which you can see on a pillar. </Text>

<Text style = {styles.topicTitleText}>Moon 8: "Hidden Room in the Flowing Sands"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Sand Pillar, you can find a very,  very small alcove near the quicksand whirlpool. Go in it to get the moon.  </Text>

<Text style = {styles.topicTitleText}>Moon 9: "Secret of the Mural"</Text>

<Text style = {styles.walkthroughInstruction}>In the final 8-bit section of Tosterina Ruins, you can hit a few hidden blocks to reach a secret area with the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 10: "Secret of the Inverted Mural"</Text>

<Text style = {styles.walkthroughInstruction}>In the last 8-bit section of The Inerted Pyramid, you can jump against the right wall to find a secret section with the moon at the end. </Text>

<Text style = {styles.topicTitleText}>Moon 11: "On Top of the Stone Archway"</Text>

<Text style = {styles.walkthroughInstruction}>At the Sand Pillar, you can capture a Bullet Bill and fly your way back towards the entrance of the ruins, at the top of the arch is the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 12: "From a Crate in the Ruins"</Text>

<Text style = {styles.walkthroughInstruction}>At the Sand Pillar, there will be a glowing crate, break it and the moon is yours. </Text>

<Text style = {styles.topicTitleText}>Moon 13: "On the Lone Pillar"</Text>

<Text style = {styles.walkthroughInstruction}>Head to moon 1's location, and capture Glydon to glide your way to a pillar in the distance with the moon on it. </Text>

<Text style = {styles.topicTitleText}>Moon 14: "On the Statue's Tail"</Text>

<Text style = {styles.walkthroughInstruction}>Go to Harriet's arena, go to one of the Jaxi statues and throw Cappy at the tail. After long enough, the moon will spawn. </Text>

<Text style = {styles.topicTitleText}>Moon 15: "Hang Your Hat on the Fountain"</Text>

<Text style = {styles.walkthroughInstruction}>At Tosterina, throw Cappy at the tip of the fountain for long enough and grab the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 16: "Where the Birds Gather"</Text>

<Text style = {styles.walkthroughInstruction}>Go to the oasis, and ground pound the mound where a bunch of birds are to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 17: "Top of a Dune"</Text>

<Text style = {styles.walkthroughInstruction}>To the west of Tosterina, head to the tallest sand dune and ground pound at the top to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 18: "Lost in the Luggage"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Inverted Pyramid, you will find a crashed taxi with spilled boxes. Ground pound the glowing spot on the ground and the moon is yours. </Text>

<Text style = {styles.topicTitleText}>Moon 19: "Bullet Bill Breakthrough"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Sand Pillar, there will be a cage. Send a Bullet Bill to it and get the moon that's inside. </Text>

<Text style = {styles.topicTitleText}>Moon 20: "Inside a Block Is a Hard Place"</Text>

<Text style = {styles.walkthroughInstruction}>At the Sand Pillar, there will be a glowing stone block. Send a Bullet Bill to it and grab the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 21: "Bird Traveling the Desert"</Text>

<Text style = {styles.walkthroughInstruction}>Throw Cappy at a glowing bird that flies around the oasis area. </Text>

<Text style = {styles.topicTitleText}>Moon 22: "Bird Traveling the Wastes"</Text>

<Text style = {styles.walkthroughInstruction}>Throw Cappy at a glowing bird that flies around the Jaxi ruins. </Text>

<Text style = {styles.topicTitleText}>Moon 23: "The Lurker Under the Stone"</Text>

<Text style = {styles.walkthroughInstruction}>At Harriet's arena, there will be a moving stone mound that you ground pound to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 24: "The Treasure of Jaxi Ruins"</Text>

<Text style = {styles.walkthroughInstruction}>At the Sand Pillar, there is a quicksand sinkhole that once you enter, you are brought to an ice section with the moon at the end. </Text>

<Text style = {styles.topicTitleText}>Moon 25: "Desert Gardening: Plaza Seed"</Text>

<Text style = {styles.walkthroughInstruction}>In Tosterina, there will be 3 flower pots right next to each other. There will also be a seed near them that you throw in one of the pots and it will eventually grow to give you a moon. </Text>

<Text style = {styles.topicTitleText}>Moon 26: "Desert Gardening: Ruins Seed"</Text>

<Text style = {styles.walkthroughInstruction}>At the east side of the ruins, there will be an alcove with another seed inside. Throw it into another flower pot and you get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 27: "Desert Gardening: Seed on the Cliff"</Text>

<Text style = {styles.walkthroughInstruction}>Head for the west side of the kingdom, specifically west of Tosterina, and there will be a lower ledge. There will be one final seed. Throw it into the last flower pot and you will get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 28: "Sand Kingdom Timer Challenge 1"</Text>

<Text style = {styles.walkthroughInstruction}>On top of the temple to the northwest of the kingdom, there is a starecrow which you throw Cappy on. A structure will appear and you have to go through the structure and walljump to the moon before the timer expires. </Text>

<Text style = {styles.topicTitleText}>Moon 29: "Sand Kingdom Timer Challenge 2"</Text>

<Text style = {styles.walkthroughInstruction}>At the Moe-Eye Habitat, there is a P-Switch that you press to spawn a path above the poison. There is a key on the path and once you collect the key, just grab the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 30: "Sand Kingdom Timer Challenge 3"</Text>

<Text style = {styles.walkthroughInstruction}>Near Jaxi Ruins, there is a starecrow which you throw Cappy on. Some platforms will appear above the poison which you must jump across to get to the moon before the timer expires. </Text>

<Text style = {styles.topicTitleText}>Moon 31: "Found in the Sand! Good Dog!"</Text>

<Text style = {styles.walkthroughInstruction}>Outside the Crazy Cap, there is a dog wearing a hat that once you get near him, he will start running off towards the dunes to the west. Follow him enough and you will find the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 32: "Taking Notes: Jump on the Palm"</Text>

<Text style = {styles.walkthroughInstruction}>At the oasis, there is a music note on top of a palm tree, collect it and you must collect more notes to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 33: "Herding Sheep in the Dunes"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Inverted Pyramid, there is a Tosterinian who lost his sheep. They are near the area and if you bring all 3 of them back into the pen, you will get a Moon. </Text>

<Text style = {styles.topicTitleText}>Moon 34: "Fishing in the Oasis"</Text>

<Text style = {styles.walkthroughInstruction}>At the oasis, there is a Lakitu you can capture. Fish in the water to get a Cheep Cheep with a moon. </Text>

<Text style = {styles.topicTitleText}>Moon 35: "Love in the Heart of the Desert"</Text>

<Text style = {styles.walkthroughInstruction}>At the base of the ruins, there are 4 Goombas. Capture one and make a Goomba Tower and head further into the ruins to bring them to Goombette. </Text>

<Text style = {styles.topicTitleText}>Moon 36: "Among the Five Cactuses"</Text>

<Text style = {styles.walkthroughInstruction}>At the far northern end of the kingdom, there are five cactuses, you should use a Jaxi to destroy the middle one to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 37: "You're Quite a Catch, Captain Toad!"</Text>

<Text style = {styles.walkthroughInstruction}>Using the same Lakitu as before, go further north to find a moving sand dune, fish it up to find Captain Toad. Talk to him and you get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 38: "Jaxi Reunion!"</Text>

<Text style = {styles.walkthroughInstruction}>Get Jaxi, and go east of the oasis, there you will find a Jaxi statue with a spot in front of it. Put Jaxi there and you get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 39: "Welcome Back, Jaxi!"</Text>

<Text style = {styles.walkthroughInstruction}>Go to Harriet's arena, then call a Jaxi and look for the one corner without a Jaxi statue. Bring Jaxi there and you get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 40: "Wandering Cactus"</Text>

<Text style = {styles.walkthroughInstruction}>North of the oasis, there is a cactus that you can capture to move it. After moving it, you get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 41: "Sand Quiz: Wonderful!"</Text>

<Text style = {styles.walkthroughInstruction}>On the north side of the ruins, you will find a Sphynx. Answer 5 riddles correctly and the moon is yours. </Text>

<Text style = {styles.topicTitleText}>Moon 42: "Shopping in Tostarena"</Text>

<Text style = {styles.walkthroughInstruction}>In Tosterina, there is a Crazy Cap shop, go in and buy the moon for 100 coins. </Text>

<Text style = {styles.topicTitleText}>Moon 43: "Employees Only"</Text>

<Text style = {styles.walkthroughInstruction}>Next to the Crazy Cap shop, there is a small alcove where you can crouch through to enter the Crazy Cap and get the moon behind the counter. </Text>

<Text style = {styles.topicTitleText}>Moon 44: "Sand Kingdom Slots"</Text>

<Text style = {styles.walkthroughInstruction}>In Tosterina, there is a building in which you can play the slots for a chance to win a moon. </Text>

<Text style = {styles.topicTitleText}>Moon 45: "Walking the Desert!"</Text>

<Text style = {styles.walkthroughInstruction}>Northwest of the oasis, there is a Koopa Troopa who will ask you to his Trace-Walking minigame. Win at least 80 points and you win. </Text>

<Text style = {styles.topicTitleText}>Moon 46: "Hidden Room in the Inverted Pyramid"</Text>

<Text style = {styles.walkthroughInstruction}>In the Inverted Pyramid, there is an alcove in the area with the moving pillars that you can go through and find the moon in a chest. </Text>

<Text style = {styles.topicTitleText}>Moon 47: "Underground Treasure Chest"</Text>

<Text style = {styles.walkthroughInstruction}>In the Underground Temple, at the first section with Bullet Bills, take one and fly to the right of the eastern wall in front of you. There will be some platforming that will get you to a chest. </Text>

<Text style = {styles.topicTitleText}>Moon 48: "Goomba Tower Assembly"</Text>

<Text style = {styles.walkthroughInstruction}>In the Underground Temple, there are some Goombas that you can stack to get the moon later on in the level. </Text>

<Text style = {styles.topicTitleText}>Moon 49: "Under the Mummy's Curse"</Text>

<Text style = {styles.walkthroughInstruction}>Return to Knucklotec's arena, and there you will find many Chinchos, defeat th glowing one and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 50: "Ice Cave Treasure"</Text>

<Text style = {styles.walkthroughInstruction}>Back to the area in the quicksand sinkhole, go on top of the pillars to find a secret chest. </Text>

<Text style = {styles.topicTitleText}>Moon 51: "Sphynx's Treasure Vault"</Text>

<Text style = {styles.walkthroughInstruction}>Answer one of Sphynx's riddles, and enter the room behind him to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 52: "A Rumble from the Sandy Floor"</Text>

<Text style = {styles.walkthroughInstruction}>Near moon 5, there is a pipe that takes you to a secret room, where the objective is to use your controller's vibrations to find the moon by ground pounding. </Text>

<Text style = {styles.topicTitleText}>Moon 53: "Dancing with New Friends"</Text>

<Text style = {styles.walkthroughInstruction}>At the north end of town, there is a building with some Tosterinians, and they will only let you inside if your are wearing the Poncho outfit and the Sombrero hat. Inside just get on stage and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 54: "The Invisible Maze"</Text>

<Text style = {styles.walkthroughInstruction}>North of the Moe-Eye Habitat, there is a door that you can enter to find a series of rooms with invisible pathways. You must use the Moe-Eye to find the correct path. At the end is the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 55: "Skull Sign in the Transparent Maze"</Text>

<Text style = {styles.walkthroughInstruction}>In the middle of the previous area, there is a skull sign that you can throw Cappy on, the moon will appear after a few seconds. </Text>

<Text style = {styles.topicTitleText}>Moon 56: "The Bullet Bill Maze: Break Through!"</Text>

<Text style = {styles.walkthroughInstruction}>At the temple northwest of the kingdom, there is a door that you can enter that will bring you to a maze with Bullet Bills. At the end is the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 57: "The Bullet Bill Maze: Side Path"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area, there is a swirling section that in the middle of it, is the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 58: "Jaxi Driver"</Text>

<Text style = {styles.walkthroughInstruction}>At Jaxi Ruins, there is an entrance that can only be accessed if you enter while riding a Jaxi. It will bring you to a secret area with the moon at the end. </Text>

<Text style = {styles.topicTitleText}>Moon 59: "Jaxi Stunt Driving"</Text>

<Text style = {styles.walkthroughInstruction}>Inside Jaxi Ruins, there is a secret side pth with music notes, collect them all to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 60: "Strange Neighborhood"</Text>

<Text style = {styles.walkthroughInstruction}>At Tosterina, there is a rocket you can capture to bring you to a secret area. There you must travel across rotating buildings WITHOUT Cappy. </Text>

<Text style = {styles.topicTitleText}>Moon 61: "Above a Strange Neighborhood"</Text>

<Text style = {styles.walkthroughInstruction}>In the middle of the previous area, there are 3 blocks with a hidden block above them. Go on top of that block and grab the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 62: "Secret Path to Tostarena!"</Text>

<Text style = {styles.walkthroughInstruction}>Find a secret painting in either Lake or Wooded Kingdom and go through it. You will be brought to a high up platform in Sand Kingdom with the moon on it. </Text>

<Text style = {styles.topicTitleText}>NOTE: These Moons can only be obtained after beating Bowser in the Moon Kingdom.</Text>

<Text style = {styles.topicTitleText}>Moon 63: "Found with Sand Kingdom Art"</Text>

<Text style = {styles.walkthroughInstruction}>In Tosterina, there is some Hint Art that will lead you to Bowser's Kingdom. Head to the Crazy Cap shop there and ground pound the stone shown in the art to collect the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 64: "Jammin' in the Sand Kingdom"</Text>

<Text style = {styles.walkthroughInstruction}>On one of the buildings in Tosterina, there is a Jammin' Toad who will ask you to play a certain type of music. Play any boss battle theme and you get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 65: "Hat-and-Seek: In the Sand"</Text>

<Text style = {styles.walkthroughInstruction}>West of Crazy Cap, there is a hat ghost disguised as a sombrero. Talk to them and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 66: "Sand Kingdom Regular Cup"</Text>

<Text style = {styles.walkthroughInstruction}>At the temple to the northwest, there is a Koopa Troopa hosting Koopa Freerunning. Beat the race and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 67: "Binding Band Returned"</Text>

<Text style = {styles.walkthroughInstruction}>Return to the area right before Knucklotec's arena, and throw Cappy on top of the giant ring in the pedestal. </Text>

<Text style = {styles.topicTitleText}>Moon 68: "'Round-the-World Tourist"</Text>

<Text style = {styles.walkthroughInstruction}>After talking to the Tosterinian at every single kingdom you visit, this is his last location. Talk to him and get your moon. </Text>

<Text style = {styles.topicTitleText}>Moon 69: "Peach in the Sand Kingdom"</Text>

<Text style = {styles.walkthroughInstruction}>On the Inverted Pyramid, you can find Peach and Tiara the edge of the pyramid. Talk to them and get the moon. </Text>

<Text style = {styles.topicTitleText}>NOTE: These Moons can only be obtained by breaking open the Moon Rock in the kingdom.</Text>

<Text style = {styles.topicTitleText}>Moon 70: "Mighty Leap from the Palm Tree!"</Text>

<Text style = {styles.walkthroughInstruction}>Go to the oasis, and head to the northwestern tree, ground pound jump on it to grab the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 71: "On the North Pillar"</Text>

<Text style = {styles.walkthroughInstruction}>You will see a moon on a pillar in the north side of the kingdom. Capture a Spark Pylon and go above the pillar and exit the pylon to ladn on the pillar. </Text>

<Text style = {styles.topicTitleText}>Moon 72: "Into the Flowing Sands"</Text>

<Text style = {styles.walkthroughInstruction}>On the western side of the ruins, you can find the moon on top of a rapidly flowing stream of quicksand. Land right on top of the moon to get it. </Text>

<Text style = {styles.topicTitleText}>Moon 73: "In the Skies Above the Canyon"</Text>

<Text style = {styles.walkthroughInstruction}>Go on the moving platforms heading towards the Moe-Eye Habitat, and make a leap of faith from one of the platforms to the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 74: "Island in the Poison Swamp"</Text>

<Text style = {styles.walkthroughInstruction}>There is an island near Jaxi Ruins with the moon on it. Grab Jaxi to get across the poison and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 75: "An Invisible Gleam"</Text>

<Text style = {styles.walkthroughInstruction}>Get a Moe-Eye, and walk to one of the pillars in the habitat. Ground pound the pillar that is glowing in Moe-Eye Vision. </Text>

<Text style = {styles.topicTitleText}>Moon 76: "On the Eastern Pillar"</Text>

<Text style = {styles.walkthroughInstruction}>Lead a Bullet Bill to the pillars in between the ruins and Jaxi ruins, capture the Bullet Bill and fly your way to the far eastern pillar with a stone block on it. Destroy it and grab the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 77: "Caught Hopping in the Desert!"</Text>

<Text style = {styles.walkthroughInstruction}>West of Tosterina, there are 3 rabbits. One of them has a moon when caught. </Text>

<Text style = {styles.topicTitleText}>Moon 78: "Poster Cleanup"</Text>

<Text style = {styles.walkthroughInstruction}>Head to the temple to the northwest and remove all the wedding posters from it. Then talk to the Tosterinian and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 79: "Taking Notes: Running Down"</Text>

<Text style = {styles.walkthroughInstruction}>There is a music note at the southwestern part of the kingdom. You must use Jaxi to collect them all. </Text>

<Text style = {styles.topicTitleText}>Moon 80: "Taking Notes: In the Wall Painting"</Text>

<Text style = {styles.walkthroughInstruction}>In the last 8-bit section of the ruins, you must collect all the music notes to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 81: "Love at the Edge of the Desert"</Text>

<Text style = {styles.walkthroughInstruction}>Get a Goomba from the ruins, and head to the northwest part of the kingdom. Goombette will be there and will give you a moon once you go near her. </Text>

<Text style = {styles.topicTitleText}>Moon 82: "More Walking in the Desert!"</Text>

<Text style = {styles.walkthroughInstruction}>Return to the Trace-Walking minigame, this time you must reach 90 points. </Text>

<Text style = {styles.topicTitleText}>Moon 83: "Sand Kingdom Master Cup"</Text>

<Text style = {styles.walkthroughInstruction}>Return to Koopa Freerunning, the other racers will be faster and you must beat them to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 84: "Where the Transparent Platforms End"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Odyssey is a Moon Pipe which brings you to an area where you need a Moe-Eye to get across some invisible platforms to reach the end and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 85: "Jump Onto the Transparent Lift"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area, there is a invisible platform far lower than the others. Make a precise jump to it and it will lead you to the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 86: "Colossal Ruins: Dash! Jump!"</Text>

<Text style = {styles.walkthroughInstruction}>At the entrance to the ruins, there is a Moon Pipe that will take you to a secret area with a sinking path, you must use a Rocket Flower to reach the end fast enough and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 87: "Sinking Colossal Ruins: Hurry!"</Text>

<Text style = {styles.walkthroughInstruction}>In the sinking path, there is a key that will spawn a moon at the beginning of the area. </Text>

<Text style = {styles.topicTitleText}>Moon 88: "Through the Freezing Waterway"</Text>

<Text style = {styles.walkthroughInstruction}>East of the Inverted Pyramid, there is a Moon Pipe which brings you to an underwater area with freezing water. Capture a Gushen and reach the end to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 89: "Freezing Waterway: Hidden Room"</Text>

<Text style = {styles.walkthroughInstruction}>Capture a Gushen, and continue to go up and towards the left to find the moon. </Text>

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
