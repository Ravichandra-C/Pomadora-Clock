import {createSlice} from "@reduxjs/toolkit"

let AppSlice=createSlice({
    name:"timerApp",
    initialState:{
        apptimer:{
            min:"00",
            sec:"05"
        },
        appbreaktimer:{
            min:"00",
            sec:"05"
        }
    },
    reducers:{
        setAppTimer:function (state,action){
            state.apptimer=action.payload
        },
        setAppBreakTimer:function (state,action){
            state.appbreaktimer=action.payload
        }
    }
});

export const {setAppTimer,setAppBreakTimer} =AppSlice.actions;
export default AppSlice.reducer