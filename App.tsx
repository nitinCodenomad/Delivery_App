import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SignUp from './src/screens/Signup'
import Login from './src/screens/Login'
import ForgotPassword from './src/screens/Forgot'
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './src/Navigation'
const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  )
}
export default App
