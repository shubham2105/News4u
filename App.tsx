import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './navigation';

const Homescreen = () => {
  return (
    <NavigationContainer>
      <AppNavigation/>
    </NavigationContainer>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
