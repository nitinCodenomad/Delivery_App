import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const ForgotPassword = () => {
    const [hide, setHide] = useState(false)
    return (
        <View style={styles.mainView}>
            <Text style={styles.forgotPWd}>
                Forgot Password
            </Text>
            <Text style={{ alignSelf: "center", fontSize: 20 }}>
                Enter your mobile number
            </Text>
            <Text style={{ alignSelf: "center", fontSize: 22 }}>
                to search for your account
            </Text>
            <View style={{ flexDirection: "row", }}>
                <View style={styles.countryCode} >
                    <Text>+91(IN)</Text>
                    <Image source={require('../../../assets/icons/down-arrow.png')} style={{ width: 15, height: 15, marginLeft: 10 }} />
                </View>
                <View style={{ ...styles.divWithInput, width: "66.7%" }}>
                    <TextInput placeholder='Phone No.' style={styles.textField} />
                </View>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>LOG IN</Text>
            </TouchableOpacity>
        </View>
    )
}
export default ForgotPassword
const styles = StyleSheet.create({
    forgotPWd: {
        alignSelf: "center",
        opacity: 0.5,
        fontSize: 16,
        marginBottom: 15
    },
    mainView: {
        paddingHorizontal: 15,
        // paddingVertical: 10,
        marginBottom: 40,
    },
    divWithInput: {
        marginTop: 20,
        borderWidth: 0.3,
        backgroundColor: "white",
        borderRadius: 4
    },
    countryCode: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        borderRadius: 4,
        borderWidth: 0.3,
        width: "30%",
        marginRight: 10,
        backgroundColor: 'white',
        flexDirection: "row"
    },
    button: {
        backgroundColor: "#F66754",
        height: 49,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        marginTop: 30
    },
    textButton: {
        color: "white",
        fontSize: 19,
        fontWeight: "700",
    },
    iconSize: {
        height: 23,
        width: 23,
        tintColor: "#F66754"
    },
})