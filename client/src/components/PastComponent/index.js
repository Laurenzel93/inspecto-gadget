import React from "react";
import { Link } from "react-router-dom";


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
            <td>{props.date} | { props.address} | {props.type} | {props.permit_id}  |  {props.admin} | {props.date_scheduled}|  </td>
            <td>results and notes</td>
            <td><button className="btn btn-secondary border border-dark">More Info</button>
                <Link to={"/details/" + props.id}></Link>
            </td>
        </tr>
    );
}

