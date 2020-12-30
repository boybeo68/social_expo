import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
const uriImage =
  'https://nganhangphapluat.thukyluat.vn/images/CauHoi_Hinh/9eb6abaa-8cda-456c-ad66-26ba4da23ffe.jpg';
import { styles } from './style';
import API from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SignUp = ({ navigation }) => {
  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');
  const [name, setname] = useState('');
  const onSignUp = async () => {
    console.log(email, name, pass);
    try {
      let res = await API.post('api/users', {
        name: name,
        password: pass,
        email: email,
      });
      console.log(res.data);
      await AsyncStorage.setItem('@token', res.data.token);
      navigation.navigate('Home');
    } catch (error) {
      alert(error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={{ uri: uriImage }} style={{ width: 200, height: 200 }} />
      </View>
      <View style={styles.body}>
        <TextInput
          value={name}
          placeholder={'name'}
          style={styles.input}
          onChangeText={(text) => {
            setname(text);
          }}
        />
        <TextInput
          onChangeText={(text) => {
            setemail(text);
          }}
          value={email}
          placeholder={'email'}
          style={styles.input}
        />
        <TextInput
          onChangeText={(text) => {
            setpass(text);
          }}
          value={pass}
          placeholder={'password'}
          secureTextEntry={true}
          style={styles.input}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={onSignUp}>
          <Text style={{ color: 'green' }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;