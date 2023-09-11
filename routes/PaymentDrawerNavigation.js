import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { CartNavigator } from './CartStackNav'
import { CoursesNavigator } from './CoursesStackNav'
import { PaymentNavigator } from './PaymentStackNav'

import { FontAwesome5 } from '@expo/vector-icons'; 
import {FontAwesome} from '@expo/vector-icons';

export const PaymentDrawerNavigation = () => {
  const DrawerNavigator = createDrawerNavigator();
  return (
    <DrawerNavigator.Navigator screenOptions={{
        headerShown : false
    }}>
        <DrawerNavigator.Screen name="Courses" component={CoursesNavigator} options={{
            drawerIcon : () =>(
                
                <FontAwesome name="book" size={24} color="black" />
            )
        }}/>
        <DrawerNavigator.Screen name="Payment" component={PaymentNavigator} options={{
            drawerIcon : () =>(
                
                <FontAwesome5 name="credit-card" size={24} color="black" />
            )
        }}/>
        <DrawerNavigator.Screen name="Cart" component={CartNavigator} options={{
            drawerIcon: () =>(
                <FontAwesome name="shopping-cart" size={24} color="black" />
            )
        }}/>
    </DrawerNavigator.Navigator>
    

  )
}

