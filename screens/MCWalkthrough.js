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


export default class MCWalkthrough extends React.Component {
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
            this.props.navigation.navigate('MC')
          }}>
<Text>Game Page</Text>

</TouchableOpacity>
        </View>
        
          <View style={styles.gameScreen}>
            <Text style={styles.gameTitleText}>Minecraft</Text>

            <Image
              source={require('../assets/Minecraft.png')}
              style={{ width: 250, height: 150 }}
            />

            


            
           
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#A7D540',
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
  gameTitleText: {
    color: 'white',
    fontFamily: 'bold',
    fontSize: 20,
  },

});
