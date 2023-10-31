import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavitaion from '../bottom-navigation/bottom-tab-navitaion';
import DrawerNavigation from '../drawer-navitation/drawer-navigation';
import StackNavigation from './stack-naviation';

const AppNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='DrawerNavigation'>
        <Stack.Screen name='DrawerNavigation' component={DrawerNavigation} options={{ headerShown: false }} />
        {/* <Stack.Screen name='StackNavition' component={StackNavigation}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})