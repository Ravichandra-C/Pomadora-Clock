import React from "react";
import style from "../scss/components/Modal.module.scss"
import AdjustTimer from "./AdjustTime"
export default function Modal(){
    return(
        <div className={style.modal} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" hidden>
            <div className={style.main}>
                <div className={style.timerLab}>Set Timer<br/>Time</div>
                <div className={style.breakLabel}>Set Break<br/>Time</div>
                 <AdjustTimer minValue='25' secValue='00'/>
                 <AdjustTimer minValue='5' secValue='00'/>           
                </div>
        </div>
    );
}