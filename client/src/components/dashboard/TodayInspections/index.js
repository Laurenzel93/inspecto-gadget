import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function TodaysInspections(props) {
    const history = useHistory();

    return (
        <div className="card border border-dark m-1">
            
            <table className="card-body table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">{props.number}</th>
                        <td>{props.date} &nbsp; &nbsp; {props.address} &nbsp; &nbsp; {props.type}  &nbsp; &nbsp; {props.permit_id}  &nbsp; &nbsp; Notes: props.notes &nbsp; &nbsp; Date Created: {props.date_scheduled} &nbsp; {props.admin}</td>
                        <td className="text-right align-middle"><button className="btn btn-secondary border border-dark" onClick={() => history.push('inspections/' + props.id)}>Results</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TodaysInspections;