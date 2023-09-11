import { createStore , combineReducers } from "redux";
import { reducerCourses } from "./Reducers/reducerCourses";
import { reducerCart } from "./Reducers/reducerCart";
import { reducerPayement } from "./Reducers/reducerPayement";


const rootReducer = combineReducers({
    courses :  reducerCourses,
    Cart : reducerCart,
    Payement:reducerPayement
})

export const store = createStore(rootReducer)