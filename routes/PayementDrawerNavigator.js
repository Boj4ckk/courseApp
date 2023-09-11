import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Cart from '../Screens/Cart'

export const PayementDrawerNavigator = () => {
  const Drawer = createDrawerNavigator()
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Cart" component={Cart}/>
    </Drawer.Navigator>
  )
}

