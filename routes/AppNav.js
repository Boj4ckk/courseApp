import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { CoursesNavigator } from "./CoursesStackNav";
import { PaymentDrawerNavigation } from "./PaymentDrawerNavigation";


export const AppNav = () =>{
    return( 
        <NavigationContainer>
           
            <PaymentDrawerNavigation/>
        </NavigationContainer>

    )
}