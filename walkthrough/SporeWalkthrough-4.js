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

export default class Civilizationstage extends React.Component {

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
source = {require('../assets/SporeWalkthrough4.png')}
style = {{width:250,height:150}}
/>


<Text style = {styles.gameDiscription}>The Civilization Stage is the fourth stage in Spore. In this stage, now you must control the entire planet, by any means necessary. You are either an Economic, Religious, or Military based nation. But now you must face other nations of your species. Be the first to control the planet. </Text>

<Text style = {styles.topicTitleText}>Building Editor</Text>

<Text style = {styles.walkthroughInstruction}> There are four different types of buildings. City Hall, Factory, House, and Entertainment. The overall look doesn't matter so you can build whatever you want. But you have to have at least one of each if you want to make it through the stage. </Text>

<Text style = {styles.topicTitleText}>Vehicle Editor</Text>

<Text style = {styles.walkthroughInstruction}> There are three different vehicle types in the Civilization Stage. Land, Sea, and Sky. You need to also keep in mind whether the vehicle is Religious, Economic, or Military based. You need to keep in mind the speed, health, and power of the vehicle. </Text>

<Text style = {styles.topicTitleText}>Difficulty Setting</Text>

<Text style = {styles.walkthroughInstruction}> The difficulty setting from the previous stages will carry over to this one, but if you start at the Civilization Stage, you can choose the difficulty. The higher the difficulty, the more aggressive the other nations will be. And the debuffs for doing certain things will be even greater. So you will have a tougher time allying nations. </Text>

<Text style = {styles.topicTitleText}>Gameplay</Text>

<Text style = {styles.walkthroughInstruction}> In the start of the Civilization Stage, you start by getting your nation type based on the trait you got in the Tribal Stage. You must then make a City Hall and a Land Vehicle. You are then placed in your city. You have to claim Spice Geysers to make money to manage your city and build more vehicles. There are other tribes you can raid and get certain things but there are some that will attack back. The latter will eventually become cities of their own. The main goal is to take control of every single city on the planet. In which there are 10. You can either capture them through Military means, destroying all the buildings. Religious means by converting them to your beliefs. And Economically by just buying them. Eventually you will get sea and sky vehicles to help your quest. Once you have 6 cities, you will have access to a finisher ability. With a big price, you can instantly capture all the other cities. You can ally other cities for them to assist you in your conquest, and they will willingly join with you. Once you have all of the cities it is time for the final frontier. The Space Stage. </Text>

<Text style = {styles.topicTitleText}>City Editor</Text>

<Text style = {styles.walkthroughInstruction}> Like in the Tribal Stage, you can't change the body of your creature. But you can customize the clothing of your citizens. This however, unlike the Tribal Stage, is just for cosmetic purposes only. Meanwhile the City editor is the main part. You can change your buildings and behicles, change the background music when you are near the city, and change the positions of buildings and turrets. You need to keep a steady balance between spice manufacturing and happiness. While also keeping defense in mind. And by the end of the stage you have 10 cities to manage. </Text>

<Text style = {styles.topicTitleText}>Consequences</Text>

<Text style = {styles.walkthroughInstruction}> In every stage, there is a trait you will gain on your file that will last forever. This trait is decided on your actions throughout the stage. There are normally 3 different paths. And for each trait, they will give a different ability or upgrade for the later stages. For the Civilization Stage, there are 3 traits. Religious, Military, and Economic. Religious will bring you the Green Keeper ability. Which decreases the rate of Ecodisasters. Military will bring you the Pirate B Gone ability. Which decreases the rate of Pirate Raids. And Economic will bring you the Spice Savant ability. Which increases spice production.  </Text>

<Text style = {styles.topicTitleText}>Achievement: Civilization Stage Unlocked</Text>

<Text style = {styles.walkthroughInstruction}> Unlock the Civilization Stage.</Text>

<Text style = {styles.topicTitleText}>Achievement: Starman</Text>

<Text style = {styles.walkthroughInstruction}> Complete the Civilization Stage.</Text>

<Text style = {styles.topicTitleText}>Achievement: Economist</Text>

<Text style = {styles.walkthroughInstruction}> Complete the Civilization Stage with at least 8 Economic cities. </Text>

<Text style = {styles.topicTitleText}>Achievement: Military Strongman</Text>

<Text style = {styles.walkthroughInstruction}> Complete the Civilization Stage with at least 8 Military cities. </Text>

<Text style = {styles.topicTitleText}>Achievement: Missionary</Text>

<Text style = {styles.walkthroughInstruction}> Complete the Civilization Stage with at least 8 Religious cities. </Text>

<Text style = {styles.topicTitleText}>Achievement: Spice Hoarder</Text>

<Text style = {styles.walkthroughInstruction}> Control every Spice Geyser at one time. </Text>

<Text style = {styles.topicTitleText}>Achievement: Relentless</Text>

<Text style = {styles.walkthroughInstruction}> Have 10 files complete the Civilization Stage at one time. </Text>

<Text style = {styles.topicTitleText}>Achievement: Rolling Thunder</Text>

<Text style = {styles.walkthroughInstruction}> Complete the Civilization Stage in less than a hour. </Text>

<Text style = {styles.topicTitleText}>Achievement: Ghetto Blaster</Text>

<Text style = {styles.walkthroughInstruction}> Make 10 anthems. </Text>

<Text style = {styles.topicTitleText}>Achievement: Conclusion</Text>

<Text style = {styles.walkthroughInstruction}> Complete the Civilization Stage by launching ICBMs. </Text>

<Text style = {styles.topicTitleText}>Achievement: Fear of Flying</Text>

<Text style = {styles.walkthroughInstruction}> Complete the Civilization Stage while never buying a single air vehicle. </Text>

<Text style = {styles.topicTitleText}>Achievement: Adamantium Civilization</Text>

<Text style = {styles.walkthroughInstruction}> Complete the Civilization Stage on Hard difficulty. </Text>

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
