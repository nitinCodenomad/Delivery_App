import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Restaurents from '../../screens/CustomerSearch/Restaurents'
import Dishes from '../../screens/CustomerSearch/Dishes'
import { NavigationContainer } from '@react-navigation/native/lib/typescript/src'
const Tab = createMaterialTopTabNavigator()
const Tabs = () => {
  return (
    <Tab.Navigator
      options={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }} >
      <Tab.Screen name="Restaurants" component={Restaurents} options={{ headerShown: false }} />
      <Tab.Screen name="Dishes" component={Dishes} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}

export default Tabs
