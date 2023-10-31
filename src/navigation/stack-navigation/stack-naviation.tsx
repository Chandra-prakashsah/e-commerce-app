import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Dashboard from '../../screen/dashboard/dashboard'
import Orders from '../../screen/orders/orders'
import BuyNow from '../../screen/cart/buy-now'

export const DashboardNavigation = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen name='DashboardNavigation' component={Dashboard} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
export const OrdersNavigation = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator initialRouteName='OrderNavigation'>
      <Stack.Screen name='OrderNavigation' component={Orders} options={{ headerShown: false }} />
      <Stack.Screen name='BuyNow' component={BuyNow} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}
