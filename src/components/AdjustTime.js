import React,{useState} from "react"
import style from "../scss/components/AdjustTime.module.scss"
import Timer from "./Timer"
import {useDispatch, useSelector} from "react-redux";

export default function(props){
    console.log(props);
let [min,setMin]=useState(props.minValue);
let [sec,setSec]=useState(props.secValue);
console.log("min "+min)

function dispatchMinChange(val){
    setMin(val);
    console.log("**dispatchMinChange**")
    console.log(props.Time.toString())
    props.Time({
        min:val,
        sec:sec
    })
}
function dispatchSecChange(val){
    setSec(val);
    props.Time({
        min:min,
        sec:val
    })
}
return(
        <div className={style.clock}>
            <Timer min='0' max='59' value={min} setVal={dispatchMinChange}/>
            <div className={style.colon}>:</div>
            <Timer min='0' max='59' value={sec} setVal={dispatchSecChange}/>
        </div>
    );
}