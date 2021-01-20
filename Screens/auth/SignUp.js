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
import { connect } from 'react-redux';
const uriImage =
  'https://nganhangphapluat.thukyluat.vn/images/CauHoi_Hinh/9eb6abaa-8cda-456c-ad66-26ba4da23ffe.jpg';
import { styles } from './style';
import API from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { bindActionCreators } from 'redux';
import * as AuthAction from '../../redux/actions/authAction';
const SignUp = ({ navigation, count, actionAuth }) => {
  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');
  const [name, setname] = useState('');
  const onSignUp = async () => {
    actionAuth.signUpRequest(name, email, pass, navigation);
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
const mapStateToProps = (state) => ({
  count: state.authReducer.count,
});
const mapDispatchToProps = (dispatch) => ({
  actionAuth: bindActionCreators(AuthAction, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
