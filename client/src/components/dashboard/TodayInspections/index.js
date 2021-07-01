import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function TodaysInspections(props) {
    const history = useHistory();

    return (
        <div className="card">
            
            <table className="table table-border table-striped">
                <tbody>
                    <tr>
                        <th scope="row">{props.number}</th>
                        <td>{props.date} |{props.address} |{props.type}  |{props.permit_id}  |notes? |{props.admin}| {props.date_scheduled} </td>
                        <td><button className="btn btn-secondary border border-dark" onClick={() => history.push('inspections/' + props.id)}>Results</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TodaysInspections;