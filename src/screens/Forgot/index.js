import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import forgotPasswordStyles from './styles';

const ForgotPassword = ({ navigation }) => {
    const [PhoneNo, setPhoneNo] = useState('')
    return (
        <View style={forgotPasswordStyles.mainView}>
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <View style={{ height: 27, width: 27, borderRadius: 15, justifyContent: 'center', alignItems: 'center', elevation: 1, backgroundColor: "white", }}>
                    <Image source={require('../../../assets/icons/back1.png')} style={forgotPasswordStyles.iconSize} />
                </View>
            </TouchableOpacity>
            <Image source={require('../../../assets/icons/9118-removebg-preview.png')} style={{ height: 200, width: 200, alignSelf: "center" }} />
            <Text style={forgotPasswordStyles.forgotPWd}>
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
            <View style={{ flexDirection: "row" }}>
                <View style={forgotPasswordStyles.countryCode} >
                    <Text>+91(IN)</Text>
                    <Image source={require('../../../assets/icons/down-arrow.png')} style={{ width: 15, height: 15, marginLeft: 10 }} />
                </View>
                <View style={{ ...forgotPasswordStyles.divWithInput, width: "66.7%" }}>
                    <TextInput placeholder='Phone No.' style={forgotPasswordStyles.textField}
                        onChangeText={(val) => setPhoneNo(val)} />
                </View>
            </View>
            <TouchableOpacity style={forgotPasswordStyles.button} onPress={() => { Alert.alert('') }}>
                <Text style={forgotPasswordStyles.textButton}>Forgot Password?</Text>
            </TouchableOpacity>
        </View>
    );
};
export default ForgotPassword;
