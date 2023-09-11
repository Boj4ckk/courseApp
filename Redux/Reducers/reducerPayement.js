import { PAY_COURSES } from "./constants"
import { Payement } from "../../data/payementModal"
import moment from 'moment'


const initialPayementState = {
    payement : []
}


export const reducerPayement = (state = initialPayementState , action)=>{
    switch (action.type) {
        case PAY_COURSES:
           
            
            const order = new Payement(
                Date.now().toString,
                action.orderInfo.course,
                action.orderInfo.total,
                moment(new Date()).format('DD MM YYYY hh:mm')
            );
            
           
            return{
                ...state,
                payement : state.payement.concat(order)
            }
            
            
    
        default:
            return state
    }
}