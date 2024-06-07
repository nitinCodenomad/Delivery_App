import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput, StatusBar } from 'react-native'
import React, { useState } from 'react'
import SignInButton from '../Component/SignInButton'

import LottieView from 'lottie-react-native';
const Login = () => {
    const [hide, setHide] = useState(false)
    return (
        <View style={styles.mainView}>
            <StatusBar color={'white'} />
            <View style={{height: '50%' }}>
               <View style={{position:"relative"}}>
               <Image source={require('../../Assets/Images/MainLogo.png')} style={styles.mainLogo} />
                <View style={{ position:"absolute",right:80}}>
                <LottieView source={require('../../Animation/AnimationHeart.json')} autoPlay
                    loop style={{ width: 100, height: 200}} />
                </View>
                <Text style={styles.mainText}>
                    tango
                </Text>
               </View>
            </View>
            <View style={{ width: "90%", alignSelf: "center", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View>
                    <Text style={styles.registerText}>
                        Register to Get a
                    </Text>
                    <Text style={styles.registerText}>
                        Free Gift!
                    </Text>
                </View>
                <LottieView source={require('../../Animation/AnimationGift.json')} autoPlay
                    loop style={{ width: 90, height: 90 }} />
            </View>
            <View style={{ height: "30%" }}>
                <SignInButton />
            </View>
            <View style={styles.viewWithBottomText}>
                <Text style={styles.bottomText}>
                    By logging in you confirm you're over 18 years old and agree to our
                </Text>
                <View style={styles.viewWithBottomText1}>
                    <Text style={{ ...styles.bottomText, marginRight: 5, textDecorationLine: "underline" }}>
                        Terms of Use
                    </Text>
                    <Text style={styles.bottomText}>
                        and
                    </Text>
                    <Text style={{ ...styles.bottomText, marginLeft: 5, textDecorationLine: "underline" }}>
                        Privacy Policy
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Login
const styles = StyleSheet.create({
    mainView: {
        paddingHorizontal: 15,
        height: "100%"
    },
    mainLogo: {
        height: 130,
        width: 130,
        alignSelf: "center",
        marginTop: "30%"
    },
    mainText: {
        alignSelf: "center",
        color: "black",
        // fontStyle:"italic",
        fontSize: 37,
        top: -22,
        fontFamily: "Gilroy-Bold"

    },
    viewWithBottomText: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        position: "absolute",
        bottom: 20
    },
    viewWithBottomText1: {
        flexDirection: "row",
    },
    bottomText: {
        fontSize: 11,
        color: 'grey',
        fontFamily: "Gilroy-Regular"
    },
    registerText: {
        fontSize: 24,
        color: "black",
        fontFamily: "Gilroy-Bold"
    }

})