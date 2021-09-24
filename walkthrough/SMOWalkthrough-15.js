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

export default class MushroomKingdomMoons extends React.Component {

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
source = {require('../assets/SMOWalkthrough15.png')}
style = {{width:250,height:150}}
/>


<Text style = {styles.gameDiscription}>Ah, the Mushroom Kingdom. Anyone who has played a Mario Game is familiar with this place. You have defeated Bowser and saved Princess Peach. Now it is time for the post game. This has the record of having the most moons in the game. It's time to take on harder versions of the bosses, complete Toadette's achievements. And all the moons are actually Power Stars! Experience nostalgia. But wait, where's Princess Peach? </Text>

<Text style = {styles.topicTitleText}>Moon 1: "Perched on the Castle Roof"</Text>

<Text style = {styles.walkthroughInstruction}>The Star is on the northeastern tower of Peach's Castle. </Text>

<Text style = {styles.topicTitleText}>Moon 2: "Pops Out of the Tail"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Odyssey, the Tail Tree from Super Mario 3D Land can be seen. Throw Cappy on the tail to get the star. </Text>

<Text style = {styles.topicTitleText}>Moon 3: "Caught Hopping at Peach's Castle!"</Text>

<Text style = {styles.walkthroughInstruction}>Head to the Garden to the left of Peach's Castle, there will be a rabbit that gives a star when caught. </Text>

<Text style = {styles.topicTitleText}>Moon 4: "Gardening for Toad: Garden Seed"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Garden, there is a seed that can be brought to a flower pot in the Garden to eventually grow into a star. </Text>

<Text style = {styles.topicTitleText}>Moon 5: "Gardening for Toad: Field Seed"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Odyssey, there is a group of 3 trees with a seed in the middle. Take the seed to the garden to put in another flower pot to grow a star. </Text>

<Text style = {styles.topicTitleText}>Moon 6: "Gardening for Toad: Pasture Seed"</Text>

<Text style = {styles.walkthroughInstruction}>Near the sheep pen, there is a tree with another seed next to it. Bring it to the garden and another flower pot to get a star. </Text>

<Text style = {styles.topicTitleText}>Moon 7: "Gardening for Toad: Lake Seed"</Text>

<Text style = {styles.walkthroughInstruction}>At the bottom of Mushroom Lake, there is one last seed. Bring it to the garden and to another flower pot to grow another star. </Text>

<Text style = {styles.topicTitleText}>Moon 8: "Grow a Flower Garden"</Text>

<Text style = {styles.walkthroughInstruction}>North of the garden, there is a group of unbloomed flowers. Bloom them all to get a star. </Text>

<Text style = {styles.topicTitleText}>Moon 9: "Mushroom Kingdom Timer Challenge"</Text>

<Text style = {styles.walkthroughInstruction}>Northeast of Peach's castle, there is a starecrow that will start the challenge once Cappy is thrown on it. You need to use a rocket flower to get the star. </Text>

<Text style = {styles.topicTitleText}>Moon 10: "Found at Peach's Castle! Good Dog!"</Text>

<Text style = {styles.walkthroughInstruction}>At the Crazy Cap, there is a dog that will show you a moon if you follow it. </Text>

<Text style = {styles.topicTitleText}>Moon 11: "Taking Notes: Around the Well"</Text>

<Text style = {styles.walkthroughInstruction}>West of Peach's Castle is a well with a 8-bit pipe portruding from it. You need to collect the music note at the end to spawn more notes. Collect those to get the star. </Text>

<Text style = {styles.topicTitleText}>Moon 12: "Herding Sheep at Peach's Castle"</Text>

<Text style = {styles.walkthroughInstruction}>There is a sheep pen west of the castle. You need to bring 6 sheep from around the kingdom to the pen to get the star. </Text>

<Text style = {styles.topicTitleText}>Moon 13: "Gobbling Fruit with Yoshi"</Text>

<Text style = {styles.walkthroughInstruction}>Capture Yoshi on Peach's Castle, and fill up his Fruit Meter. </Text>

<Text style = {styles.topicTitleText}>Moon 14: "Yoshi's Second Helping!"</Text>

<Text style = {styles.walkthroughInstruction}>Fill up Yoshi's Fruit Meter a second time. </Text>

<Text style = {styles.topicTitleText}>Moon 15: "Yoshi's All Filled Up!"</Text>

<Text style = {styles.walkthroughInstruction}>Fill up Yoshi's Fruit Meter a third time. </Text>

<Text style = {styles.topicTitleText}>Moon 16: "Love at Peach's Castle"</Text>

<Text style = {styles.walkthroughInstruction}>Drain the castle's moat by pulling the poles at the bottom of the moat. Then make a Goomba Tower from the Goombas north of the castle, and reach Goombette at the moat. </Text>

<Text style = {styles.topicTitleText}>Moon 17: "Toad Defender"</Text>

<Text style = {styles.walkthroughInstruction}>East of the castle is a toad guarding a star. Bring a Goomba from Goomba Woods to scare him off and get the star. </Text>

<Text style = {styles.topicTitleText}>Moon 18: "Forever Onward, Captain Toad!"</Text>

<Text style = {styles.walkthroughInstruction}>On top of the Crazy Cap shop is Captain Toad, talk to him and get the star. </Text>

<Text style = {styles.topicTitleText}>Moon 19: "Jammin' in the Mushroom Kingdom"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Odyssey is Jammin' Toad. Play any 8-bit song to get the star. </Text>

<Text style = {styles.topicTitleText}>Moon 20: "Shopping Near Peach's Castle"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Odyssey is the Crazy Cap shop, you can buy the star for 100 coins. </Text>

<Text style = {styles.topicTitleText}>Moon 21: "Mushroom Kingdom Regular Cup"</Text>

<Text style = {styles.walkthroughInstruction}>Near Mushroom Lake is a Koopa Troopa who will start Koopa Freerunning. Beat the race to get the star. </Text>

<Text style = {styles.topicTitleText}>Moon 22: "Mushroom Kingdom Master Cup"</Text>

<Text style = {styles.walkthroughInstruction}>Complete Koopa Freerunning with faster racers. </Text>

<Text style = {styles.topicTitleText}>Moon 23: "Picture Match: Basically Mario"</Text>

<Text style = {styles.walkthroughInstruction}>Northeast of the castle is a rocket that will bring you to a bonus area. Here you must recreate Mario's face. Get at least 60 points and you win. </Text>

<Text style = {styles.topicTitleText}>Moon 24: "Picture Match: A Stellar Mario!"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area, you must get at least 80 points. </Text>

<Text style = {styles.topicTitleText}>Moon 25: "Light from the Ceiling"</Text>

<Text style = {styles.walkthroughInstruction}>Go inside Peach's Castle, and look at the ceiling long enough for the star to appear. </Text>

<Text style = {styles.topicTitleText}>Moon 26: "Loose-Tile Trackdown"</Text>

<Text style = {styles.walkthroughInstruction}>Go inside Peach's Castle, and ground pound all the loose floor tiles to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 27: "Totally Classic!"</Text>

<Text style = {styles.walkthroughInstruction}>By Goomba Woods, there is a Toad guarding a door. He will only let you in once you are weating the Super Mario 64 Costume. In the bonus area you will have to throw Cappy at the star statue in the middle of the area. </Text>

<Text style = {styles.topicTitleText}>Moon 28: "Courtyard Chest Trap"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area, you have to open the chests in the correct order to get the star. </Text>

<Text style = {styles.topicTitleText}>Moon 29: "Yoshi's Feast in the Sea of Clouds"</Text>

<Text style = {styles.walkthroughInstruction}>At the source of the river leading to Mushroom Lake, there is a Pipe that will take you to a bonus area. There you must complete Yoshi's Fruit Meter </Text>

<Text style = {styles.topicTitleText}>Moon 30: "Sunken Star in the Sea of Clouds"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area, you must go to the left of the starting point, and the star is hidden in the clouds. </Text>

<Text style = {styles.topicTitleText}>Moon 31: "Secret 2D Treasure"</Text>

<Text style = {styles.walkthroughInstruction}>West of the castle is a well you can jump inside. This will take you to a bonus area where you have to go through a giant 8-bit section. </Text>

<Text style = {styles.topicTitleText}>Moon 32: "2D Boost from Bullet Bill"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area, you can see the star partway through, and you have to jump off a Bullet Bill to get to it. </Text>

<Text style = {styles.topicTitleText}>Moon 33: "Tussle in Tostarena: Rematch"</Text>

<Text style = {styles.walkthroughInstruction}>Win the rematch against Knucklotec. </Text>

<Text style = {styles.topicTitleText}>Moon 34: "Struggle in Steam Gardens: Rematch"</Text>

<Text style = {styles.walkthroughInstruction}>Win the rematch against Torkdrift. </Text>

<Text style = {styles.topicTitleText}>Moon 35: "Dust-Up in New Donk City: Rematch"</Text>

<Text style = {styles.walkthroughInstruction}>Win the rematch against Mechawiggler. </Text>

<Text style = {styles.topicTitleText}>Moon 36: "Battle in Bubblaine: Rematch"</Text>

<Text style = {styles.walkthroughInstruction}>Win the rematch against Mollusque-Lanceur. </Text>

<Text style = {styles.topicTitleText}>Moon 37: "Blowup at Mount Volbono: Rematch"</Text>

<Text style = {styles.walkthroughInstruction}>Win the rematch against Cookatiel. </Text>

<Text style = {styles.topicTitleText}>Moon 38: "Rumble in Crumbleden: Rematch"</Text>

<Text style = {styles.walkthroughInstruction}>Win the rematch against the Ruined Dragon. </Text>

<Text style = {styles.topicTitleText}>Moon 39: "Secret Path to Peach's Castle!"</Text>

<Text style = {styles.walkthroughInstruction}>Find a secret painting in the Luncheon Kingdom and go up the chimney. </Text>

<Text style = {styles.topicTitleText}>Moon 40: "A Tourist in the Mushroom Kingdom!"</Text>

<Text style = {styles.walkthroughInstruction}>At the start of the Kingdom, you can find a Taxi Driver. Talk to him and get the star. </Text>

<Text style = {styles.topicTitleText}>Moon 41: "Found with Mushroom Kingdom Art"</Text>

<Text style = {styles.walkthroughInstruction}>In Peach's Castle, there is some Hint Art that will take you to the Cap Kingdom. Then stand right where the Moon is right behind Top-Hat Tower. Then ground pound and get the star. </Text>

<Text style = {styles.topicTitleText}>Moon 42: "Hat-and-Seek: Mushroom Kingdom"</Text>

<Text style = {styles.walkthroughInstruction}>Northwest of the Castle is a toad with a hat ghost as a top hat. Talk to them and get the star. </Text>

<Text style = {styles.topicTitleText}>Moon 43: "Princess Peach, Home Again!"</Text>

<Text style = {styles.walkthroughInstruction}>You will find Peach and Tiara at the balcony of the Castle. Talk to them and get the star. </Text>

<Text style = {styles.topicTitleText}>NOTE: These Moons can only be obtained by talking with Toadette in Peach's Castle.</Text>

<Text style = {styles.topicTitleText}>Moon 44: "Rescue Princess Peach"</Text>

<Text style = {styles.walkthroughInstruction}>Beat Bowser at the Moon Kingdom. </Text>

<Text style = {styles.topicTitleText}>Moon 45: "Achieve World Peace"</Text>

<Text style = {styles.walkthroughInstruction}>Collect all the story moons for each kingdom. </Text>

<Text style = {styles.topicTitleText}>Moon 46: "Power Moon Knight"</Text>

<Text style = {styles.walkthroughInstruction}>Get 100 moons. </Text>

<Text style = {styles.topicTitleText}>Moon 47: "Power Moon Wizard"</Text>

<Text style = {styles.walkthroughInstruction}>Get 300 moons. </Text>

<Text style = {styles.topicTitleText}>Moon 48: "Power Moon Ruler"</Text>

<Text style = {styles.walkthroughInstruction}>Get 600 moons. </Text>

<Text style = {styles.topicTitleText}>Moon 49: "Regional Coin Shopper"</Text>

<Text style = {styles.walkthroughInstruction}>Buy 13 items with regional coins. </Text>

<Text style = {styles.topicTitleText}>Moon 50: "Flat Moon Finder"</Text>

<Text style = {styles.walkthroughInstruction}>Get 10 moons in 8-bit sections. </Text>

<Text style = {styles.topicTitleText}>Moon 51: "Flat Moon Fanatic"</Text>

<Text style = {styles.walkthroughInstruction}>Get 20 moons in 8-bit sections. </Text>

<Text style = {styles.topicTitleText}>Moon 52: "Treasure Chest Hunter"</Text>

<Text style = {styles.walkthroughInstruction}>Get 15 moons from chests. </Text>

<Text style = {styles.topicTitleText}>Moon 53: "Super Treasure Chest Hunter"</Text>

<Text style = {styles.walkthroughInstruction}>Get 25 moons from chests. </Text>

<Text style = {styles.topicTitleText}>Moon 54: "Note-Collecting World Tour"</Text>

<Text style = {styles.walkthroughInstruction}>Get 5 "Taking Notes" moons. </Text>

<Text style = {styles.topicTitleText}>Moon 55: "Note-Collecting Space Tour"</Text>

<Text style = {styles.walkthroughInstruction}>Get 20 "Taking Notes" moons. </Text>

<Text style = {styles.topicTitleText}>Moon 56: "Timer Challenge Amateur"</Text>

<Text style = {styles.walkthroughInstruction}>Get 10 "Timer Challenge" moons. </Text>

<Text style = {styles.topicTitleText}>Moon 57: "Timer Challenge Professional"</Text>

<Text style = {styles.walkthroughInstruction}>Get 25 "Timer Challenge" moons. </Text>

<Text style = {styles.topicTitleText}>Moon 58: "Captain Toad Meeter"</Text>

<Text style = {styles.walkthroughInstruction}>Meet Captain Toad 5 times. </Text>

<Text style = {styles.topicTitleText}>Moon 59: "Captain Toad Greeter"</Text>

<Text style = {styles.walkthroughInstruction}>Meet Captain Toad 10 times. </Text>

<Text style = {styles.topicTitleText}>Moon 60: "Touring with Princess Peach"</Text>

<Text style = {styles.walkthroughInstruction}>Meet Princess Peach 5 times. </Text>

<Text style = {styles.topicTitleText}>Moon 61: "Globe-Trotting with Princess Peach"</Text>

<Text style = {styles.walkthroughInstruction}>Meet Princess Peach 10 times. </Text>

<Text style = {styles.topicTitleText}>Moon 62: "Master Sheep Herder"</Text>

<Text style = {styles.walkthroughInstruction}>Get 4 moons from herding sheep. </Text>

<Text style = {styles.topicTitleText}>Moon 63: "Gaga for Goombette"</Text>

<Text style = {styles.walkthroughInstruction}>Get 5 moons from Goombette. </Text>

<Text style = {styles.topicTitleText}>Moon 64: "Lakitu Fishing Trip"</Text>

<Text style = {styles.walkthroughInstruction}>Get 3 Lakitu moons. </Text>

<Text style = {styles.topicTitleText}>Moon 65: "Flower-Growing Guru"</Text>

<Text style = {styles.walkthroughInstruction}>Get 5 moons from seeds. </Text>

<Text style = {styles.topicTitleText}>Moon 66: "Flower-Growing Sage"</Text>

<Text style = {styles.walkthroughInstruction}>Get 10 moons from seeds. </Text>

<Text style = {styles.topicTitleText}>Moon 67: "Running with Rabbits"</Text>

<Text style = {styles.walkthroughInstruction}>Get 5 moons from chasing rabbits. </Text>

<Text style = {styles.topicTitleText}>Moon 68: "Racing with Rabbits"</Text>

<Text style = {styles.walkthroughInstruction}>Get 10 moons from chasing rabbits. </Text>

<Text style = {styles.topicTitleText}>Moon 69: "Ground Pound Instructor"</Text>

<Text style = {styles.walkthroughInstruction}>Dig up 15 moons from ground pounds. </Text>

<Text style = {styles.topicTitleText}>Moon 70: "Ground Pound Professor"</Text>

<Text style = {styles.walkthroughInstruction}>Dig up 45 moons from ground pounds. </Text>

<Text style = {styles.topicTitleText}>Moon 71: "Rad Hatter"</Text>

<Text style = {styles.walkthroughInstruction}>Get 3 moons from throwing Cappy onto objects. </Text>

<Text style = {styles.topicTitleText}>Moon 72: "Super Rad Hatter"</Text>

<Text style = {styles.walkthroughInstruction}>Get 10 moons from throwing Cappy onto objects. </Text>

<Text style = {styles.topicTitleText}>Moon 73: "Traveling-Bird Herder"</Text>

<Text style = {styles.walkthroughInstruction}>Get 5 moons from migrating birds. </Text>

<Text style = {styles.topicTitleText}>Moon 74: "Wearing It Well!"</Text>

<Text style = {styles.walkthroughInstruction}>Get 3 moons from specific outfits. </Text>

<Text style = {styles.topicTitleText}>Moon 75: "Wearing It Great!"</Text>

<Text style = {styles.walkthroughInstruction}>Get 8 moons from specific outfits. </Text>

<Text style = {styles.topicTitleText}>Moon 76: "Wearing It Perfect!"</Text>

<Text style = {styles.walkthroughInstruction}>Get 15 moons from specific outfits. </Text>

<Text style = {styles.topicTitleText}>Moon 77: "Hat-Seeking Missile"</Text>

<Text style = {styles.walkthroughInstruction}>Get 5 "Hat-And-Seek" moons. </Text>

<Text style = {styles.topicTitleText}>Moon 78: "Music Maestro"</Text>

<Text style = {styles.walkthroughInstruction}>Get 5 moons from Jammin' Toad. </Text>

<Text style = {styles.topicTitleText}>Moon 79: "Art Enthusiast"</Text>

<Text style = {styles.walkthroughInstruction}>Get 5 Hint Art moons. </Text>

<Text style = {styles.topicTitleText}>Moon 80: "Art Investigator"</Text>

<Text style = {styles.walkthroughInstruction}>Get 15 Hint Art moons. </Text>

<Text style = {styles.topicTitleText}>Moon 81: "Slots Machine"</Text>

<Text style = {styles.walkthroughInstruction}>Get 3 moons from the slots. </Text>

<Text style = {styles.topicTitleText}>Moon 82: "Koopa Freerunning MVP"</Text>

<Text style = {styles.walkthroughInstruction}>Get 10 Koopa Freerunning moons. </Text>

<Text style = {styles.topicTitleText}>Moon 83: "Koopa Freerunning Hall of Famer"</Text>

<Text style = {styles.walkthroughInstruction}>Get 22 Koopa Freerunning moons. </Text>

<Text style = {styles.topicTitleText}>Moon 84: "Supernaturally Sure-Footed"</Text>

<Text style = {styles.walkthroughInstruction}>Get 5 Trace-Walking moons. </Text>

<Text style = {styles.topicTitleText}>Moon 85: "Quizmaster"</Text>

<Text style = {styles.walkthroughInstruction}>Answer all of the Sphynx's questions 3 times. </Text>

<Text style = {styles.topicTitleText}>Moon 86: "Souvenir Sampler"</Text>

<Text style = {styles.walkthroughInstruction}>Get 10 souvenirs/stickers. </Text>

<Text style = {styles.topicTitleText}>Moon 87: "Souvenir Sleuth"</Text>

<Text style = {styles.walkthroughInstruction}>Get 20 souvenirs/stickers. </Text>

<Text style = {styles.topicTitleText}>Moon 88: "Souvenir Savant"</Text>

<Text style = {styles.walkthroughInstruction}>Get 40 souvenirs/stickers. </Text>

<Text style = {styles.topicTitleText}>Moon 89: "Capturing Novice"</Text>

<Text style = {styles.walkthroughInstruction}>Capture 20 targets. </Text>

<Text style = {styles.topicTitleText}>Moon 90: "Capturing Apprentice"</Text>

<Text style = {styles.walkthroughInstruction}>Capture 35 targets. </Text>

<Text style = {styles.topicTitleText}>Moon 91: "Capturing Master"</Text>

<Text style = {styles.walkthroughInstruction}>Capture 45 targets. </Text>

<Text style = {styles.topicTitleText}>Moon 92: "Hat Maven"</Text>

<Text style = {styles.walkthroughInstruction}>Collect 15 hats. </Text>

<Text style = {styles.topicTitleText}>Moon 93: "Hat Icon"</Text>

<Text style = {styles.walkthroughInstruction}>Collect 35 hats. </Text>

<Text style = {styles.topicTitleText}>Moon 94: "Fashion Maven"</Text>

<Text style = {styles.walkthroughInstruction}>Collect 15 outfits. </Text>

<Text style = {styles.topicTitleText}>Moon 95: "Fashion Icon"</Text>

<Text style = {styles.walkthroughInstruction}>Collect 35 outfits. </Text>

<Text style = {styles.topicTitleText}>Moon 96: "Moon Rock Liberator"</Text>

<Text style = {styles.walkthroughInstruction}>Open 14 Moon Rocks. </Text>

<Text style = {styles.topicTitleText}>Moon 97: "World Warper"</Text>

<Text style = {styles.walkthroughInstruction}>Enter 10 secret paintings. </Text>

<Text style = {styles.topicTitleText}>Moon 98: "Checkpoint Flagger"</Text>

<Text style = {styles.walkthroughInstruction}>Reach 40 checkpoint flags. </Text>

<Text style = {styles.topicTitleText}>Moon 99: "Checkpoint Flag Enthusiast"</Text>

<Text style = {styles.walkthroughInstruction}>Reach 80 checkpoint flags. </Text>

<Text style = {styles.topicTitleText}>Moon 100: "Loaded with Coins"</Text>

<Text style = {styles.walkthroughInstruction}>Collect 1000 coins. </Text>

<Text style = {styles.topicTitleText}>Moon 101: "Rolling in Coins"</Text>

<Text style = {styles.walkthroughInstruction}>Collect 5000 coins. </Text>

<Text style = {styles.topicTitleText}>Moon 102: "Swimming in Coins"</Text>

<Text style = {styles.walkthroughInstruction}>Collect 10000 coins. </Text>

<Text style = {styles.topicTitleText}>Moon 103: "Jump! Jump! Jump!"</Text>

<Text style = {styles.walkthroughInstruction}>Jump 10,000 times. </Text>

<Text style = {styles.topicTitleText}>Moon 104: "Fly, Cappy, Fly!"</Text>

<Text style = {styles.walkthroughInstruction}>Throw Cappy 5000 times. </Text>

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
