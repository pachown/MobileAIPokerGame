import * as React from 'react';
import { StyleSheet } from 'react-native';

import LandingPage from '../components/LandingPage';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Poker AI App</Text>
      <View style={styles.separator} lightColor="black" darkColor="rgba(255,255,255,0.1)" />
      <LandingPage path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#228B22',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: -300,
  },
  separator: {
    color: 'black',
    marginVertical: 80,
    height: 1,
    width: '80%',
  },
});
