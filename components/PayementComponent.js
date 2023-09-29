import { StyleSheet, Text, View } from 'react-native'
import React ,{useState} from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native';
import { CourseDetails } from './CourseDetails';

export const PayementComponent = ({total , date, item}) => {
  const[isShowed , setIsShower] = useState(false) // false => plus , true => minus 
  const handleShow = () =>{
    setIsShower(!isShowed)
    
  }
  return (
    <View style={styles.wrapper}>
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.total}>{total.toFixed(2)} $</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
            <TouchableOpacity style={styles.iconContainer} onPress={handleShow}>
                <AntDesign name={isShowed ? "minuscircleo" : "pluscircleo"} size={24} color="black" />
            </TouchableOpacity>
            {
                isShowed &&(
                    <View style={styles.showContainer}>
                        {
                            item.course.map(item =>{
                                console.log(item)
                                return(
                                    <CourseDetails id={item.id} price={item.price} title={item.title}/>
                                )
                            })
                        }
                    </View>
                )
            }
            
            
        </View>
        
      
    </View>
  )
}



const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    container:{
        width:"90%",
        height:"auto",
        marginTop:10,
        backgroundColor:"white",
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        
    },
    textContainer:{
        marginTop:10,
        flexDirection:'row',
        alignItems:"center",
        justifyContent:'space-between'

    },
    iconContainer:{
        marginVertical:10,
        marginRight:10,
        flex:1,
        justifyContent:'center',
        alignItems:'flex-end',
        
    },
    total:{
        fontSize:17,
        marginLeft:10,
    },
    date:{
        fontSize:17,
        marginRight:10
    },
    showContainer:{
        padding:10,
        borderTopWidth:1,
        borderColor:'lightgrey'
    }
})