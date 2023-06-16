import { Image, StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Slider from '../../slider'
import HorizontalList from '../../horizontalList';
const Home = () => {
    return (
        <View style={styles.mainView}>
            <ScrollView>
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: "90%", alignSelf: "center", marginBottom: 8, marginTop: 10 }}>
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
                <Slider />
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
                        <View style={styles.itemPriceContainer}>
                            {/* <Text style={[styles.itemStatus, { backgroundColor: item.status === 'Delivered' ? "green" : "#D3D3D3", color: item.status === 'Delivered' ? "#fff" : "grey" }]}>{item.status}</Text> */}
                            {/* <View style={{ flexDirection: 'row', backgroundColor: item.ratings <= 3 ? "#F66754" : "#EFD077", borderRadius: 11, }}>
                            <Text style={styles.itemPrice}>{item.ratings}</Text>
                        </View> */}
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
                        <View style={styles.itemPriceContainer}>
                            {/* <Text style={[styles.itemStatus, { backgroundColor: item.status === 'Delivered' ? "green" : "#D3D3D3", color: item.status === 'Delivered' ? "#fff" : "grey" }]}>{item.status}</Text> */}
                            {/* <View style={{ flexDirection: 'row', backgroundColor: item.ratings <= 3 ? "#F66754" : "#EFD077", borderRadius: 11, }}>
                            <Text style={styles.itemPrice}>{item.ratings}</Text>
                        </View> */}
                        </View>
                    </View>
                </View>
                <View style={{ elevation: 10 }}>
                    <LinearGradient colors={['black', '#000000', '#ac9c2c',]} start={{ x: 0, y: 0.01 }} end={{ x: 0, y: 0 }} style={styles.linearGradient}>
                        <View style={{ height: 290, paddingHorizontal: 19, }}>
                            <View style={{ paddingBottom: 10 }}>
                                <Text style={{ color: "white", fontSize: 25, fontWeight: "bold", marginBottom: 15 }}>
                                    curated
                                </Text>
                                <Text style={{ color: 'yellow', fontWeight: "300", position: 'absolute', top: 26, }}>
                                    favourites
                                </Text>
                            </View>
                            <View>
                                <HorizontalList />
                            </View>
                        </View>
                    </LinearGradient>
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
                    <View style={styles.itemPriceContainer}>
                        {/* <Text style={[styles.itemStatus, { backgroundColor: item.status === 'Delivered' ? "green" : "#D3D3D3", color: item.status === 'Delivered' ? "#fff" : "grey" }]}>{item.status}</Text> */}
                        {/* <View style={{ flexDirection: 'row', backgroundColor: item.ratings <= 3 ? "#F66754" : "#EFD077", borderRadius: 11, }}>
                            <Text style={styles.itemPrice}>{item.ratings}</Text>
                        </View> */}
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
                    <View style={styles.itemPriceContainer}>
                        {/* <Text style={[styles.itemStatus, { backgroundColor: item.status === 'Delivered' ? "green" : "#D3D3D3", color: item.status === 'Delivered' ? "#fff" : "grey" }]}>{item.status}</Text> */}
                        {/* <View style={{ flexDirection: 'row', backgroundColor: item.ratings <= 3 ? "#F66754" : "#EFD077", borderRadius: 11, }}>
                            <Text style={styles.itemPrice}>{item.ratings}</Text>
                        </View> */}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
export default Home

const styles = StyleSheet.create({
    mainView: {
        // paddingHorizontal: 10,
        // paddingVertical: 
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
})