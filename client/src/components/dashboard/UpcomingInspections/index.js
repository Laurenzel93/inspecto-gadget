import React from "react";
import { Link } from "react-router-dom";
import Moment from 'moment';

function UpcomingInspections(props) {
    return (
                        <div className="card">
                            <h2>{Moment().toLocaleString} </h2>
                            <table className="table table-border table-striped">
                                <tbody>
                                    <tr>
                                        <th scope="row">{props.number}</th>
                                        <td>{props.date}  |{props.address} |{props.type} |{props.permit_id}| notes?  |{props.admin}|{props.date_scheduled} </td>
                                        <td><button className="btn btn-secondary border border-dark">Results</button>
                                        <Link to={"/inspections/" + props.id}></Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
    )
}

export default UpcomingInspections;