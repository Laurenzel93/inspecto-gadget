import React from "react";
import './style.css';

function ResultsHistory(props) {
    return (

       
        <div className="row mb-2" style={{ fontSize: "18px" }} >
            <div className="col-auto ml-2" id="timestamp">{props.time}</div>
            <div className="col-auto"id="results">{props.result}</div>
            <div className="col-auto"id="resultnotes"> notes: {props.notes}</div>
        </div>                
                       )  
                   }

export default ResultsHistory;