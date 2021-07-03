import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";


export function PastComponent(props) {
    const history = useHistory();

    return (
        <div className= "pb-0 card-body mb-0 container col-12 ">
            <div className="row">
                <div className="col-12 col-md-12 "><button className="btn btn-secondary border border-dark float-right mr-3" onClick={() => history.push('permits/' + props.permit_id)}>Details</button></div>
                <div className="col-12 col-md-auto ">{props.date}</div>
                <div className="col-12 col-md-auto">{props.address}</div>
                <div className="col-12 col-md-auto">{props.type}</div>
                <div className="col-12 col-md-auto">{props.permit_id}</div>
                <div className="col-12 col-md-auto"> Created: {props.date_scheduled} &nbsp; by: {props.admin.toLowerCase()}</div>
                <div className="col- col-md-10  border border-bottom-0 ">Results:</div>
            </div>
        </div>
  
    );
}

export function Results(props) {
   

    return (
        <div className= "card-body mb-3 pt-0 container col-12 ">
            <div className="row">
                <div className="col- col-md-10  border border-top-0 ">{props.result} on {props.time} notes: {props.notes} </div>
            </div>    
        </div>
)
   
}