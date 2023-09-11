import { StyleSheet, Text, View , Image } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'; 

import { globalStyle } from '../globalStyles'
import { TouchableOpacity } from 'react-native';

export const CoursesItem = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardWrapper}>
        <View style={styles.imageWrapper}>
            <Image
             source={{uri : props.image}}
             style={styles.image}
            />
        </View>
        <View style={styles.textWrapper}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
            <View style={styles.priceWrapper}>
                <Text style={styles.price}>{props.price}</Text>
            </View>
        </View>
        <View style={styles.iconWrapper}>
            <TouchableOpacity onPress={props.viewDetails}>
                <Entypo name="eye" size={30} color={globalStyle.green} />
            </TouchableOpacity>
            <TouchableOpacity onPress={props.onAddToBasket}>
                <Entypo name="shopping-basket" size={30} color={globalStyle.green} />
            </TouchableOpacity>
            
        </View>
        

      </View>
    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    cardWrapper:{
        width:325,
        height:280,
        borderWidth:1,
        borderColor:globalStyle.lightGray,
        marginVertical:20,
        borderRadius:5
    },
    imageWrapper:{
        width:'100%',
        height:'65%',
        overflow:'hidden'
        
        
    },
    image:{
        width:'100%',
        height:"100%"
    },
    textWrapper:{
        marginTop:10,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        color:globalStyle.green,
        fontSize:18,
        fontWeight:'bold'
    },
    price:{
        fontWeight:'bold'
    },
    iconWrapper:{

        flexDirection:'row',
        padding:10,
        paddingHorizontal:25,
        justifyContent:'space-between'
    }
})