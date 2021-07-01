import React from "react";
import { useHistory } from "react-router-dom";


export function DateCard({children}) {
    return (
        <div className="card border border-dark m-1">
          <table className="card-body table table-striped">
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
                        <td>{props.date} &nbsp; &nbsp; {props.address} &nbsp; &nbsp; {props.type} &nbsp; &nbsp; {props.permit_id} &nbsp; &nbsp; Notes: props.notes  &nbsp; &nbsp; {props.date_scheduled} &nbsp; {props.admin}</td>
                        <td className="text-right align-middle"><button className="btn btn-secondary border border-dark" onClick={() => history.push('inspections/' + props.id)}>Results</button>
                        </td>
                    </tr>
               
    )
}
