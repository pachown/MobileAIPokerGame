import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from './Themed';
import { Image } from 'react-native';

const Stack = createStackNavigator();

export default function LandingPage({ path }: { path: string }) {
  return (
  <View >
    <Text style={styles.par}>Welcome to my Poker App</Text>
    <Text style={styles.par}>Play against the AI and have some fun!</Text>
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/images/homeImage.jpeg')}
      >
      </Image>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
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
