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

export default class LuncheonKingdomMoons extends React.Component {

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
source = {require('../assets/SMOWalkthrough11.jpg')}
style = {{width:250,height:150}}
/>


<Text style = {styles.gameDiscription}>The Luncheon Kingdom is your eleventh stop in your adventure in Super Mario Odyssey! This kingdom is a land full of food and boiling soup. You must travel through the kingdom to defeat Cookatiel at the top of the volcano. </Text>

<Text style = {styles.topicTitleText}>Moon 1: "The Broodals Are After Some Cookin'"</Text>

<Text style = {styles.walkthroughInstruction}>Defeat Spewart. </Text>

<Text style = {styles.topicTitleText}>Moon 2: "Under the Cheese Rocks"</Text>

<Text style = {styles.walkthroughInstruction}>In the area with the Cheese Rocks, use a Hammer Bro to destroy them and flip the switch to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 3: "Big Pot on the Volcano: Dive In!"</Text>

<Text style = {styles.walkthroughInstruction}>At the Meat Plateau, capture the piece of meat and you will be taken to the giant stew pot at the top of the volcano. The Multi Moon is there. </Text>

<Text style = {styles.topicTitleText}>Moon 4: "Climb Up the Cascading Magma"</Text>

<Text style = {styles.walkthroughInstruction}>Go to the Volcano Cave and capture a Lava Bubble. Reach the end of the cave to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 5: "Cookatiel Showdown!"</Text>

<Text style = {styles.walkthroughInstruction}>Defeat Cookatiel. </Text>

<Text style = {styles.topicTitleText}>Moon 6: "Piled on the Salt"</Text>

<Text style = {styles.walkthroughInstruction}>On the building next to the Odyssey, ground pound on the mound of salt to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 7: "Lurking in the Pillar's Shadow"</Text>

<Text style = {styles.walkthroughInstruction}>Left of Peronza Plaza there is a building you can get on. There is an alcove near it with the moon in it. </Text>

<Text style = {styles.topicTitleText}>Moon 8: "Atop the Jutting Crag"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Salt-Pile Isle, capture a Lava Bubble and get in a Lava Bubble Cannon. Exit the Lava Bubble in mid air to reach an island with the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 9: "Is This an Ingredient Too?!"</Text>

<Text style = {styles.walkthroughInstruction}>In one of the alleys in Peronza Plaza, there are two stacks of crates. In one of the crates is the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 10: "Atop a Column in a Row"</Text>

<Text style = {styles.walkthroughInstruction}>On top of one of the columns in Peronza Plaza there is a glowing spot. Ground pound it to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 11: "Surrounded by Tall Mountains"</Text>

<Text style = {styles.walkthroughInstruction}>By jumping off the Meat Plateau there is a glowing spot on one of the green mountains. </Text>

<Text style = {styles.topicTitleText}>Moon 12: "Island of Salt Floating in the Lava"</Text>

<Text style = {styles.walkthroughInstruction}>Near Salt-Pile Isle, there is a island of salt. Ground pound the middle of it to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 13: "Overlooking a Bunch of Ingredients"</Text>

<Text style = {styles.walkthroughInstruction}>Jump off Cookatiel's arena onto some blue-purple parts of the mountain. There is a glowing spot there. </Text>

<Text style = {styles.topicTitleText}>Moon 14: "Light the Lantern on the Small Island"</Text>

<Text style = {styles.walkthroughInstruction}>At the Path to the Meat Plateau there is a unlit torch. Light it to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 15: "Golden Turnip Recipe 1"</Text>

<Text style = {styles.walkthroughInstruction}>Next to the Crazy Cap there is a Golden Turnip. Throw it into a stew pot in Peronza Plaza to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 16: "Golden Turnip Recipe 2"</Text>

<Text style = {styles.walkthroughInstruction}>Near moon 8 is another Golden Turnip. Throw it into the stew pot to get the moon.</Text>

<Text style = {styles.topicTitleText}>Moon 17: "Golden Turnip Recipe 3"</Text>

<Text style = {styles.walkthroughInstruction}>At the Path to the Meat Plateau, there is a cheese rock that you can break with a Hammer Bro. Inside is another Golden Turnip. Throw it into the stew pot to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 18: "Luncheon Kingdom Timer Challenge 1"</Text>

<Text style = {styles.walkthroughInstruction}>On one of the buildings near the Odyssey there is a starecrow. Throw Cappy on it to start the challenge. You need to wall jump to the moon in the time limit. </Text>

<Text style = {styles.topicTitleText}>Moon 19: "Luncheon Kingdom Timer Challenge 2"</Text>

<Text style = {styles.walkthroughInstruction}>At Peronza Plaza there is a starecrow. Throw Cappy on it to start the challenge. You need to get the key to get the moon in the time limit. </Text>

<Text style = {styles.topicTitleText}>Moon 20: "Luncheon Kingdom Timer Challenge 3"</Text>

<Text style = {styles.walkthroughInstruction}>At the Start of the Meat Climb there is a starecrow. Throw Cappy on it to start the challenge. You need to get the key to get the moon in the time limit. </Text>

<Text style = {styles.topicTitleText}>Moon 21: "Beneath the Rolling Vegetables"</Text>

<Text style = {styles.walkthroughInstruction}>At the Remote Island in the Lava, there is a 8-bit pipe that will take you to a 8-bit section. At the end is the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 22: "All the Cracks Are Fixed"</Text>

<Text style = {styles.walkthroughInstruction}>At the Remote Island in the Lava, ground pound all of the cracks in the ground to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 23: "Taking Notes: Swimming in Magma"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Remote Island in the Lava, grab a Lava Bubble and collect the music notes in the time limit to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 24: "Love Above the Lava"</Text>

<Text style = {styles.walkthroughInstruction}>Get a Goomba Tower, and bring them to Goombette near the Odyssey. </Text>

<Text style = {styles.topicTitleText}>Moon 25: "Shopping in Mount Volbono"</Text>

<Text style = {styles.walkthroughInstruction}>At Peronza Plaza there is a Crazy Cap shop where you can buy the moon for 100 coins. </Text>

<Text style = {styles.topicTitleText}>Moon 26: "Luncheon Kingdom Slots"</Text>

<Text style = {styles.walkthroughInstruction}>In Peronza Plaza there is a building where you can win a moon from the slots. </Text>

<Text style = {styles.topicTitleText}>Moon 27: "A Strong Simmer"</Text>

<Text style = {styles.walkthroughInstruction}>To the left of the Crazy Cap there is a locked door with a Volbonan in front of it. You can only enter with the Chef's outfit and hat. Bring a Lava Bubble to the pot of stew inside to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 28: "An Extreme Simmer"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area, bring a Lava Bubble to the end of the are into the pot of stew to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 29: "Alcove Behind the Pillars of Magma"</Text>

<Text style = {styles.walkthroughInstruction}>At the location of moon 4, go to the wall behind you with a Lava Bubble to find the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 30: "Treasure Beneath the Cheese Rocks"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Odyssey there is a pile of Cheese Rocks. Bring a Hammer Bro from later in the Kingdom to get the moon inside the Cheese Rocks. </Text>

<Text style = {styles.topicTitleText}>Moon 31: "Light the Two Flames"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Odyssey, there are two torches that must be lit with a Fire Bro to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 32: "Light the Far-Off Lanterns"</Text>

<Text style = {styles.walkthroughInstruction}>Past the Volcano Cave, there are some torches that must be lit by a Fire Piranha Plant to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 33: "Bon Appétit, Captain Toad!"</Text>

<Text style = {styles.walkthroughInstruction}>Near the mountain that you climb up to fight Cookatiel, you can find Captain Toad at a faraway salt island. Talk to him and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 34: "The Treasure Chest in the Veggies"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Path to the Meat Plateau, there is  a door with a chest with the moon inside. </Text>

<Text style = {styles.topicTitleText}>Moon 35: "Caught Hopping at the Volcano!"</Text>

<Text style = {styles.walkthroughInstruction}>At the beginning of Peronza Plaza, there is a rabbit that gives a moon when caught. </Text>

<Text style = {styles.topicTitleText}>Moon 36: "Taking Notes: Big Pot Swim"</Text>

<Text style = {styles.walkthroughInstruction}>At Cookatiel's arena, there is a music note that you can collect to start the challenge. Collect all of the music notes to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 37: "Magma Swamp: Floating and Sinking"</Text>

<Text style = {styles.walkthroughInstruction}>At Peronza Plaza, there is a door by dropping off a ledge. In this area you must get all 5 moon shards. </Text>

<Text style = {styles.topicTitleText}>Moon 38: "Corner of the Magma Swamp"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area, there is a moon behind the enterance. </Text>

<Text style = {styles.topicTitleText}>Moon 39: "Magma Narrow Path"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Meat Plateau, there is a door that leads to another bonus area. Here you reach the end while using Lava Bubbles. </Text>

<Text style = {styles.topicTitleText}>Moon 40: "Crossing to the Magma"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area, there is a split path that leads to the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 41: "Fork Flickin' to the Summit"</Text>

<Text style = {styles.walkthroughInstruction}>Near Salt-Pile Isle, there is a door that leads to a bonus area. Here you navigate using Volbonans. </Text>

<Text style = {styles.topicTitleText}>Moon 42: "Fork Flickin' Detour"</Text>

<Text style = {styles.walkthroughInstruction}>Before the end of the previous area, flick to the right to find a secret area with the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 43: "Excavate 'n' Search the Cheese Rocks"</Text>

<Text style = {styles.walkthroughInstruction}>At the Path to the Meat Plateau you need to capture a Hammer Bro and break some Cheese Rocks to reveal a door. Inside you need to break cheese blocks to find moon shards. </Text>

<Text style = {styles.topicTitleText}>Moon 44: "Climb the Cheese Rocks"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area, you can climb some cheese blocks to reach an alcove with the moon in it. </Text>

<Text style = {styles.topicTitleText}>Moon 45: "Spinning Athletics End Goal"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Remote Island on the Lava, there is a starecrow that opens a secret area. You must reach the end WITHOUT Cappy. </Text>

<Text style = {styles.topicTitleText}>Moon 46: "Taking Notes: Spinning Athletics"</Text>

<Text style = {styles.walkthroughInstruction}>Partway through the previous area, there is a music note that will start the challenge. Collect all the notes in the time limit to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 47: "Secret Path to Mount Volbono!"</Text>

<Text style = {styles.walkthroughInstruction}>Find a secret painting in either the Lake or Wooded Kingdom to get to a secret island above the kingdom with the moon on it. </Text>

<Text style = {styles.topicTitleText}>Moon 48: "A Tourist in the Luncheon Kingdom!"</Text>

<Text style = {styles.walkthroughInstruction}>At Peronza Plaza there is a Taxi driver who will give the moon when you talk to them. </Text>

<Text style = {styles.topicTitleText}>Moon 49: "Found with Luncheon Kingdom Art"</Text>

<Text style = {styles.walkthroughInstruction}>On the Path to the Meat Plateau there is some Hint Art that will bring you to the Seaside Kingdom. Ground pound the wpot in the picture to get the moon. </Text>

<Text style = {styles.topicTitleText}>NOTE: These Moons can only be obtained after beating Bowser in the Moon Kingdom.</Text>

<Text style = {styles.topicTitleText}>Moon 50: "The Rooftop Lantern"</Text>

<Text style = {styles.walkthroughInstruction}>Capture a Fire Bro, then return to Peronza Plaza to light up a torch on top of a building to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 51: "Jammin' in the Luncheon Kingdom"</Text>

<Text style = {styles.walkthroughInstruction}>Near Peronza Plaza, you can find Jammin' Toad. Play any Honeylune Ridge escape theme to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 52: "Mechanic: Repairs Complete!"</Text>

<Text style = {styles.walkthroughInstruction}>At the Peronza Plaza, there is a Steam Gardener that will give you a moon if you are wearing the Mechanic Outfit. </Text>

<Text style = {styles.topicTitleText}>Moon 53: "Diving from the Big Pot!"</Text>

<Text style = {styles.walkthroughInstruction}>Get a Lava Bubble, and jump from Cookatiel's arena to a small pot in Peronza Plaza to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 54: "Hat-and-Seek: Among the Food"</Text>

<Text style = {styles.walkthroughInstruction}>Behind one of the buildings in Peronza Plaza there is a hat ghost disguised as a chef hat. Talk to them and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 55: "Luncheon Kingdom Regular Cup"</Text>

<Text style = {styles.walkthroughInstruction}>Outside Volcano Cave, there is a Koopa Troopa who will invite you to Koopa Freerunning. Win the race and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 56: "Peach in the Luncheon Kingdom"</Text>

<Text style = {styles.walkthroughInstruction}>At Peronza Plaza you can find Peach and Tiara. Talk to them and get the moon. </Text>

<Text style = {styles.topicTitleText}>NOTE: These Moons can only be obtained by breaking open the Moon Rock in the kingdom.</Text>

<Text style = {styles.topicTitleText}>Moon 57: "From Inside a Bright Stone"</Text>

<Text style = {styles.walkthroughInstruction}>To the left of the enterance to Peronza Plaza is a blue rock with a moon when ground pounded. </Text>

<Text style = {styles.topicTitleText}>Moon 58: "Under the Meat Plateau"</Text>

<Text style = {styles.walkthroughInstruction}>Behind a green wall near the Meat Plateau is the moon floating over the lava. </Text>

<Text style = {styles.topicTitleText}>Moon 59: "On Top of a Tall, Tall Roof"</Text>

<Text style = {styles.walkthroughInstruction}>On top of the Volcano Cave exit is a moon. </Text>

<Text style = {styles.topicTitleText}>Moon 60: "From a Crack in the Hard Ground"</Text>

<Text style = {styles.walkthroughInstruction}>On a high ledge of the Path to the Meat Plateau is some cracks on the ground. Ground pound them to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 61: "By the Cannon Pointed at the Big Pot"</Text>

<Text style = {styles.walkthroughInstruction}>At the Top of the Peak Climb, there is a glowing spot next to a Lava Bubble Cannon. Ground pound it to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 62: "Luncheon Kingdom: Master Cup"</Text>

<Text style = {styles.walkthroughInstruction}>Beat Koopa Freerunning again with faster racers. </Text>

<Text style = {styles.topicTitleText}>Moon 63: "Stepping Over the Gears"</Text>

<Text style = {styles.walkthroughInstruction}>At the top of the Meat Plateau is a Moon Pipe,which takes you to an area where you have to travel across some gears. </Text>

<Text style = {styles.topicTitleText}>Moon 64: "Lanterns on the Gear Steps"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area, light up all the torches that appear. </Text>

<Text style = {styles.topicTitleText}>Moon 65: "Volcano Cave Cruisin'"</Text>

<Text style = {styles.walkthroughInstruction}>At the Volcano Cave enterance there is a Moon Pipe that will bring you to a secret area where you have to ride a moving platform to make it to the end. </Text>

<Text style = {styles.topicTitleText}>Moon 66: "Volcano Cave and Mysterious Clouds"</Text>

<Text style = {styles.walkthroughInstruction}>At one of the corners in the previous area there is a moon next to some hat clouds. </Text>

<Text style = {styles.topicTitleText}>Moon 67: "Treasure of the Lava Islands"</Text>

<Text style = {styles.walkthroughInstruction}>On one of the buildings next to the Odyssey, there is a Moon Pipe that you can enter. Inside is a bonus area where you need to go across many different Lava Bubble Cannons. </Text>

<Text style = {styles.topicTitleText}>Moon 68: "Flying Over the Lava Islands"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area, uncapture the Lava Bubble as you are being fired from the first cannon. </Text>

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
