import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, FlatList, ScrollView, Pressable, Alert } from 'react-native';
import Navigation from '../../Navigation/stack';
const Profile = ({ navigation }) => {
    const DATA = [
        {
            name: 'Your Orders',
            image: require('../../../assets/icons/menu.png'),
        },
        {
            name: 'Favorite Orders',
            image: require('../../../assets/icons/heart.png'),
        },
        {
            name: 'Address Book',
            image: require('../../../assets/icons/home-address.png'),
        },
        {
            name: 'Food Ordering Help',
            image: require('../../../assets/icons/comment.png'),
        },
    ];
    const DATA1 = [
        {
            name: "Choose language",
            image: require('../../../assets/icons/translation.png')
        },
        {
            name: "About",
            image: require('../../../assets/icons/information.png')
        },
        {
            name: "Send Feedback",
            image: require('../../../assets/icons/reply-message.png')
        },
        {
            name: 'Logout',
            image: require('../../../assets/icons/exit.png')
        }
    ]
    const renderItem = ({ item }) => {
        const handlePress = () => {
            if (item.name === 'Your Orders') {
                navigation.navigate('Order');
            } else if (item.name === 'Favorite Orders') {
                navigation.navigate('FavoriteOrdersScreen');
            } else if (item.name === 'Address Book') {
                navigation.navigate('AddressBookScreen');
            } else if (item.name === 'Food Ordering Help') {
                navigation.navigate('HelpScreen');
            }
        };

        return (
            <View style={styles.listItem}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.iconContainer}>
                        <Image source={item.image} style={styles.foodOrderIcon} />
                    </View>
                    <TouchableOpacity onPress={handlePress}>
                        <Text style={styles.listText}>{item.name}</Text>
                    </TouchableOpacity>
                </View>
                <Image source={require('../../../assets/icons/next.png')} style={styles.foodOrderIcon} />
            </View>
        );
    };

    return (
        <View style={styles.mainView}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.headerView}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={styles.iconContainer}>
                            <Image source={require('../../../assets/icons/back1.png')} style={styles.iconSize} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.ViewWithProfileInfo}>
                    <TouchableOpacity onPress={() => navigation.navigate('UserInfo')}>
                        <View>
                            <Text style={styles.profileText}>Test User</Text>
                            <Text style={{ ...styles.profileText, fontSize: 14 }}>testuser@gmail.com</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('UserInfo')}>
                        <Image source={require('../../../assets/icons/images-removebg-preview.png')} style={styles.profileImage} />
                    </TouchableOpacity>
                </View>
                <View style={styles.mutipleIcons}>
                    <TouchableOpacity>
                        <View style={styles.bigIconsDiv}>
                            <Image source={require('../../../assets/icons/heart.png')} style={{ width: 28, height: 28, }} />
                            <Text style={styles.bigIconText}>Favorites</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
                        <View style={styles.bigIconsDiv}>
                            <Image source={require('../../../assets/icons/credit-card.png')} style={{ width: 28, height: 28, }} />
                            <Text style={styles.bigIconText}>Payment</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.bigIconsDiv}>
                            <Image source={require('../../../assets/icons/settings.png')} style={{ width: 28, height: 28, }} />
                            <Text style={styles.bigIconText}>Settings</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.listView}>
                    <View style={{ borderLeftWidth: 3, marginLeft: 10, borderLeftColor: '#F66754' }}>
                        <Text style={styles.listHeaderText}>Food Orders</Text>
                    </View>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        style={{ marginTop: 12 }}
                    />
                </View>
                <View style={styles.listView}>
                    <View style={{ borderLeftWidth: 3, marginLeft: 10, borderLeftColor: '#F66754' }}>
                        <Text style={styles.listHeaderText}>Other features</Text>
                    </View>
                    <FlatList
                        data={DATA1}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        style={{ marginTop: 12 }}
                    />
                </View>
                <View style={{ height: 70 }} />

            </ScrollView>
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    mainView: {
        backgroundColor:"#f1f5f9"
        // paddingHorizontal: 15,
        // marginTop: 15,
    },
    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15
    },
    iconContainer: {
        height: 30,
        width: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 1,
        backgroundColor: 'white',
    },
    mutipleIcons: {
        flexDirection: 'row',
        paddingLeft: 4,
        paddingRight: 4,
        marginTop: 12,
        backgroundColor: 'white',
        // paddingHorizontal: 10,
        borderRadius: 12,
        justifyContent: 'space-between'
    },
    bigIconsDiv: {
        height: 88,
        width: 88,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: "black",
        borderRadius: 5,
        elevation: 0.1,
        backgroundColor: "white"
    },
    bigIconText: {
        fontWeight: "300",
        fontSize: 14,
        color: "black"
    },
    iconSize: {
        height: 13,
        width: 13,
        tintColor: '#F66754',
        paddingRight: 8,
    },
    ViewWithProfileInfo: {
        width: '98%',
        height: 100,
        // borderRadius: 15,
        alignSelf: 'center',
        elevation: 0.1,
        backgroundColor: 'white',
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    profileText: {
        fontSize: 19,
        color: 'black',
        fontWeight: '300',
        marginLeft: 14,
    },
    profileImage: {
        width: 70,
        height: 70,
        borderRadius: 60,
        borderWidth: 0.3,
        borderColor: 'black',
        marginRight: 10,
    },
    listView: {
        backgroundColor: 'white',
        width: '98%',
        alignSelf: 'center',
        marginTop: 12,
        // borderRadius: 15,
        elevation: 0.1,
        paddingVertical: 10,
    },
    listHeaderText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'black',
        marginLeft: 8,
    },
    listItem: {
        marginTop: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    foodOrderIcon: {
        width: 20,
        height: 20,
        tintColor: "black"
    },
    listText: {
        fontSize: 15,
        fontWeight: '300',
        marginLeft: 10,
        color: 'black',
    },
});
