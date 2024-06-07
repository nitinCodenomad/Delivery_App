import { View, Text, Touchable, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

const SignInButton = () => {
    return (
        <View>
            <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
                <Image source={require('../../Assets/Images/googleICon.png')} style={styles.icon} />
                <Text style={styles.textStyle}>Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.buttonStyle, backgroundColor: 'white', elevation: 1 }} activeOpacity={0.5}>
                <Image source={require('../../Assets/Images/smartphone.png')} style={styles.icon} />
                <Text style={{ ...styles.textStyle, color: 'black' }}>Continue with Phone </Text>
            </TouchableOpacity>
        </View>
    )
}

export default SignInButton
const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: "black", width: "90%", height: 55, borderRadius: 25, alignSelf: "center",
        padding: 10, alignItems: "center", justifyContent: "center",
        flexDirection: "row",
        marginTop: 15
    },
    textStyle: {
        color: "white",
        fontSize: 18,
        fontFamily: "Gilroy-SemiBold"
    },
    icon: {
        height: 23,
        width: 23, position: "absolute", left: 20
    }
})