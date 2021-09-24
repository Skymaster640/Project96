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
import ReactPlayer from 'react-player';
import axios from 'axios';


export default class SporeWalkthrough extends React.Component {
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
            this.props.navigation.navigate('Walkthroughs')
          }}>
<Text>Return</Text>

</TouchableOpacity>



        </View>

        <View style = {{marginLeft:252,borderRadius:9,borderColor:'black',backgroundColor:'white'}}>

        <TouchableOpacity
        onPress={()=>{
            this.props.navigation.navigate('Spore')
          }}>
<Text>Game Page</Text>

</TouchableOpacity>
        </View>
        
          <View style={styles.gameScreen}>
            <Text style={styles.gameTitleText}>Spore</Text>

            <Image
              source={require('../assets/Spore.jpg')}
              style={{ width: 250, height: 150 }}
            />

            <View style = {styles.gameList}>

            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('CellStage');
              }}>
              <Image
                source={require('../assets/SporeWalkthrough1.png')}
                style={{ width: 100, height: 100 }}
              />

              <Text>Cell Stage</Text>
              <Text>Tips, Tricks, and all Achievements</Text>
              
            </TouchableOpacity>

            </View>


            <View style = {styles.gameList}>
            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('CreatureStage');
              }}>
              <Image
                source={require('../assets/SporeWalkthrough2.png')}
                style={{ width: 100, height: 100 }}
              />

              <Text>Creature Stage</Text>
              <Text>Tips, Tricks, and all Achievements</Text>
            </TouchableOpacity>

            </View>


            <View style = {styles.gameList}>
            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('TribalStage');
              }}>
              <Image
                source={require('../assets/SporeWalkthrough3.png')}
                style={{ width: 100, height: 100 }}
              />

              <Text>Tribal Stage</Text>
              <Text>Tips, Tricks, and all Achievements</Text>
            </TouchableOpacity>

            </View>

            <View style = {styles.gameList}>
            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('CivilizationStage');
              }}>
              <Image
                source={require('../assets/SporeWalkthrough4.png')}
                style={{ width: 100, height: 100 }}
              />

              <Text>CivilizationStage</Text>
              <Text>Tips, Tricks, and all Achievements</Text>
            </TouchableOpacity>

            </View>

            <View style = {styles.gameList}>
            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('SpaceStage');
              }}>
              <Image
                source={require('../assets/SporeWalkthrough5.png')}
                style={{ width: 100, height: 100 }}
              />

              <Text>Space Stage</Text>
              <Text>Tips, Tricks, and all Achievements</Text>
            </TouchableOpacity>

            </View>

            <View style = {styles.gameList}>
            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('GalacticAdventures');
              }}>
              <Image
                source={require('../assets/SporeWalkthrough6.jpg')}
                style={{ width: 100, height: 100 }}
              />

              <Text>Galactic Adventures</Text>
              <Text>Tips, Tricks, and all Achievements</Text>
            </TouchableOpacity>

            </View>

           
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'rgb(2, 4, 28)',
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
  gameList: {
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: 'white',
    marginLeft: 80,
    marginRight: 80,
    borderWidth: 10,
    borderColor: 'black',
  },
  gameScreen: {
    alignItems: 'center',
  },
  gameTitleText: {
    color: 'white',
    fontFamily: 'bold',
    fontSize: 20,
  },
  game: {
    alignItems: 'center',
    marginTop: 10,
  },
});
