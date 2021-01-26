import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch,faCog} from '@fortawesome/free-solid-svg-icons'
import styles from "../scss/components/App.module.scss"
import {useDispatch, useSelector} from "react-redux"
import {setAppTimer,setAppBreakTimer} from "../slices/AppSlice"
import Modal from "./Modal"
export default function App(){
    const [showModal,setShowModal]=useState(false);
    const timerTime=useSelector(state=>state.timerSlice.timer);
    const breakTime=useSelector(state=>state.timerSlice.break);
    const [timerRunning,startStopTimer]=useState(false);
    let clock=useSelector(state=>state.AppSlice.apptimer);
    let breakT=useSelector(state=>state.AppSlice.appbreaktimer);
    const [intervalId,setTntrId]=useState();
    const [bort,setbort]=useState(false)
    const dispatch=useDispatch();   

    function handleReset(){
        clearInterval(intervalId);
        dispatch(setAppTimer(timerTime));
        dispatch(setAppBreakTimer(breakTime));
        setbort(false);
        startStopTimer(false);
    }

    function decrementBreakTimer(){
        console.log("****decrementBreakTimer****")
        let timeToBreakInSec = breakT.min * 60 * 1000 + breakT.sec * 1000;
        console.log("min "+clock.min+" sec "+clock.sec);
        let endBreakDate=new Date().getTime()+timeToBreakInSec;
        if(intervalId){
            clearInterval(intervalId);
        }
        let intervId=setInterval(
            function brktick(){
                let timeInSec = endBreakDate - new Date().getTime();
                timeInSec/=1000;
                 dispatch(setAppBreakTimer({
                    min:Math.floor(timeInSec/60),
                    sec:Math.floor(timeInSec%60)
                }));
                if(timeInSec<=0){
                    clearInterval(intervId);
                    handleReset();
                }
            }, 1000
        )

        setTntrId(intervId);
    }

    useEffect(()=>{
        if(!bort){
             if (clock.min <= 0&&clock.sec<=0 && !bort&&timerRunning) {
                setbort(true);
                decrementBreakTimer();
            }
        }
    })
    function handleStartClick(){
        startStopTimer(true);
        let timeInSec;

        let timeToTimerInSec = clock.min * 60 * 1000 + clock.sec * 1000;
        let endDate = new Date().getTime() + timeToTimerInSec;
        if(bort){
            decrementBreakTimer();
            return;
        }
        let intervalId=setInterval(function tick(){
            timeInSec = endDate - new Date().getTime();
            let brkt=(timeInSec<=0)?true:false;
            timeInSec/=1000;
            dispatch(setAppTimer({
                min: Math.floor(timeInSec / 60),
                sec: Math.floor(timeInSec % 60)
            }));
           

          
        },1000);
        setTntrId(intervalId);
    }

    function handleStopClick(){
       startStopTimer(false);
        clearInterval(intervalId);
    }
    let minVal=bort?breakT.min:clock.min
    let secVal=bort?breakT.sec:clock.sec
    console.log("MinVal "+minVal+" SecVal; "+secVal);
    return (
        <div className={styles.app}>
            <h2 className={styles.title}><FontAwesomeIcon icon={faStopwatch} /> &nbsp;Pomotimer</h2>
            <div className={styles.options}><button onClick={()=>{setShowModal(true)}} data-toggle="modal" data-target="exampleModal" className='settings btn-primary btn'><span className="desktop">Settings&nbsp;</span><FontAwesomeIcon icon={faCog}/></button></div>
            <div className={styles.main}>
                <div className={styles.timer}>
                    <div className={styles.clockLabel}>
                        <div className={bort?null:styles.timerLabel}>Timer</div>
                        <div className={bort?styles.breakLabel:null}>Break</div>
                    </div>
                    <div className={styles.clock}>
                        <div className={styles.time}><span className={styles.minutes}>{minVal}</span><span className={styles.colon}>:</span><span className={styles.seconds}>{secVal}</span></div>
                    </div>
                    <div className={styles.controls}>
                        {(timerRunning)?<button className='btn btn-primary' onClick={handleStopClick}>Pause</button>:<button className='btn btn-primary' onClick={handleStartClick}>Start</button>}
                        <button className='btn btn-primary' onClick={handleReset}>Restart</button>
                    </div>
              </div>
               
            </div>
        {(showModal?<Modal close={setShowModal}/>:null)}
        </div>
    )
}