import React, { useState } from "react";
import style from "../scss/components/Modal.module.scss"
import AdjustTimer from "./AdjustTime"
import {useSelector,useDispatch} from "react-redux"
import {setBreak,setTimer} from "../slices/time"
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Modal(props){
    let timerState = useSelector(state => state.timer);
    const dispatch = useDispatch();
    const [timer,setTimerState]=useState(timerState)
    const [breakTimer,setBreakTimer]=useState(useSelector(state=>state.break))
    function handleTimerChange(obj){
        setTimerState(obj);
        dispatch(setTimer(obj));
    }
    function handleBreakChange(obj){
        setBreakTimer(obj);
        dispatch(setBreak(obj));
    }
       return(
        <div className={style.modal} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel">
            <div className={style.main}>
                <button class={style.close} onClick={()=>{props.close(false)}}><FontAwesomeIcon icon={faTimesCircle}/></button>

                <div className={style.timerLab}>Set Timer<br/>Time</div>
                <div className={style.breakLabel}>Set Break<br/>Time</div>
                 <AdjustTimer minValue={timer.min} secValue={timer.sec} Time={handleTimerChange}/>
                 
                 <AdjustTimer minValue={breakTimer.min} secValue={breakTimer.sec} Time={handleBreakChange}/>           
                </div>
        </div>
    );
}