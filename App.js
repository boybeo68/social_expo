import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AppContainer from './AppContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
