import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch,faCog} from '@fortawesome/free-solid-svg-icons'
import styles from "../scss/components/App.module.scss"
import {useSelector} from "react-redux"
import Modal from "./Modal"
export default function App(){
    const [showModal,setShowModal]=useState(false);
    const timerTime=useSelector(state=>state.timer);
    const breakTime=useSelector(state=>state.break);
    const [timerRunning,startStopTimer]=useState(false);
    const [clock,setClock]=useState(timerTime);
    const [breakT,setBreak]=useState(breakTime);
    const [intervalId,setTntrId]=useState();
    const [bort,setbort]=useState(false)

    function handleReset(){
        setClock(timerTime);
        setBreak(breakTime);
        setbort(false);
        startStopTimer(false);
        clearInterval(intervalId);
    }

    function handleStartClick(){
        startStopTimer(true);
        let timeInSec
        if(bort){
            timeInSec=breakT.min*60*1000+breakT.sec*1000;
        }
        else{

            timeInSec=clock.min*60*1000+clock.sec*1000;
        }
        let endDate=new Date().getTime()+timeInSec;
        console.log(endDate)
        let intervalId=setInterval(()=>{
           console.log(endDate);
            timeInSec=endDate-new Date().getTime();
            timeInSec/=1000;
            console.log(timeInSec);
            if(bort){
                setBreak({
                    min:Math.floor(timeInSec/60),
                    sec:Math.floor(timeInSec%60)
                });
                if(timeInSec<=0){
                    handleReset();
                }
            }
            else{
                setClock({
                    min:Math.floor(timeInSec/60),
                    sec:Math.floor(timeInSec%60)
                })
                if(timeInSec<=0){
                    setbort(true);
                }
            }
            
        },1000);
        setTntrId(intervalId);
    }

    function handleStopClick(){
       startStopTimer(false);
       console.log(intervalId);
        clearInterval(intervalId);
    }
    return (
        <div className={styles.app}>
            <h2 className={styles.title}><FontAwesomeIcon icon={faStopwatch} /> &nbsp;Pomotimer</h2>
            <div className={styles.options}><button onClick={()=>{setShowModal(true)}} data-toggle="modal" data-target="exampleModal" className='settings btn-primary btn'><span className="desktop">Settings&nbsp;</span><FontAwesomeIcon icon={faCog}/></button></div>
            <div className={styles.main}>
                <div className={styles.timer}>
                    <div className={styles.clockLabel}>
                        <div className={styles.timerLabel}>Timer</div>
                        <div className={styles.breakLabel}>Break</div>
                    </div>
                    <div className={styles.clock}>
                        <div className={styles.time}><span className={styles.minutes}>{clock.min}</span><span className={styles.colon}>:</span><span className={styles.seconds}>{clock.sec}</span></div>
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