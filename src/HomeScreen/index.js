import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import homeStyles from './homeStyles';

const Home = ({ navigation }) => {
    const handleLogin = () => {
        navigation.navigate('Login');
    };

    const handleSignup = () => {
        navigation.navigate('Signup');
    };

    const handleFacebookLogin = () => {

    };

    const handleGoogleLogin = () => {

    };

    return (
        <View style={homeStyles.container}>
            {/* <Image source={require('../../../assets/images/home-background.png')} style={homeStyles.backgroundImage} /> */}
            <View style={homeStyles.content}>
                {/* <Image source={require('../../../assets/icons/logo.png')} style={homeStyles.logo} /> */}
                <Text style={homeStyles.welcomeText}>Welcome to MyApp</Text>
                <TouchableOpacity style={homeStyles.loginButton} onPress={handleLogin}>
                    <Text style={homeStyles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={homeStyles.signupButton} onPress={handleSignup}>
                    <Text style={homeStyles.buttonText}>SIGN UP</Text>
                </TouchableOpacity>
                <View style={homeStyles.socialButtonsContainer}>
                    <TouchableOpacity style={homeStyles.socialButton} onPress={handleFacebookLogin}>
                        {/* <Image source={require('../../../assets/icons/facebook.png')} style={homeStyles.socialButtonIcon} /> */}
                    </TouchableOpacity>
                    <TouchableOpacity style={homeStyles.socialButton} onPress={handleGoogleLogin}>
                        <Image source={{ uri: "" }} style={homeStyles.socialButtonIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Home;
