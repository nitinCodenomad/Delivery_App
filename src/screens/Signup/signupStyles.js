import { StyleSheet } from 'react-native';

const signupStyles = StyleSheet.create({
  mainView: {
    paddingHorizontal: 15,
    paddingVertical:10
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
    borderRadius: 4
  },
  textField: {
    width: "100%"
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
    fontSize: 19,
    fontWeight: "700",
  }
});

export default signupStyles;
