import React from 'react';
import { SafeAreaView,StyleSheet, Text, View } from 'react-native';
import {NavigationContainer}from '@react-navigation/native'
import Stack from './routes/Stack';
export default props => (
  <SafeAreaView style={{flex:1}}>
    <NavigationContainer>
      <Stack/>
    </NavigationContainer>
  </SafeAreaView>
  
)


