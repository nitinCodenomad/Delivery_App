import { Image, ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
const Signup = () => {
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
                <View style={{ ...styles.divWithInput, }}>
                    <TextInput placeholder='Full Name' style={styles.textField} />
                </View>
                <View style={{ ...styles.divWithInput, }}>
                    <TextInput placeholder='Email address ' style={styles.textField} />
                </View>
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
                {/* <Text style={styles.bottomText}>Creating an account,you agreed to term & condition</Text> */}
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}> SIGN UP</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginBottom: 30 }}>
                    <Text style={{ alignSelf: "center", marginTop: 15 }}>
                        Already have an account?
                        <Text style={{ color: "#F66754", fontWeight: "700" }}> LOG IN </Text>
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View >

    )
}
export default Signup
const styles = StyleSheet.create({
    mainView: {
        paddingHorizontal: 15,
        // paddingVertical: 10,
        // marginBottom: 30,
    },
    welcome: {
        alignSelf: "center",
        opacity: 0.5,
        fontSize: 16,
        marginBottom: 15
    },
    mainHeadings: {
        alignSelf: "flex-start",
        fontSize: 25,
        fontWeight: "800"
    },
    divWithInput: {
        marginTop: 20,
        borderWidth: 0.3,
        backgroundColor: "white",
        borderRadius: 4
    },
    textField: {
        width: "100%"
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
    iconSize: {
        height: 23,
        width: 23,
        tintColor: "#F66754"
    },
    bottomText: {
        marginTop: 15,
        fontSize: 11,
        textAlign: "center"
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
    }
})