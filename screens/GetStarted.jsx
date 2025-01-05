import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const GetStarted = () => {
  return (
    <SafeAreaView style= {styles.safeAreaView}>
      <Text>GetStarted</Text>
    </SafeAreaView>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
    safeAreaView:{
        display:'flex',
        justifyContent:'center',
        alignContent: 'center',
        backgroundColor:'red'
    }
});
