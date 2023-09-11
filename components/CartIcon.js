import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { Entypo } from '@expo/vector-icons'; 

import { globalStyle } from '../globalStyles';
import { TouchableOpacity } from 'react-native';

export const CartIcon = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.navFunction}>
        <Entypo name="shopping-cart" size={24} color={globalStyle.white} />
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