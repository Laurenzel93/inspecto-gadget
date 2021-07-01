import React from "react";
import { useHistory } from "react-router-dom";


export function DateCard({children}) {
    return (
        <div className="card">
          <table className="table table-border table-striped">
            <tbody>{children}</tbody>
          </table>
        </div>
    )
}
export function Heading (props) {
    return (
        <h4 className="text-white">
            <span className= "mr-5">{props.date}</span>
            <span className= "ml-5">{props.length} Inspections Today</span>
        </h4>
   
    )
}


export function Upcoming(props) {
    const history = useHistory();

    return (
        <tr>
            <th scope="row"></th>
            <td>{props.date}  |{props.address} |{props.type} |{props.permit_id}| notes?  |{props.admin}|{props.date_scheduled} </td>
            <td><button className="btn btn-secondary border border-dark" onClick={() => history.push('inspections/' + props.id)}>Results</button>
            </td>
        </tr>
               
    )
}
