import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
const Data = [{

}, {

}]
const SpecificMenu = () => {
    return (
        <ScrollView>
            <View style={styles.mainView}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View style={{ height: 27, width: 27, borderRadius: 15, justifyContent: 'center', alignItems: 'center', elevation: 1, backgroundColor: "white", }}>
                        <TouchableOpacity onPress={() => navigation.goBack()} >
                            <Image source={require('../../../assets/icons/back1.png')} style={styles.iconSize} />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: "300" }}>Specific Shop</Text>
                    <Image source={require('../../../assets/icons/search-interface-symbol.png')} style={{ ...styles.iconSize, width: 18, height: 18 }} />
                </View>
                <View style={styles.viewWithImage}>
                    <ImageBackground source={require('../../../assets/images/shop.jpeg')} style={{ height: 250, width: 340, borderRadius: 15, alignSelf: "center", marginTop: 5 }} />
                </View>
                <Text style={{ fontSize: 18, fontWeight: "800", marginTop: 10, color: "black" }}>
                    Recommended
                </Text>
                <View style={{ flexDirection: "row", marginBottom: 10 }}>
                    <View style={{
                        backgroundColor: "white",
                        elevation: 10,
                        width: 160,
                        alignItems: 'center',
                        height: 175,
                        borderRadius: 10,
                        justifyContent: "center",
                        marginTop: 10
                    }}>
                        <Image source={require('../../../assets/images/pasta.jpg')} style={{ width: 150, height: 115, marginTop: 10, }} />
                        <Text style={{ marginTop: 4, alignSelf: "flex-start", marginLeft: 10, color: "black", fontWeight: "300" }}>
                            Pasta
                        </Text>
                        <Text style={{ marginTop: 4, alignSelf: "flex-start", marginLeft: 10, color: "black", marginBottom: 10, fontWeight: "300" }}>
                            Rs. 140
                        </Text>
                    </View>
                    <View style={{
                        backgroundColor: "white",
                        elevation: 10,
                        width: 160,
                        alignItems: 'center',
                        height: 175,
                        borderRadius: 10,
                        justifyContent: "center",
                        marginLeft: 10,
                        marginTop: 10,
                        marginRight: 10,

                    }}>
                        <Image source={require('../../../assets/images/pasta.jpg')} style={{ width: 150, height: 115, marginTop: 10 }} />
                        <Text style={{ marginTop: 4, alignSelf: "flex-start", marginLeft: 10, color: "black", fontWeight: "300" }}>
                            Pasta
                        </Text>
                        <Text style={{ marginTop: 4, alignSelf: "flex-start", marginLeft: 10, color: "black", marginBottom: 10, fontWeight: "300" }}>
                            Rs. 140
                        </Text>
                    </View>
                </View>
                <View style={{
                    flexDirection: "row",
                    marginBottom: 10,
                }}>
                    <View style={{
                        backgroundColor: "white",
                        elevation: 10,
                        width: 160,
                        alignItems: 'center',
                        height: 175,
                        borderRadius: 10,
                        justifyContent: "center",
                        marginRight: 10,
                        marginTop: 10
                    }}>
                        <Image source={require('../../../assets/images/pasta.jpg')} style={{ width: 150, height: 115, marginTop: 10 }} />
                        <Text style={{ marginTop: 4, alignSelf: "flex-start", marginLeft: 10, color: "black", fontWeight: "300" }}>
                            Pasta
                        </Text>
                        <Text style={{ marginTop: 4, alignSelf: "flex-start", marginLeft: 10, color: "black", marginBottom: 10, fontWeight: "300" }}>
                            Rs. 140
                        </Text>
                    </View>
                    <View style={{
                        backgroundColor: "white",
                        elevation: 10,
                        width: 160,
                        alignItems: 'center',
                        height: 175,
                        borderRadius: 10,
                        justifyContent: "center",
                        marginRight: 10,
                        marginTop: 10
                    }}>
                        <Image source={require('../../../assets/images/pasta.jpg')} style={{ width: 150, height: 115, marginTop: 10 }} />
                        <Text style={{ marginTop: 4, alignSelf: "flex-start", marginLeft: 10, color: "black", fontWeight: "300" }}>
                            Pasta
                        </Text>
                        <Text style={{ marginTop: 4, alignSelf: "flex-start", marginLeft: 10, color: "black", marginBottom: 10, fontWeight: "300" }}>
                            Rs. 140
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
export default SpecificMenu
const styles = StyleSheet.create({
    mainView: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        // backgroundColor: "white"
    },
    viewWithImage: {

    },
    iconSize: {
        height: 13,
        width: 13,
        tintColor: "#F66754",
        paddingRight: 8
    },
})