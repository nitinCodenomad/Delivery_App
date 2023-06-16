import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, Image, ImageBackground } from 'react-native';

const data = [
    { id: '1', title: 'Item 1', description: 'Offers for you, You can not refuse', color: "#2E8A99" },
    { id: '2', title: 'Item 2', description: 'Description for Item 2', color: "#4F709C" },
    { id: '3', title: 'Item 3', description: 'Description for Item 3', color: "#1F6E8C" },
    { id: '4', title: 'Item 4', description: 'Description for Item 4', color: "#606C5D" },
    { id: '5', title: 'Item 5', description: 'Description for Item 5', color: "#00DFA2" },
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState('')
    return (
        <View style={styles.container}>
            <FlatList
                // pagingEnabled
                // onScroll={(e) => {
                //     const x = e.nativeEvent.contentOffset.x
                //     setCurrentIndex((x / 300).toFixed(0))
                // }}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={data}
                renderItem={({ item }) => (
                    <View style={{ ...styles.box, backgroundColor: item.color }}>
                        <View >
                            {/* <Text style={{ color: 'black', fontSize: 11.3, fontWeight: "300" }}>Today's Special</Text> */}
                            <Text style={styles.text}>{item.description}</Text>
                        </View>
                        <Text style={{ backgroundColor: 'black', color: "white", padding: 1.5, width: "20%", fontSize: 11, textAlign: "center", borderRadius: 5, position: "absolute", bottom: 17,left:17,fontWeight:"500"}}>
                            Order now
                        </Text>
                        <ImageBackground source={require('./../assets/icons/9118-removebg-preview.png')} style={{ width: 220, height: 220, alignSelf: "flex-end", position: 'absolute', right: -20, bottom: -22 }} />
                    </View>
                )}
                keyExtractor={(item) => item.toString()}
                contentContainerStyle={styles.flatListContent}
            />
            {/* <View style={{ flexDirection: "row", marginBottom: 15, backgroundColor: "gray", height: 9, width: 65, justifyContent: "center", borderRadius: 10, alignItems: "center" }}>
                {
                    data.map((item, index) => (
                        <View style={{ width: 65, flexDirection: "row", width: 8, height: 8, borderRadius: 4, backgroundColor: currentIndex == index ? 'blue' : 'gray', }}>
                        </View>
                    ))
                }
            </View> */}
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: "100%",
        // height: "50%",
        // alignSelf: "center",
        // backgroundColor: "white",
        // justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 15,
        // paddingTop: 10,
        // paddingHorizontal: 15,
        // elevation: 5
    },
    box: {
        width: 318,
        height: 200,
        marginLeft: 16,
        marginRight: 8,
        borderRadius: 13,
        // paddingVertical: 17,
        // borderWidth: 1,
        elevation: 2,
        // backgroundColor: "black",
        // borderColor: "blue",
        // backgroundColor: 'red',
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingVertical: 3,
        paddingHorizontal: 10
    },
    text: {
        color: 'white',
        fontSize: 24.4,
        fontWeight: "700",

    },
    flatListContent: {
        alignItems: 'center',
    },
});

export default Slider;
