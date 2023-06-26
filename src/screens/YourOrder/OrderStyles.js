import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 15,
    // paddingVertical: 10,
  },
  mainView: {
    width: "100%",
    backgroundColor: 'white',
    marginTop: 5,
    justifyContent: "flex-end"

  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    // marginTop: 10,
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 0.1,
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
    elevation: 1,
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
    color: "black",
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
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  itemImageContainer: {
    flexDirection: "row",
  },
  itemImage: {
    height: 80,
    width: 80,
    borderRadius: 7,
    marginLeft: 7,
    alignSelf: "center",
    marginRight: 10
  },
  itemDetails: {
    alignSelf: "center",
    marginLeft: 5
  },
  itemName: {
    fontSize: 17,
    color: 'black',
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
    marginLeft: 25
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
  button: {
    backgroundColor: "white",
    height: 40,
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    elevation: 1
    // borderRadius: 12,
    // marginTop: 6
  },
  textButton: {
    color: "black",
    // fontSize: 19,
    // fontWeight: "700",
  }
});

export default styles;
