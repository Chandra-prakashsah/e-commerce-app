import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';
import AppNavigation from './src/navigation/stack-navigation/app-navigation';
import 'react-native-gesture-handler';
import React from 'react';
import CustomToast from './src/component/custom-toast';
export default function App() {
  const [fontsLoaded] = useFonts({
    'bold':require('./assets/fonts/Poppins-Bold.ttf'),
    'regular':require('./assets/fonts/Poppins-Regular.ttf'),
    'light':require('./assets/fonts/Poppins-Light.ttf'),
    'semiBold':require('./assets/fonts/Poppins-SemiBold.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <StatusBar style="light" backgroundColor='#800080' />
      <AppNavigation/>
      <CustomToast/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
