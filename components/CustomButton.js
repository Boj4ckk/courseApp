import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { globalStyle } from '../globalStyles'

export const CustomButton = (props) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={{...styles.buttonWrapper,...props.style}} onPress={props.handler} activeOpacity={0.7}>
            <View style={styles.button}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>

    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
     
        
    },
    buttonWrapper:{
        width:160,
        height:35,
        backgroundColor:globalStyle.buttonColor,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    }
})