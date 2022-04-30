import { View, Text } from 'react-native'
import React from 'react'
import Navigation from './Route/Navigation'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from './screens/SplashScreen'
import DrawerNav from './Route/drawer'
import SearchScreen from './SearchScreen/SearchScreen'
import Trending from './Test'
import PopularSport from './Sports/SportList2'



const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown:false}}
      >
        <Stack.Screen name='SplashScreen' component={SplashScreen} />
        <Stack.Screen name='DNav' component={DrawerNav} />
        <Stack.Screen name='Modal' component={SearchScreen} />
        <Stack.Screen name='PopularSport' component={PopularSport} />
      </Stack.Navigator> 
      </NavigationContainer>
   
  )
}