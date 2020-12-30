import React, { useEffect } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const AuthLoading = ({ navigation }) => {
  useEffect(() => {
    checkToken();
  }, []);
  const checkToken = async () => {
    try {
      const token = await AsyncStorage.getItem('@token');
      if (token) {
        navigation.navigate('Home');
        return;
      }
      navigation.navigate('SignIn');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={'black'} />
    </View>
  );
};

export default AuthLoading;
