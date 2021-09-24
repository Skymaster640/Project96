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

export default class DarkSideMoons extends React.Component {

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
source = {require('../assets/SMOWalkthrough16.png')}
style = {{width:250,height:150}}
/>


<Text style = {styles.gameDiscription}>The Dark Side of the Moon is the second "kingdom" unlocked after beating Bowser at the Moon Kingdom. It first starts out as a Boss Rush of the Broodals, and after that it is just filled with completing harder versions of other bonus areas. And there is a ton of Hint Art here. Can you complete it all? </Text>

<Text style = {styles.topicTitleText}>Moon 1: "Arrival at Rabbit Ridge!"</Text>

<Text style = {styles.walkthroughInstruction}>Travel through the kingdom and take out all the Broodals. Die once and you have to fight all of them again. </Text>

<Text style = {styles.topicTitleText}>Moon 2: "Captain Toad on the Dark Side!"</Text>

<Text style = {styles.walkthroughInstruction}>Right before fighting RoboBrood, continue to the right to find Captain Toad. Talk to him and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 3: "Breakdown Road: Hurry!"</Text>

<Text style = {styles.walkthroughInstruction}>Behind the Odyssey, there is a door that leads you to a harder version of Breakdown Road from the Wooded Kingdom. You must get the moon without Cappy. </Text>

<Text style = {styles.topicTitleText}>Moon 4: "Breakdown Road: Final Challenge!"</Text>

<Text style = {styles.walkthroughInstruction}>Same as the second Breakdown Road moon from the Wooded Kingdom but without Cappy. </Text>

<Text style = {styles.topicTitleText}>Moon 5: "Invisible Road: Rush!"</Text>

<Text style = {styles.walkthroughInstruction}>In an area below the binoculars there is another door. This is the same Invisible Road as the Wooded Kingdom, but you must complete it without Cappy. </Text>

<Text style = {styles.topicTitleText}>Moon 6: "Invisible Road: Secret!"</Text>

<Text style = {styles.walkthroughInstruction}>This is the same as the second Invisible Road moon from the Wooded Kingdom but without Cappy. </Text>

<Text style = {styles.topicTitleText}>Moon 7: "Vanishing Road Rush"</Text>

<Text style = {styles.walkthroughInstruction}>In an alcove behind one of the large vegetables, there is a door that leads you to the Vanishing Road from Metro Kingdom. You must get the same moon but without Cappy or any Motor Scooters. </Text>

<Text style = {styles.topicTitleText}>Moon 8: "Vanishing Road Challenge"</Text>

<Text style = {styles.walkthroughInstruction}>This is the same as the second Vanishing Road moon from the Metro Kingdom but without Cappy or any Motor Scooters. </Text>

<Text style = {styles.topicTitleText}>Moon 9: "Yoshi Under Siege"</Text>

<Text style = {styles.walkthroughInstruction}>In the same alcove behind the large vegetables there is a Moon Pipe that will take you to the Under Siege level from Metro Kingdom. But now you must capture Yoshi and fill up his Fruit Meter to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 10: "Fruit Feast Under Siege"</Text>

<Text style = {styles.walkthroughInstruction}>In the Metro Kingdom's Under Siege level, fill up Yoshi's Fruit Meter a second time. </Text>

<Text style = {styles.topicTitleText}>Moon 11: "Yoshi on the Sinking Island"</Text>

<Text style = {styles.walkthroughInstruction}>At the left side of the main area, there is another Moon Pipe that leads to the Sinking Island level from the Seaside Kingdom. You have to beat the level with Yoshi while filling up his Fruit Meter. </Text>

<Text style = {styles.topicTitleText}>Moon 12: "Fruit Feast on the Sinking Island"</Text>

<Text style = {styles.walkthroughInstruction}>In the Seaside Kingdom's Sinking Island level, fill up Yoshi's Fruit Meter a second time. </Text>

<Text style = {styles.topicTitleText}>Moon 13: "Yoshi's Magma Swamp"</Text>

<Text style = {styles.walkthroughInstruction}>At the lowest part of the main area, there is another Moon Pipe that leads to the Magma Swamp level from the Luncheon Kingdom, but now you must fill up Yoshi's Fruit Meter. </Text>

<Text style = {styles.topicTitleText}>Moon 14: "Fruit Feast in the Magma Swamp!"</Text>

<Text style = {styles.walkthroughInstruction}>In the Luncheon Kingdom's Magma Swamp level, fill up Yoshi's Fruit Meter a second time. </Text>

<Text style = {styles.topicTitleText}>Moon 15: "Found with Dark Side Art 1"</Text>

<Text style = {styles.walkthroughInstruction}>On one of the vegetables on the bottom part of the main area, there is some Hint Art that leads to the Cascade Kingdom. Ground Pound the spot on the art to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 16: "Found with Dark Side Art 2"</Text>

<Text style = {styles.walkthroughInstruction}>Behind one of the vegetables on the bottom part of the main area, there is some Hint Art that leads to the Metro Kingdom. Head to the Helipad and ground pound right next to the yellow marking to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 17: "Found with Dark Side Art 3"</Text>

<Text style = {styles.walkthroughInstruction}>Behind one of the vegetables on the bottom part of the main area, there is some Hint Art that leads to the Mushroom Kingdom. Head to the garden and ground pound right in between some bushes to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 18: "Found with Dark Side Art 4"</Text>

<Text style = {styles.walkthroughInstruction}>On a wall on the bottom part of the main area near the Binoculars, there is some Hint Art that leads to the Cloud Kingdom. Head to the northwest circle on the arena and ground pound to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 19: "Found with Dark Side Art 5"</Text>

<Text style = {styles.walkthroughInstruction}>By dropping off to an area below the Binoculars in the main area, there is some Hint Art that leads to the Snow Kingdom. Head to the area where you register to race and ground pound the Shiverian sign near the enterance. </Text>

<Text style = {styles.topicTitleText}>Moon 20: "Found with Dark Side Art 6"</Text>

<Text style = {styles.walkthroughInstruction}>On the second part of the main area on the wall of the platform with the Binoculars, there is some Hint Art that leads you to the Seaside Kingdom, you have to ground pound next to two pillars near the Rolling Canyon. </Text>

<Text style = {styles.topicTitleText}>Moon 21: "Found with Dark Side Art 7"</Text>

<Text style = {styles.walkthroughInstruction}>Behind a pile of vegetables on the third part of the main area, there is some Hint Art that leads you to the Lost Kingdom. Ground pound in between the red and dark brown terrain near the Odyssey to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 22: "Found with Dark Side Art 8"</Text>

<Text style = {styles.walkthroughInstruction}>To the left side of the wall between the third and fourth parts of the main area, there is some Hint Art that leads to the Luncheon Kingdom. Go to the Peronza Plaza and ground pound near one of the columns to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 23: "Found with Dark Side Art 9"</Text>

<Text style = {styles.walkthroughInstruction}>To the right side of the wall between the third and fourth parts of the main area, there is some Hint Art that leads to the Lake Kingdom. Go to the Water Plaza and ground pound near a pillar with another one missing to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 24: "Found with Dark Side Art 10"</Text>

<Text style = {styles.walkthroughInstruction}>Behind a pile of vegetables on the fourth part of the main area on the floor, there is some Hint Art that leads to the Ruined Kingdom. Go to the crater at the start of the kingdom and ground pound in it to get the moon. </Text>

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
