import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
const FeedBack = () => {
    return (
        <View style={styles.mainView}>
            <View style={{ marginTop: 25 }}>
                <Text style={{ fontSize: 17, marginBottom: 10, color: "black", fontWeight: "300" }}>
                    How could we improve our service?
                </Text>
                <TextInput
                    placeholder='Enter Text'
                    placeholderTextColor={"black"}
                    style={{
                        ...styles.textField,
                        backgroundColor: "white",
                        height: 150,
                        elevation: 1,
                        textAlignVertical: "top",
                        // fontSize: 18,
                        paddingLeft: 5,
                        paddingTop: 5,
                        fontWeight: '300',
                        borderTopWidth: 0,
                    }}
                    multiline={true}
                // onChangeText={value => setMessage(value)}
                />
                <TouchableOpacity >
                    <View style={{ backgroundColor: "#F66754", width: "95%", height: 45, justifyContent: "center", borderRadius: 10, alignSelf: "center", marginTop: 40 }}>
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: "300", alignSelf: "center" }}>
                            SUBMIT
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default FeedBack
const styles = StyleSheet.create({
    mainView: {
        paddingHorizontal: 15,
        paddingHorizontal: 10,
        backgroundColor: 'white'
    }
})