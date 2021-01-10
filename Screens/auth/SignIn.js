import React, { useState } from 'react';
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
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AuthAction from '../../redux/action/authAction';
const uriImage =
  'https://nganhangphapluat.thukyluat.vn/images/CauHoi_Hinh/9eb6abaa-8cda-456c-ad66-26ba4da23ffe.jpg';
const { width, height } = Dimensions.get('screen');

const SignIn = ({ navigation, authActions }) => {
  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');
  const onLogin = async () => {
    authActions.login(email, pass);
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
        <TouchableOpacity onPress={onLogin} style={styles.button}>
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
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(AuthAction, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
