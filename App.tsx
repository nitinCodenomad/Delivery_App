import React from 'react'
import { Text, View } from 'react-native'
import Profile from './src/screens/Profile'
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './src/Navigation/stack'
import Order from './src/screens/YourOrder/Order'
const App = () => {
  return (
    <View>
      <Order />
    </View>
  )
}
export default App
