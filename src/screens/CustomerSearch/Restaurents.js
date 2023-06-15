import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react'
import styles from './RestaurantStyles';
const orders = [
    {
        id: 1,
        image: require('../../../assets/images/shop.jpeg'),
        name: 'Punjabi Chulla',
        address: 'VIP Road, Zirakpur',
        time: '10AM to 11PM',
        ratings: '3.5',
        status: 'Rating',
    },
    {
        id: 2,
        image: require('../../../assets/images/shop.jpeg'),
        name: 'Punjabi Chulla',
        address: 'VIP Road, Zirakpur',
        time: '10AM to 11PM',
        ratings: '2.5',
        status: 'Rating',
    },
    {
        id: 2,
        image: require('../../../assets/images/shop.jpeg'),
        name: 'Punjabi Chulla',
        address: 'VIP Road, Zirakpur',
        time: '10AM to 11PM',
        ratings: '2.5',
        status: 'Rating',
    },
    {
        id: 2,
        image: require('../../../assets/images/shop.jpeg'),
        name: 'Punjabi Chulla',
        address: 'VIP Road, Zirakpur',
        time: '10AM to 11PM',
        ratings: '2.5',
        status: 'Rating',
    },
    {
        id: 2,
        image: require('../../../assets/images/shop.jpeg'),
        name: 'Punjabi Chulla',
        address: 'VIP Road, Zirakpur',
        time: '10AM to 11PM',
        ratings: '2.5',
        status: 'Rating',
    },

];
const renderItem = ({ item }) => {
    return (
        <View style={styles.ViewWithItem}>
            <View style={styles.itemImageContainer}>
                <Image source={item.image} style={styles.itemImage} />
                <View style={styles.itemDetails}>
                    <Text style={styles.itemTime}>Opens at: {item.time}</Text>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <Image source={require('../../../assets/icons/placeholder.png')} style={{ width: 12, height: 12, marginRight: 2 }} />
                        <Text style={styles.itemAddress}>{item.address}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.itemPriceContainer}>
                {/* <Text style={[styles.itemStatus, { backgroundColor: item.status === 'Delivered' ? "green" : "#D3D3D3", color: item.status === 'Delivered' ? "#fff" : "grey" }]}>{item.status}</Text> */}
                <View style={{ flexDirection: 'row', backgroundColor: item.ratings <= 3 ? "#F66754" : "#EFD077", borderRadius: 11, }}>
                    <Text style={styles.itemPrice}>{item.ratings}</Text>
                </View>
            </View>
        </View>
    );
};
const Restaurents = () => {
    const [searchText, setSearchText] = useState('');
    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.recommendedText}> Recommended</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={orders}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.flatListContainer}
            />
        </View>
    )
}
export default Restaurents
