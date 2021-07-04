import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

function TodaysInspections(props) {
    const history = useHistory();

    return (
        <div className="resultConfirm no-result-yet future-results card m-1">
            <div className= "pb-0 card-body mb-0 container col-12 ">
                <div className="row">
                    <div className="col-12 col-md-12 "><button className="btn btn-secondary border border-dark float-right mr-3" onClick={() => history.push('inspections/' + props.id)}>Details</button></div>
                    <div className="col-12 col-md-auto ">{props.date}</div>
                    <div className="col-12 col-md-auto">{props.address}</div>
                    <div className="col-12 col-md-auto">{props.type}</div>
                    <div className="col-12 col-md-auto">{props.permit_id}</div>
                    <div className="col-12 col-md-auto"> Created: {props.date_scheduled} &nbsp; by: {props.admin.toLowerCase()}</div>
                    <div className="col- col-md-10  border border-bottom-0 ">Notes:</div>
                </div>
            </div>
        </div>
    )
}

export default TodaysInspections;