import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import Cart from '../../screens/Cart';
import Search from '../../Search';
import Profile from '../../screens/Profile';
import NavHeader from '../../CustomComponents/NavHeader';
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    elevation: 10,
                    position: 'absolute',
                    bottom: 2.5,
                    alignItems: "center",
                    justifyContent: 'center'
                },
                tabBarShowLabel: false
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ justifyContent: "center", alignItems: "center", opacity: focused ? 1 : 0.6 }}>
                            <Image
                                source={require('../../../assets/icons/home1.png')}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: focused ? '#F66754' : null,
                                }}
                            />
                            <Text style={{
                                fontSize: 11,
                                fontWeight: "500",
                                color: focused ? '#F66754' : null
                            }}>
                                NEAR ME
                            </Text>
                        </View>
                    ),
                    tabBarShowLabel: false,
                    header: (props) => <NavHeader  />,
                }}
            />
            <Tab.Screen name="Search" component={Search} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: "center", alignItems: "center", opacity: focused ? 1 : 0.6 }}>
                        <Image
                            source={require('../../../assets/icons/search1.png')}
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: focused ? '#F66754' : null,
                            }}
                        />
                        <Text style={{
                            fontSize: 11,
                            fontWeight: "500",
                            color: focused ? '#F66754' : null
                        }}>
                            SEARCH
                        </Text>
                    </View>
                ),
                tabBarShowLabel: false,
                headerShown: false
            }} />
            <Tab.Screen name="Cart" component={Cart} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: "center", alignItems: "center", opacity: focused ? 1 : 1 }}>
                        <Image
                            source={require('../../../assets/icons/shopping-bag.png')}
                            style={{
                                height: 23,
                                width: 23,
                                tintColor: focused ? '#F66754' : null,
                                opacity: focused ? 1 : 0.6
                            }}
                        />
                        <Text style={{
                            fontSize: 11,
                            fontWeight: "500",
                            color: focused ? '#F66754' : null,
                            opacity: focused ? 1 : 0.6
                        }}>CART</Text>
                        <View
                            style={{
                                position: 'absolute',
                                top: -3,
                                right: -1,
                                backgroundColor: '#F66754',
                                borderRadius: 10,
                                width: 15,
                                justifyContent: 'center',
                                alignItems: 'center',
                                zIndex: 12
                            }}
                        >
                            <Text style={{ color: 'white', fontSize: 10 }}>5</Text>
                        </View>

                    </View>
                ),
                tabBarShowLabel: false,
                headerShown: false
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: "center", alignItems: "center", opacity: focused ? 1 : 0.6 }}>
                        <Image
                            source={require('../../../assets/icons/profile1-removebg-preview.png')}
                            style={{
                                height: 23,
                                width: 23,
                                tintColor: focused ? '#F66754' : null,
                            }}
                        />
                        <Text style={{
                            fontSize: 11,
                            fontWeight: "500",
                            color: focused ? '#F66754' : null
                        }}>
                            ACCOUNT
                        </Text>
                    </View>
                ),
                tabBarShowLabel: false,
                headerShown: false
            }} />
        </Tab.Navigator>
    )
}

export default BottomTabs
