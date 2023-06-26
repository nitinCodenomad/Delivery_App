import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'
const ManageAddress = ({ navigation }) => {
    return (
        <View style={{}}>
            <View style={styles.viewWithItem}>
                <View style={{ flexDirection: 'row', backgroundColor: "white", elevation: 0.6, paddingVertical: 10, paddingHorizontal: 10 }}>
                    <Image source={require('../../../assets/icons/home1.png')} style={styles.iconSize} />
                    <View style={{ paddingHorizontal: 10, width: '70%' }}>
                        <Text style={{ fontSize: 16.5, color: "black" }}>Home </Text>
                        <Text style={{ fontSize: 12, color: "black" }}>Address</Text>
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <Text style={{ color: '#F66754', fontSize: 15, fontWeight: "700" }}>Edit</Text>
                            <Text style={{ color: '#F66754', fontSize: 15, fontWeight: "700", marginLeft: 30 }}>Delete</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.viewWithItem}>
                <View style={{ flexDirection: 'row', backgroundColor: "white", elevation: 0.6, paddingVertical: 10, paddingHorizontal: 10 }}>
                    <Image source={require('../../../assets/icons/portfolio.png')} style={styles.iconSize} />
                    <View style={{ paddingHorizontal: 10, width: '70%' }}>
                        <Text style={{ fontSize: 16.5, color: "black" }}>Work</Text>
                        <Text style={{ fontSize: 12, color: "black" }}>Address</Text>
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Maps')}>
                                <Text style={{ color: '#F66754', fontSize: 15, fontWeight: "700" }}>Edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{ color: '#F66754', fontSize: 15, fontWeight: "700", marginLeft: 30 }}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Maps')}>
                <View style={{ backgroundColor: "#F66754", width: "95%", height: 45, justifyContent: "center", borderRadius: 10, alignSelf: "center", marginTop: 40 }}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: "500", alignSelf: "center" }}>
                        Add New Address
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default ManageAddress;