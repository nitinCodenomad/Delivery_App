import { Image, StyleSheet, Text, View, FlatList, ScrollView, Touchable, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Slider from '../../slider'
import HorizontalList from '../../horizontalList';
import { Button } from 'react-native-elements';
const Home = ({ navigation, props }) => {
    console.log("=====> props", props?.route?.params)
    const [hide, setHide] = useState(true)
    return (
        <View style={styles.mainView}>
            <ScrollView>
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: "90%", alignSelf: "center", marginBottom: 8, marginTop: 15 }}>
                    <View style={{ backgroundColor: "orange", width: "48%", height: 128, borderRadius: 8, justifyContent: "center" }}>
                        <View style={{ paddingHorizontal: 15, marginTop: 12 }}>
                            <Text style={{ color: "white", fontSize: 15, marginTop: 5, fontWeight: "300", position: "absolute", top: -16, left: 14 }}>
                                Order
                            </Text>
                            <Text style={{ color: "white", fontSize: 25, fontWeight: "bold", }}>
                                Food
                            </Text>
                        </View>
                        <Image source={require('../../../assets/images/food.png')} style={{ width: "100%", height: 82, alignSelf: "flex-end", borderRadius: 5 }} />
                    </View>
                    <View style={{ backgroundColor: "#1B9C85", width: "48%", height: 128, borderRadius: 8, justifyContent: "center", elevation: 10, }}>
                        <View style={{ paddingHorizontal: 15, marginTop: 12 }}>
                            <Text style={{ color: "white", fontSize: 15, marginTop: 5, fontWeight: "300", position: "absolute", top: -16, left: 14 }}>
                                Order
                            </Text>
                            <Text style={{ color: "white", fontSize: 25, fontWeight: "bold", }}>
                                Grocery
                            </Text>
                        </View>
                        <Image source={require('../../../assets/images/food.png')} style={{ width: "99%", height: 82, alignSelf: "flex-end", borderRadius: 5 }} />
                    </View>
                </View>
                <View style={{ width: "120%" }}>
                    <Slider />
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "black", marginBottom: 10, marginTop: 10 }}>
                        Restaurants
                    </Text>
                    <View style={styles.ViewWithItem}>
                        <View style={styles.itemImageContainer}>
                            <Image source={require('../../../assets/images/shop.jpeg')} style={styles.itemImage} />
                            <View style={styles.itemDetails}>
                                <Text style={styles.itemName}>Punjabi Chulla</Text>
                                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                    <Image source={require('../../../assets/icons/placeholder.png')} style={{ width: 12, height: 12, marginRight: 2 }} />
                                    <Text style={styles.itemAddress}>VIP Road, Zirakpur</Text>
                                </View>
                            </View>
                        </View>

                    </View>
                    <View style={styles.ViewWithItem}>
                        <View style={styles.itemImageContainer}>
                            <Image source={require('../../../assets/images/shop.jpeg')} style={styles.itemImage} />
                            <View style={styles.itemDetails}>
                                <Text style={styles.itemName}>Punjabi Chulla</Text>
                                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                    <Image source={require('../../../assets/icons/placeholder.png')} style={{ width: 12, height: 12, marginRight: 2 }} />
                                    <Text style={styles.itemAddress}>VIP Road, Zirakpur</Text>
                                </View>
                            </View>
                        </View>
                        {/* <View style={styles.itemPriceContainer}>
                            <Text style={[styles.itemStatus, { backgroundColor: item.status === 'Delivered' ? "green" : "#D3D3D3", color: item.status === 'Delivered' ? "#fff" : "grey" }]}>{item.status}</Text>
                            <View style={{ flexDirection: 'row', backgroundColor: item.ratings <= 3 ? "#F66754" : "#EFD077", borderRadius: 11, }}>
                            <Text style={styles.itemPrice}>{item.ratings}</Text>
                        </View>
                        </View> */}
                    </View>
                </View>
                <View style={{ elevation: 10 }}>
                    <LinearGradient colors={['black', '#000000', '#ac9c2c',]} start={{ x: 0, y: 0.01 }} end={{ x: 0, y: 0 }} style={styles.linearGradient}>
                        <View style={{ height: 290, paddingHorizontal: 15, }}>
                            <View style={{ paddingBottom: 10 }}>
                                <Text style={{ color: "white", fontSize: 25, fontWeight: "bold", marginBottom: 10 }}>
                                    curated
                                </Text>
                                <Text style={{ color: 'yellow', fontWeight: "300", position: 'absolute', top: 26, }}>
                                    favourites
                                </Text>
                            </View>
                            <HorizontalList />
                        </View>
                    </LinearGradient>
                </View>
                <View style={styles.ViewWithItem}>
                    <TouchableOpacity onPress={() => navigation.navigate('Specificmenu')}>
                        <View style={styles.itemImageContainer}>
                            <Image source={require('../../../assets/images/shop.jpeg')} style={styles.itemImage} />
                            <View style={styles.itemDetails}>
                                <Text style={styles.itemName}>Punjabi Chulla</Text>
                                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                    <Image source={require('../../../assets/icons/placeholder.png')} style={{ width: 12, height: 12, marginRight: 2 }} />
                                    <Text style={styles.itemAddress}>VIP Road, Zirakpur</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={styles.ViewWithItem}>
                    <View style={styles.itemImageContainer}>
                        <Image source={require('../../../assets/images/shop.jpeg')} style={styles.itemImage} />
                        <View style={styles.itemDetails}>
                            <Text style={styles.itemName}>Punjabi Chulla</Text>
                            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                <Image source={require('../../../assets/icons/placeholder.png')} style={{ width: 12, height: 12, marginRight: 2 }} />
                                <Text style={styles.itemAddress}>VIP Road, Zirakpur</Text>
                            </View>
                        </View>
                    </View>
                    {/* <View style={styles.itemPriceContainer}> */}
                    {/* <Text style={[styles.itemStatus, { backgroundColor: item.status === 'Delivered' ? "green" : "#D3D3D3", color: item.status === 'Delivered' ? "#fff" : "grey" }]}>{item.status}</Text> */}
                    {/* <View style={{ flexDirection: 'row', backgroundColor: item.ratings <= 3 ? "#F66754" : "#EFD077", borderRadius: 11, }}>
                            <Text style={styles.itemPrice}>{item.ratings}</Text>
                        </View> */}
                    {/* </View> */}
                </View>
                <Modal animationType='slide' visible={hide} transparent={true}>
                    <View style={styles.modalContainer}>
                        <View style={{ backgroundColor: 'white', height: 230, width: "100%" }}>
                            <View style={{ paddingVertical: 15, paddingHorizontal: 15, borderBottomWidth: 0.3, flexDirection: 'row', justifyContent: "space-between", alignItems: "center" }}>
                                <Text style={{ fontSize: 18, color: "black", fontWeight: "500" }}>Choose delivery address</Text>
                                <TouchableOpacity onPress={() => setHide(!hide)}>
                                    <Image source={require('../../../assets/icons/x-mark.png')} style={{ width: 20, height: 20 }} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ paddingVertical: 15, paddingHorizontal: 15 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={require('../../../assets/icons/home.png')} style={{ height: 20, width: 20 }} />
                                    <View>
                                        <Text style={{ fontSize: 16.5, color: "black", marginLeft: 5 }}>
                                            Home
                                        </Text>
                                        <Text style={{ fontSize: 14 }}>
                                            Location
                                        </Text>
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
                    </View>
                </Modal>
                <View style={{ height: 70 }} />
            </ScrollView>
        </View>
    )
}
export default Home

const styles = StyleSheet.create({
    mainView: {
        // paddingHorizontal: 10,
        // paddingVertical: 10
        backgroundColor: "white"
    },
    ViewWithItem: {
        marginBottom: 2,
        marginTop: 10,
        // backgroundColor: "white",
        flexDirection: "row",
        height: 85,
        borderRadius: 12,
        width: "100%",
        // elevation: 5,
        justifyContent: 'space-between'
    },
    itemImageContainer: {
        flexDirection: "row"
    },
    itemDetails: {
        alignSelf: "center",
        marginLeft: 8
    },
    itemTime: {
        alignSelf: "flex-start",
        fontSize: 14,
        fontWeight: '300',
        marginBottom: 10,
        color: "black"
    },
    itemName: {
        fontSize: 17,
        fontWeight: "bold",
        color: "black"
    },
    itemPriceContainer: {
        alignItems: 'center',
        justifyContent: "center",
        marginRight: 20,
    },
    itemImage: {
        height: 73,
        width: 73,
        borderRadius: 7,
        marginLeft: 7,
        alignSelf: "center",
        marginRight: 10
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalText: {
        fontSize: 18,
        backgroundColor: 'white',
        borderRadius: 5,
    },
})