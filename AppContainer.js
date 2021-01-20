import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/home/Home';
import SignIn from './Screens/auth/SignIn';
import SignUp from './Screens/auth/SignUp';
import AuthLoading from './Screens/auth/AuthLoading';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createStackNavigator();
export default function AppContainer() {
  const [token, settoken] = useState(null);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    checkToken();
  }, []);
  const checkToken = async () => {
    try {
      const tokenAsync = await AsyncStorage.getItem('@token');
      if (tokenAsync) {
        settoken(tokenAsync);
      }
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {loading ? (
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name='AuthLoading'
            component={AuthLoading}
          />
        ) : !token ? (
          <>
            <Stack.Screen name='SignIn' component={SignIn} />
            <Stack.Screen name='SignUp' component={SignUp} />
          </>
        ) : (
          <Stack.Screen name='Home' component={Home} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
