import { StyleSheet } from 'react-native';

const loginStyles = StyleSheet.create({
  mainView: {
    paddingHorizontal: 15,
  },
  welcome: {
    alignSelf: "center",
    fontSize: 12,
    marginBottom: 6
  },
  iconSize: {
    height: 23,
    width: 23,
    tintColor: "#F66754"
  },
  divWithInput: {
    marginTop: 20,
    borderWidth: 0.3,
    backgroundColor: "white",
    borderRadius: 4
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
  button: {
    backgroundColor: "#F66754",
    marginTop: 5,
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
  },
  forgot: {
    color: "#F66754",
    fontWeight: "700",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10
  }
});

export default loginStyles;
