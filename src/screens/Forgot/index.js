import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const ForgotPassword = ({ navigation }) => {
    const [hide, setHide] = useState(false)
    return (
        <View style={styles.mainView}>
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <View style={{ height: 27, width: 27, borderRadius: 15, justifyContent: 'center', alignItems: 'center', elevation: 1, backgroundColor: "white", }}>
                    <Image source={require('../../../assets/icons/back1.png')} style={styles.iconSize} />
                </View>
            </TouchableOpacity>
            <Image source={require('../../../assets/icons/9118-removebg-preview.png')} style={{ height: 200, width: 200, alignSelf: "center", }} />
            <Text style={styles.forgotPWd}>
                FORGOT PASSWORD
            </Text>
            <Text style={{ alignSelf: "center", fontSize: 16, fontWeight: "300", color: "black" }}>
                Enter your mobile number
            </Text>
            <Text style={{ alignSelf: "center", fontSize: 18, fontWeight: "300", color: 'black' }}>
                to <Text style={{ color: "#F66754" }}>
                    search
                </Text> for your account
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
            <TouchableOpacity style={styles.button} onPress={() => Navigation.navigate('')}>
                <Text style={styles.textButton}>Forgot Password?</Text>
            </TouchableOpacity>
        </View>
    )
}
export default ForgotPassword
const styles = StyleSheet.create({
    forgotPWd: {
        alignSelf: "center",
        // textDecorationLine: "underline",
        fontSize: 12,
        fontWeight: "300",
        marginBottom: 6
    },
    mainView: {
        paddingHorizontal: 15,
        paddingVertical: 10,
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
        fontSize: 20,
        fontWeight: "700",
    },
    iconSize: {
        height: 13,
        width: 13,
        tintColor: "#F66754",
        paddingRight:8
    },
})