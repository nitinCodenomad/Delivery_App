import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import Cart from '../../screens/Cart';
import Search from '../../Search';
import Index from '../../screens/Profile';
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: {}
        }}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: 'center', marginTop: 6 }}>
                        <Image source={require('../../../assets/icons/home.png')}
                            style={{ height: 25, width: 25, tintColor: focused ? 'black' : "" }}
                        />
                    </View>
                ),
                tabBarLabel: () => (
                    <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                        Home
                    </Text>
                ),
                headerShown: false
            }} />
            <Tab.Screen name="Search" component={Search} options={{ headerShown: false }} />
            <Tab.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={Index} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

export default BottomTabs
