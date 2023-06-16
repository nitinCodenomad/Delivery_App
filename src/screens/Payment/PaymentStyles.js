import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    height: 27,
    width: 27,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
    backgroundColor: 'white',
    marginRight: 10,
  },
  iconSize: {
    height: 13,
    width: 13,
    tintColor: '#F66754',
    paddingRight: 8,
  },
  headerText: {
    fontSize: 13.5,
    textAlign: 'center',
    fontWeight: '300',
    color: 'black',
  },
  section: {
    marginTop: 15,
    height: 30,
    justifyContent: 'center',
  },
  sectionTitle: {
    padding: 3,
    fontSize: 13,
    fontWeight: '300',
    color: 'black',
  },
  cardPayment: {
    backgroundColor: 'white',
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 6,
    borderRadius: 12,
  },
  paymentOption: {
    flexDirection: 'row',
  },
  paymentIcon: {
    height: 20,
    width: 20,
    tintColor: '#F66754',
    marginLeft: 5,
  },
  paymentText: {
    fontWeight: '500',
    marginLeft: 10,
    fontSize: 15,
    color: 'black',
  },
  arrowIcon: {
    width: 12,
    height: 12,
    marginRight: 10,
  },
  paymentWallets: {
    marginTop: 15,
    justifyContent: 'center',
    marginBottom: 10,
  },
  paymentWalletsContainer: {
    backgroundColor: 'white',
    padding: 10,
    elevation: 6,
    borderRadius: 10,
  },
  walletRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  walletItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  walletImage: {
    height: 45,
    width: 45,
  },
  walletText: {
    fontSize: 13,
    marginTop: 5,
    fontWeight: '300',
    color: 'black',
  },
  upiSection: {
    height: 30,
    justifyContent: 'center',
    marginBottom: 10,
  },
  upiPayment: {
    backgroundColor: 'white',
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 6,
    borderRadius: 10,
  },
  upiText: {
    fontWeight: '500',
    marginLeft: 10,
    fontSize: 15,
    color: 'black',
  },
  cashSection: {
    height: 30,
    justifyContent: 'center',
    marginBottom: 10,
  },
  cashPayment: {
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 80,
  },
  cashText: {
    fontWeight: '500',
    marginLeft: 10,
    fontSize: 15,
    color: 'black',
  },
  checkboxContainer: {
    borderRadius: 7,
    height: 20,
    width: 20,
    borderWidth: 1.5,
    borderColor: '#F66754',
    backgroundColor: 'white',
    justifyContent: 'center',
    marginRight: 10,
    alignItems: 'center',
  },
  checkboxIcon: {
    width: 15,
    height: 15,
    tintColor: '#F66754',
  },
  cashButton: {
    backgroundColor: '#F66754',
    width: '95%',
    height: 45,
    justifyContent: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 10,
  },
  cashButtonText: {
    color: 'white',
    fontSize: 19,
    fontWeight: '300',
    alignSelf: 'center',
  },
  modalContainer: {
    height: 250,
    width: '75%',
    alignSelf: 'center',
    borderRadius: 12,
    backgroundColor: 'white',
    justifyContent: 'center',
    marginTop: '51%',
    elevation: 5,
  },
  modalTitle: {
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 17,
  },
  modalInputContainer: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-around',
  },
  modalInput: {
    backgroundColor: 'white',
    elevation: 1,
    borderRadius: 2,
    borderWidth: 0.2,
    width: '80%',
    alignSelf: 'center',
    height: 36,
  },
  modalInputHalf: {
    backgroundColor: 'white',
    elevation: 1,
    borderRadius: 2,
    borderWidth: 0.2,
    width: '35%',
    alignSelf: 'center',
    height: 36,
  },
  modalButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  modalButton: {
    backgroundColor: '#F66754',
    width: 60,
    height: 25,
    justifyContent: 'center',
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '300',
    textAlign: 'center',
  },
});

export default styles;
