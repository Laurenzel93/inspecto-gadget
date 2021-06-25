import React, { useState, useEffect } from "react";
import API from '../../../utils/API'

function TodaysInspections(props) {

    useEffect(() => {
        console.log('useEffect has been hit');
        // console.log(API);
        API.getTodayInspections().then(res => console.log(res));
    });

    return (
                        <div className="card">
                            <h2>Date and number of inspections on that day</h2>
                            <table className="table table-border table-striped">
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>props.date props.address props.type props.code props.notes. props.date props.time prop.admin
                                        </td>
                                        <td><button className="btn btn-secondary border border-dark">Results</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
    )
}

export default TodaysInspections;