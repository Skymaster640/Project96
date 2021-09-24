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

export default class GalacticAdventures extends React.Component {

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
source = {require('../assets/SporeWalkthrough6.jpg')}
style = {{width:250,height:150}}
/>


<Text style = {styles.gameDiscription}>Spore Galactic Adventures was the second expansion pack released for Spore, it's main selling point was that you can make your own Adventures, or levels with similar gameplay to the Creature Stage. You make a Captain and play through user-made Adventures. What can possibly go wrong? </Text>

<Text style = {styles.topicTitleText}>Captain Creator</Text>

<Text style = {styles.walkthroughInstruction}> The first thing you have to do is make a Captain Creature. Like the Tribal, Civil, and Empire editors, you can't change the body of the creature. But you can give it clothes. In GA (Galactic Adventures) there are 32 new parts available, and they are not merely cosmetic. They give brand new abilities not seen before. There are 4 for each Space Archetype except for Wanderer and Knight. And for Captains you create for playing adventures, you need to unlock these parts by completing adventures and getting Captain Points. But if you just make a Captain outside for playing an adventure, you have access to all the parts. </Text>

<Text style = {styles.topicTitleText}>Gameplay</Text>

<Text style = {styles.walkthroughInstruction}> In Spore Galactic Adventures, you can play user-made levels on new planets. And the overall gameplay is similar to the Creature Stage. You will play through the adventure and complete missions. Such as talking to NPCS, killing or socializing with specific characters, reach a certain location. Complete things in a time limit and so much more. Whenever you complete a mission, you will gain Captain Points. And you will unlock a new part for a certain amount of points. You can also make your own adventures for other players to play. </Text>

<Text style = {styles.topicTitleText}>Maxis Adventures</Text>

<Text style = {styles.walkthroughInstruction}> Now while the main point is to play other player's adventures. The creators of the game, Maxis have made many different adventures that you can explore. There is the main tutorial adventure, Adventure Town that explains how adventures work. And there are other adventures where you can get some cool ideas on how to make your own. There are some adventures you have to unlock by playing through the Space Stage, by playing through certain missions from other Empires.</Text>

<Text style = {styles.topicTitleText}>Adventure Editor</Text>

<Text style = {styles.walkthroughInstruction}> The Adventure Editor is very complicated. You are put onto a planet, and it is your job to place everything down that will be in the adventure. Creatures, buildings, vehicles, background objects, special effects, sound effects. The whole thing. But that is not all, you can also change the time of day, what plants will populate the planet, the terrain, the weather, the color of the planet, the water temperture, etc. You also have to place your Captain or whatever the player will use down to where they will start. And you also have to make missions, it ain't fun playing through an adventure without any missions. Because then you can beat it in 0 seconds. You have to drag Acts to Creatures, Buildings, Vehicles to make missions. You decide what the mission is about and then you must do that mission in game. You can also set a time limit, and make a title and description for the act. Then once you are finished, just save the adventure and now you and other players can play it. </Text>

<Text style = {styles.topicTitleText}>Space Stage</Text>

<Text style = {styles.walkthroughInstruction}> Upon getting the DLC, there are major changes regarding the Space Stage in the regular game. First of all, you don't have to play through the whole game to start the Space Stage. You can just start on the Space Stage mere seconds upon starting the game for the first time. This is so you can easily start getting into the adventure part of the game. As the other 4 stages are unchanged. In the Space Stage you have to create a Captain out of whatever species you are. Then a little into the stage, you will get a mission that will send you to an adventure, explaining how adventures in the Space Stage work. You can visit other empires to get more adventures, even Maxis ones. And once you unlock all 4 parts for an archetype, you will get access to that archetype's ability. But besides that the rest of the stage is unchanged. </Text>

<Text style = {styles.topicTitleText}>Achievement: Published Author</Text>

<Text style = {styles.walkthroughInstruction}> Publish an Adventure.</Text>

<Text style = {styles.topicTitleText}>Achievement: Storyteller</Text>

<Text style = {styles.walkthroughInstruction}> Publish 50 Adventures.</Text>

<Text style = {styles.topicTitleText}>Achievement: Adventurer</Text>

<Text style = {styles.walkthroughInstruction}> Complete an Adventure in the Space Stage. </Text>

<Text style = {styles.topicTitleText}>Achievement: Grand Adventurer</Text>

<Text style = {styles.walkthroughInstruction}> Complete 100 Adventures in the Space Stage. </Text>

<Text style = {styles.topicTitleText}>Achievement: Mercenary</Text>

<Text style = {styles.walkthroughInstruction}> Kill 1000 creatures while playing Adventures in the Space Stage. </Text>

<Text style = {styles.topicTitleText}>Achievement: Dragon Slayer</Text>

<Text style = {styles.walkthroughInstruction}> Kill 1000 epics while playing Adventures in the Space Stage. </Text>

<Text style = {styles.topicTitleText}>Achievement: Social Butterfly</Text>

<Text style = {styles.walkthroughInstruction}> Befriend 1000 creatures while playing Adventures in the Space Stage. </Text>

<Text style = {styles.topicTitleText}>Achievement: My Precious</Text>

<Text style = {styles.walkthroughInstruction}> Collect 1000 objects while playing Adventures in the Space Stage. </Text>

<Text style = {styles.topicTitleText}>Achievement: Major Contributor</Text>

<Text style = {styles.walkthroughInstruction}> Gift 100 items while playing Adventures in the Space Stage. </Text>

<Text style = {styles.topicTitleText}>Achievement: Red Shirt</Text>

<Text style = {styles.walkthroughInstruction}> Lose 100 crew members while playing Adventures in the Space Stage. </Text>

<Text style = {styles.topicTitleText}>Achievement: My Hero</Text>

<Text style = {styles.walkthroughInstruction}> Defend 500 creatures while playing Adventures in the Space Stage. </Text>

<Text style = {styles.topicTitleText}>Achievement: Demolition Expert</Text>

<Text style = {styles.walkthroughInstruction}> Destroy 1000 buildings while playing Adventures in the Space Stage. </Text>

<Text style = {styles.topicTitleText}>Achievement: Auto-Wrecker</Text>

<Text style = {styles.walkthroughInstruction}> Destroy 1000 vehicles while playing Adventures in the Space Stage. </Text>

<Text style = {styles.topicTitleText}>Achievement: Consumer</Text>

<Text style = {styles.walkthroughInstruction}>Complete 200 missions made by other players. </Text>

<Text style = {styles.topicTitleText}>Achievement: Delerious Designer</Text>

<Text style = {styles.walkthroughInstruction}> Create 50 Adventures using only your creations. </Text>

<Text style = {styles.topicTitleText}>Achievement: Terraformaniac</Text>

<Text style = {styles.walkthroughInstruction}> Create 50 Adventures on your terraformed planets </Text>

<Text style = {styles.topicTitleText}>Achievement: Geared Up</Text>

<Text style = {styles.walkthroughInstruction}> Outfit 50 creatures with Adventure Parts. </Text>

<Text style = {styles.topicTitleText}>Achievement: Dabbler</Text>

<Text style = {styles.walkthroughInstruction}> Download over 500 Adventures. </Text>

<Text style = {styles.topicTitleText}>Achievement: Aeschylus</Text>

<Text style = {styles.walkthroughInstruction}> Create 10 Adventures. </Text>

<Text style = {styles.topicTitleText}>Achievement: Moliere</Text>

<Text style = {styles.walkthroughInstruction}> Create 50 Adventures. </Text>

<Text style = {styles.topicTitleText}>Achievement: Shakespeare</Text>

<Text style = {styles.walkthroughInstruction}> Create 100 Adventures. </Text>

<Text style = {styles.topicTitleText}>Achievement: Scientist</Text>

<Text style = {styles.walkthroughInstruction}> Place 200 non-outfitted creatures in your Adventures. </Text>

<Text style = {styles.topicTitleText}>Achievement: Going Tribal</Text>

<Text style = {styles.walkthroughInstruction}> Place 200 tribal creatures in your Adventures. </Text>

<Text style = {styles.topicTitleText}>Achievement: So Civilized</Text>

<Text style = {styles.walkthroughInstruction}> Place 200 civil creatures in your Adventures. </Text>

<Text style = {styles.topicTitleText}>Achievement: Emperor</Text>

<Text style = {styles.walkthroughInstruction}> Place 200 empire creatures in your Adventures. </Text>

<Text style = {styles.topicTitleText}>Achievement: Architect</Text>

<Text style = {styles.walkthroughInstruction}> Place 500 buildings in your Adventures. </Text>

<Text style = {styles.topicTitleText}>Achievement: Mechanic</Text>

<Text style = {styles.walkthroughInstruction}> Place 500 vehicles in your Adventures. </Text>

<Text style = {styles.topicTitleText}>Achievement: Still Life</Text>

<Text style = {styles.walkthroughInstruction}> Create 30 Adventures without Creatures. </Text>

<Text style = {styles.topicTitleText}>Achievement: Happy Times</Text>

<Text style = {styles.walkthroughInstruction}> Create 30 Adventures with only peaceful actors. </Text>

<Text style = {styles.topicTitleText}>Achievement: Large Ensemble</Text>

<Text style = {styles.walkthroughInstruction}> Create 30 Adventures without over 100 actors. </Text>

<Text style = {styles.topicTitleText}>Achievement: Granddaddy</Text>

<Text style = {styles.walkthroughInstruction}> Have 10 other players edit your adventures. </Text>

<Text style = {styles.topicTitleText}>Achievement: Bestseller</Text>

<Text style = {styles.walkthroughInstruction}> Have your Adventure featured by Maxis (Good luck with that.) </Text>

<Text style = {styles.topicTitleText}>Achievement: Epic Fail</Text>

<Text style = {styles.walkthroughInstruction}> Fail 50 missions made by other players. </Text>

<Text style = {styles.topicTitleText}>Achievement: Chatter Box</Text>

<Text style = {styles.walkthroughInstruction}> Comment on 200 other Adventures. </Text>

<Text style = {styles.topicTitleText}>Achievement: Mad Skills</Text>

<Text style = {styles.walkthroughInstruction}> Reach the top spot on 50 leaderboards. </Text>

<Text style = {styles.topicTitleText}>Achievement: Maxis Super Fan</Text>

<Text style = {styles.walkthroughInstruction}> Create 25 Adventures using only Maxis-Made creatures. </Text>

<Text style = {styles.topicTitleText}>Achievement: The Critic</Text>

<Text style = {styles.walkthroughInstruction}> Rate 200 Adventures. </Text>

<Text style = {styles.topicTitleText}>Achievement: Top Seller</Text>

<Text style = {styles.walkthroughInstruction}> Get 1000 of your assets to be used in other people's adventures. </Text>

<Text style = {styles.topicTitleText}>Achievement: My First Captain</Text>

<Text style = {styles.walkthroughInstruction}> Get a Captain to Rank 10. </Text>

<Text style = {styles.topicTitleText}>Achievement: Captain Academy</Text>

<Text style = {styles.walkthroughInstruction}> Get 10 Captains to Rank 10. </Text>

<Text style = {styles.topicTitleText}>Achievement: Fierce Warrior</Text>

<Text style = {styles.walkthroughInstruction}> Unlock all 4 Warrior parts as a Captain. </Text>

<Text style = {styles.topicTitleText}>Achievement: Intelligent Scientist</Text>

<Text style = {styles.walkthroughInstruction}> Unlock all 4 Scientist parts as a Captain. </Text>

<Text style = {styles.topicTitleText}>Achievement: Industrious Trader</Text>

<Text style = {styles.walkthroughInstruction}> Unlock all 4 Trader parts as a Captain. </Text>

<Text style = {styles.topicTitleText}>Achievement: Joyful Bard</Text>

<Text style = {styles.walkthroughInstruction}> Unlock all 4 Bard parts as a Captain. </Text>

<Text style = {styles.topicTitleText}>Achievement: Faithful Zealot</Text>

<Text style = {styles.walkthroughInstruction}> Unlock all 4 Zealot parts as a Captain. </Text>

<Text style = {styles.topicTitleText}>Achievement: Wise Shaman</Text>

<Text style = {styles.walkthroughInstruction}> Unlock all 4 Shaman parts as a Captain. </Text>

<Text style = {styles.topicTitleText}>Achievement: Just Diplomat</Text>

<Text style = {styles.walkthroughInstruction}> Unlock all 4 Diplomat parts as a Captain. </Text>

<Text style = {styles.topicTitleText}>Achievement: Universal Ecologist</Text>

<Text style = {styles.walkthroughInstruction}> Unlock all 4 Ecologist parts as a Captain. </Text>

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
