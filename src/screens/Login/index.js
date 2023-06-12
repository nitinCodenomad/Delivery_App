import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'

const Login = ({ navigation }) => {
    const [hide, setHide] = useState(false)
    return (
        <View style={styles.mainView}>
            <ScrollView
                showsVerticalScrollIndicator={false}>

                <Image source={require('../../../assets/icons/9118-removebg-preview.png')} style={{ height: 200, width: 200, alignSelf: "center", }} />
                <Text style={styles.welcome}>WELCOME BACK</Text>
                <Text style={{ alignSelf: "center", fontSize: 16, color: "black", fontWeight: "300" }}>
                    Login in to
                </Text>
                <Text style={{ alignSelf: "center", fontSize: 18, color: "black", fontWeight: "300", color: "#F66754" }}>
                    your <Text style={{ color: "black" }}>
                        account
                    </Text>
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
                <TouchableOpacity style={{ alignSelf: 'flex-end', marginTop: 2 }} onPress={() => navigation.navigate('ForgotPassword')}>
                    <Text style={styles.forgot}>
                        Forgot Password ?
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>LOG IN</Text>
                </TouchableOpacity>
                <View style={{ justifyContent: 'center', alignItems: "center", flexDirection: "row", marginTop: 15 }}>
                    <Text style={{ alignSelf: "center",fontWeight:'300',color:"black" }}>
                        Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                        <Text style={{ color: "#F66754", fontWeight: "800" }}> SIGN UP</Text>
                    </TouchableOpacity>
                </View>


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
        // textDecorationLine: "underline",
        fontSize: 12,
        // fontWeight: "300",
        marginBottom: 6
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
        marginTop: 10,
        marginBottom: 10
    }
})