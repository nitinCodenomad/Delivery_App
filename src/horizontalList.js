import { View, Text, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
const data = [1, 2, 3, 4, 5,]
const HorizontalList = () => {
    const [currentIndex, setCurrentIndex] = useState('')
    return (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
            <FlatList data={data}
                // pagingEnabled
                onScroll={(e) => {
                    const x = e.nativeEvent.contentOffset.x
                    setCurrentIndex((x / 120).toFixed(0))
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <View style={{ height: 200, width: 150, marginLeft: 10, marginTop: 10, borderColor: '#ac9c2c', borderRadius: 5, alignItems: "center", borderWidth: 0.3 }}>
                            <Image source={require('./../assets/images/food123.png')} style={{ width: 150, height: 199, alignSelf: "center", borderWidth: 1, borderRadius: 5, }} />
                            <Text style={{ color: "white", position: "absolute", bottom: 11.5, fontWeight: "bold" }}>
                                Chocolate cake
                            </Text>
                            <Text style={{ color: "#ac9c2c", position: 'absolute', fontSize: 10, fontStyle: "italic", bottom: 0.1 }}>Village cafe</Text>
                        </View>
                    )
                }} />
            <View style={{ flexDirection: "row", marginBottom: 15, backgroundColor: "gray", height: 4, justifyContent: "center", borderRadius: 10, alignItems: "center", marginTop: 10 }}>
                {
                    data.map((item, index) => (
                        <View style={{ flexDirection: "row", width: 8, height: 4, borderRadius: 4, backgroundColor: currentIndex == index ? '#ac9c2c' : 'gray', }}>
                        </View>
                    ))
                }
            </View>
        </View>
    )
}

export default HorizontalList