import React from "react"
import style from "../scss/components/Timer.module.scss"
export default function(props){

    function increment(event){
        let ele=event.target.parentElement.querySelector("input");
        if(ele.value==ele.getAttribute("max")){
            ele.value='00';   
        }
        else{
           ele.stepUp();
           ele.value = addLeadingZeros(ele.value);
        }
    }
    function decrement(event){

        let ele=event.target.parentElement.querySelector("input");
        if(ele.value==0){
            ele.value=ele.getAttribute('max');
        }
        else{
         ele.stepDown();
         ele.value=addLeadingZeros(ele.value);
        }
    }
    function addLeadingZeros(num){

        if(num<10 && num>-1){
            return "0"+num+"";
        }
        return num;
    }
    return (
        <div className={style.timerInput}>
            <div className={style.increase} onClick={increment}></div>
            <input className={style.number} type="number" min={props.min} max={props.max} value={props.value} step='1'/>
            <div className={style.decrease} onClick={decrement}></div>
        </div>
    )
}