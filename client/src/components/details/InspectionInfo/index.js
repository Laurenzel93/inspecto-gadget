import React from "react";
import './style.css';

function InspectionInfo(props) {
    return (
        <div className="container-fluid border rounded border-primary p-4 justify-content-center" id="inspectionInfoContainer">
            <div className="col justify-content-md-center">
                <table className="table table-bordered table-primary">
                    <tbody>
                        <tr>
                            <td id="date">{props.inspection_date}</td>
                            <td id="address">{props.address}</td>
                            <td id="inspectionType">{props.inspection_type}</td>
                            <td id="permitNumber">{props.permit_id}</td>
                        </tr>
                        <tr>
                            <td colSpan="2" id="notes">Notes: </td>
                            <td colSpan="2" id="timestamp">{props.date_scheduled}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default InspectionInfo;