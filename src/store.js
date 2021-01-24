import {configureStore} from "@reduxjs/toolkit"
import timerSlice from "./slices/time";
console.log(timerSlice)
export default configureStore({
    reducer:timerSlice
})