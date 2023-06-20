import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const UserInfo = ({ navigation }) => {
    return (
        <View style={styles.mainView}>

            <View style={styles.headerView}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={styles.iconContainer}>
                        <Image source={require('../../../assets/icons/back1.png')} style={styles.iconSize} />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{
                // backgroundColor: "black",
                height: "70%",
                elevation:10,
                alignSelf: "center",
                width: "100%",
                backgroundColor: "white",
                marginTop: 10,
                borderRadius: 10
            }}>
                <Image source={require('../../../assets/icons/images-removebg-preview.png')} style={{ ...styles.profileImage, alignSelf: "center" }} />
            </View>
        </View>
    )
}

export default UserInfo
const styles = StyleSheet.create({
    mainView: {
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
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
    iconSize: {
        height: 13,
        width: 13,
        tintColor: '#F66754',
        paddingRight: 8,
    },
    profileImage: {
        width: 75,
        height: 75,
        borderRadius: 60,
        borderWidth: 1,
        borderColor: 'black',
        marginRight: 10,
        position: "absolute",
        top: -25,
        // bottom:10
    },
})