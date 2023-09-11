import { StyleSheet, Text, View , Image } from 'react-native'
import React from 'react'
import { globalStyle } from '../globalStyles'
import { ScrollView } from 'react-native'


import { CustomButton } from '../components/CustomButton'

import { useDispatch , useSelector } from 'react-redux'
import { addToCart } from '../Redux/Actions/addToCart'
import { setSelectedTrue } from '../Redux/Actions/setSelectedTrue'

export default CourseInfo = ({route , navigation}) => {
  
  const dispatch = useDispatch()

  const course = route.params.item
  
  const image = course.image
  const desc = course.description
  const price = course.price
  
  const cartHandler = (item) =>{
    
    dispatch(addToCart(item))
    dispatch(setSelectedTrue(item))
    navigation.goBack()
    alert('La Formation est ajoutée au panier!')
    
    
  }


  return (
    <View style={styles.container}>
      
      <View style={styles.imageWrapper}>
        <Image style={styles.courseImage} source={{uri : image}}/>
      </View>
      <ScrollView style={styles.descWrapper}>
          <Text>{desc} </Text>
      </ScrollView>
      
      
      <View style={styles.priceWrapper}>
        <Text style={styles.price}>{price} $</Text>
      </View>
      <View style={styles.footerWrapper}>
        <CustomButton title='Ajouter au panier' handler={() =>cartHandler(course)}/>
      </View>
      
    </View>
  )
}



const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center'
  },
  imageWrapper:{
    backgroundColor:'blue',
    width:"100%",
    height:"30%"
  },
  courseImage:{
    width:"100%",
    height:"100%"
  },
  descWrapper:{
    marginTop:20,
    width:"80%",
    height:"30%",
  
  },
  priceWrapper:{
 
    width:"100%",
    height:"7%",
    alignItems:"center",
    justifyContent:'center',
    backgroundColor:globalStyle.smoothGray
  },
  price:{
    marginLeft:260,
    fontSize:20,
    color:globalStyle.green
  },
  footerWrapper:{
    width:'100%',
    height:"12%",
    paddingLeft:200,
    backgroundColor:globalStyle.green
  }
})