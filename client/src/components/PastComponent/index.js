import React from "react";

function PastComponent(props) {
    return (
        <tr>
            <th scope="row">1</th>
            <td>props.date props.address props.type props.code props.date props.admin</td>
            <td>props.results props.notes</td>
            <td><button className="btn btn-secondary border border-dark">More Info</button></td>
        </tr>
    );
}

export default PastComponent;