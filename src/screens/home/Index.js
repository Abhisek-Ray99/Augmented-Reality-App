import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useCallback, useRef, useLayoutEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

// --- Components ---
import ActionBtn from '../../components/ActionBtn'
import BottomSheet from '../../components/BottomSheet'
import { windowHeight, windowWidth } from '../../utils/Dimensions'


const Home = ({navigation}) => {

  //------ header right component redirect to Profile Screen -------------------
  useLayoutEffect(() => {
    navigation.setOptions({
        headerRight: () => (
            <View
                style={{
                    marginRight: 15,
                    width: windowWidth / 7,
                    height: windowHeight / 16,
                    justifyContent: 'center',
                    alignItems: 'center',
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
  touchbutton: {
    width: windowWidth / 10,
    height: windowHeight / 20,
    backgroundColor: '#C2E5FF',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cTitle: {
    textAlign: 'center',
    color: '#000000',
    fontSize: windowHeight / 42,
    fontWeight: 'bold',
  },
})