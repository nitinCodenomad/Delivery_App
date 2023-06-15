import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import styles from './DishesStyle'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const orders = [
  {
    id: 1,
    image: require('../../../assets/images/shop.jpeg'),
    name: 'Kiyaan',
    address: 'VIP Road, Zirakpur',
    time: 'June 2 at 3:40 pm',
    price: '$40.02',
    status: 'In process',
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

const Dishes = () => {
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleItem = (itemId) => {
    if (expandedItems.includes(itemId)) {
      setExpandedItems(expandedItems.filter((item) => item !== itemId));
    } else {
      setExpandedItems([...expandedItems, itemId]);
    }
  };

  const isItemExpanded = (itemId) => {
    return expandedItems.includes(itemId);
  };

  const renderAdditionalList = (item) => {
    return (
      <View style={styles.additionalList}>
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10, justifyContent: "space-between" }}>
          <View style={{ marginLeft: 10 }}>
            <Text style={{ marginTop: 15, color: "black", fontSize: 16, fontWeight: "400", }}>
              Fried Momos
            </Text>
            <Text style={{ color: 'orange', fontWeight: "400" }}>
              Price: $2.5
            </Text>
          </View>
          <View style={{ borderRadius: 7, marginLeft: 8, height: 20, width: 20, borderWidth: 1.5, borderColor: "red", backgroundColor: "orange", marginRight: 5, justifyContent: "center", alignItems: "center", alignSelf: "center", marginTop: 15 }}>
            <Image source={require('../../../assets/icons/check-mark.png')} style={{ width: 15, height: 15 }} />
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10, justifyContent: "space-between" }}>
          <View style={{ marginLeft: 10 }}>
            <Text style={{ marginTop: 15, color: "black", fontSize: 16, fontWeight: "400", }}>
              Steamed Momos
            </Text>
            <Text style={{ color: 'orange', fontWeight: "400" }}>
              Price: $2.5
            </Text>
          </View>
          <View style={{ borderRadius: 7, marginLeft: 8, height: 20, width: 20, borderWidth: 1.5, borderColor: "red", backgroundColor: "orange", marginRight: 5, justifyContent: "center", alignItems: "center", alignSelf: "center", marginTop: 15 }} >
            {/* <Image source={require('../../../assets/icons/check-mark.png')} style={{ width: 15, height: 15 }} /> */}
          </View>
        </View>
        <View style={{ backgroundColor: "#F66754", justifyContent: "center", alignItems: "center", width: "50%", height: 40, marginTop: 15, borderRadius: 12, alignSelf: "center", }}>
          <Text style={{ fontWeight: "500", color: "white" }}>Show More</Text>
        </View>
        <View style={{ height: 30 }} />
      </View>
    );
  };

  const renderItem = ({ item }) => {
    const isExpanded = isItemExpanded(item.id);

    return (
      <View>
        <View style={styles.ViewWithItem}>
          <View style={styles.itemDetails}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={{ fontSize: 12 }}>Delivers in 40 mins</Text>
          </View>
          <View style={{ justifyContent: "center", alignSelf: "center", marginRight: 10 }}>
            <TouchableOpacity onPress={() => toggleItem(item.id)}>
              {isExpanded ? <Image source={require('../../../assets/icons/arrow-down-sign-to-navigate.png')} style={{ width: 15, height: 15, }} /> : <Image source={require('../../../assets/icons/upload.png')} style={{ width: 15, height: 15, }} />}
            </TouchableOpacity>
          </View>
        </View>

        {isExpanded && renderAdditionalList(item)}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.recommendedText}>Most Ordered</Text>
      </View>
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

export default Dishes;
