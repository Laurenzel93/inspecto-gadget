import React from "react";
import './style.css';

function ResultsHistory(props) {
    return (

       
                        <tr>
                            <td className="col-2" id="timestamp">{props.time}</td>
                            <td id="resultsHistory">{props.result}     notes: {props.notes}</td>

                        </tr>
                       )  
                   }

export default ResultsHistory;