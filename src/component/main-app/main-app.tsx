import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Login from '../../screen/login-sreen/login-screen';
import Dashboard from '../../screen/dashboard/dashboard';
import Cart from '../../screen/cart/cart';
import { Regular } from '../../style/fonts';
import CartDetails from '../../screen/cart-details/cart-details';

const MainApp = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator  screenOptions={{
                 animation:'slide_from_right'
            }}>
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='Dashboard' component={Dashboard} options={{
                    headerStyle: {
                        backgroundColor: '#ffffff',
                    },
                    headerTitleAlign: 'center',
                    headerRight: () => <Cart />
                }} />
                <Stack.Screen name='CartDetails' component={CartDetails} options={{
                    headerShown:true
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainApp

const styles = StyleSheet.create({})