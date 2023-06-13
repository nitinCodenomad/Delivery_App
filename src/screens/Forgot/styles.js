import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  forgotPWd: {
    alignSelf: "center",
    fontSize: 12,
    fontWeight: "300",
    marginBottom: 6
  },
  mainView: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 40,
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
    height: 49,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginTop: 30
  },
  textButton: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
  iconSize: {
    height: 13,
    width: 13,
    tintColor: "#F66754",
    paddingRight: 8
  },
});

export default styles;
