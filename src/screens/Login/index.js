import React, { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import loginStyles from './loginStyles';
const Login = ({ navigation }) => {
  const [PhoneNo, setPhoneNo] = useState('')
  const [Password, setPassword] = useState('')
  const [hide, setHide] = useState(false);
  return (
    <View style={loginStyles.mainView}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={require('../../../assets/icons/9118-removebg-preview.png')} style={{ height: 200, width: 200, alignSelf: "center" }} />
        <Text style={loginStyles.welcome}>WELCOME BACK</Text>
        <Text style={{ alignSelf: "center", fontSize: 16, color: "black", fontWeight: "300" }}>
          Login in to
        </Text>
        <Text style={{ alignSelf: "center", fontSize: 18, color: "black", fontWeight: "300", color: "#F66754" }}>
          your <Text style={{ color: "black" }}>
            account
          </Text>
        </Text>
        <View style={{ flexDirection: "row" }}>
          <View style={loginStyles.countryCode} >
            <Text>+91(IN)</Text>
            <Image source={require('../../../assets/icons/down-arrow.png')} style={{ width: 15, height: 15, marginLeft: 10 }} />
          </View>
          <View style={{ ...loginStyles.divWithInput, width: "66.7%" }}>
            <TextInput placeholder='Phone No.' style={loginStyles.textField}
              onChangeText={(val) => setPhoneNo(val)} />
          </View>
        </View>
        <View style={{ ...loginStyles.divWithInput, flexDirection: "row", alignItems: "center" }}>
          <TextInput placeholder='Password' style={{ ...loginStyles.textField, width: "89%" }}
            onChangeText={(val) => setPassword} />
          <TouchableOpacity onPress={() => setHide(!hide)}>
            {hide ? <Image source={require('../../../assets/icons/openEye.png')} style={loginStyles.iconSize} /> :
              <Image source={require('../../../assets/icons/closeEye.png')} style={loginStyles.iconSize} />}
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ alignSelf: 'flex-end', marginTop: 2 }} onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={loginStyles.forgot}>
            Forgot Password ?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={loginStyles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={loginStyles.textButton}>LOG IN</Text>
        </TouchableOpacity>
        <View style={{ justifyContent: 'center', alignItems: "center", flexDirection: "row", marginTop: 15 }}>
          <Text style={{ alignSelf: "center", fontWeight: '300', color: "black" }}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={{ color: "#F66754", fontWeight: "800" }}> SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default Login;
