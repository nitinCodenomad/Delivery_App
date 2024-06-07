import { View, Text, FlatList } from 'react-native'
import React from 'react'

const AnimatedFlatlist = () => {
    const data = [
        { id: 1, title: 'Card 1' },
        { id: 2, title: 'Card 2' },
        { id: 3, title: 'Card 3' },
        { id: 4, title: 'Card 1' },
        { id: 5, title: 'Card 2' },
        { id: 6, title: 'Card 3' },
    ]
    const renderItem = ({ item }) => {
        return (
            <View>
                <View style={{ width: 200, height: 200, backgroundColor: 'red', margin: 10 }}>
                </View>
                <Text>{item.title}</Text>
            </View>
        );
    };
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View>
                <FlatList
                    horizontal
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    snapToInterval={200}
                    decelerationRate={0}
                />
            </View>
        </View>
    )
}

export default AnimatedFlatlist