import { PAY_COURSES } from "../Reducers/constants"


export const payCourses = (course , total) =>{
    return {
        type : PAY_COURSES,
        orderInfo : {
            course : course,
            total : total
        }
    }
}