import {combineReducers} from "redux"
import todoReducer from "./ToDo/ToDo.reducer"

export default combineReducers({
    todo: todoReducer
})