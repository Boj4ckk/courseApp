
import { DEL_FROM_CART } from "../Reducers/constants"

export const delFromCart = (course) =>{
    return {
        type : DEL_FROM_CART,
        course : course
    }

}