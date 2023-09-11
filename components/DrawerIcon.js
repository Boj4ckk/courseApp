import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { Entypo } from '@expo/vector-icons'; 

import { globalStyle } from '../globalStyles';
import { TouchableOpacity } from 'react-native';

export const DrawerIcon = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.navFunction}>
        <Entypo name="menu" size={30} color="white" />
      </TouchableOpacity>
      
    </View>
  )
}



const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        margin:10,
        marginRight:20,
    }
})