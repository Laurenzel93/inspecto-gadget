import React from "react";

export function InspectionsTable({children}) {
    return (
    <table className="table table-border table-striped">
    <tbody></tbody>
    </table>
    )}

export function PastComponent(props) {
    return (
        <tr>
            <th scope="row">1</th>
            <td>{props.date} {props.address} {props.type} {props.code} {props.on} {props.admin}</td>
            <td>{props.results} {props.notes}</td>
            <td><button className="btn btn-secondary border border-dark">More Info</button></td>
        </tr>
    );
}

