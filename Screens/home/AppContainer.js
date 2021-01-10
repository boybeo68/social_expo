import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AuthAction from '../../redux/action/authAction';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const AppContainer = ({ count, authAction, data }) => {
  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Button
        onPress={() => {
          authAction.increeAsync();
        }}
        title={'tang'}
      />
      <Button
        onPress={async () => {
          let token = await AsyncStorage.getItem('@token');
          console.log(token);
          authAction.fetchData();
        }}
        title={'getdata'}
      />
      <Button
        onPress={async () => {
          let token = await AsyncStorage.removeItem('@token');
        }}
        title={'Đăng xuất'}
      />
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
};
const mapStateToProps = (state) => ({
  count: state.authReducer.count,
  data: state.authReducer.data,
});
const mapDispatchToProps = (dispatch) => ({
  authAction: bindActionCreators(AuthAction, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
