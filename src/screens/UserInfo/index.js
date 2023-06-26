import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'

const UserInfo = ({ navigation }) => {
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [PhoneNo, setPhoneNo] = useState('')
    const [Password, setPassword] = useState('')
    return (
        <View style={styles.mainView}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* <View style={styles.headerView}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={styles.iconContainer}>
                            <Image source={require('../../../assets/icons/back1.png')} style={{ tintColor: '#F66754', height: 14, width: 14 }} />
                        </View>
                    </TouchableOpacity>
                    <View style={{ width: "90%", justifyContent: "center" }}>
                        <Text style={{ alignSelf: "center", fontSize: 18, fontWeight: "300", color: "black" }}>
                            Edit Profile
                        </Text>
                    </View>
                </View> */}

                <View style={{ flexDirection: 'row', alignItems: "center", paddingVertical: 15, }}>
                    <Image source={require('../../../assets/icons/images-removebg-preview.png')} style={{ ...styles.profileImage, }} />
                    <Text style={{ color: "#F66754", fontSize: 16, alignSelf: "center", marginLeft: 15, fontWeight: "500" }}>
                        Change Photo
                    </Text>
                </View>
                <View style={styles.divWithInput}>
                    <TextInput placeholder='Full Name' style={styles.textField}
                        onChangeText={(val) => setName(val)} />
                    <Text style={{ marginRight: 15, fontSize: 14, color: "#F66754", fontWeight: "300" }}>Change</Text>
                </View>
                <View style={styles.divWithInput}>
                    <TextInput placeholder='Phone No.' style={styles.textField}
                        onChangeText={(val) => setPhoneNo(val)} />
                    <Text style={{ marginRight: 15, fontSize: 14, color: "#F66754", fontWeight: "300" }}>Change</Text>
                </View>
                <View style={styles.divWithInput}>
                    <TextInput placeholder='Email Address' style={styles.textField}
                        onChangeText={(val) => setEmail(val)} />
                </View>
                <View style={styles.divWithInput}>
                    <TextInput placeholder='Password' style={styles.textField}
                        secureTextEntry={true}
                        onChangeText={(val) => setPassword(val)} />
                    <Text style={{ marginRight: 15, fontSize: 14, color: "#F66754", fontWeight: "300" }}>Change</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>SAVE CHANGES</Text>
                </TouchableOpacity>
            </ScrollView>
        </View >
    )
}

export default UserInfo
const styles = StyleSheet.create({
    mainView: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        // backgroundColor: "#f1f5f9"
        backgroundColor: 'white',
    },
    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        height: 30,
        width: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 1,
        backgroundColor: 'white',
    },

    profileImage: {
        width: 130,
        height: 130,
        borderRadius: 60,
    },
    welcome: {
        alignSelf: "center",
        fontWeight: "300",
        fontSize: 12,
        marginBottom: 6
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
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    textField: {
        width: "70%"
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
        marginTop: 10,
        height: 49,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        marginTop: 15
    },
    textButton: {
        color: "white",
        fontSize: 16,
        fontWeight: "300",
    }
})