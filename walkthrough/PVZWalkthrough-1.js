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

export default class PVZ1AllPlants extends React.Component {

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
            this.props.navigation.navigate('PVZWalkthrough')
          }}>
<Text>Return</Text>

</TouchableOpacity>
        </View>

        <View style = {styles.gameScreen}>

<Text style = {styles.gameTitleText}>Plants vs. Zombies</Text>

<Image
source = {require('../assets/PVZWalkthrough1.png')}
style = {{width:250,height:150}}
/>


<Text style = {styles.gameDiscription}>Plants vs. Zombies has many different plants for you to use to defend yourself from the incoming zombie hordes. This page will tell you about each plant and how to obtain them. </Text>

<Text style = {styles.topicTitleText}>Peashooter</Text>

<Text style = {styles.walkthroughInstruction}> Type: Long-ranged </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: Start </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 100 </Text>
<Text style = {styles.walkthroughInstruction}> Peashooters are very useful, they will be your main source of defense against zombies. They will fire a pea if a zombie is in front of them. It is best to put one on each row. </Text>

<Text style = {styles.topicTitleText}>Sunflower</Text>

<Text style = {styles.walkthroughInstruction}> Type: Support </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: 1-1 </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 50 </Text>
<Text style = {styles.walkthroughInstruction}> Sunflowers are essential to every level, you need them to even hope of surviving. Overtime they will spawn 25 sun.  </Text>

<Text style = {styles.topicTitleText}>Cherry Bomb</Text>

<Text style = {styles.walkthroughInstruction}> Type: Insta-Kill </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: 1-2 </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 150 </Text>
<Text style = {styles.walkthroughInstruction}> Cherry Bombs explode as soon as they are planted, instantly destroying every zombie except Gargantuars. Use them if there are just too many zombies at once. </Text>

<Text style = {styles.topicTitleText}>Wall-nut</Text>

<Text style = {styles.walkthroughInstruction}> Type: Defense </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: 1-3 </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 50 </Text>
<Text style = {styles.walkthroughInstruction}> Wall-nuts can take a lot of hits from zombies, but they have a slow recharge and are only good in the earlier parts of the game. Put them on every row for the best effect. </Text>

<Text style = {styles.topicTitleText}>Potato Mine</Text>

<Text style = {styles.walkthroughInstruction}> Type: Insta-Kill </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: 1-5 </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 25 </Text>
<Text style = {styles.walkthroughInstruction}> Potato Mines take a while to grow, but once they fully grow, they will destroy any zombie that steps on them. Plant them right in front of your lawnmowers to make the best use of them. </Text>

<Text style = {styles.topicTitleText}>Snow Pea</Text>

<Text style = {styles.walkthroughInstruction}> Type: Long-ranged </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: 1-6 </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 175 </Text>
<Text style = {styles.walkthroughInstruction}> These function identically to Peashooters, except the peas they shoot will slow down zombies in addition to damaging them. </Text>

<Text style = {styles.topicTitleText}>Chomper</Text>

<Text style = {styles.walkthroughInstruction}> Type: Insta-Kill </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: 1-7 </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 150 </Text>
<Text style = {styles.walkthroughInstruction}> Chompers will eat zombies that are right in front of them, instantly killing them. Unfortunately they will take about 20 seconds or so to swallow the zombie before they can attack again. Put these right behind Wall-nuts to give an increased use.  </Text>

<Text style = {styles.topicTitleText}>Repeater</Text>

<Text style = {styles.walkthroughInstruction}> Type: Long-ranged </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: 1-8 </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 200 </Text>
<Text style = {styles.walkthroughInstruction}> These function identically to Peashooters, except now they will shoot two peas instead of one. Replace them with regular Peashooters once you can afford them. </Text>

<Text style = {styles.topicTitleText}>Puff-shroom</Text>

<Text style = {styles.walkthroughInstruction}> Type: Medium-ranged </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: 1-10 </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 0 </Text>
<Text style = {styles.walkthroughInstruction}> Puff-shrooms act similarly to Peashooters, but they have a decreased range. You can use them to pass time until you can afford Peashooters. They will be asleep during the day. </Text>

<Text style = {styles.topicTitleText}>Sun-shroom</Text>

<Text style = {styles.walkthroughInstruction}> Type: Support </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: 2-1 </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 25 </Text>
<Text style = {styles.walkthroughInstruction}> These act similarly to Sunflowers, but they will produce less sun until they grow to produce more sun. They will be asleep during the day.  </Text>

<Text style = {styles.topicTitleText}>Fume-shroom</Text>

<Text style = {styles.walkthroughInstruction}> Type: Long-ranged </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: 2-2 </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 75 </Text>
<Text style = {styles.walkthroughInstruction}> These act similarly to Puff-shrooms, but they have an increased range and can go through Screen-doors. They will be asleep during the day. </Text>

<Text style = {styles.topicTitleText}>Grave Buster</Text>

<Text style = {styles.walkthroughInstruction}> Type: Support </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: 2-3 </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 75 </Text>
<Text style = {styles.walkthroughInstruction}> These can only be placed on gravestones. They will destroy the gravestone in about 5 seconds.  </Text>

<Text style = {styles.topicTitleText}>Hypno-shroom</Text>

<Text style = {styles.walkthroughInstruction}> Type: Support </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: 2-5 </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 75 </Text>
<Text style = {styles.walkthroughInstruction}> These don't deal damage, but if a zombie chews on them they will be controlled. The zombie will turn around and attack other zombies. It is better to use them against powerful zombies like the football zombies. They will be asleep during the day.  </Text>

<Text style = {styles.topicTitleText}>Scaredy-shroom</Text>

<Text style = {styles.walkthroughInstruction}> Type: Long-ranged </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: 2-6 </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 25 </Text>
<Text style = {styles.walkthroughInstruction}> These mushrooms fire at long ranges, but if a zombie gets close to them they will hide and stop attacking. It is better to put them closer to the house than in the middle. They will be asleep during the day. </Text>

<Text style = {styles.topicTitleText}>Ice-shroom</Text>

<Text style = {styles.walkthroughInstruction}> Type: Support </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: 2-7 </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 75 </Text>
<Text style = {styles.walkthroughInstruction}> When placed, it will freeze all zombies that are currently on the screen for a few seconds. Use these to give yourself some breathing room. They will be asleep during the day.  </Text>


<Text style = {styles.topicTitleText}>Doom-shroom</Text>

<Text style = {styles.walkthroughInstruction}> Type: Insta-Kill </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: 2-8 </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 125 </Text>
<Text style = {styles.walkthroughInstruction}> These will explode as soon as they are planted. It has a high blast radius and destroys all zombies in the explosion. On the down-side, this will leave a crater that can't be planted on and will remain there for the rest of the level. They will be asleep during the day.  </Text>

<Text style = {styles.topicTitleText}>Lily Pad</Text>

<Text style = {styles.walkthroughInstruction}> Type: Support </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: 2-10 </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 25 </Text>
<Text style = {styles.walkthroughInstruction}> This can only be placed on water, it allows you to plant plants that can't be on water to be on the water tiles. Certain zombies can swim underneath them. These can also serve as a little bit of defense.  </Text>

<Text style = {styles.topicTitleText}>Squash</Text>

<Text style = {styles.walkthroughInstruction}> Type: Insta-Kill </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: 3-1 </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 50 </Text>
<Text style = {styles.walkthroughInstruction}> These will jump up and squash zombies if one comes too close to them. use them against strong zombies like Football Zombies or place them behind Wall-nuts to extend their use.  </Text>

<Text style = {styles.topicTitleText}>Threepeater</Text>

<Text style = {styles.walkthroughInstruction}> Type: Long-ranged </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: 3-2 </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 325 </Text>
<Text style = {styles.walkthroughInstruction}> These function identically to Peashooters, except they will fire peas on thre rows. The row in front of them, the row above them, and the row below them. These are very expensive so you need to tide over with Peashooters and Repeaters until you think you can afford them. </Text>

<Text style = {styles.topicTitleText}>Tangle Kelp</Text>

<Text style = {styles.walkthroughInstruction}> Type: Insta-Kill </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: 3-3 </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 25 </Text>
<Text style = {styles.walkthroughInstruction}> These can only be placed in water, they will pull down zombies that move on them down into the water, killing them instantly.  </Text>

<Text style = {styles.topicTitleText}>Jalapeno</Text>

<Text style = {styles.walkthroughInstruction}> Type: Insta-Kill </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: 3-5 </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 125 </Text>
<Text style = {styles.walkthroughInstruction}> These will explode the moment they are planted. They will leave a trail of fire on the row they are on, killing zombies instantly. This fire will also melt ice that is on that row.  </Text>

<Text style = {styles.topicTitleText}>Spikeweed</Text>

<Text style = {styles.walkthroughInstruction}> Type: Support </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: 3-6 </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 100 </Text>
<Text style = {styles.walkthroughInstruction}> These will deal damage to zombies that step on them overtime, and they will also pop tires.  </Text>

<Text style = {styles.topicTitleText}>Torchwood</Text>

<Text style = {styles.walkthroughInstruction}> Type: Support </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: 3-7 </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 175 </Text>
<Text style = {styles.walkthroughInstruction}> These will turn peas that pass through them into fire peas, which deal more damage. What more is that if a snow pea passes through it, it will melt into a regular pea. Put these in front of peashooters for them to work.  </Text>

<Text style = {styles.topicTitleText}>Tall-nut</Text>

<Text style = {styles.walkthroughInstruction}> Type: Defense </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: 3-8 </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 125 </Text>
<Text style = {styles.walkthroughInstruction}> Tall-nuts have twice as much health as a Wall-nut, and they can't be pole-vaulted over. </Text>

<Text style = {styles.topicTitleText}>Sea-shroom</Text>

<Text style = {styles.walkthroughInstruction}> Type: Medium-ranged </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: 3-10 </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 0 </Text>
<Text style = {styles.walkthroughInstruction}> These can only be placed on water. Sea-shrooms act identically to Puff-shrooms in every way besides the fact that they are water plants. They will be asleep during the day. </Text>

<Text style = {styles.topicTitleText}>Plantern</Text>

<Text style = {styles.walkthroughInstruction}> Type: Support </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: 4-1 </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 25 </Text>
<Text style = {styles.walkthroughInstruction}> These will light up the area upon use for a short period of time. This will allow you to see through fog. After they are done lighting up the area they will disappear.  </Text>

<Text style = {styles.topicTitleText}>Cactus</Text>

<Text style = {styles.walkthroughInstruction}> Type: Long-ranged </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: 4-2 </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 125 </Text>
<Text style = {styles.walkthroughInstruction}> Cacti will shoot spines at both ground targets and airborn targets. These spines can pop balloons. </Text>

<Text style = {styles.topicTitleText}>Blover</Text>

<Text style = {styles.walkthroughInstruction}> Type: Support </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: 4-3 </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 100 </Text>
<Text style = {styles.walkthroughInstruction}> When placed, they will blow a strong wind that blows away airborn targets and fog. After that they will disappear.  </Text>

<Text style = {styles.topicTitleText}>Split Pea</Text>

<Text style = {styles.walkthroughInstruction}> Type: Long-ranged </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: 4-5 </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 125 </Text>
<Text style = {styles.walkthroughInstruction}> These act similarly to both Peashooters and Repeaters. They fire peas backwards and forwards. From the front they act like a Peashooter, but from the back they act like a Repeater, shooting two peas at once. </Text>

<Text style = {styles.topicTitleText}>Starfruit</Text>

<Text style = {styles.walkthroughInstruction}> Type: Long-ranged </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: 4-6 </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 125 </Text>
<Text style = {styles.walkthroughInstruction}> These will shoot stars in 5 directions, you can judge this from what direction they're pointing to from each of their points. Or just watch them attack. </Text>

<Text style = {styles.topicTitleText}>Pumpkin</Text>

<Text style = {styles.walkthroughInstruction}> Type: Defense </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: 5-7 </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 125 </Text>
<Text style = {styles.walkthroughInstruction}> Pumpkins can be placed over plants to put the plant in the pumpkin. So now if the plant gets attacked, the pumpkin will take the damage. They are best used on Tall-nuts. </Text>

<Text style = {styles.topicTitleText}>Magnet-shroom</Text>

<Text style = {styles.walkthroughInstruction}> Type: Support </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: 4-8 </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 100 </Text>
<Text style = {styles.walkthroughInstruction}> These will pull metal objects towards them, like buckets, screen doors, football helmets, ladders. And they will be free from the item after a while. They will be asleep during the day.  </Text>

<Text style = {styles.topicTitleText}>Cabbage-pult</Text>

<Text style = {styles.walkthroughInstruction}> Type: Long-ranged </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: 4-10 </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 100 </Text>
<Text style = {styles.walkthroughInstruction}> These will throw little pieces of cabbage at zombies, they will be at an arc so slopes aren't a problem for them. </Text>

<Text style = {styles.topicTitleText}>Flower Pot</Text>

<Text style = {styles.walkthroughInstruction}> Type: Support </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: 5-1 </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 25 </Text>
<Text style = {styles.walkthroughInstruction}> These when planted will allow you to place plants on the roof. Roof levels tend to start off with many of these already placed. These are useless on non-roof levels.  </Text>

<Text style = {styles.topicTitleText}>Kernel-pult</Text>

<Text style = {styles.walkthroughInstruction}> Type: Long-ranged </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: 5-2 </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 100 </Text>
<Text style = {styles.walkthroughInstruction}> These will throw little pieces of corn at zombies, sometimes they will throw big pieces of corn which stuns zombies for a short while. They will be at an arc so slopes aren't a problem for them. </Text>

<Text style = {styles.topicTitleText}>Coffee Bean</Text>

<Text style = {styles.walkthroughInstruction}> Type: Support </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: 5-3 </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 75 </Text>
<Text style = {styles.walkthroughInstruction}> These can only be planted on mushrooms during the day. When planted, it will wake up the mushroom permanently. Allowing them to be used on daytime levels. After that the mushroom behaves as normal.  </Text>

<Text style = {styles.topicTitleText}>Garlic</Text>

<Text style = {styles.walkthroughInstruction}> Type: Support </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: 5-5 </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 50 </Text>
<Text style = {styles.walkthroughInstruction}> When a zombie chews on a Garlic, they will change to a different row, so you can use garlics to direct zombies to a specific row.  </Text>

<Text style = {styles.topicTitleText}>Umbrella Leaf</Text>

<Text style = {styles.walkthroughInstruction}> Type: Support </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: 5-6 </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 100 </Text>
<Text style = {styles.walkthroughInstruction}> This will protect nearby plants from bungee zombies and catapults.  </Text>

<Text style = {styles.topicTitleText}>Marigold</Text>

<Text style = {styles.walkthroughInstruction}> Type: Support </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: 5-7 </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 50 </Text>
<Text style = {styles.walkthroughInstruction}> These act similarly to Sunflowers, but instead of sun they produce coins. Which is the currency in the game. However they are slow at producing them though.  </Text>

<Text style = {styles.topicTitleText}>Melon-pult</Text>

<Text style = {styles.walkthroughInstruction}> Type: Long-ranged </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: 5-8 </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 300 </Text>
<Text style = {styles.walkthroughInstruction}> These will throw large watermelons at zombies, this can actually damage more than one zombie at a time. They will be at an arc so slopes aren't a problem for them. </Text>

<Text style = {styles.topicTitleText}>Gatling Pea</Text>

<Text style = {styles.walkthroughInstruction}> Type: Long-ranged </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: Crazy Dave's Twiddydinkies </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 250 </Text>
<Text style = {styles.walkthroughInstruction}> They can only be placed on Repeaters, they will upgrade them into the Gatling Pea, which constantly fire peas at zombies. Combining this with a Torchwood has devastating effects. </Text>

<Text style = {styles.topicTitleText}>Twin Sunflower</Text>

<Text style = {styles.walkthroughInstruction}> Type: Support </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: Crazy Dave's Twiddydinkies </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 150 </Text>
<Text style = {styles.walkthroughInstruction}> These can only be placed on Sunflowers, they will upgrade them into the Twin Sunflower, which produces two sun instead of one at a time.  </Text>

<Text style = {styles.topicTitleText}>Gloom-shroom</Text>

<Text style = {styles.walkthroughInstruction}> Type: Long-ranged </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: Crazy Dave's Twiddydinkies </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 150 </Text>
<Text style = {styles.walkthroughInstruction}> These can only be placed on Fume-shrooms, they will upgrade them into the Gloom-shroom, which can release fumes all around them. They will be asleep during the day. </Text>

<Text style = {styles.topicTitleText}>Cattail</Text>

<Text style = {styles.walkthroughInstruction}> Type: Long-ranged </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: Crazy Dave's Twiddydinkies </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 225 </Text>
<Text style = {styles.walkthroughInstruction}> These can only be placed on Lily Pads, they will upgrade them into the Cattail, which fires spines like a cactus at any row, homing in on the closest zombie. </Text>

<Text style = {styles.topicTitleText}>Winter Melon</Text>

<Text style = {styles.walkthroughInstruction}> Type: Long-ranged </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: Crazy Dave's Twiddydinkies </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 200 </Text>
<Text style = {styles.walkthroughInstruction}> These can only be placed on Melon-pults, they will upgrade them into the Winter Melon, which acts the same with the added effect of them slowing down zombies. </Text>

<Text style = {styles.topicTitleText}>Gold Magnet</Text>

<Text style = {styles.walkthroughInstruction}> Type: Support </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: Crazy Dave's Twiddydinkies </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 50 </Text>
<Text style = {styles.walkthroughInstruction}> These can only be placed on Magnet-shrooms, they will upgrade them into the Gold Magnet, which can pull in coins overime. As it is not a mushroom, you do not need a Coffee Bean.  </Text>

<Text style = {styles.topicTitleText}>Spikerock</Text>

<Text style = {styles.walkthroughInstruction}> Type: Support </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: Crazy Dave's Twiddydinkies </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 125 </Text>
<Text style = {styles.walkthroughInstruction}> These can only be placed on Spikeweeds, they will upgrade them into the Spikerock, which deals more damage to zombies that walk on it and it can pop multiple tires.  </Text>

<Text style = {styles.topicTitleText}>Cob Cannon</Text>

<Text style = {styles.walkthroughInstruction}> Type: Insta-Kill </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: Crazy Dave's Twiddydinkies </Text>
<Text style = {styles.walkthroughInstruction}> Sun: 500 </Text>
<Text style = {styles.walkthroughInstruction}> These can only be placed on two Kernel-pults that have on right in front of the other horizontaly. This will upgrade them into a Cob Cannon, which when clicked on will fire a corn cob at the zombies, exploding in a 3x3 radius. After that it will take over half a minute to reload.  </Text>

<Text style = {styles.topicTitleText}>Imitater</Text>

<Text style = {styles.walkthroughInstruction}> Type: All </Text>
<Text style = {styles.walkthroughInstruction}> Obtained: Crazy Dave's Twiddydinkies </Text>
<Text style = {styles.walkthroughInstruction}> Sun: Same as imitated plant </Text>
<Text style = {styles.walkthroughInstruction}> Before the round, you can configure the Imitater to copy one of your already unlocked plants. It will copy the look, sun cost, and function of the selected plant. So you can use it to go around the cooldown of the plant.  </Text>

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
  gameScreen: {
    alignItems: 'center',
  },
  gameTitleText:{
    color:'black',
    fontFamily:'bold',
    fontSize:20
  },
  topicTitleText:{
    color:'black',
    fontFamily:'bold',
    fontSize:20,
    marginTop:20
  },
  walkthroughInstruction:{
    color:'black',
    marginTop:10,
    alignSelf:'center'
  },
});
