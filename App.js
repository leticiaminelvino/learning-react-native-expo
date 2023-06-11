import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Cesta from "./src/telas/Cesta" //nao precisa dos cochetes pq ja exportamos no outro arquivo

export default function App() {
  return (
    <View style={styles.container}>
      <Cesta />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
