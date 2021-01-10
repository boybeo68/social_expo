import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import API from '../../config';
import store from '../../redux/store';
import AppContainer from './AppContainer';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const Home = ({ navigation }) => {
  return <AppContainer />;
};

export default Home;
