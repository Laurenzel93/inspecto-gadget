import React from "react";
import { useHistory } from "react-router-dom";


export function InspectionsTable({ children }) {
    return (
        <table className="table table-bordered table-striped">
            <tbody>{children}</tbody>
        </table>
    )
}

export function PastComponent(props) {
    const history = useHistory();

    return (
                <tr>
                    <td>{props.address} &nbsp; &nbsp; {props.type} &nbsp; &nbsp; {props.permit_id} &nbsp; &nbsp;  Date Created: {props.date_scheduled} &nbsp; {props.admin} &nbsp; prop.results &nbsp; props.notes</td>
                    <td className="text-right align-middle"><button className="btn btn-secondary border-dark" onClick={() => history.push('inspections/' + props.id)}>More Info</button>
                    </td>
                </tr>
    );
}

