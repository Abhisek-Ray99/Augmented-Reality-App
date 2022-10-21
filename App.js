import 'react-native-gesture-handler';
import { Text, StyleSheet, View, StatusBar } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';

import Navigation from './src/navigation/Navigation'



export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar
          backgroundColor={"#1D5DFF"}
          barStyle='light-content'
          animated={true}
        />
        <Navigation/>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({

})