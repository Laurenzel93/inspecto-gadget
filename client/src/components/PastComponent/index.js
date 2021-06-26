import React from "react";

function PastComponent(props) {
    return (
        <tr>
            <th scope="row">1</th>
            <td>props.inspection_date props.address props.inspection_type props.permit_id props.date_scheduled prop.scheduled_by</td>
            <td>results and notes</td>
            <td><button className="btn btn-secondary border border-dark">More Info</button></td>
        </tr>
    );
}

export default PastComponent;