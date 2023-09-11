import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { CoursesNavigator } from "./CoursesStackNav";
import { PayementDrawerNavigator } from "./PayementDrawerNavigator";

export const AppNav = () =>{
    return( 
        <NavigationContainer>
            <CoursesNavigator/>
            <PayementDrawerNavigator/>
        </NavigationContainer>

    )
}