import { StyleSheet, Text, View , FlatList} from 'react-native'
import React from 'react'




import { CoursesItem } from '../components/CoursesItem'
import { EmptyMsg } from '../components/EmptyMsg'


import { useDispatch, useSelector } from 'react-redux'

import { setSelectedTrue } from '../Redux/Actions/setSelectedTrue'
import { addToCart } from '../Redux/Actions/addToCart'




 export const Landing = ({navigation}) => {

  const dispatch = useDispatch()
  const displayStore =  useSelector(state => state)
  const existingCourses = displayStore.courses.existingCourses
  const coursesToDisplay = existingCourses.filter((course) => course.selected === false)
  

  
  if( coursesToDisplay.length != 0){

    const cartCoursesHandler = (item) =>{
      dispatch(addToCart(item))
      dispatch(setSelectedTrue(item))
      alert('La Formation est ajoutée au panier!')
    }

    return (

      <FlatList
      data={coursesToDisplay}
      renderItem={({item}) =>(
        <CoursesItem
          image={item.image}
          title={item.title}
          price={item.price}
          viewDetails={() =>navigation.navigate('CourseInfo',{
           item : item,
           title : item.title
          })}
          onAddToBasket={() => cartCoursesHandler(item)}
        />

      )}  
      />

    )
  }else{
    return (
      <EmptyMsg/>
    )
  }
  
}



const styles = StyleSheet.create({})