import { StyleSheet } from 'react-native';

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'cover',
  },
  content: {
    alignItems: 'center',
  },
  logo: {
    height: 120,
    width: 120,
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#FFFFFF',
  },
  loginButton: {
    backgroundColor: '#F66754',
    width: 200,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  signupButton: {
    backgroundColor: '#FFFFFF',
    width: 200,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  socialButton: {
    backgroundColor: '#FFFFFF',
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialButtonIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});

export default homeStyles;
