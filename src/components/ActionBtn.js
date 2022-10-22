import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'


const windowWidth = Dimensions.get('window').width


const ActionBtn = ({onPress}) => {

  return (
    <TouchableOpacity 
        style={[styles.ABtn, styles.shadowProps]}
        onPress={onPress}
    >
      <Ionicons
        name='videocam'
        size={25}
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
        width: 65,
        height: 65,
        backgroundColor: '#7895B2',
        justifyContent: 'center',
        bottom: 20,
        left: windowWidth-80,
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