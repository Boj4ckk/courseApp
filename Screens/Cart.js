import { StyleSheet, Text, View , FlatList} from 'react-native'
import React from 'react'

import { CourseInCart } from '../components/CourseInCart'
import { CustomButton } from '../components/CustomButton'

import {useSelector , useDispatch} from 'react-redux'
import { globalStyle } from '../globalStyles'
import { delFromCart } from '../Redux/Actions/delFromCart'
import { payCourses } from '../Redux/Actions/payCourses'

export default Cart = () => {
  const dispatch = useDispatch()
  const courses = useSelector(state =>state.Cart.cartCourses)

  const total = useSelector(state => state.Cart.total )

  const handleDeleteCourse = (course) =>{
    dispatch(delFromCart(course))
    
  }
  const handlePayCourses = (course,total) =>{
    dispatch(payCourses(course , total))
  }
  return (
    <View style={styles.container}>
       <View style={styles.coursesWrapper}>
        <FlatList
         data={courses}
         keyExtractor={item => item.id}
         renderItem={({item}) =>{
          return (
            <CourseInCart title={item.title} price={item.price} handler={()=>handleDeleteCourse(item)}/>
          )
          
         }}
        />
       </View>
       <View style={styles.bottomWrapper}>
        <View style={styles.totalWrapper}>
          <Text style={styles.totalText}>Total : </Text>
          <Text style={styles.totalPrice}>{total.toFixed(2)} $</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <CustomButton handler={() => handlePayCourses(courses, total)} style={styles.button} title='Validez'/>
        </View>
        
       </View>
    </View>
  )
}



const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:globalStyle.smoothGray,
    alignItems:'center'
    
  },
  coursesWrapper:{
    width:'100%',
  
  },
  bottomWrapper:{
    
    paddingTop:20,
    width:'95%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
    
  },
  totalWrapper:{
    width:'60%',
    flexDirection:'row'
  },
  totalText:{
    fontSize:20,
    fontWeight:"bold",
    
  },
  totalPrice:{
    fontSize:20,
    fontWeight:"600",
    color: globalStyle.green
  },
  button:{
    width:120,
    height:40
  },
  
})