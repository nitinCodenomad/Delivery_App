import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import ForgotPassword from '../screens/Forgot';
const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
        <Stack.Navigator initialRouteName="Signup">
            <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />

        </Stack.Navigator>
    );
}
export default Navigation