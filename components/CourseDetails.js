import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const CourseDetails = ({id , price , title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>
        <Text>{price}</Text>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        flex:1
    },
    textContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        
    },
   
   
})