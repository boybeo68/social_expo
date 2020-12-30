import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  Button,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './style';
const uriImage =
  'https://nganhangphapluat.thukyluat.vn/images/CauHoi_Hinh/9eb6abaa-8cda-456c-ad66-26ba4da23ffe.jpg';
const { width, height } = Dimensions.get('screen');

const SignIn = ({ navigation }) => {
  const saveToken = async () => {
    await AsyncStorage.setItem('@token', 'tokendata');
  };
  const nextSignUp = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={{ uri: uriImage }} style={{ width: 200, height: 200 }} />
      </View>
      <View style={styles.body}>
        <TextInput placeholder={'email'} style={styles.input} />
        <TextInput placeholder={'password'} secureTextEntry={true}  style={styles.input} />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: 'green' }}>Login</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={nextSignUp} style={styles.signUp}>
        <AntDesign name='back' size={24} color='black' />
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
