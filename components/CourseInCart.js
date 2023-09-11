import { StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'
import { useSelector } from 'react-redux'
import { FlatList } from 'react-native'
import { globalStyle } from '../globalStyles'

import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native'

export const CourseInCart = (props) => {
 
 
  
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
        <View style={styles.priceWrapper}>
            <Text style={styles.price}>{props.price} $</Text>
        </View>
        <TouchableOpacity style={styles.iconWrapper} onPress={props.handler}>
            <MaterialCommunityIcons name="delete-forever" size={24} color={globalStyle.green} />
        </TouchableOpacity>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:"center",
        marginVertical:10
        
    },
    wrapper:{
        flexDirection:'row',
        backgroundColor:'#fff',
        padding:10,
        width:"95%",
        height:"100%",
        borderRadius:5,
        
    },
    titleWrapper:{
        width:"70%",
        height:'100%',
       
        justifyContent:'center'
    },
    title:{
        fontSize:16,
        fontWeight:'bold'
    },
    priceWrapper:{
        width:"20%",
        alignItems:'center',
        justifyContent:'center'
    },
    price:{
        fontWeight:'bold'
    },
    iconWrapper:{
        width:'10%',
        alignItems:'center'
    }
})