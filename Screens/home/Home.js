import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import API from '../../config';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const Home = ({ navigation }) => {
  useEffect(() => {
    fetchData();
  }, []);
  const [data, setdata] = useState('');
  const fetchData = async () => {
    try {
      let token = await AsyncStorage.getItem('@token');
      if (token) {
        let res = await API.get('api/auth');
        setdata(JSON.stringify(res.data));
      }
    } catch (error) {}
  };
  const nextScreen = () => {};
  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('@token');
      navigation.navigate('SignIn');
    } catch (e) {
      // remove error
    }

    console.log('Done.');
  };
  return (
    <View style={styles.container}>
      <Text onPress={removeValue}>Đăng xuất</Text>
      <Text>{data}</Text>
    </View>
  );
};

export default Home;
