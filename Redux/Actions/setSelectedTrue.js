import { SET_SELECTED_TRUE } from "../Reducers/constants";


export const setSelectedTrue = (course) =>{
    return {
        type : SET_SELECTED_TRUE,
        course : course
    }
}