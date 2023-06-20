import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
const NavHeader = (props) => {
    onClick = () => {
        props.hide();
    }
    return (
        <View style={{ height: 60, width: "100%", flexDirection: 'row', justifyContent: "space-between", alignItems: "center", paddingHorizontal: 10, backgroundColor: "white", }}>
            <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                <View style={{ width: 32, height: 32, borderRadius: 16, alignItems: "center", backgroundColor: 'white', elevation: 4, justifyContent: "center", }}>
                    <Image source={require('../../assets/icons/placeholder.png')} style={{ width: 15, height: 15, tintColor: "#F66754" }} />
                </View>
                <TouchableOpacity>
                    <View style={{ marginLeft: 15 }}>
                        <Text style={{ color: "black", fontSize: 16.5, fontWeight: "600" }}>
                            Home
                        </Text>
                        <Text style={{ color: 'black', fontSize: 13 }}>
                            Location
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ width: 32, height: 32, borderRadius: 16, alignItems: "center", backgroundColor: 'white', elevation: 4, justifyContent: "center", marginRight: 10 }}>
                <TouchableOpacity>
                    <Image source={require('../../assets/icons/filter.png')} style={{ width: 20, height: 20, tintColor: "#F66754" }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default NavHeader