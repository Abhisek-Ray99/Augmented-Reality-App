import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Entypo from 'react-native-vector-icons/Entypo'
import { windowHeight } from '../utils/Dimensions'

const Button = ({name, IconName}) => {
  return (
    <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>{name}</Text>
        <Entypo style={styles.btnIcon} name={IconName} size={14}/>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#000',
        height: windowHeight / 13,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 15,
        marginVertical: 10,
        flexDirection: 'row'
    },
    btnText: {
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 16
    },
    btnIcon: {
        color: '#fff',
        left: 12
    }
})