import {configureStore,combineReducers} from "@reduxjs/toolkit"
import timerSlice from "./slices/time";
import AppSlice from "./slices/AppSlice"

let rootReducer=combineReducers({
    timerSlice,
    AppSlice
})

console.log(timerSlice)
export default configureStore({
    reducer:rootReducer
})