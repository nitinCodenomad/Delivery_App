import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Signup from '../../screens/Signup';
import Login from '../../screens/Login';
import ForgotPassword from '../../screens/Forgot';
import Profile from '../../screens/Profile';
import Order from '../../screens/YourOrder';
import Splash from '../../screens/Splash';
import UserInfo from '../../screens/UserInfo';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import BottomTabs from '../Bottomtabs';
import SpecificMenu from '../../screens/SpecificMenu';
import Payment from '../../screens/Payment';
import NavHeader from '../../CustomComponents/NavHeader';
import Maps from '../../screens/Maps';
const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            {/* <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} /> */}
            {/* <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} /> */}
            {/* <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} /> */}
            <Stack.Screen name="Home" component={BottomTabs}
                options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name="Payment" component={Payment} options={{ headerShown: false }} />
            <Stack.Screen name="Specificmenu" component={SpecificMenu} options={{ headerShown: false }} />
            <Stack.Screen name="UserInfo" component={UserInfo} options={{ headerShown: false }} />
            <Stack.Screen name="Maps" component={Maps} options={{ headerShown: false }} />
            <Stack.Screen name="Specific" component={SpecificMenu} options={{ headerShown: false }} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
            <Stack.Screen name="Order" component={Order} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}
export default Navigation