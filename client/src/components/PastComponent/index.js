import React from "react";
import Moment from 'moment';


export function InspectionsTable({children}) {
    return (
    <table className="table table-border table-striped">
    <tbody>{children}</tbody>
    </table>
    )}

export function PastComponent(props) {
    return (
        <tr>
            <th scope="row">1</th>
            <td>{props.date}{ props.address} {props.type} {props.permit_id} {props.date_scheduled} {props.admin}</td>
            <td>results and notes</td>
            <td><button className="btn btn-secondary border border-dark">More Info</button></td>
        </tr>
    );
}

