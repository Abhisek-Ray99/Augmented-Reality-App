import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react';
import React from 'react'
import {
  ViroARScene,
  ViroScene,
  ViroText,
  ViroARSceneNavigator,
  ViroButton,
  Viro360Image,
} from '@viro-community/react-viro';

const HelloWorldSceneAR = () => {

  return (
    <ViroARScene>
      <Viro360Image source={require('../../assets/paul-szewczyk-GfXqtWmiuDI-unsplash.jpg')} />
      <ViroText text="Hello World" width={2} height={2} position={[0,0,-2]} />
    </ViroARScene>
  );
};

const AddVideo = () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}

    >
      
    </ViroARSceneNavigator>
    
  )
}

export default AddVideo

const styles = StyleSheet.create({
  f1: {
    flex: 1,
    height: 23,
    width: 80
  },
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
})