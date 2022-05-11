import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Search from './Components/Search';
import Search2 from './Components/Search2';

export default function App() {
  return (
  <View style ={styles.main_container}>
    <Search2 />
  </View>
  );
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20,
  },
})

