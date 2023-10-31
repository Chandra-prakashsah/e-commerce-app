import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import DashboardData from './dashboard-data'

const Dashboard = () => {
  return (
     <FlatList data={[0]} showsVerticalScrollIndicator={false}  renderItem={()=>{
         return(
          <DashboardData/>
         )
     }}/>
  )
}

export default Dashboard

const styles = StyleSheet.create({})