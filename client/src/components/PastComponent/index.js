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
            <td>props.inspection_date props.address props.inspection_type props.permit_id props.date_scheduled prop.scheduled_by</td>
            <td>results and notes</td>
            <td><button className="btn btn-secondary border border-dark">More Info</button></td>
        </tr>
    );
}

