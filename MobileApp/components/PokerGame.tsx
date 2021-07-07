import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from './Themed';
import { Image } from 'react-native';

const Stack = createStackNavigator();

export default function LandingPage({ path }: { path: string }) {
  return (
    <View >
      <View style={styles.hand}>
        <Image
          style={styles.card}
          source={require('../assets/images/deckBack.jpeg')}
        ></Image>
        <Image
          style={styles.card}
          source={require('../assets/images/deckBack.jpeg')}
        ></Image>
      </View>

      <Text style={styles.money}>AI Money: 500</Text>

      <View style={styles.table}>
        <Image
          style={styles.card}
          source={require('../assets/images/deckBack.jpeg')}
        ></Image>
        <Image
          style={styles.card}
          source={require('../assets/images/deckBack.jpeg')}
        ></Image>
        <Image
          style={styles.card}
          source={require('../assets/images/deckBack.jpeg')}
        ></Image>
        <Image
          style={styles.card}
          source={require('../assets/images/deckBack.jpeg')}
        ></Image>
        <Image
          style={styles.card}
          source={require('../assets/images/deckBack.jpeg')}
        ></Image>
      </View>

      <View style={styles.hand}>
        <Image
          style={styles.card}
          source={require('../assets/images/deckBack.jpeg')}
        ></Image>
        <Image
          style={styles.card}
          source={require('../assets/images/deckBack.jpeg')}
        ></Image>
      </View>
      <Text style={styles.money}>AI Money: 500</Text>
      <View style={styles.controlsContainer}>
        {/* <button style={styles.button}></button>
     <button style={styles.button}></button>
     <button style={styles.button}></button> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {

  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    marginRight: 5,
    marginLeft: 5,
    height: 90,
    width: 60,
  },
  table: {
    backgroundColor: 'green',
    borderColor: 'black',
    padding: 25,
    borderWidth: 3,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  money: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '700',
  },
  hand: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  par: {
    marginTop: 25,
    fontWeight: "800",
    textAlign: 'center',
    marginLeft: 60,
    marginRight: 60,
    fontSize: 24,
  },
  image: {
    marginTop: 100,
    width: 300,
    height: 300,
    borderRadius: 50,
  }
});
