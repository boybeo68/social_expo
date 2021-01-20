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

  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={'black'} />
    </View>
  );
};

export default AuthLoading;
