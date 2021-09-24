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

export default class RuinedKingdomMoons extends React.Component {

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
source = {require('../assets/SMOWalkthrough12.jpg')}
style = {{width:250,height:150}}
/>


<Text style = {styles.gameDiscription}>The Ruined Kingdom is yet another abrupt stop on your journey in Super Mario Odyssey. Once you start heading to Bowser's Kingdom, Bowser appears on top of the Lord of Lightning and stikes you down. Now you must once again repair the Odyssey. But can you survive this ravaged wasteland? </Text>

<Text style = {styles.topicTitleText}>Moon 1: "Battle with the Lord of Lightning!"</Text>

<Text style = {styles.walkthroughInstruction}>Travel through the kingdom until you reach the Ruined Dragon. Defeat them and get the Multi Moon. </Text>

<Text style = {styles.topicTitleText}>Moon 2: "In the Ancient Treasure Chest"</Text>

<Text style = {styles.walkthroughInstruction}>At the start of the kingdom, there is a side path that leads you to a chest with the moon in it. </Text>

<Text style = {styles.topicTitleText}>Moon 3: "Roulette Tower: Climbed"</Text>

<Text style = {styles.walkthroughInstruction}>At the battlefield, there is a rocket which brings you to a bonus area where you must control the placement of platforms in a 8-bit section. </Text>

<Text style = {styles.topicTitleText}>Moon 4: "Roulette Tower: Stopped"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area, you can find the moon in the section right before the Red Koopa Troopas. </Text>

<Text style = {styles.topicTitleText}>NOTE: These Moons can only be obtained after beating Bowser in the Moon Kingdom.</Text>

<Text style = {styles.topicTitleText}>Moon 5: "Peach in the Ruined Kingdom"</Text>

<Text style = {styles.walkthroughInstruction}>Right next to the dragon is where you can find Peach and Tiara. Talk to them and get the moon. </Text>

<Text style = {styles.topicTitleText}>NOTE: These Moons can only be obtained by breaking open the Moon Rock in the kingdom.</Text>

<Text style = {styles.topicTitleText}>Moon 6: "Caught on a Big Horn"</Text>

<Text style = {styles.walkthroughInstruction}>Climb the dragon and reach it's right horn. Throw Cappy on it and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 7: "Upon the Broken Arch"</Text>

<Text style = {styles.walkthroughInstruction}>At the beginning of the kingdom, ground pound one of the broken archs. </Text>

<Text style = {styles.topicTitleText}>Moon 8: "Rolling Rock on the Battlefield"</Text>

<Text style = {styles.walkthroughInstruction}>At the battlefield, there is a rock you can break to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 9: "Charging Through an Army"</Text>

<Text style = {styles.walkthroughInstruction}>There is a Moon Pipe next to the Odyssey. The moon is in a cage that you must destroy by capturing a Chargin' Chuck. </Text>

<Text style = {styles.topicTitleText}>Moon 10: "The Mummy Army's Curse"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area, use the Chargin' Chuck to defeat the army of Chinchos behind a stone wall. </Text>

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
