import { StyleSheet, Text, View , FlatList} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

import EmptyMsg from '../components/EmptyMsg'
import { PayementComponent } from '../components/PayementComponent'

export const Payement = () => {
  const payement = useSelector(state => state.Payement.payement)
  console.log(payement.length)
  
  if(payement.length != 0){
    return(
      <FlatList
        data={payement}
        keyExtractor={item => item.course.id}
        renderItem={({item}) =>{
          
          return(
            <PayementComponent total={item.total} date={item.date}  item={item}/>
          )
        }}
      
      />
    )
  }
  return(
    <View>
      <Text>NULL</Text>
    </View>
  )
  
  
}



const styles = StyleSheet.create({})