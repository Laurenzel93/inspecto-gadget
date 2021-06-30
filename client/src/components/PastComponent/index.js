import React from "react";
import { useHistory } from "react-router-dom";


export function InspectionsTable({ children }) {
    return (
        <table className="table table-border table-striped">
            <tbody>{children}</tbody>
        </table>
    )
}

export function PastComponent(props) {
    const history = useHistory();

    return (
        <tr>
            <th scope="row">{props.index}</th>
            <td>{props.date} | {props.address} | {props.type} | {props.permit_id}  |  {props.admin} | {props.date_scheduled} </td>
            <td>results and notes</td>
            <td><button className="btn btn-secondary border border-dark" onClick={ () => history.push('inspections/' + props.id) }>More Info</button>
            </td>
        </tr>
    );
}

