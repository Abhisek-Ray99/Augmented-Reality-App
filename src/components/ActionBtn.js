import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { windowHeight, windowWidth } from '../utils/Dimensions'



const ActionBtn = ({onPress}) => {

  return (
    <TouchableOpacity 
        style={[styles.ABtn, styles.shadowProps]}
        onPress={onPress}
    >
      <SimpleLineIcons
        name='screen-smartphone'
        size={windowWidth / 14}
        color="#fff"
        style={styles.Actionstyle}
      />
    </TouchableOpacity>
  )
}

export default ActionBtn

const styles = StyleSheet.create({
    ABtn: {
        position: 'absolute',
        width: windowWidth / 5.5,
        height: windowHeight / 11.5,
        backgroundColor: '#1D5DFF',
        justifyContent: 'center',
        bottom: 30,
        right: 25,
        alignItems: 'center',
        borderRadius: 35,
    },
    Actionstyle: {
        
    },
    shadowProps: {
        elevation: 2,
        shadowColor: '#000000'
    }
})  