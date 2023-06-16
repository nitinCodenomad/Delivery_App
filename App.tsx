import { View, Text } from 'react-native'
import React from 'react'
import HorizontalList from './src/horizontalList'
import Home from './src/screens/Home'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabs from './src/Navigation/Bottomtabs'

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  )
}

export default App
