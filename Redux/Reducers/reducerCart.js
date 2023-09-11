
import { ADD_TO_CART , DEL_FROM_CART, PAY_COURSES } from "./constants"
import { CartCourses } from "../../data/CartCoursesModel"
const initialCartState = {

    cartCourses : [],
    total : 0

}


export const reducerCart = (state =initialCartState , action) =>{
    const course = action.course
    switch(action.type){
        case ADD_TO_CART:
            
            const newCourse = new CartCourses(course.id , course.price, course.title)
            
             return{
                ...state,
                cartCourses : [...state.cartCourses ,newCourse ],
                total : state.total + course.price
             }
        case DEL_FROM_CART:
            const indexToDel  = state.cartCourses.findIndex((item) => item === course )
            const cartCoursesCopy = [...state.cartCourses]
            cartCoursesCopy.splice(indexToDel,1)
            return{
                ...state,
                cartCourses : cartCoursesCopy,
                total :  state.total - course.price
            }
        case PAY_COURSES:
            return {
                ...state,
                cartCourses : [],
                total : 0
            }
           
            

        
    
        default:
            return state
    }
    

}