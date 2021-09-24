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

export default class Creaturestage extends React.Component {

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
source = {require('../assets/SporeWalkthrough2.png')}
style = {{width:250,height:150}}
/>


<Text style = {styles.gameDiscription}>The Creature Stage is the second stage in Spore. In this stage, you must travel through the continent. Maintain the growth of your species, survive against other species, and most importantly, evolve your creature. </Text>

<Text style = {styles.topicTitleText}>Early Creature Creator</Text>

<Text style = {styles.walkthroughInstruction}> Once you finish the Cell Stage, you will be brouht to the Early Creature Creator. You are given an extra 50 DNA Points. And with that you can add legs to your Creature. The only thing that matters from the Cell Stage is the parts you have collected. But make sure you use those parts wisely, because once you leave the creator, those parts will never be seen again. </Text>

<Text style = {styles.topicTitleText}>Difficulty Setting</Text>

<Text style = {styles.walkthroughInstruction}> The difficulty setting from the Cell Stage will carry over to this one, but if you start at the Creature Stage, you can choose the difficulty. The higher the difficulty, the more aggressive the other species will be. And there will be some species that you can't socialize with unless you use Siren Song. </Text>

<Text style = {styles.topicTitleText}>Gameplay</Text>

<Text style = {styles.walkthroughInstruction}> In the Creature Stage, there are different sections or "levels" of the stage. On the DNA Bar at the bottom there are symbols on different parts of the bar. These show when you "level up". The more DNA points you get, the farther to the right the bar will be. And every time you "level up", you will gain a Pack slot. So if you socialize with an ally, they will become a pack member and join you on your quest. There are two different methods of interacting with creatures. Socializing and attacking. For socializing, you must mimic the other creature's actions. And soon you will become allies with that creature. And once you ally 3 members of the species the whole species will be your friend. And you can heal at their nest. Meanwhile attacking is self explanitory. Attack the opposing creature until they die. And after killing a certain amound of creatures the whole species will be extinct. But be careful, there are certain types of creatures you have to worry about. The Rogue Creatures which have 250 health and are very powerful. And the Epic Creatures. These are literal giants with 1000 health. Taking one down without glitches is a huge feat. But soon you will reach the end of the stage. You will edit your creature one more time. And what you make is what you have for the rest of the game. </Text>

<Text style = {styles.topicTitleText}>Creature Editor</Text>

<Text style = {styles.walkthroughInstruction}> In the Creature Stage, at any of your nests, there is one of your species that your creature can mate with. (Don't worry, it's just a dance and then there is an egg.) You will then be brought to the Creature Editor. This is a huge step up from the Cell Editor or Early Creature Editor. In this one, there are over 228 parts to choose from. You can also color your creature and change it's shape and size. Now if you just accessed the regular Creature Editor you can do whatever you want. But in the Creature Stage, you need to manage your DNA budget more closely. And at least until you finish the stage, you need to focus on your stats more than your look. There are many different abilities you can get from these parts. And in 3 different categories. Social, Combat, and General. The general abilities are: Sight which lets you see, Sneak which can let you be stealthy and avoid other creatures, Jump which lets you jump, Glide which can let you stay in the air for longer, Graspers which can let you pick things up, sometimes multiple objects, Mating Call which can let you access the editor, and Sprint which lets you move faster for a short while. The Social abilities are Sing, Dance, Charm, and Pose. The Combat abilities are Bite, Charge which stuns the enemy, Strike, and Soit which does poison damage. You also must worry about the Complexity Meter, which goes up the more parts you have. Soon you can't put any more parts on, even if you can afford it. The different categories of parts are Mouths, Eyes, Arms and Legs, Hands, Feet, Weapons, and Details. </Text>

<Text style = {styles.topicTitleText}>Consequences</Text>

<Text style = {styles.walkthroughInstruction}> In every stage, there is a trait you will gain on your file that will last forever. This trait is decided on your actions throughout the stage. There are normally 3 different paths. And for each trait, they will give a different ability or upgrade for the later stages. For the Creature Stage, there are 3 different traits. Social, Predator, and Adaptable. You lean towards Social if you socialize with other creatures, and Predator if you kill other creatures. In the Tribal Stage, Social grants Fireworks, which increases the relationships with neighbors. Predator grants Fire Bombs, which deal high damage to whoever is caught in the blast. Adaptable grants Beastmaster, which will make other creatures temporarily allies, and will assist you in combat. For the Civilization Stage Social grants Diplo Dervish, which raises your relationship with the targeted nation, Predator gives Mighty Bomb, which destroys all vehicles and buildings in it's radius. And Adaptable grants Bribe Bomb, which has vehicles caught in the blast to attack each other. For the Space Stage Social grants Pleasing Performance, which makes all your colonies happy. Predator grants Prime Specimen, which increases your ship's total health. And Adaptable grants Speed Demon, which makes your ship fly through space faster.  </Text>

<Text style = {styles.topicTitleText}>Achievement: Creature Stage Unlocked</Text>

<Text style = {styles.walkthroughInstruction}> Unlock the Creature Stage.</Text>

<Text style = {styles.topicTitleText}>Achievement: Evolver</Text>

<Text style = {styles.walkthroughInstruction}> Complete the Creature Stage.</Text>

<Text style = {styles.topicTitleText}>Achievement: Everyone's BFF</Text>

<Text style = {styles.walkthroughInstruction}> Complete the Creature Stage with 20 allied species. </Text>

<Text style = {styles.topicTitleText}>Achievement: Foe</Text>

<Text style = {styles.walkthroughInstruction}> Complete the Creature Stage with 20 species extinct. </Text>

<Text style = {styles.topicTitleText}>Achievement: Max Power</Text>

<Text style = {styles.walkthroughInstruction}> Have at least 4 abilities at the max level. </Text>

<Text style = {styles.topicTitleText}>Achievement: Survivor</Text>

<Text style = {styles.walkthroughInstruction}> Complete the Creature Stage without dieing once. </Text>

<Text style = {styles.topicTitleText}>Achievement: Socialite</Text>

<Text style = {styles.walkthroughInstruction}> Meet at least 200 user-made creatures. </Text>

<Text style = {styles.topicTitleText}>Achievement: Flight of the Bumblebee</Text>

<Text style = {styles.walkthroughInstruction}> Travel 200 meters without touching the ground. </Text>

<Text style = {styles.topicTitleText}>Achievement: Devourer</Text>

<Text style = {styles.walkthroughInstruction}> Eat 50 different species across any number of save games. </Text>

<Text style = {styles.topicTitleText}>Achievement: Village Folks</Text>

<Text style = {styles.walkthroughInstruction}> Have 3 pack members from different species. </Text>

<Text style = {styles.topicTitleText}>Achievement: Speed Demon</Text>

<Text style = {styles.walkthroughInstruction}> Complete the Creature Stage in less than a hour. </Text>

<Text style = {styles.topicTitleText}>Achievement: Bestial</Text>

<Text style = {styles.walkthroughInstruction}> Have 10 files complete the Creature Stage at one time. </Text>

<Text style = {styles.topicTitleText}>Achievement: Epic Killer</Text>

<Text style = {styles.walkthroughInstruction}> Kill an Epic Creature. </Text>

<Text style = {styles.topicTitleText}>Achievement: General Custer</Text>

<Text style = {styles.walkthroughInstruction}> Have 30 pack members die. </Text>

<Text style = {styles.topicTitleText}>Achievement: Cerberus</Text>

<Text style = {styles.walkthroughInstruction}> Evolve a Creature with 3 heads. </Text>

<Text style = {styles.topicTitleText}>Achievement: Slugger</Text>

<Text style = {styles.walkthroughInstruction}> Complete the Creature Stage without ever having legs. </Text>

<Text style = {styles.topicTitleText}>Achievement: Iron Creature</Text>

<Text style = {styles.walkthroughInstruction}> Complete the Creature Stage on Hard difficulty. </Text>

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
