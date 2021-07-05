
import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";


export function PastComponent(props) {
    const history = useHistory();

    return (
        
        <div className="row mb-2" style={{ fontSize: "18px" }} >
                    <div className="col-6">{props.date}</div>
                    <div className="col-6 float-right"><button className="btn btn-secondary border border-dark float-right" onClick={() => history.push('inspections/' + props.id)}>Details</button></div>
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
