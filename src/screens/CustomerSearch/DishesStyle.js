import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        marginTop: 10,
        height: 30,
        width: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 1,
        backgroundColor: 'white',
    },
    iconSize: {
        height: 13,
        width: 13,
        tintColor: '#F66754',
        paddingRight: 8,
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        elevation: 10,
        backgroundColor: "white",
        marginTop: 16
    },
    searchIcon: {
        width: 20,
        height: 20,
        tintColor: '#F66754',
        marginLeft: 9,
        marginRight: 15
    },
    searchInput: {
        width: "80%",
        fontWeight: "300",
        fontSize: 16
    },
    titleContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        alignSelf: "flex-start"
    },
    titleText: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 30
    },
    flatListContainer: {
        paddingBottom: 20
    },
    ViewWithItem: {
        // marginBottom: 10,
        backgroundColor: "white",
        flexDirection: "row",
        height: 65,
        // elevation: 0.1,
        // borderRadius: 12,
        justifyContent: 'space-between'
    },
    itemImageContainer: {
        flexDirection: "row"
    },
    itemImage: {
        height: 55,
        width: 70,
        borderRadius: 7,
        marginLeft: 7,
        alignSelf: "center",
        marginRight: 10
    },
    itemDetails: {
        alignSelf: "center",
        marginLeft: 8
    },
    itemName: {
        fontSize: 17,
        fontWeight: "bold"
    },
    itemAddress: {
        fontSize: 13
    },
    itemTime: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    itemPriceContainer: {
        alignItems: 'center',
        justifyContent: "center",
        marginRight: 8
    },
    itemPrice: {
        color: "#F66754",
        fontWeight: 'bold',
        fontSize: 13
    },
    itemStatus: {
        marginRight: 1,
        padding: 3,
        opacity: 0.7,
        borderRadius: 4,
        marginTop: 10,
        fontSize: 12
    },
    recommendedText: {
        fontWeight: "300",
        color: "black",
        fontSize: 18,
    },
    additionalList: {
        backgroundColor: "white",
        elevation: 5,
        // marginTop: 15,
        // marginBottom: 15,
        // borderRadius: 12,
        // borderBottomRightRadius: 12,
        paddingRight: 15
    }
});

export default styles;
