import React from 'react'
import { View , Text } from 'react-native'

import { globalStyle } from '../globalStyles'


import { createStackNavigator } from '@react-navigation/stack'
import { HeaderButtons } from 'react-navigation-header-buttons'



import Cart from '../Screens/Cart'


import {CartIcon} from '../components/CartIcon'
 

const CartStackNavigator = createStackNavigator()

export const CartNavigator = ({navigation,route}) =>{
   
    return(
        <CartStackNavigator.Navigator screenOptions={({navigation}) =>({
            headerStyle  : { backgroundColor: globalStyle.green},
            headerTintColor: globalStyle.white,
            headerTitleStyle: {fontWeight:'bold'},
            headerRight : () => (
                <CartIcon navFunction={() =>navigation.navigate('Cart')}/>
            )
        })}>
            <CartStackNavigator.Screen
                name='Cart'
                component={Cart}            
            />

            
        </CartStackNavigator.Navigator>
    )

}