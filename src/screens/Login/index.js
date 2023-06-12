import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'

const Login = () => {
    const [hide, setHide] = useState(false)
    return (
        <View style={styles.mainView}>
            <ScrollView
                showsVerticalScrollIndicator={false}>
                {/* <TouchableOpacity>
                    <Image source={require('../../../assets/icons/back1.png')} style={styles.iconSize} />
                </TouchableOpacity> */}
                <Image source={require('../../../assets/images/3672341.jpg')} style={{ height: 350, width: 350, alignSelf: "center" }} />
                {/* <Text style={{ ...styles.mainHeadings, marginTop: 15 }}>SIGN UP</Text> */}
                <Text style={styles.welcome}>WELCOME</Text>
                <Text style={{ alignSelf: "center", fontSize: 20 }}>
                    Get started with
                </Text>
                <Text style={{ alignSelf: "center", fontSize: 22 }}>
                    your <Text style={{ color: "#F66754", }}> New </Text>
                    account
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
                <View style={{ ...styles.divWithInput, flexDirection: "row", alignItems: "center" }}>
                    <TextInput placeholder='Password' style={{ ...styles.textField, width: "89%" }} />
                    <TouchableOpacity onPress={() => setHide(!hide)}>
                        {hide ? <Image source={require('../../../assets/icons/openEye.png')} style={styles.iconSize} /> :
                            <Image source={require('../../../assets/icons/closeEye.png')} style={styles.iconSize} />}
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>LOG IN</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ alignSelf: "center", marginTop: 15 }}>
                        Don't have an account?
                        <Text style={{ color: "#F66754", fontWeight: "700" }}> SIGN UP</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginBottom: 30 }}>
                    <Text style={styles.forgot}>
                        Forgot Password
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default Login
const styles = StyleSheet.create({
    mainView: {
        paddingHorizontal: 15,
        // paddingVertical: 10,
        // marginBottom: 40,
    },
    welcome: {
        alignSelf: "center",
        opacity: 0.5,
        fontSize: 16,
        marginBottom: 15
    },
    iconSize: {
        height: 23,
        width: 23,
        tintColor: "#F66754"
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
    inputWithPhoneNo: {
        width: "75%",
    },
    button: {
        backgroundColor: "#F66754",
        marginTop: 5,
        height: 49,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        marginTop: 15
    },
    textButton: {
        color: "white",
        fontSize: 19,
        fontWeight: "700",
    },
    forgot: {
        color: "#F66754",
        fontWeight: "700",
        alignSelf: "center",
        marginTop: 10
    }
})