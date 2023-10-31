import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome } from '@expo/vector-icons'
import Dashboard from '../../screen/dashboard/dashboard';
import Orders from '../../screen/orders/orders';
import Notificatios from '../../screen/notifications/notificatios';
import Header from '../../screen/header';
import { DashboardNavigation, OrdersNavigation } from '../stack-navigation/stack-naviation';
import { useRoute } from '@react-navigation/native';
const BottomTabNavitaion = () => {
  const Tab = createBottomTabNavigator();
  const route=useRoute();
  const isRoute=route.name==="BuyNow";
  return (
    <Tab.Navigator initialRouteName='DashboardNavigation' screenOptions={{
      tabBarActiveTintColor: '#800080'
    }}>
      <Tab.Screen name='Dashboard' component={DashboardNavigation}
        options={{
          headerShown:false,
          tabBarIcon: (tab) => (
            <FontAwesome name='home' size={20} color={tab.focused ? '#800080' : 'gray'} />
          )
        }}
      />
      <Tab.Screen name='Orders' component={OrdersNavigation}
        options={{
          headerShown:!isRoute?true:false,
          tabBarIcon: (tab) => (
            <FontAwesome name='user' size={20} color={tab.focused ? '#800080' : 'gray'} />
          )
        }}
      />
      <Tab.Screen name='Notifications' component={Notificatios}
        options={{
          tabBarIcon: (tab) => (
            <FontAwesome name='bell' size={20} color={tab.focused ? '#800080' : 'gray'} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavitaion

const styles = StyleSheet.create({})