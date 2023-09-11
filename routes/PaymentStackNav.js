import React from 'react'
import { View , Text } from 'react-native'

import { globalStyle } from '../globalStyles'

import { CartIcon } from '../components/CartIcon'
import { createStackNavigator } from '@react-navigation/stack'

import { Payement } from '../Screens/Payement'




 

const PaymentStackNavigator = createStackNavigator()

export const PaymentNavigator = ({navigation,route}) =>{
   
    return(
        <PaymentStackNavigator.Navigator screenOptions={({navigation}) =>({
            headerStyle  : { backgroundColor: globalStyle.green},
            headerTintColor: globalStyle.white,
            headerTitleStyle: {fontWeight:'bold'},
            headerRight : () => (
                <CartIcon navFunction={() =>navigation.navigate('Cart')}/>
            )
        })}>
            <PaymentStackNavigator.Screen
                name='Payement'
                component={Payement}
            />

        </PaymentStackNavigator.Navigator>
    )

}