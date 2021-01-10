import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import store from './redux/store';
import AppContent from './AppContent';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const App = ({ navigation }) => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;
