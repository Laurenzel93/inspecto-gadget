import React from "react";
import './style.css';

function PermitInfo(props) {
    return (

        <div className="container-fluid border rounded border-primary p-4" id="permitInfoContainer">
            <div className="row ml-auto p-3 m-3">
                <h3>More Permit Information</h3>

                <table className="table table-sm table-striped table-bordered">
                    <tbody>
                        <tr>
                            <th scope="row">Property Information</th>
                            <td colSpan="2" id="address">{props.address}</td>
                            <td colSpan="2" id="parcelID">{props.parcel}</td>
                        </tr>
                        <tr>
                            <th scope="row">Owner Information</th>
                            <td id="ownerName">{props.owner}</td>
                            <td id="homePhone">{props.owner_phone}</td>
                            <td id="cellPhone">{props.owner_mobile}</td>
                        </tr>
                        <tr>
                            <th scope="row">Contractor Information</th>
                            <td id="contractorName">{props.contractor}</td>
                            <td id="contractorPhone">{props.contractor_phone}</td>
                            <td id="contractorEmail">{props.contractor_email}</td>
                        </tr>
                        <tr>
                            <th scope="row">More Permit Information</th>
                            <td id="permitNumber">{props.id}</td>
                            <td id="issuedDate">{props.issued}</td>
                            <td id="expirationDate">{props.expired}</td>
                        </tr>
                        <tr>
                            <th>Work Description </th>
                            <td colSpan="4" id="workDescription">{props.work_description}</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Fee Information</h3>
                <table className="table table-sm table-bordered text-center">
                    <thead>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Fee</th>
                    </thead>
                    <tbody>
                        <tr>
                        <td id="item">{props.item}</td>
                        <td id="quantity">{props.quantity}</td>
                        <td id="fee">{props.amount_total}</td>
                        </tr> 
                    </tbody>
                </table>


            </div>
        </div>

    )
}

export default PermitInfo;