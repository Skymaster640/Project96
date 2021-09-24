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

export default class Spacestage extends React.Component {

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
source = {require('../assets/SporeWalkthrough5.png')}
style = {{width:250,height:150}}
/>


<Text style = {styles.gameDiscription}>The Space Stage is the last stage in Spore. You have made it into a space faring empire. Your empire has made it's first spacecraft. And you are the pilot. Travel to other planets and solar systems, bring life to them or destroy them, interact with alien empires, forge alliances, and eventually make it to the Galactic Core and beat the game. </Text>

<Text style = {styles.topicTitleText}>Spaceship Creator</Text>

<Text style = {styles.walkthroughInstruction}> Once you enter the stage, you must make a spaceship. This will be your vessel that you ride across the universe. Everything is entirely cosmetic so go crazy. You can use any parts from the other vehicle editors. </Text>

<Text style = {styles.topicTitleText}>Difficulty Setting</Text>

<Text style = {styles.walkthroughInstruction}> The difficulty setting from the previous stages will be carried over, but you can choose a difficulty if you start from this stage. The harder the difficulty, the more you will encounter aggressive nations, and the more you will have to do to prevent them from attacking you.</Text>

<Text style = {styles.topicTitleText}>Gameplay</Text>

<Text style = {styles.walkthroughInstruction}> In the Space Stage, you control a spaceship and this is the only stage without an end. There is an end GOAL but you can't actually finish the stage. You have to visit other planets and solar systems to complete missions and collect badges. And with those badges you will get more upgrades for your ship and eventually reach the Galactic Core. The more badges you get, the more Master Badges you will earn, promoting your title and allowing you to add more ships to your fleet. You can visit other empires and complete missions from them. You can also colonize other planets to gain more spice to get more sporebucks. You can essentially do whatever you want in this stage. And if you reach the stage and delete the file, your empire will still exist, and you can interact with them still! </Text>

<Text style = {styles.topicTitleText}>Empire Editor</Text>

<Text style = {styles.walkthroughInstruction}> Like the previous two stages, you can't change the body of your species. But you can give them clothes. Like in the Civilization Stage this is completely cosmetic. It will just change the look of your citizens on colonies. And the city editor is carried over from the Civilization Stage. Even on other colonies. </Text>

<Text style = {styles.topicTitleText}>Consequences</Text>

<Text style = {styles.walkthroughInstruction}> In every stage, there is a trait you will gain on your file that will last forever. This trait is decided on your actions throughout the stage. There are normally 3 different paths. And for each trait, they will give a different ability or upgrade for the later stages. But for the Space Stage, as it has no end, you are given the trait as soon as you finish the Civilization Stage. And the trait you get is entirely decided on the traits you got in the previous 4 stages. These are called Archetypes. These will give you an exclusive ability, plus all the upgrades you got in the previous stages. And each alien empire you visit has their own archetype. It affects how they act, look, and speak. If you reach level 10, you can change your archetype. There are ten archetypes. Wanderer, which you get if you start at the Space Stage, with no ability. Warrior, which you get if you have 3 or more red cards. With the Raider Rally ability, which instantly calls pirates to the system. Shaman, which you get if you have 3 or more green cards. With the Return Ticket ability, which instantly brings you back to your homeworld. Trader, which you get if you have 3 or more blue cards. With the Cash Infusion ability, which adds progress to a trade route. Scientist, which you get if you have no green cards, but red and blue cards. With the Gravitational Wave ability, which destroys all structures on a planet and breaks the Galactic Code. Zealot, which you get if you have no blue cards, but green and red cards. With the Fanatical Frenzy ability, which instantly captures a planet and breaks the Galactic Code. Diplomat, which you get if you have no red cards, but green and blue cards. With the Static Cling ability, which stuns all ships and turrets on a planet for a short time. Knight, which you get if you have all three cards, but more red. With the Summon Mini-U ability, which makes a smaller version of your ship that helps you fight. Ecologist, which you get if you have all three cards, but more green. With the Safari Vacuum ability, which abducts a few of each species on a planet. Bard, which you get if you have all three cards, but more blue. With the Soothing Song ability, which calms down other empires. There is also the Grox Archetype, but it is impossible to have without hacking. </Text>

<Text style = {styles.topicTitleText}>Achievement: Space Stage Unlocked</Text>

<Text style = {styles.walkthroughInstruction}> Unlock the Space Stage.</Text>

<Text style = {styles.topicTitleText}>Achievement: Super Pilot</Text>

<Text style = {styles.walkthroughInstruction}> Spend 40 hours piloting your spaceship.</Text>

<Text style = {styles.topicTitleText}>Achievement: Civil Engineer</Text>

<Text style = {styles.walkthroughInstruction}> Evolve 20 tribes to civilizations. </Text>

<Text style = {styles.topicTitleText}>Achievement: Conquistador</Text>

<Text style = {styles.walkthroughInstruction}> Capture 15 star systems. </Text>

<Text style = {styles.topicTitleText}>Achievement: Zoo Keeper</Text>

<Text style = {styles.walkthroughInstruction}> Make 15 zoo planets. </Text>

<Text style = {styles.topicTitleText}>Achievement: Bio Engineer</Text>

<Text style = {styles.walkthroughInstruction}> Edit 25 creatures using the Creature Tweaker tool. </Text>

<Text style = {styles.topicTitleText}>Achievement: Palm Greaser</Text>

<Text style = {styles.walkthroughInstruction}> Pay 50 bribes. </Text>

<Text style = {styles.topicTitleText}>Achievement: Maxis Scout</Text>

<Text style = {styles.walkthroughInstruction}> Get 100 badges. </Text>

<Text style = {styles.topicTitleText}>Achievement: Empire Builder</Text>

<Text style = {styles.walkthroughInstruction}> Maximize colonies on 10 planets. </Text>

<Text style = {styles.topicTitleText}>Achievement: Quietus Star</Text>

<Text style = {styles.walkthroughInstruction}> Destroy 20 planets. </Text>

<Text style = {styles.topicTitleText}>Achievement: Quest Master</Text>

<Text style = {styles.walkthroughInstruction}> Complete 150 missions. </Text>

<Text style = {styles.topicTitleText}>Achievement: Gunner</Text>

<Text style = {styles.walkthroughInstruction}> Destroy 500 spaceships. </Text>

<Text style = {styles.topicTitleText}>Achievement: Identity Crisis</Text>

<Text style = {styles.walkthroughInstruction}> Forge an alliance with a race of your own creation. </Text>

<Text style = {styles.topicTitleText}>Achievement: Thief</Text>

<Text style = {styles.walkthroughInstruction}>Steal 50 spice crates. </Text>

<Text style = {styles.topicTitleText}>Achievement: Manifest Destiny</Text>

<Text style = {styles.walkthroughInstruction}> Find Earth. </Text>

<Text style = {styles.topicTitleText}>Achievement: Careless Parent</Text>

<Text style = {styles.walkthroughInstruction}> Lose 5 planets. </Text>

<Text style = {styles.topicTitleText}>Achievement: 42</Text>

<Text style = {styles.walkthroughInstruction}> Reach the Galactic Core. </Text>

<Text style = {styles.topicTitleText}>Achievement: Oh the Humanity!</Text>

<Text style = {styles.walkthroughInstruction}> Destroy Earth with a Planet Buster. </Text>

<Text style = {styles.topicTitleText}>Achievement: Alter Ego</Text>

<Text style = {styles.walkthroughInstruction}> Play the Space Stage as all 10 archetypes. </Text>

<Text style = {styles.topicTitleText}>Achievement: Alter Ego's Alter Ego</Text>

<Text style = {styles.walkthroughInstruction}> Reach Master Badge 10 as all 10 archetypes. </Text>

<Text style = {styles.topicTitleText}>Achievement: Zealot Passion</Text>

<Text style = {styles.walkthroughInstruction}> Play the Space Stage as a Zealot. </Text>

<Text style = {styles.topicTitleText}>Achievement: Warrior Passion</Text>

<Text style = {styles.walkthroughInstruction}> Play the Space Stage as a Warrior. </Text>

<Text style = {styles.topicTitleText}>Achievement: Bard Passion</Text>

<Text style = {styles.walkthroughInstruction}> Play the Space Stage as a Bard. </Text>

<Text style = {styles.topicTitleText}>Achievement: Knight Passion</Text>

<Text style = {styles.walkthroughInstruction}> Play the Space Stage as a Knight. </Text>

<Text style = {styles.topicTitleText}>Achievement: Wanderer Passion</Text>

<Text style = {styles.walkthroughInstruction}> Play the Space Stage as a Wanderer. </Text>

<Text style = {styles.topicTitleText}>Achievement: Trader Passion</Text>

<Text style = {styles.walkthroughInstruction}> Play the Space Stage as a Trader. </Text>

<Text style = {styles.topicTitleText}>Achievement: Shaman Passion</Text>

<Text style = {styles.walkthroughInstruction}> Play the Space Stage as a Shaman. </Text>

<Text style = {styles.topicTitleText}>Achievement: Scientist Passion</Text>

<Text style = {styles.walkthroughInstruction}> Play the Space Stage as a Scientist. </Text>

<Text style = {styles.topicTitleText}>Achievement: Diplomat Passion</Text>

<Text style = {styles.walkthroughInstruction}> Play the Space Stage as a Diplomat. </Text>

<Text style = {styles.topicTitleText}>Achievement: Ecologist Passion</Text>

<Text style = {styles.walkthroughInstruction}> Play the Space Stage as an Ecologist. </Text>

<Text style = {styles.topicTitleText}>Achievement: Zealot Hero</Text>

<Text style = {styles.walkthroughInstruction}> Reach Master Badge 10 as a Zealot. </Text>

<Text style = {styles.topicTitleText}>Achievement: Warrior Hero</Text>

<Text style = {styles.walkthroughInstruction}> Reach Master Badge 10 as a Warrior. </Text>

<Text style = {styles.topicTitleText}>Achievement: Bard Hero</Text>

<Text style = {styles.walkthroughInstruction}> Reach Master Badge 10 as a Bard. </Text>

<Text style = {styles.topicTitleText}>Achievement: Knight Hero</Text>

<Text style = {styles.walkthroughInstruction}> Reach Master Badge 10 as a Knight. </Text>

<Text style = {styles.topicTitleText}>Achievement: Wanderer Hero</Text>

<Text style = {styles.walkthroughInstruction}> Reach Master Badge 10 as a Wanderer. </Text>

<Text style = {styles.topicTitleText}>Achievement: Trader Hero</Text>

<Text style = {styles.walkthroughInstruction}> Reach Master Badge 10 as a Trader. </Text>

<Text style = {styles.topicTitleText}>Achievement: Shaman Hero</Text>

<Text style = {styles.walkthroughInstruction}> Reach Master Badge 10 as a Shaman. </Text>

<Text style = {styles.topicTitleText}>Achievement: Scientist Hero</Text>

<Text style = {styles.walkthroughInstruction}> Reach Master Badge 10 as a Scientist. </Text>

<Text style = {styles.topicTitleText}>Achievement: Diplomat Hero</Text>

<Text style = {styles.walkthroughInstruction}> Reach Master Badge 10 as a Diplomat. </Text>

<Text style = {styles.topicTitleText}>Achievement: Ecologist Hero</Text>

<Text style = {styles.walkthroughInstruction}> Reach Master Badge 10 as an Ecologist. </Text>

<Text style = {styles.topicTitleText}>Achievement: Split Personality</Text>

<Text style = {styles.walkthroughInstruction}> Complete a Change Archetype Mission. </Text>

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
