import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'


const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height


const ActionBtn = ({onPress}) => {

  return (
    <TouchableOpacity 
        style={[styles.ABtn, styles.shadowProps]}
        onPress={onPress}
    >
      <SimpleLineIcons
        name='screen-smartphone'
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
        backgroundColor: '#1D5DFF',
        justifyContent: 'center',
        bottom: windowHeight-780,
        left: windowWidth-90,
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