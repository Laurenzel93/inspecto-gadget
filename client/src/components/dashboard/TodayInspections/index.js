import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

function TodaysInspections(props) {
    const history = useHistory();

    return (
        <div className="resultConfirm no-result-yet future-results card m-1">
            <table className="card-body table table-borderless">
                <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td>{props.date} &nbsp; &nbsp; {props.address} &nbsp; &nbsp; {props.type}  &nbsp; &nbsp; {props.permit_id}  &nbsp; &nbsp; Notes: props.notes &nbsp; &nbsp; Date Created: {props.date_scheduled} &nbsp; {props.admin}</td>
                        <td className="text-right align-middle float-right"><button className="btn btn-secondary border border-dark" onClick={() => history.push('permits/' + props.permit_id)}>Results</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TodaysInspections;