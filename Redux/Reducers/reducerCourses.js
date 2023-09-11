import COURSES from '../../data/testData'
import { SET_SELECTED_TRUE , DEL_FROM_CART } from './constants'

const initialStateCourses = {
    existingCourses : COURSES
}

export const reducerCourses = (state = initialStateCourses, action) =>{
   
    switch(action.type){
        case SET_SELECTED_TRUE :
            const course = action.course
            const index = course.id - 1
            const copyExistingCourses = [...state.existingCourses]
            
            copyExistingCourses[index].selected = true

            return{
                ...state,
                existingCourses : copyExistingCourses
            }
        case DEL_FROM_CART:

            const courseSetFalse = action.course
            const indexSetFalse = courseSetFalse.id - 1
            const copySetFalse = [...state.existingCourses]
            copySetFalse[indexSetFalse].selected = false

            return {

                ...state,
                existingCourses:copySetFalse
            }
            

        default:
            return state
    }
}