import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useCallback, useRef, useLayoutEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

// --- Components ---
import ActionBtn from '../../components/ActionBtn'
import BottomSheet from '../../components/BottomSheet'


const Home = ({navigation}) => {

  //------ header right component redirect to Profile Screen -------------------
  useLayoutEffect(() => {
    navigation.setOptions({
        headerRight: () => (
            <View
                style={{
                    marginRight: 15
                }}
            >
                <TouchableOpacity
                    style={styles.touchbutton}
                    onPress={() => navigation.navigate('profilescreen')}
                >
                    <Text style={styles.cTitle}> P </Text>
                </TouchableOpacity>
            </View>
        ),
    });
  }, [navigation])

  const ref = useRef(null)
  const onPress = useCallback(() => {
    const isActive = ref.current.isActive()
    if(isActive){
      ref.current.scrollTo(0)
    }else{
      ref.current.scrollTo(-300)
    }
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={styles.container}>
        <ActionBtn 
            onPress = {onPress}
        />
        {/* <TouchableOpacity style={styles.button} onPress={onPress}/> */}
        <BottomSheet 
          ref = {ref}
        />
      </View>
      
    </GestureHandlerRootView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    height: 50,
    borderRadius: 25,
    aspectRatio: 1,
    backgroundColor: 'black',
    opacity: 0.6
  },
  touchbutton: {
    width: 32,
    height: 32,
    backgroundColor: '#C2E5FF',
    borderRadius: 35,
  },
  cTitle: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 17,
    fontWeight: 'bold',
    padding: 4
},
})