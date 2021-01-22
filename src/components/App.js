import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch,faCog} from '@fortawesome/free-solid-svg-icons'
import styles from "../scss/components/App.module.scss"
import Modal from "./Modal"
export default function App(){

    function showModal(event){
        console.log(event.currentTarget);
        document.getElementById(event.currentTarget.dataset.target).hidden=false;
    }

    return (
        <div className={styles.app}>
            <h2 className={styles.title}><FontAwesomeIcon icon={faStopwatch} /> &nbsp;Pomotimer</h2>
            <div className={styles.options}><button onClick={showModal} data-toggle="modal" data-target="exampleModal" className='settings btn-primary btn'><span className="desktop">Settings&nbsp;</span><FontAwesomeIcon icon={faCog}/></button></div>
            <div className={styles.main}>
                <div className={styles.timer}>
                    <div className={styles.clockLabel}>
                        <div className={styles.timerLabel}>Timer</div>
                        <div className={styles.breakLabel}>Break</div>
                    </div>
                    <div className={styles.clock}>
                        <div className={styles.time}><span className={styles.minutes}>12</span><span className={styles.colon}>:</span><span className={styles.seconds}>00</span></div>
                    </div>
                    <div className={styles.controls}>
                        <button className='btn btn-primary'>Start</button>
                        <button className='btn btn-primary'>Restart</button>
                    </div>
              </div>
               
            </div>
        <Modal/>
        </div>
    )
}