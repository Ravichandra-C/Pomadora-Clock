import React from "react"
import style from "../scss/components/AdjustTime.module.scss"
import Timer from "./Timer"
export default function(props){
    return(
        <div className={style.clock}>
            <Timer min='0' max='59' value={props.minValue}/>
            <div className={style.colon}>:</div>
            <Timer min='0' max='59' value={props.secValue}/>
        </div>
    );
}