import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Order = () => {
    return (
        <View style={styles.mainView}>
            <View style={styles.headerView}>
                <TouchableOpacity>
                    <View style={styles.iconContainer}>
                        <Image source={require('../../../assets/icons/back1.png')} style={styles.iconSize} />
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <View style={{ flexDirection: "row", alignItems: "center", borderRadius: 10, elevation: 10, backgroundColor: "white", marginTop: 16 }}>
                    <Image source={require('../../../assets/icons/search-interface-symbol.png')} style={{ ...styles.foodOrderIcon, marginLeft: 9, marginRight: 15, tintColor: '#F66754' }} />
                    <TextInput
                        placeholder='Search....'
                        style={{ width: "80%", fontWeight: "300", fontSize: 16 }} />
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 10, alignSelf: "flex-start" }}>
                    <Text style={{
                        fontSize: 18, fontWeight: "bold",
                        textAlign: "center",
                        // marginBottom: 14,
                        marginTop: 30
                    }}>
                        Order History
                    </Text>
                </View>
            </View>
            <View>
                <View style={styles.ViewWithItem} >
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require('../../../assets/images/shop.jpeg')} style={{ height: 70, width: 110, borderRadius: 7, marginLeft: 7,alignSelf:"center",marginRigt:10 }} />
                        <View style={{ alignSelf: "center",marginLeft:8 }}>
                            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                                Punjabi Chulla
                            </Text>
                            <Text style={{fontSize:13}}>
                                VIP Road, Zirakpur
                            </Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', }}>
                                June 2 at 3:40 pm
                            </Text>
                        </View>
                    </View>
                    <View style={{alignItems:'center',justifyContent:"center",marginRight:8}}>
                        
                        <Text style={{color:"#F66754",fontWeight:'bold',fontSize:13}}>
                            $40.02
                        </Text>
                        <Text style={{ marginRight: 1, backgroundColor: "#D3D3D3", padding: 3, opacity: 0.7, borderRadius: 4, marginTop: 10,fontSize:12,color:"grey"}}>
                            In process
                        </Text>
                    </View>
                </View>

            </View>
            <View>
                <View style={styles.ViewWithItem} >
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require('../../../assets/images/shop.jpeg')} style={{ height: 70, width: 110, borderRadius: 7, marginLeft: 7,alignSelf:"center",marginRigt:10 }} />
                        <View style={{ alignSelf: "center",marginLeft:8 }}>
                            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                                Punjabi Chulla
                            </Text>
                            <Text style={{fontSize:13}}>
                                VIP Road, Zirakpur
                            </Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', }}>
                                June 2 at 3:40 pm
                            </Text>
                        </View>
                    </View>
                    <View style={{alignItems:'center',justifyContent:"center",marginRight:8}}>
                        
                        <Text style={{color:"#F66754",fontWeight:'bold',fontSize:13}}>
                            $40.02
                        </Text>
                        <Text style={{ marginRight: 1, backgroundColor: "green", padding: 3, opacity: 0.7, borderRadius: 4, marginTop: 10,fontSize:12,color:"#fff"}}>
                            Delivered
                        </Text>
                    </View>
                </View>
                <View>
                <View style={styles.ViewWithItem} >
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require('../../../assets/images/shop.jpeg')} style={{ height: 70, width: 110, borderRadius: 7, marginLeft: 7,alignSelf:"center",marginRigt:10 }} />
                        <View style={{ alignSelf: "center",marginLeft:8 }}>
                            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                                Punjabi Chulla
                            </Text>
                            <Text style={{fontSize:13}}>
                                VIP Road, Zirakpur
                            </Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', }}>
                                June 2 at 3:40 pm
                            </Text>
                        </View>
                    </View>
                    <View style={{alignItems:'center',justifyContent:"center",marginRight:8}}>
                        
                        <Text style={{color:"#F66754",fontWeight:'bold',fontSize:13}}>
                            $40.02
                        </Text>
                        <Text style={{ marginRight: 1, backgroundColor: "green", padding: 3, opacity: 0.7, borderRadius: 4, marginTop: 10,fontSize:12,color:"#fff"}}>
                            Delivered
                        </Text>
                    </View>
                </View>

            </View>
            <View>
                <View style={styles.ViewWithItem} >
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require('../../../assets/images/shop.jpeg')} style={{ height: 70, width: 110, borderRadius: 7, marginLeft: 7,alignSelf:"center",marginRigt:10 }} />
                        <View style={{ alignSelf: "center",marginLeft:8 }}>
                            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                                Punjabi Chulla
                            </Text>
                            <Text style={{fontSize:13}}>
                                VIP Road, Zirakpur
                            </Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', }}>
                                June 2 at 3:40 pm
                            </Text>
                        </View>
                    </View>
                    <View style={{alignItems:'center',justifyContent:"center",marginRight:8}}>
                        
                        <Text style={{color:"#F66754",fontWeight:'bold',fontSize:13}}>
                            $40.02
                        </Text>
                        <Text style={{ marginRight: 1, backgroundColor: "green", padding: 3, opacity: 0.7, borderRadius: 4, marginTop: 10,fontSize:12,color:"#fff"}}>
                            Delivered
                        </Text>
                    </View>
                </View>

            </View>
            <View>
                <View style={styles.ViewWithItem} >
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require('../../../assets/images/shop.jpeg')} style={{ height: 70, width: 110, borderRadius: 7, marginLeft: 7,alignSelf:"center",marginRigt:10 }} />
                        <View style={{ alignSelf: "center",marginLeft:8 }}>
                            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                                Punjabi Chulla
                            </Text>
                            <Text style={{fontSize:13}}>
                                VIP Road, Zirakpur
                            </Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', }}>
                                June 2 at 3:40 pm
                            </Text>
                        </View>
                    </View>
                    <View style={{alignItems:'center',justifyContent:"center",marginRight:8}}>
                        
                        <Text style={{color:"#F66754",fontWeight:'bold',fontSize:13}}>
                            $40.02
                        </Text>
                        <Text style={{ marginRight: 1, backgroundColor: "green", padding: 3, opacity: 0.7, borderRadius: 4, marginTop: 10,fontSize:12,color:"#fff"}}>
                            Delivered
                        </Text>
                    </View>
                </View>

            </View>
            <View>
                <View style={styles.ViewWithItem} >
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require('../../../assets/images/shop.jpeg')} style={{ height: 70, width: 110, borderRadius: 7, marginLeft: 7,alignSelf:"center",marginRigt:10 }} />
                        <View style={{ alignSelf: "center",marginLeft:8 }}>
                            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                                Punjabi Chulla
                            </Text>
                            <Text style={{fontSize:13}}>
                                VIP Road, Zirakpur
                            </Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', }}>
                                June 2 at 3:40 pm
                            </Text>
                        </View>
                    </View>
                    <View style={{alignItems:'center',justifyContent:"center",marginRight:8}}>
                        
                        <Text style={{color:"#F66754",fontWeight:'bold',fontSize:13}}>
                            $40.02
                        </Text>
                        <Text style={{ marginRight: 1, backgroundColor: "green", padding: 3, opacity: 0.7, borderRadius: 4, marginTop: 10,fontSize:12,color:"#fff"}}>
                            Delivered
                        </Text>
                    </View>
                </View>

            </View>
            </View>
        </View>
    )
}
export default Order
const styles = StyleSheet.create({
    mainView: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    foodOrderIcon: {
        width: 20,
        height: 20,
        tintColor: "black"
    },
    ViewWithItem: {
        // marginTop: 40,
        marginBottom:20,
        backgroundColor: "white",
        // marginTop: 30,
        flexDirection: "row",
        height: 85,
        borderRadius: 12,
        width: "100%",
        elevation: 10,
        justifyContent: 'space-between',
        // alignItems:"center"
    },
    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        marginTop: 10,
        height: 30,
        width: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 1,
        backgroundColor: 'white',
    },
    iconSize: {
        height: 13,
        width: 13,
        tintColor: '#F66754',
        paddingRight: 8,
    },
})