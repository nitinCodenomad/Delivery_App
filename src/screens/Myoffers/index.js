import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';

const data = [
    { id: '1', title: 'Item 1', description: 'Get 50% off', color: "#FFBF00" },
    { id: '3', title: 'Item 3', description: 'Description', color: "#89CFF0" },
    { id: '2', title: 'Item 2', description: 'Description', color: "#5D3FD3" },
    { id: '5', title: 'Item 5', description: 'Description ', color: "#FF00FF" },
    { id: '4', title: 'Item 4', description: 'Description ', color: "#FFC0CB" },
];
const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState('')
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 15, marginTop: 15 }}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <View style={{ height: 27, width: 27, borderRadius: 15, justifyContent: 'center', alignItems: 'center', elevation: 0.1, backgroundColor: "white", marginLeft: 15, }}>
                        <Image source={require('../../../assets/icons/backArrow.png')} style={styles.iconSize} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    {/* <Text style={{ fontSize: 13.5, textAlign: "center", fontWeight: "300", color: 'black' }}>Cart</Text> */}
                </TouchableOpacity>
            </View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={({ item }) => (
                    <View style={{ ...styles.box, }}>
                        <View style={{ backgroundColor: item.color, height: "90%", width: "90%", borderRadius: 10, alignSelf: "center" ,elevation:5}}>
                            <ImageBackground source={require('../../../assets/icons/discount.png')} style={{ width: 100, height: 100, aignSelf: "flex-start", position: 'absolute', top: 40, left: 25, tintColor: "white",opacity:0.3 }} />
                            <View style={{ alignSelf: "flex-end", marginRight: 15, marginTop: 15 }}>
                                <Text style={styles.text}>{item.description}</Text>
                                <Text style={{ ...styles.text, fontSize: 15, fontWeight: "300", alignSelf: "flex-end" ,marginRight:40}}>On Food orders</Text>
                            </View>
                            {/* <Text style={{ alignSelf: "flex-end", color: "white", marginRight: 15, marginTop: 15 }}>17 coupons</Text> */}
                            <View style={{ backgroundColor: "#ADD8E6", width: 50, height: 50, borderRadius: 25, position: "absolute", right: -13, top: -6, justifyContent: "center", alignItems: 'center',elevation:1 }}>
                                <Text style={{ fontSize: 15, color: "white", fontWeight: "500" }}>20%</Text>
                            </View>
                        </View>
                        {/* <Text style={{ paddingLeft: 10, fontSize: 17, color: "black", fontWeight: '400' }}>50% offer on the delivery</Text> */}
                        {/* <Text style={{ paddingLeft: 10, fontSize: 13.3, color: "black", fontWeight: '300', opacity: 0.7 }}>Just place the order and get 50% off</Text> */}
                    </View>
                )}
                keyExtractor={(item) => item.toString()}
                contentContainerStyle={styles.flatListContent}
            />
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        // borderRadius: 10,
        flex: 1
    },
    iconSize: {
        height: 20,
        width: 20,
        tintColor: "#F66754",
        paddingRight: 10,
    },
    box: {
        width: 325,
        // width:"100%",
        height: 200,
        marginTop: 10,
        borderRadius: 15,
        // marginLeft: 16,
        // marginRight: 8,
        // borderRadius: 13,
        // backgroundColor: "white",
        // elevation: 1,
        // paddingVertical: 3,
        // paddingHorizontal: 10
    },
    text: {
        color: 'white',
        fontSize: 22,
        fontWeight: "400",
        marginRight: 18

    },
    flatListContent: {
        alignItems: 'center',
    },
});

export default Slider;
