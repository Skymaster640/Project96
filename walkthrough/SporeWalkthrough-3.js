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

export default class Tribalstage extends React.Component {

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
source = {require('../assets/SporeWalkthrough3.png')}
style = {{width:250,height:150}}
/>


<Text style = {styles.gameDiscription}>The Tribal Stage is the third stage of Spore. Here you must manage an entire village. You need to take care of not only your resources, but also your villagers. There are more villages who will pop up to try to take over the continent. But it is your decision on whether to make friends with them or to slaughter them all. </Text>

<Text style = {styles.topicTitleText}>Difficulty Setting</Text>

<Text style = {styles.walkthroughInstruction}> The difficulty setting from the Cell Stage and Creature Stage will carry over to this one, but if you start at the Tribal Stage, you can choose the difficulty. The higher the difficulty, the more aggressive the other tribes and animals will be. Raids will be more common, and tribes will pop up faster. </Text>

<Text style = {styles.topicTitleText}>Gameplay</Text>

<Text style = {styles.walkthroughInstruction}> In the Tribal Stage, you have to manage a village that starts out with 3 members. Any changes you made in the Creature Stage are permanant now. You cannot edit your creature like how you used to. You can also customize your village, adding new huts to give your villagers professions. Such as combat tools, social tools, and gathering tools. Any pack members you had in the Creature Stage are converted into domesticated animals that will give you eggs. Your main resource is food, you need it to get more members, get huts, and give gifts to other tribes. More tribes will eventually come to the continent, and you can either socialize with them, putting on a performance for them by playing the instruments they want, or you can attack the other tribes, destroying their village and raiding their resources. Once you have done either path to all 5 tribes, you will advance to the Civilization Stage. </Text>

<Text style = {styles.topicTitleText}>Tribe Editor</Text>

<Text style = {styles.walkthroughInstruction}> Now even though you can't edit your creature anymore, you can still customize the look of them. You can give them clothing items that will increase your tribal stats. Such as attack, social, gathering, and defense. </Text>

<Text style = {styles.topicTitleText}>Consequences</Text>

<Text style = {styles.walkthroughInstruction}> In every stage, there is a trait you will gain on your file that will last forever. This trait is decided on your actions throughout the stage. There are normally 3 different paths. And for each trait, they will give a different ability or upgrade for the later stages. For the Tribal Stage, there are 3 different traits. Friendly, Aggressive, and Industrious. In the Civilization Stage, Friendly will bestow upon you Black Cloud, which shuts down all entertainment buildings in a city. Aggressive will bestow upon you Gadget Bomb, which destroys almost everything in a city and most of the time immediately captures it. Industrious will bestow upon you Ad Blitz. Which makes city buyout faster. In the Space Stage, Friendly will bestow upon you Gracious Greeting, which makes other empires like you more. Aggressive will bestow upon you Arms Dealer, which gives a 20% discount on all weapons. And Industrious will bestow upon you Colony Craze, which gives a 20% discount on all colonization tools.  </Text>

<Text style = {styles.topicTitleText}>Achievement: Tribe Stage Unlocked</Text>

<Text style = {styles.walkthroughInstruction}> Unlock the Tribal Stage.</Text>

<Text style = {styles.topicTitleText}>Achievement: Founder</Text>

<Text style = {styles.walkthroughInstruction}> Complete the Tribal Stage.</Text>

<Text style = {styles.topicTitleText}>Achievement: Tribal Socialite</Text>

<Text style = {styles.walkthroughInstruction}> Ally all 5 of the other tribes. </Text>

<Text style = {styles.topicTitleText}>Achievement: Vicious</Text>

<Text style = {styles.walkthroughInstruction}> Destroy all 5 of the other tribes. </Text>

<Text style = {styles.topicTitleText}>Achievement: Domestic Bliss</Text>

<Text style = {styles.walkthroughInstruction}> Domesticate and farm 3 different species. </Text>

<Text style = {styles.topicTitleText}>Achievement: Watchful Parent</Text>

<Text style = {styles.walkthroughInstruction}> Complete the Tribal Stage without a single villager death. </Text>

<Text style = {styles.topicTitleText}>Achievement: Tribal</Text>

<Text style = {styles.walkthroughInstruction}> Have 10 files complete the Tribal Stage at one time. </Text>

<Text style = {styles.topicTitleText}>Achievement: Ergonomically Terrific</Text>

<Text style = {styles.walkthroughInstruction}> Complete the Tribal Stage in less than a hour. </Text>

<Text style = {styles.topicTitleText}>Achievement: Medic</Text>

<Text style = {styles.walkthroughInstruction}> Heal one of your tribe members to full health 5 times in one Tribal Stage run. </Text>

<Text style = {styles.topicTitleText}>Achievement: Steel Tribe</Text>

<Text style = {styles.walkthroughInstruction}> Complete the Tribal Stage on Hard difficulty. </Text>

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
