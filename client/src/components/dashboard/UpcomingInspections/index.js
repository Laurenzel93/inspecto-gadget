import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

export function Upcoming(props) {
    const history = useHistory();

    return (
        <div className="card future-results m-1">
            <table className="card-body table table-borderless">
                <tbody>
                    <tr >
                        <th scope="row"></th>
                        <td>{props.date} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; {props.address} &nbsp; &nbsp; {props.type} &nbsp; &nbsp; &nbsp; &nbsp;Created: {props.date_scheduled} &nbsp; by: {props.admin}</td>
                        <td colSpan="2" className=" tmr-4 ">{props.permit_id}</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td> Notes:&nbsp; {props.notes} </td>

                        <td colSpan="2" className=" mr-5"><button className="btn btn-secondary border border-dark " onClick={() => history.push('inspections/' + props.id)}>Results</button> &nbsp;</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
