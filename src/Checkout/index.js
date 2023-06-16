import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'

const index = () => {
    return (
        <ScrollView>
            <View style={styles.mainView}>
                <ScrollView>
                <View style={{ flexDirection: "row", alignItems: "center",marginBottom:15 }}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <View style={{ height: 27, width: 27, borderRadius: 15, justifyContent: 'center', alignItems: 'center', elevation: 1, backgroundColor: "white", marginRight: 10, }}>
                        <Image source={require('../../assets/icons/back1.png')} style={styles.iconSize} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ fontSize: 13.5, textAlign: "center", fontWeight: "300", color: 'black' }}>Payment Screen</Text>
                </TouchableOpacity>
            </View>
                    <View style={{ ...styles.ViewWithItem, flexDirection: "row", marginTop: 0 }}>
                        <View style={styles.itemImageContainer}>
                            <Image source={require('../../assets/images/shop.jpeg')} style={styles.itemImage} />
                            <View>
                                <Text style={{ fontSize: 17, color: "black", fontWeight: "300" }}>
                                    Punjabi Chulla
                                </Text>
                                <Text style={{ marginTop: 5, fontSize: 12 }}>
                                    Mohali
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ ...styles.ViewWithItem, height: 70, paddingVertical: 15, paddingHorizontal: 20, }}>
                        <View>
                            <Text style={{ fontSize: 15, color: "black" }}>
                                Fruit salad with honey Toppings
                            </Text>
                            <Text >
                                Rs. 150
                            </Text>
                        </View>
                        <View style={{ flexDirection: "row", backgroundColor: '#D3D3D3', height: 21.1, borderRadius: 8 }}>
                            <Text style={{ backgroundColor: "white", elevation: 10, width: 21, height: 21, textAlign: "center", borderRadius: 7.5, fontSize: 16, color: "black" }}>
                                -
                            </Text>
                            <Text style={{ padding: 2, color: "black" }}>  2</Text>
                            <Text style={{ backgroundColor: "white", elevation: 10, width: 20, height: 20, textAlign: "center", borderRadius: 7.5, fontSize: 16, color: "black", marginLeft: 3 }}>
                                +
                            </Text>
                        </View>
                    </View>
                    <View style={{ ...styles.ViewWithItem, height: 70, paddingHorizontal: 20, paddingTop: 12 }}>
                        <View>
                            <View style={{ flexDirection: "row", justifyContent: "center", }}>
                                <Image source={require('../../assets/icons/history.png')} style={{ width: 16, height: 16, tintColor: "#F66754", marginRight: 5, marginTop: 4 }} />
                                <View>
                                    <Text style={{ color: "#F66755", fontSize: 16, fontWeight: "400" }}>
                                        Schedule order
                                    </Text>
                                    <Text>
                                        Deliver Now
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ ...styles.ViewWithItem, height: 53, paddingHorizontal: 20, alignItems: "center", width: "99%", alignSelf: "center" }}>
                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: 'center' }}>
                            <Image source={require('../../assets/icons/discount.png')} style={{ width: 17.5, height: 17.5, tintColor: "#F66754" }} />
                            <Text style={{ fontWeight: "400", fontSize: 16, color: "black", marginLeft: 8 }}>
                                Apply coupon
                            </Text>
                        </View>
                        <View>
                            <Image source={require('../../assets/icons/arrow-down-sign-to-navigate.png')} style={{ width: 12, height: 12, marginRight: 10, alignSelf: "flex-end", tintColor: "#F66755" }} />
                        </View>
                    </View>
                    <View style={{
                        paddingHorizontal: 20,
                        marginBottom: 2,
                        borderRadius: 10,
                        marginTop: 10,
                        paddingTop: 10,
                        backgroundColor: "white",
                        height: 120,
                        // flexDirection: "row",
                        width: "99%",
                        alignSelf: "center",
                        elevation: 10,
                    }}>
                        <Text style={{ fontSize: 16, color: "black", fontWeight: "400" }}>Bill Details</Text>
                        <View style={{ paddingTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <Text>
                                Subtotal
                            </Text>
                            <Text style={{ color: "black" }}>
                                Rs. 100
                            </Text>
                        </View>
                        <View style={{ paddingTop: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 0.5 }}>
                            <Text>
                                Taxes & Charges
                            </Text>
                            <Text style={{ color: "black", paddingBottom: 5 }}>
                                Rs. 5
                            </Text>
                        </View>
                        <View style={{ paddingTop: 12, flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
                            <Text style={{ fontSize: 17, color: "black" }}>
                                Grand Total
                            </Text>
                            <Text style={{ color: "black" }}>Rs. 105 </Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={{ backgroundColor: '#F66755', height: 55, justifyContent: 'center', paddingHorizontal: 15, marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderRadius: 5 }}>
                    <Text style={{ color: "white", fontSize: 16.5, justifyContent: "center", fontWeight: "400" }}>
                        To pay - Rs.105
                    </Text>
                    <Text style={{ color: "white", fontSize: 16.5, justifyContent: "center", fontWeight: "700" }}>
                        Proceed to pay
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}
export default index
const styles = ({
    mainView: {
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    iconSize: {
        height: 13,
        width: 13,
        tintColor: "#F66754",
        paddingRight: 8,
    },
    ViewWithItem: {
        // marginBottom: 2,
        marginTop: 10,
        backgroundColor: "white",
        height: 130,
        alignSelf: "center",
        borderRadius: 5,
        flexDirection: "row",
        width: "99%",
        elevation: 5,
        justifyContent: 'space-between'
    },
    itemImageContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",

    },
    itemImage: {
        height: 90,
        width: 90,
        borderRadius: 3,
        marginLeft: 7,
        alignSelf: "center",
        marginRight: 10
    },
})
