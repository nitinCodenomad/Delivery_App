import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => (
            navigation.replace('Signup')
        ), 2000)
    }, [])
    return (
        <View style={styles.mainView}>
            <Image source={require('../../../assets/icons/9118-removebg-preview.png')} style={styles.mainImage} />
        </View>
    )
}
export default Splash
const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 10,
        justifyContent: "center"
    },
    mainImage: {
        height: 300,
        width: 300,
        alignSelf: "center"
    }
})