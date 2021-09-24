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

export default class MetroKingdomMoons extends React.Component {

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
source = {require('../assets/SMOWalkthrough8.jpg')}
style = {{width:250,height:150}}
/>


<Text style = {styles.gameDiscription}>The Metro Kingdom is one of the biggest kingdoms you will encounter in Super Mario Odyssey. Here in New Donk City, you must first stop Mechawiggler from draining all the city's power. Then you must bring back all the power in time for the New Donk City Festival for the city's mayor Pauline. </Text>

<Text style = {styles.topicTitleText}>Moon 1: "New Donk City's Pest Problem"</Text>

<Text style = {styles.walkthroughInstruction}>Defeat Mechawiggler. </Text>

<Text style = {styles.topicTitleText}>Moon 2: "Drummer on Board!"</Text>

<Text style = {styles.walkthroughInstruction}>After accepting Pauline's request, talk to the drummer right next to her. </Text>

<Text style = {styles.topicTitleText}>Moon 3: "Guitarist on Board!"</Text>

<Text style = {styles.walkthroughInstruction}>After accepting Pauline's request, go to Squawks Park and talk to the guitarist. </Text>

<Text style = {styles.topicTitleText}>Moon 4: "Bassist on Board!"</Text>

<Text style = {styles.walkthroughInstruction}>After accepting Pauline's request, go to Mayor Pauline park and talk to the bassist. </Text>

<Text style = {styles.topicTitleText}>Moon 5: "Trumpeter on Board!"</Text>

<Text style = {styles.walkthroughInstruction}>After accepting Pauline's request, go to the triangular building across from City Hall and talk to the trumpeter on the roof. </Text>

<Text style = {styles.topicTitleText}>Moon 6: "Powering Up the Station"</Text>

<Text style = {styles.walkthroughInstruction}>Go to the Power Plant, and defeat the two Big Poison Piranha Plants. </Text>

<Text style = {styles.topicTitleText}>Moon 7: "A Traditional Festival!"</Text>

<Text style = {styles.walkthroughInstruction}>Complete the New Donk City Festival. </Text>

<Text style = {styles.topicTitleText}>Moon 8: "Inside an Iron Girder"</Text>

<Text style = {styles.walkthroughInstruction}>At the west side of the city are some crates blocking the inside of a girder. Break them and go to the end of the girder to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 9: "Swaying in the Breeze"</Text>

<Text style = {styles.walkthroughInstruction}>You can find the moon at the Helipad, floating over a hanging girder. </Text>

<Text style = {styles.topicTitleText}>Moon 10: "Girder Sandwich"</Text>

<Text style = {styles.walkthroughInstruction}>In the east side of the city is the moon in between two girders. Wall jump to it. </Text>

<Text style = {styles.topicTitleText}>Moon 11: "Glittering Above the Pool"</Text>

<Text style = {styles.walkthroughInstruction}>To the west of City Hall, there is a building with a pool on the roof. Long jump from the City Hall's roof to the moon floating above the pool building. </Text>

<Text style = {styles.topicTitleText}>Moon 12: "Dizzying Heights"</Text>

<Text style = {styles.walkthroughInstruction}>Climb to the very top of City Hall, where Mechawiggler was. </Text>

<Text style = {styles.topicTitleText}>Moon 13: "Secret Girder Tunnel!"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Odyssey is a girder with the moon at the end of it. </Text>

<Text style = {styles.topicTitleText}>Moon 14: "Who Piled Garbage on This?"</Text>

<Text style = {styles.walkthroughInstruction}>On the building to the west of the entrance to Main Street, there is a dumpster that gives a moon when ground pounded. </Text>

<Text style = {styles.topicTitleText}>Moon 15: "Hidden in the Scrap"</Text>

<Text style = {styles.walkthroughInstruction}>Go to Mayor Pauline Park, and ground pound on the broken piece of Mechawiggler. </Text>

<Text style = {styles.topicTitleText}>Moon 16: "Left at the Café?"</Text>

<Text style = {styles.walkthroughInstruction}>Go to the Outdoor Cafe and ground pound where the birds are. </Text>

<Text style = {styles.topicTitleText}>Moon 17: "Caught Hopping on a Building!"</Text>

<Text style = {styles.walkthroughInstruction}>At the Rooftop Park, there is a rabbit that gives a moon when caught. </Text>

<Text style = {styles.topicTitleText}>Moon 18: "How Do They Take Out the Trash?"</Text>

<Text style = {styles.walkthroughInstruction}>From the City Hall's roof, there is a dumpster on a girder to the east. Reach the dumpster and open it to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 19: "Metro Kingdom Timer Challenge 1"</Text>

<Text style = {styles.walkthroughInstruction}>On the west side of the city, there is a starecrow that will start the challenge when Cappy is thrown on it. Go past the platforms to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 20: "Metro Kingdom Timer Challenge 2"</Text>

<Text style = {styles.walkthroughInstruction}>On top of City Hall, there is a motor scooter and a P-Switch. Grab the scooter and press the switch. Grab the key on the path and reach the moon before the timer ends. </Text>

<Text style = {styles.topicTitleText}>Moon 21: "City Gardening: Building Planter"</Text>

<Text style = {styles.walkthroughInstruction}>At Squawks Park, there are three seeds. Bring one of the seeds to a building at the south west corner of the kingdom and put it into the pot. </Text>

<Text style = {styles.topicTitleText}>Moon 22: "City Gardening: Plaza Planter"</Text>

<Text style = {styles.walkthroughInstruction}>With the aforementioned seeds, bring one to the top right corner of the same park where there is another pot. </Text>

<Text style = {styles.topicTitleText}>Moon 23: "City Gardening: Rooftop Planter"</Text>

<Text style = {styles.walkthroughInstruction}>Bring the last seed to the rooftop of the building next to the Slots minigame. There is the last pot. </Text>

<Text style = {styles.topicTitleText}>Moon 24: "How You Doin', Captain Toad?"</Text>

<Text style = {styles.walkthroughInstruction}>At the end of a girder on the north side of the kingdom is Captain Toad. Talk to him and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 25: "Free Parking: Rooftop Hop"</Text>

<Text style = {styles.walkthroughInstruction}>On top of a building at the northeast corner of the kingdom, bring a motor scooter to the parking space there and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 26: "Bench Friends"</Text>

<Text style = {styles.walkthroughInstruction}>Near the Crazy Cap is a New Donker sitting on a bench. Sit next to him and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 27: "Shopping in New Donk City	"</Text>

<Text style = {styles.walkthroughInstruction}>Go to the Crazy Cap shop and buy the moon for 100 coins. </Text>

<Text style = {styles.topicTitleText}>Moon 28: "Metro Kingdom Slots"</Text>

<Text style = {styles.walkthroughInstruction}>At the west side of the kingdom, there is a building where you can play the slots in to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 29: "Jump-Rope Hero"</Text>

<Text style = {styles.walkthroughInstruction}>At Squawks Park, there are 2 women with a Jump Rope. Get 30 points to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 30: "Jump-Rope Genius"</Text>

<Text style = {styles.walkthroughInstruction}>Get 100 points in the jump rope challenge. </Text>

<Text style = {styles.topicTitleText}>Moon 31: "Remotely Captured Car"</Text>

<Text style = {styles.walkthroughInstruction}>At Main Street there is a New Donker with a RC Car. Capture him and drive the car to the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 32: "RC Car Pro!"</Text>

<Text style = {styles.walkthroughInstruction}>Near moon 31, there is a door you can enter to find a big RC Car racetrack. Complete 3 laps in 35 seconds to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 33: "Taking Notes: In the Private Room"</Text>

<Text style = {styles.walkthroughInstruction}>On the Main Street there is a building you can enter. Collect all the music notes to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 34: "City Hall Lost & Found"</Text>

<Text style = {styles.walkthroughInstruction}>Inside New Donk City Hall, reach the top of the area to get the moon inside a chest. </Text>

<Text style = {styles.topicTitleText}>Moon 35: "Sewer Treasure"</Text>

<Text style = {styles.walkthroughInstruction}>In the Sewers, there is a ledge high up on the wall with the moon on it. </Text>

<Text style = {styles.topicTitleText}>Moon 36: "Celebrating in the Streets!"</Text>

<Text style = {styles.walkthroughInstruction}>In the New Donk City Festival, there is a pipe that leads to the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 37: "Pushing Through the Crowd"</Text>

<Text style = {styles.walkthroughInstruction}>West of the Outdoor Cafe, there is a building you can enter. Flip the lever then reach the end of the area in the time limit to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 38: "High Over the Crowd"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area, there is a moon on a high ledge above the crowd. </Text>

<Text style = {styles.topicTitleText}>Moon 39: "Rewiring the Neighborhood"</Text>

<Text style = {styles.walkthroughInstruction}>West of City Hall, there is a door you can't enter unless you are wearing the Builder's outfit and hat. In the bonus area you need to collect all five moon shards. </Text>

<Text style = {styles.topicTitleText}>Moon 40: "Off the Beaten Wire"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area, there is a moon on a side building reached from the first Spark Pylon. </Text>

<Text style = {styles.topicTitleText}>Moon 41: "Moon Shards Under Siege"</Text>

<Text style = {styles.walkthroughInstruction}>In Main Street there is a lone Taxi. Capture it to be taken to the secret area. Collect the five moon shards to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 42: "Sharpshooting Under Siege"</Text>

<Text style = {styles.walkthroughInstruction}>Capture a Sherm and look for a box on a high ledge. Destroy it and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 43: "Inside the Rotating Maze"</Text>

<Text style = {styles.walkthroughInstruction}>In the Southwest corner of the city, there is a manhole cover you can capture to access a secret area. Collect the five moon shards. </Text>

<Text style = {styles.topicTitleText}>Moon 44: "Outside the Rotating Maze"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area, get on top of the maze and go to the back to find another moon. </Text>

<Text style = {styles.topicTitleText}>Moon 45: "Hanging from a High-Rise"</Text>

<Text style = {styles.walkthroughInstruction}>At moon 37's location there is a pipe. You will be taken to a rooftop with a rocket on it. Capture the rocket to be taken to a bonus area. At the end is the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 46: "Vaulting up a High-Rise"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area find a pole that moves up and down. Use it to find a secret alcove with another pole. Keep going until you reach the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 47: "Bullet Billding"</Text>

<Text style = {styles.walkthroughInstruction}>Near City Hall is a building you can enter. In this area the moon is at the end. </Text>

<Text style = {styles.topicTitleText}>Moon 48: "One Man's Trash..."</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area capture a Bullet Bill to reach a dumpster at a floating platform. Inside it is the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 49: "Motor Scooter: Escape!"</Text>

<Text style = {styles.walkthroughInstruction}>At the City Hall Plaza there is a triangular shaped building with an open door. In this area you must get on the scooter and run away from the T-Rex. At the end is the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 50: "Big Jump: Escape!"</Text>

<Text style = {styles.walkthroughInstruction}>Partway through the previous area, the moon is on a stack of boxes at the left. </Text>

<Text style = {styles.topicTitleText}>Moon 51: "Secret Path to New Donk City!"</Text>

<Text style = {styles.walkthroughInstruction}>Find a secret painting in the Sand Kingdom and you will be taken to a far away building with the moon on the rooftop. </Text>

<Text style = {styles.topicTitleText}>Moon 52: "A Tourist in the Metro Kingdom!"</Text>

<Text style = {styles.walkthroughInstruction}>Near the start of the kingdom is a Taxi Driver. Talk to them and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 53: "Found with Metro Kingdom Art"</Text>

<Text style = {styles.walkthroughInstruction}>At the trumpeter's location is a piece of Hint Art. This will lead you to the Lake Kingdom where the moon is in the Water Plaza. </Text>

<Text style = {styles.topicTitleText}>NOTE: These Moons can only be obtained after beating Bowser in the Moon Kingdom.</Text>

<Text style = {styles.topicTitleText}>Moon 54: "Bird Traveling in the City"</Text>

<Text style = {styles.walkthroughInstruction}>There is a bird that flies in the east part of the city. Catch it and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 55: "Mario Signs His Name"</Text>

<Text style = {styles.walkthroughInstruction}>In Squawks Park there are 5 giant letters. M, A, R, I, and O. Bring them to the slots at the north side of the park and spell out MARIO. </Text>

<Text style = {styles.topicTitleText}>Moon 56: "Surprise Clown!"</Text>

<Text style = {styles.walkthroughInstruction}>At the northwest corner of the city is a New Donker who will give you the moon if you speak to him while wearing the Clown Costume and hat. </Text>

<Text style = {styles.topicTitleText}>Moon 57: "A Request from the Mayor"</Text>

<Text style = {styles.walkthroughInstruction}>Talk to Pauline, then find a handbag on a nearby bench. Give it to her and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 58: "Jammin' in the Metro Kingdom"</Text>

<Text style = {styles.walkthroughInstruction}>Jammin' Toad is found in southern Squawks Park. Play the RC Car music to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 59: "Sphynx in the City"</Text>

<Text style = {styles.walkthroughInstruction}>Capture some binoculars, and look up in the sky to find the Sphynx. Look at him long enough to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 60: "Free Parking: Leap of Faith"</Text>

<Text style = {styles.walkthroughInstruction}>Get the scooter on top of City Hall then ride to an eastern building to reach a parking spot that gives you the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 61: "Metro Kingdom Regular Cup"</Text>

<Text style = {styles.walkthroughInstruction}>Near moon 60 is a Koopa Troopa who will invite you to Koopa Freerunning. Win the race to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 62: "Hat-and-Seek: In the City"</Text>

<Text style = {styles.walkthroughInstruction}>Walking on the sidewalk of Cranky Avenue and Southern Squawks Park Street is a man with a hat ghost disguised as his hat. Talk to him and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 63: "Powering Up the Power Plant"</Text>

<Text style = {styles.walkthroughInstruction}>At the Power Plant there is a large battery out of place. Put it back to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 64: "Up on the Big Screen"</Text>

<Text style = {styles.walkthroughInstruction}>There is a movie theater on the west side of the city. Go inside and you can play through a remake of World 1-1 from the original Super Mario Bros. At the end of the level is the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 65: "Down Inside the Big Screen"</Text>

<Text style = {styles.walkthroughInstruction}>In the 1-1 remake, go to the secret underground section, there will be a moon there. (It is the 4th pipe.) </Text>

<Text style = {styles.topicTitleText}>Moon 66: "Peach in the Metro Kingdom"</Text>

<Text style = {styles.walkthroughInstruction}>On top of the theater is Peach and Tiara. Talk to them and get the moon. </Text>

<Text style = {styles.topicTitleText}>NOTE: These Moons can only be obtained by breaking open the Moon Rock in the kingdom.</Text>

<Text style = {styles.topicTitleText}>Moon 67: "Hanging Between Buildings"</Text>

<Text style = {styles.walkthroughInstruction}>On the triangular building alongside Rattley Street, there is a switch that can be pressed to reveal a black and white pathway. You can reach the moon along the path. </Text>

<Text style = {styles.topicTitleText}>Moon 68: "Crossing Lines"</Text>

<Text style = {styles.walkthroughInstruction}>Using the wire connecting the theater and Rooftop Garden, you can get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 69: "Out of a Crate in the City"</Text>

<Text style = {styles.walkthroughInstruction}>On top of the building leading to the large crowd is a crate with a moon inside. </Text>

<Text style = {styles.topicTitleText}>Moon 70: "Bird Traveling in the Park"</Text>

<Text style = {styles.walkthroughInstruction}>In Mayor Pauline Park, there is a bird that gives a moon when caught. </Text>

<Text style = {styles.topicTitleText}>Moon 71: "Metro Kingdom Timer Challenge 3"</Text>

<Text style = {styles.walkthroughInstruction}>On Southern Dixie Street is a starecrow that will start the challenge. Use a scooter to get the moon in time. </Text>

<Text style = {styles.topicTitleText}>Moon 72: "Found in the Park! Good Dog!"</Text>

<Text style = {styles.walkthroughInstruction}>At Mayor Pauline Park is a dog that will lead you to the moon if you follow it enough. </Text>

<Text style = {styles.topicTitleText}>Moon 73: "RC Car Champ!"</Text>

<Text style = {styles.walkthroughInstruction}>Complete 3 laps in the RC Car Challenge in less than 26 seconds to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 74: "Metro Kingdom Master Cup"</Text>

<Text style = {styles.walkthroughInstruction}>Beat Koopa Freerunning with faster racers. </Text>

<Text style = {styles.topicTitleText}>Moon 75: "Hat-and-Seek: In the Crowd"</Text>

<Text style = {styles.walkthroughInstruction}>At the giant crowd, there is one person with a hat ghost disguised as their hat. Talk to them and get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 76: "Scaling Pitchblack Mountain"</Text>

<Text style = {styles.walkthroughInstruction}>Near Pauline is a Moon Pipe that will lead you to an area where you have to reach the top of a mountain in a dark room. </Text>

<Text style = {styles.topicTitleText}>Moon 77: "Reaching Pitchblack Island"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area, there is a platform you can access through some hidden blocks. At the platform is a moon. </Text>

<Text style = {styles.topicTitleText}>Moon 78: "Swinging Scaffolding: Jump!"</Text>

<Text style = {styles.walkthroughInstruction}>On a building south of moon 67, there is a Moon Pipe that will lead you to an area where you have to make it past swinging girders. </Text>

<Text style = {styles.topicTitleText}>Moon 79: "Swinging Scaffolding: Break!"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area, capture a Hammer Bro and break the breakable blocks to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 80: "Motor Scooter Daredevil!"</Text>

<Text style = {styles.walkthroughInstruction}>Near a Spark Pylon, there is a Moon Pipe that leads you to an area where you have to use a motor scooter to reach the end. </Text>

<Text style = {styles.topicTitleText}>Moon 81: "Full-Throttle Scooting!"</Text>

<Text style = {styles.walkthroughInstruction}>In the previous area, you have to go on a side path filled with falling blocks to get the moon. </Text>

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
