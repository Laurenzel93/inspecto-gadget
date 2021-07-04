
import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";


export function PastComponent(props) {
    const history = useHistory();

    return (
        
        <div className="row mb-2" >
                    <div className="col-12 col-md-12 p-0"><button className="btn btn-secondary border border-dark float-right mr-3" onClick={() => history.push('inspections/' + props.id)}>Details</button></div>
                    <div className="col-12 col-md-auto ">{props.date}</div>
                    <div className="col-12 col-md-auto">{props.address}</div>
                    <div className="col-12 col-md-auto">{props.type}</div>
                    <div className="col-12 col-md-auto">{props.permit_id}</div>
                    <div className="col-12 col-md-auto"> Created: {props.date_scheduled} &nbsp; by: {props.admin.toLowerCase()}</div>
            </div>
        
    );
}

export function Results(props) {
   

    return (
       
                <div className="col- col-md-auto">{props.result} on {props.time} notes: {props.notes} </div>
          
)
   
}
