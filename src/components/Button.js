import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Button = ({name}) => {
  return (
    <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>{name}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#000',
        height: 40,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 15,
        marginVertical: 10
    },
    btnText: {
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 14
    }
})