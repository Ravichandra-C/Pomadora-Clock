import {createSlice} from "@reduxjs/toolkit"

let timeSlice=createSlice({
   name:"controls",
   initialState:{
       timer:{
           min:"25",
           sec:"00"
       },
       break:{
        min:"05",
        sec:"00"
       }
   } ,
   reducers:{
       setTimer:function(state,action){
           console.log("Set timer invoked "+action)
           state.timer=action.payload;
       },
        setBreak:function(state,action){
            state.break=action.payload;
        }
   }


})

export const {setTimer,setBreak} =timeSlice.actions;
export default timeSlice.reducer