import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import Tabs from '../Navigation/TopTabs'
const CustomerSearch = () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Image source={require('../../assets/icons/search-interface-symbol.png')} style={styles.searchIcon} />
                <TextInput
                    placeholder='Search....'
                    style={styles.searchInput}
                />
            </View>
        </View>
    )
}
export default CustomerSearch

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        // paddingVertical: 10,
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        elevation: 1,
        backgroundColor: "white",
        marginTop: 16
    },
    searchInput: {
        width: "80%",
        fontWeight: "300",
        fontSize: 16
    },
    searchIcon: {
        width: 20,
        height: 20,
        tintColor: '#F66754',
        marginLeft: 9,
        marginRight: 15
    },
})