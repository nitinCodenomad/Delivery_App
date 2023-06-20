import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Modal } from 'react-native'
import React, { useState } from 'react'
const paymentWalletsData = [
    { id: 1, name: 'PhonePe', image: require('../../../assets/images/phonepe-logo-icon.png') },
    { id: 2, name: 'Paytm', image: require('../../../assets/images/paytm.png') },
    { id: 3, name: 'GooglePay', image: require('../../../assets/images/google-pay.png') },
];
const Payment = () => {
    const [hide, setHide] = useState(false)
    const [visible, setVisible] = useState(false)
    const [visible1, setVisible1] = useState(false)

    return (
        <View style={{ ...styles.mainView, }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <View style={{ height: 27, width: 27, borderRadius: 15, justifyContent: 'center', alignItems: 'center', elevation: 1, backgroundColor: "white", marginRight: 10 }}>
                        <Image source={require('../../../assets/icons/back1.png')} style={styles.iconSize} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ fontSize: 13.5, textAlign: "center", fontWeight: "300", color: 'black' }}>Payment Screen</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 15, height: 30, justifyContent: 'center', }}>
                <Text style={{ padding: 3, fontSize: 13, fontWeight: "300", color: "black" }}>Card Payment</Text>
            </View>
            <View style={{ backgroundColor: "white", height: 60, alignItems: "center", flexDirection: "row", justifyContent: "space-between", elevation: 1, }}>
                <View style={{ flexDirection: "row" }}>
                    <Image source={require('../../../assets/icons/credit-card.png')} style={{ height: 20, width: 20, tintColor: "#F66754", marginLeft: 5 }} />
                    <Text style={{ fontWeight: "500", marginLeft: 10, fontSize: 15, color: "black" }}>Credit/Debit card</Text>
                </View>
                <TouchableOpacity onPress={() => setVisible1(!visible1)}>
                    <Image source={require('../../../assets/icons/arrow-down-sign-to-navigate.png')} style={{ width: 12, height: 12, marginRight: 10 }} />
                </TouchableOpacity>
            </View>



            <View style={{ marginTop: 10, justifyContent: 'center', }}>
                <Text style={{ padding: 3, fontSize: 13, fontWeight: "300", color: "black" }}>Payment Wallets</Text>
            </View>
            <View style={{ backgroundColor: "white", padding: 10, elevation: 1, }}>
                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity>
                            <Image source={require('../../../assets/images/phonepe-logo-icon.png')} style={{ height: 45, width: 45 }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 13, marginTop: 5, fontWeight: "300", color: "black" }}>PhonePe</Text>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity>
                            <Image source={require('../../../assets/images/paytm.png')} style={{ height: 45, width: 45 }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 13, marginTop: 5, fontWeight: "300", color: "black" }}>Paytm</Text>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity>
                            <Image source={require('../../../assets/images/google-pay.png')} style={{ height: 45, width: 45 }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 13, marginTop: 5, fontWeight: "300", color: "black" }}>GooglePay</Text>
                    </View>
                </View>
            </View>
            <View style={{ height: 30, justifyContent: 'center', }}>
                <Text style={{ padding: 3, fontSize: 13, fontWeight: "300", color: "black", marginTop: 7 }}>UPI</Text>
            </View>
            <View style={{ backgroundColor: "white", height: 60, alignItems: "center", flexDirection: "row", justifyContent: "space-between", elevation: 1 }}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontWeight: "500", marginLeft: 10, fontSize: 15, color: "black" }}>Pay via upi</Text>
                </View>
                <TouchableOpacity onPress={() => setVisible(!visible)}>
                    <Image source={require('../../../assets/icons/arrow-down-sign-to-navigate.png')} style={{ width: 12, height: 12, marginRight: 10 }} />
                </TouchableOpacity>
            </View>
            <Modal
                visible={visible}
                transparent={true}
                animationType='slide'>
                <View style={{ height: 150, width: "75%", alignSelf: "center", borderRadius: 12, backgroundColor: "white", justifyContent: "center", marginTop: "51%", elevation: 10 }}>
                    <Text style={{ fontWeight: "500", textAlign: "center", marginBottom: 10, fontSize: 17, color: "black" }}>
                        Pay Via upi id
                    </Text>
                    <TextInput style={{ backgroundColor: "white", elevation: 10, borderRadius: 8, width: "85%", alignSelf: "center", height: 36 }} placeholder='Enter your Upi' />
                    <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", marginTop: 15 }} >
                        <TouchableOpacity onPress={() => setVisible(!visible)}>
                            <View style={{ backgroundColor: "#F66754", width: 120, height: 40, justifyContent: "center", alignItems: "center", borderRadius: 8, }}>
                                <Text style={{ color: 'white', fontSize: 15, fontWeight: "bold" }}>
                                    Done
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <View style={{ height: 30, justifyContent: 'center', }}>
                <Text style={{ padding: 3, fontSize: 13, fontWeight: "300", color: "black", marginTop: 7 }}>Cash</Text>
            </View>
            <View style={{ backgroundColor: "white", elevation: 1, }}>
                <View style={{ alignItems: "center", flexDirection: "row", justifyContent: "space-between", height: 80, borderRadius: 12 }}>
                    <Text style={{ fontWeight: "500", marginLeft: 10, fontSize: 15, color: "black" }}>
                        Cash On Delivery
                    </Text>
                    <TouchableOpacity onPress={() => setHide(!hide)}>
                        <View style={{ borderRadius: 7, height: 20, width: 20, borderWidth: 1.5, borderColor: "#F66754", backgroundColor: "white", justifyContent: "center", marginRight: 10, alignItems: "center" }}>
                            {hide ? <Image source={require('../../../assets/icons/check-mark.png')} style={{ width: 15, height: 15, tintColor: "#F66754", }} /> : null}
                        </View>
                    </TouchableOpacity>
                </View>
                {hide ? <TouchableOpacity>
                    <View style={{ backgroundColor: "#F66754", width: "95%", height: 45, justifyContent: "center", borderRadius: 10, alignSelf: "center", marginBottom: 10 }}>
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: "500", alignSelf: "center" }}>
                            Pay with cash
                        </Text>
                    </View>
                </TouchableOpacity> : null}
                <Modal
                    visible={visible1}
                    transparent={true}
                    animationType='slide'>
                    <View style={{ height: 250, width: "75%", alignSelf: "center", borderRadius: 12, backgroundColor: "white", justifyContent: "center", marginTop: "51%", elevation: 5 }}>
                        <Text style={{ fontWeight: "500", textAlign: "center", marginBottom: 10, fontSize: 17 }}>
                            Pay-Via Card
                        </Text>
                        <TextInput style={{ backgroundColor: "white", elevation: 1, borderRadius: 2, borderWidth: 0.2, width: "80%", alignSelf: "center", height: 36 }} placeholder='Credit Card Number' />
                        <View style={{ marginTop: 15 }}>
                            <TextInput style={{ backgroundColor: "white", elevation: 1, borderRadius: 2, borderWidth: 0.2, width: "80%", alignSelf: "center", height: 36 }} placeholder='Card Holder Name' />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-around' }}>
                            <TextInput style={{ backgroundColor: "white", elevation: 1, borderRadius: 2, borderWidth: 0.2, width: "35%", alignSelf: "center", height: 36 }} placeholder='Expiry' />
                            <TextInput style={{ backgroundColor: "white", elevation: 1, borderRadius: 2, borderWidth: 0.2, width: "30%", alignSelf: "center", height: 36 }} placeholder='CVV' />
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", marginTop: 15 }} >
                            <TouchableOpacity onPress={() => setVisible1(!visible1)}>
                                <View style={{ backgroundColor: "#F66754", width: 120, height: 40, justifyContent: "center", alignItems: "center", borderRadius: 5 }}>
                                    <Text style={{ color: 'white', fontSize: 15, fontWeight: "bold" }}>
                                        Done
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}
export default Payment
const styles = StyleSheet.create({
    mainView: {
        // paddingHorizontal: 15,
        paddingVertical: 10,
    },
    iconSize: {
        height: 13,
        width: 13,
        tintColor: "#F66754",
        paddingRight: 8
    },
    listView: {
        backgroundColor: 'white',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-around",
        height: 85,
    },
    listHeader: {
        fontSize: 19,
        fontWeight: "500"
    }
})
