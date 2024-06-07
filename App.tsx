import { View, Text } from 'react-native'
import React from 'react'
import Home from './src/screens/HomeScreen'
import Login from './src/screens/Login'
const App = () => {
  return (
    <View>
      {/* <Home/> */}
      <Login/>
    </View>
  )
}

export default App

// // Child component
// // import React from 'react';

// let data = [1,3,4,5,6,11];
// let maxNum = data[0];
// data.forEach((item)=>{
// if(item < maxNum){
//   maxNum = item
// }
// })
// console.log(maxNum)

// function checkPalindrome(val) {
//   let data = val.split('').reverse().join('')
//   if(data == val){
//     console.log('true')
//   }else{
//     console.log('false')
//   }
// }
// checkPalindrome('niti2n');

