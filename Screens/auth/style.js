import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  logo: {
    width,
    height: height * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    width,
    height: height * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    color: 'red',
    marginVertical: 20,
  },
  button: {
    width: 200,
    height: 50,
    borderColor: 'green',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  footer: {
    width,
    height: height * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUp: {
    width: 200,
    height: height * 0.1,
    paddingLeft: 30,
    justifyContent: 'flex-end',
  },
});
