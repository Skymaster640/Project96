import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import SMOWalkthrough from './SMOWalkthrough'
import Undertale from './Undertale'
import Minecraft from './Minecraft'
import SkySpyroAdventure from './SkySpyroAdventure'
import SmashBrosUltimate from './SmashBrosUltimate'

export default class WalkthroughSearch extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Skymaster's Gamepedia</Text>
        </View>

        <ScrollView>

        <View style ={{alignSelf:'center'}}>
<Text>Sort By...</Text>
        </View>

        <View style = {{marginLeft:200,borderRadius:9,borderColor:'black',backgroundColor:'white'}}>

        <TouchableOpacity
        onPress={()=>{
            this.props.navigation.navigate('AlphabetFilterW')
          }}>
<Text>Alphabetical</Text>

</TouchableOpacity>

<TouchableOpacity
        onPress={()=>{
            this.props.navigation.navigate('ReleaseFilterW')
          }}>
<Text>Release Date</Text>

</TouchableOpacity>
        </View>

<View style = {{marginRight:252,borderRadius:9,borderColor:'black',backgroundColor:'white'}}>

        <TouchableOpacity
        onPress={()=>{
            this.props.navigation.navigate('Home')
          }}>
<Text>Games</Text>

</TouchableOpacity>
        </View>


        
 <View style={styles.gameList}>
          <TouchableOpacity style={styles.game}
          onPress={()=>{
            this.props.navigation.navigate('SMOWalkthrough')
          }}

          
          
          >
            <Image
              source={require('../assets/SMO.jpg')}
              style={{ width: 100, height: 100 }}
            />

            <Text>Super Mario Odyssey</Text>

          </TouchableOpacity>
          
        </View>
        <View style={styles.gameList}>
          <TouchableOpacity style={styles.game}
           onPress={() =>
    this.props.navigation.navigate('UTWalkthrough')
  }>

          
          
          
            <Image
              source={require('../assets/Undertale.png')}
              style={{ width: 100, height: 100 }}
            />

            <Text>Undertale</Text>
          </TouchableOpacity>
          
        </View>
        <View style={styles.gameList}>
          <TouchableOpacity style={styles.game}
          onPress={()=>{
            this.props.navigation.navigate('MCWalkthrough')
          }}

          
          
          >
            <Image
              source={require('../assets/Minecraft.png')}
              style={{ width: 100, height: 110 }}
            />

            <Text>Minecraft</Text>
            <Text>Nintendo Switch, Xbox One, Playstation 4, PC, Mobile</Text>
            <Text>Mojang</Text>
          </TouchableOpacity>
          
        </View>
        <View style={styles.gameList}>
          <TouchableOpacity style={styles.game}
          onPress={()=>{
            this.props.navigation.navigate('SSAWalkthrough')
          }}

          
          
          >
            <Image
              source={require('../assets/Skylanders_SA_Art.png')}
              style={{ width: 100, height: 100 }}
            />

            <Text>Skylanders Spyro's Adventure</Text>
            <Text>Nintendo Wii, Playstation 3, Xbox 360, Nintendo 3DS</Text>
            <Text>Activision</Text>
          </TouchableOpacity>
          
        </View>
        <View style={styles.gameList}>
          <TouchableOpacity style={styles.game}
          onPress={()=>{
            this.props.navigation.navigate('SSBUWalkthrough')
          }}

          
          
          >
            <Image
              source={require('../assets/SmashBrosUltimate.jpg')}
              style={{ width: 100, height: 100 }}
            />

            <Text>Super Smash Bros. Ultimate</Text>
            <Text>Nintendo Switch</Text>
            <Text>Nintendo</Text>
          </TouchableOpacity>
          
        </View>

        <View style={styles.gameList}>
          <TouchableOpacity style={styles.game}
          onPress={()=>{
            this.props.navigation.navigate('SporeWalkthrough')
          }}

          
          
          >
            <Image
              source={require('../assets/Spore.jpg')}
              style={{ width: 100, height: 100 }}
            />

            <Text>Spore</Text>
          </TouchableOpacity>
          
        </View>

        <View style={styles.gameList}>
          <TouchableOpacity style={styles.game}
          onPress={()=>{
            this.props.navigation.navigate('PVZWalkthrough')
          }}

          
          
          >
            <Image
              source={require('../assets/PlantsVsZombies.jpg')}
              style={{ width: 100, height: 100 }}
            />

            <Text>Plants vs. Zombies</Text>
          </TouchableOpacity>
          
        </View>

        <View style={styles.gameList}>
          <TouchableOpacity style={styles.game}
          onPress={()=>{
            this.props.navigation.navigate('PHGSSWalkthrough')
          }}

          
          
          >
            <Image
              source={require('../assets/PokemonHeartGoldSoulSilver.jpg')}
              style={{ width: 100, height: 100 }}
            />

            <Text>Pokemon HeartGold and SoulSilver</Text>
          </TouchableOpacity>
          
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'cyan',
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
    width:200,

    alignSelf:'center'
  },
  game: {
    alignItems: 'center',
    marginTop:10
  },
});
