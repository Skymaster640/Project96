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

export default class CloudKingdomMoons extends React.Component {

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
source = {require('../assets/SMOWalkthrough6.png')}
style = {{width:250,height:150}}
/>


<Text style = {styles.gameDiscription}>The Cloud Kingdom is your first abrupt stop in your journey in Super Mario Odyssey. As the name suggests, this kingdom is made entirely of clouds. On your first visit, you had to battle against Bowser.  </Text>

<Text style = {styles.topicTitleText}>Moon 1: "Picture Match: Basically a Goomba"</Text>

<Text style = {styles.walkthroughInstruction}>In the middle of the arena, there is a Pipe. Enter it and you will be brought to a puzzle area. Where you need to try to put the correct facial features of a Goomba in the correct places and orientation. Get at least 60 points and you get the moon. </Text>

<Text style = {styles.topicTitleText}>NOTE: These Moons can only be obtained after beating Bowser in the Moon Kingdom.</Text>

<Text style = {styles.topicTitleText}>Moon 2: "Peach in the Cloud Kingdom"</Text>

<Text style = {styles.walkthroughInstruction}>At the east side of the kingdom, you can find Peach and Tiara. Talk to them and get the moon. </Text>

<Text style = {styles.topicTitleText}>NOTE: These Moons can only be obtained by breaking open the Moon Rock in the kingdom.</Text>

<Text style = {styles.topicTitleText}>Moon 3: "Digging in the...Cloud?"</Text>

<Text style = {styles.walkthroughInstruction}>Go to the patch of elevated cloud in the southeastern corner of the arena. Ground pound on that spot. </Text>

<Text style = {styles.topicTitleText}>Moon 4: "High, High Above the Clouds"</Text>

<Text style = {styles.walkthroughInstruction}>Hit a switch on a cloud, you will be taken above the kingdom to some hat clouds. At the end of this path is the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 5: "Crossing the Cloud Sea"</Text>

<Text style = {styles.walkthroughInstruction}>Go north of the Moon Rock's original location, and you will get a key that will give you access to the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 6: "Taking Notes: Up and Down"</Text>

<Text style = {styles.walkthroughInstruction}>East of the arena is a cloud lift that rises when ground pounded. You must collect all the notes with Cappy to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 7: "Picture Match: A Stellar Goomba!"</Text>

<Text style = {styles.walkthroughInstruction}>Do moon 1 again but with at least 80 points. </Text>

<Text style = {styles.topicTitleText}>Moon 8: "King of the Cube!"</Text>

<Text style = {styles.walkthroughInstruction}>At the southwestern part of the arena, there is a Moon Pipe you can enter. You must travel through the 8-bit section that is split into multiple sides of the cube and collect the moon shards. </Text>

<Text style = {styles.topicTitleText}>Moon 9: "The Sixth Face"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area, head for the bottom face of the cube. Get into the pipe that leads to the 6th side. The moon is in the middle being guarded by Fuzzies. </Text>

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
