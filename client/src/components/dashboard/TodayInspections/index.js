import React, { useState, useEffect } from "react";
import API from '../../../utils/API'

function TodaysInspections(props) {

    // useEffect(() => {
    //     console.log('useEffect has been hit');
    //     // console.log(API);
    //     API.getInspections().then(res => console.log(res));
    // });

    return (
                        <div className="card">
                            <h2>Date and number of inspections on that day</h2>
                            <table className="table table-border table-striped">
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>{props.inspection_date}
                                             {/* props.address props.inspection_type props.permit_id notes? props.date_scheduled prop.scheduled_by */}
                                        </td>
                                        <td><button className="btn btn-secondary border border-dark">Results</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
    )
}

export default TodaysInspections;