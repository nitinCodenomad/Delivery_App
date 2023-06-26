import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import styles from './OrderStyles';

const Order = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredOrders, setFilteredOrders] = useState([]);
  console.log(filteredOrders)
  const orders = [
    {
      id: 1,
      image: require('../../../assets/images/shop.jpeg'),
      name: 'Punjabi Chulla',
      address: 'VIP Road, Zirakpur',
      time: 'June 2 at 3:40 pm',
      price: 'Rs. 200',
      status: 'In process',
    },
    {
      id: 1,
      image: require('../../../assets/images/shop.jpeg'),
      name: 'Punjabi Chulla',
      address: 'VIP Road, Zirakpur',
      time: 'June 5 at 4:30 pm',
      price: 'Rs. 200',
      status: 'Delivered',
    },
  ];

  useEffect(() => {
    const filtered = orders.filter((order) =>
      order.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredOrders(filtered);
  }, [searchText]);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.mainView}>
        <View style={styles.ViewWithItem}>
          <View style={styles.itemImageContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemAddress}>{item.address}</Text>
              <Text style={styles.itemTime}>{item.time}</Text>
            </View>
          </View>
          <View style={styles.itemPriceContainer}>
            <Text style={styles.itemPrice}>{item.price}</Text>
            <Text style={[styles.itemStatus, { backgroundColor: item.status === 'Delivered' ? "green" : "#D3D3D3", color: item.status === 'Delivered' ? "#fff" : "grey" }]}>{item.status}</Text>
          </View>
          <View>
          </View>
          <View>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>View Details</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {/* <View style={styles.headerView}>
        <TouchableOpacity>
          <View style={styles.iconContainer}>
            <Image source={require('../../../assets/icons/back1.png')} style={styles.iconSize} />
          </View>
        </TouchableOpacity>
      </View> */}
      <View style={styles.searchContainer}>
        <Image source={require('../../../assets/icons/search-interface-symbol.png')} style={styles.searchIcon} />
        <TextInput
          placeholder='Search....'
          style={styles.searchInput}
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      <FlatList
        data={filteredOrders}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
}
export default Order;
