import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import Home from '../screens/home/Index'
import Profile from '../screens/profile/Index'
import { windowHeight } from '../utils/Dimensions';

// ------------ <>created a Navigator for Home stack ------------
const HomeStack = createStackNavigator();
// -------------</ >---------------

//------------  Home Tab Stack ----------------
export default function Home_Screen(){
    return(
        <HomeStack.Navigator>
            {/* Home Screen */}
            <HomeStack.Screen 
                name="Feed"
                component={Home}
                options={{
                    headerStyle: {
                        height: windowHeight / 8,
                        backgroundColor: '#1D5DFF'
                    },
                    headerTintColor: '#fff'
                }}
            />
            {/* Profile Screen */}
            <HomeStack.Screen 
                name="profilescreen" 
                component={Profile}
                // options={{headerShown: false}} 
            />
        </HomeStack.Navigator>
    )
}

