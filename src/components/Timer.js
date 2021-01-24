import React,{useState} from "react"
import style from "../scss/components/Timer.module.scss"
export default function(props){
const [value,setValue]=useState(props.value);
console.log(props);
function dispatchVal(value){
    setValue(value);
    props.setVal(value)
};
    function increment(event){
        let ele=event.target.parentElement.querySelector("input");
        if(value==ele.getAttribute("max")){
            dispatchVal('00');   
        }
        else{
           ele.stepUp();
           dispatchVal(addLeadingZeros(ele.value));
        
        }
    }
    function decrement(event){

        let ele=event.target.parentElement.querySelector("input");
        if(ele.value==0){
            dispatchVal(ele.getAttribute('max'));
        }
        else{
         ele.stepDown();
         dispatchVal(addLeadingZeros(ele.value));
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
            <input className={style.number} type="number" min={props.min} max={props.max} value={value} step='1'/>
            <div className={style.decrease} onClick={decrement}></div>
        </div>
    )
}