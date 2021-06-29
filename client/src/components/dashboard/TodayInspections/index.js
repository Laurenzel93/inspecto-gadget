import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from '../../../utils/API'

function TodaysInspections(props) {

    // useEffect(() => {
    //     console.log('useEffect has been hit');
    //     // console.log(API);
    //     API.getInspections().then(res => console.log(res));
    // });

    return (
                        <div className="card">
                            <h2>{props.length}</h2>
                            <table className="table table-border table-striped">
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>{props.date} |{props.address} |{props.type}  |{props.permit_id}  |notes? |{props.admin}| {props.date_scheduled} </td>
                                        <td><button className="btn btn-secondary border border-dark">Results</button>
                                        <Link to={"/inspections/" + props.id}></Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
    )
}

export default TodaysInspections;