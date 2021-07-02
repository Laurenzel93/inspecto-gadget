import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";


export function PastComponent(props) {
    const history = useHistory();

    return (
        <div className="card future-results late-result m-1">
            <table className="card-body table table-borderless">
                <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td>{props.date} &nbsp; &nbsp; {props.address} &nbsp; &nbsp; {props.type}  &nbsp; &nbsp;   &nbsp; &nbsp; 
                        Date Created: {props.date_scheduled} &nbsp; {props.admin}&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;</td>
                        
                        <td className="text-right align-middle float-right"><button className="btn btn-secondary border border-dark mb-2" onClick={() => history.push('inspections/' + props.id)}>Details</button></td>
                    </tr>
                    <tr>
                    <th scope="row"></th>
                    <td>Results and Notes</td>
                    <td className="float-right">{props.permit_id}</td>

                    </tr>
                </tbody>
            </table>
        </div>
    );
}

