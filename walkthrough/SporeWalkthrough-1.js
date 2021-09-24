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

export default class Cellstage extends React.Component {

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
            this.props.navigation.navigate('SporeWalkthrough')
          }}>
<Text>Return</Text>

</TouchableOpacity>
        </View>

        <View style = {styles.gameScreen}>

<Text style = {styles.gameTitleText}>Spore</Text>

<Image
source = {require('../assets/SporeWalkthrough1.png')}
style = {{width:250,height:150}}
/>


<Text style = {styles.gameDiscription}>The Cell Stage is the first stage you must play through in Spore. Your cell has crashed onto an alien planet from a meteor. And now you need to have your cell grow in order to reach sentience. This page will give you some tips for making it through the stage. </Text>

<Text style = {styles.topicTitleText}>Food Specialty</Text>

<Text style = {styles.walkthroughInstruction}> Whenever you start a new file, you must choose your cell's food specialty. If it is a Carnivore, it can eat meat. If it is a Herbivore, it can eat plant matter. Now don't worry, you can change it in the middle of the stage. And halfway through you have the choice of becoming an Omnivore, which can eat both meat and plants. Now depending on how much of either group you eat, that specialty will be what you have for the rest of the game. </Text>

<Text style = {styles.topicTitleText}>Difficulty Setting</Text>

<Text style = {styles.walkthroughInstruction}> Whenever you start a new file, you must choose a difficulty, Easy, Medium, or Hard. If you are new to the game, I recommend Easy difficulty. If you have played at least once, I recommend Medium. And if you want a better challenge, choose Hard. In Medium you will come across Epic cells. Which are much bigger and require different means to defeat them. And in Hard they will be more common and more cells will be aggressive towards you. </Text>

<Text style = {styles.topicTitleText}>Gameplay</Text>

<Text style = {styles.walkthroughInstruction}> In the Cell Stage, you play as a cell that needs to eat food to survive and grow. You play on a top-down view. And you can attack other cells to get food from them. There are some cells with abilities you don't have. Kill them to get more parts. There you can use the Cell Creator, so you can edit the appearance and function of your cell. Further into the stage you will find more aggressive cells. Once the DNA bar at the bottom of the screen moves all the way to the right you can advance to the Creature Stage. </Text>

<Text style = {styles.topicTitleText}>Cell Editor</Text>

<Text style = {styles.walkthroughInstruction}> In the Cell Stage, you can edit your cell after getting your first new part. In the Cell Editor, you can change the size, shape, and color of your cell and give it new parts. The parts are: Filter Mouth, which gives you the Herbivore trait. Jaw, which gives you the Carnivore trait. Proboscis, which gives you the Omnivore trait. Flagella, which increases your speed. Jet, which gives you 2 increased speed and a boost when moving. Cilia, which gives you 2 increased speed and you can rotate faster. Spike, which allows you to poke other cells to deal damage. Poison, which leaves a damaging trail behind you and makes you immune to other cell's poison. Electric, which shocks nearby cells and makes you immune to other cell's electricity. And there are three types of eyes, which gives you sight. In the Cell Stage, I recommend you put on Spikes immediately. So you can get more parts. But be careful, you have a maximum budget of 100 DNA points. And the look of your cell won't impact the rest of the game.  </Text>

<Text style = {styles.topicTitleText}>Consequences</Text>

<Text style = {styles.walkthroughInstruction}> In every stage, there is a trait you will gain on your file that will last forever. This trait is decided on your actions throughout the stage. There are normally 3 different paths. And for each trait, they will give a different ability or upgrade for the later stages. For the Cell Stage, there are 3 traits, Herbivore, Carnivore, and Omnivore. But it is not decided entirely on your food specialty. You aim towards the Herbivore path if you eat plants. And Carnivore if you eat meat or kill cells. And Omnivore is right there in the middle. For the Creature Stage, Herbivore gives Siren Song, which makes socializing other creatures much easier. Carnivore gives Raging Roar, which makes "Neutral" creatures run away from you and the species will get the "Fear" status. And Omnivore gives Summon Flock, which spawns 5 allied creatures from a random species that will help you attack or socialize with other species. For the Tribal Stage, Herbivore gives Refreshing Storm. This replenishes all fruit on all plants in the area. Carnivore gives Traps, which will lure some creatures to the trap and kill them instantly. Giving easy food. And Omnivore gives Flying Fish, which when used at an area near a fishing spot, a sea monster will appear and bring a lot of fish to shore. For the Civilization Stage, Herbivore gives Healing Aura, which heals all vehicles and buildings it targets. Carnivore gives Invulnerability, which makes your vehicles immune to damage for a short while. And Omnivore gives Static Bomb, which stuns all vehicles and buildings for a short while. For the Space Stage, Herbivore gives Social Suave, which gives an 20% discount on all social tools. Carnivore gives Power Monger, which increases the effectiveness of weapons. And Omnivore gives Gentle Generalist, which gives a 20% discount on all general tools.  </Text>

<Text style = {styles.topicTitleText}>Achievement: Landfall</Text>

<Text style = {styles.walkthroughInstruction}> Complete the Cell Stage for the first time. </Text>

<Text style = {styles.topicTitleText}>Achievement: Pacifist</Text>

<Text style = {styles.walkthroughInstruction}> Complete the Cell Stage without killing another cell. (You can still collect parts.) </Text>

<Text style = {styles.topicTitleText}>Achievement: Completist</Text>

<Text style = {styles.walkthroughInstruction}> Collect every part in the Cell Stage. </Text>

<Text style = {styles.topicTitleText}>Achievement: Speedfreak</Text>

<Text style = {styles.walkthroughInstruction}> Complete the Cell Stage in under 8 minutes. </Text>

<Text style = {styles.topicTitleText}>Achievement: Cell Adict</Text>

<Text style = {styles.walkthroughInstruction}> Have 25 save files that have all completed the Cell Stage at one time. </Text>

<Text style = {styles.topicTitleText}>Achievement: Aluminum cell</Text>

<Text style = {styles.walkthroughInstruction}> Complete the Cell Stage on Hard difficulty. </Text>

</View>

</ScrollView>
        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#02041C',
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
