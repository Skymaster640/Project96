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


export default class PvZWalkthrough extends React.Component {
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
            this.props.navigation.navigate('PvZ')
          }}>
<Text>Game Page</Text>

</TouchableOpacity>
        </View>
        
          <View style={styles.gameScreen}>
            <Text style={styles.gameTitleText}>Plants vs. Zombies</Text>

            <Image
              source={require('../assets/PlantsVsZombies.jpg')}
              style={{ width: 250, height: 150 }}
            />

            <View style = {styles.gameList}>

            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('PVZAllPlants');
              }}>
              <Image
                source={require('../assets/PVZWalkthrough1.png')}
                style={{ width: 100, height: 100 }}
              />

              <Text>All plants</Text>
              
            </TouchableOpacity>

            </View>


            <View style = {styles.gameList}>
            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('PVZAllZombies');
              }}>
              <Image
                source={require('../assets/PVZWalkthrough2.png')}
                style={{ width: 100, height: 100 }}
              />

              <Text>All Zombies</Text>
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

    backgroundColor: '#FFDD00',
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
    color: 'black',
    fontFamily: 'bold',
    fontSize: 20,
  },
  game: {
    alignItems: 'center',
    marginTop: 10,
  },
});
