import React, { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import signupStyles from './signupStyles';

const Signup = ({ navigation }) => {
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [PhoneNo, setPhoneNo] = useState('')
    const [Password, setPassword] = useState('')
    const [hide, setHide] = useState(false);
    return (
        <View style={signupStyles.mainView}>
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <Image source={require('../../../assets/icons/9118-removebg-preview.png')} style={{ height: 200, width: 200, alignSelf: "center" }} />
                <Text style={signupStyles.welcome}>WELCOME</Text>
                <Text style={{ alignSelf: "center", fontSize: 16, fontWeight: "300", color: "black" }}>
                    Get started with
                </Text>
                <Text style={{ alignSelf: "center", fontSize: 18, fontWeight: "300", color: 'black' }}>
                    your <Text style={{ color: "#F66754" }}>New</Text> account
                </Text>
                <View style={signupStyles.divWithInput}>
                    <TextInput placeholder='Full Name' style={signupStyles.textField}
                        onChangeText={(val) => setName(val)} />
                </View>
                <View style={signupStyles.divWithInput}>
                    <TextInput placeholder='Email address' style={signupStyles.textField}
                        onChangeText={(val) => setEmail(val)} />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={signupStyles.countryCode}>
                        <Text>+91(IN)</Text>
                        <Image source={require('../../../assets/icons/down-arrow.png')} style={{ width: 15, height: 15, marginLeft: 10 }} />
                    </View>
                    <View style={{ ...signupStyles.divWithInput, width: "66.7%" }}>
                        <TextInput placeholder='Phone No.' style={signupStyles.textField}
                            onChangeText={(val) => setPhoneNo(val)} />
                    </View>
                </View>
                <View style={{ ...signupStyles.divWithInput, flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                    <TextInput placeholder='Password' style={{ ...signupStyles.textField, width: "89%" }}
                        onChangeText={(val) => setPassword(val)} />
                    <TouchableOpacity onPress={() => setHide(!hide)}>
                        {hide ? <Image source={require('../../../assets/icons/openEye.png')} style={signupStyles.iconSize} /> :
                            <Image source={require('../../../assets/icons/closeEye.png')} style={signupStyles.iconSize} />}
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={signupStyles.button}>
                    <Text style={signupStyles.textButton}>SIGN UP</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 15 }}>
                    <Text style={{ alignSelf: "center", fontWeight: '300', color: "black" }}>
                        Already have an account ?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={{ color: "#F66754", fontWeight: "700" }}> LOG IN</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 50 }} />
            </ScrollView>
        </View>
    );
};

export default Signup;
