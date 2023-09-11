import React from 'react'
import { View , Text } from 'react-native'

import { globalStyle } from '../globalStyles'


import { createStackNavigator } from '@react-navigation/stack'
import { HeaderButtons } from 'react-navigation-header-buttons'


import { Landing } from '../Screens/Landing'

import Cart from '../Screens/Cart'
import CourseInfo  from '../Screens/CourseInfo'

import {CartIcon} from '../components/CartIcon'
import { DrawerIcon } from '../components/DrawerIcon'
 

const CoursesStackNavigator = createStackNavigator()

export const CoursesNavigator = ({navigation,route}) =>{
   
    return(
        <CoursesStackNavigator.Navigator screenOptions={({navigation}) =>({
            headerStyle  : { backgroundColor: globalStyle.green},
            headerTintColor: globalStyle.white,
            headerTitleStyle: {fontWeight:'bold'},
            headerRight : () => (
                <CartIcon navFunction={() =>navigation.navigate('Cart')}/>
            ),
            headerLeft : () =>(
                <DrawerIcon navFunction={() => navigation.openDrawer()}/>
                
            )
        })}>
            <CoursesStackNavigator.Screen
                name='Landing'
                component={Landing}
            />

            <CoursesStackNavigator.Screen
                name='Cart'
                component={Cart}            
            />

            <CoursesStackNavigator.Screen
                name='CourseInfo'
                component={CourseInfo}
                options={({route}) => ({title:route.params.item.title})}
               

                
                
            
            />  
        </CoursesStackNavigator.Navigator>
    )

}

