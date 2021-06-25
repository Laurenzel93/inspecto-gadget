import React from "react";
import './style.css';

function PermitInfo() {
    return (

        <div className="container-fluid border rounded border-primary p-4" id="permitInfoContainer">
            <div className="row ml-auto p-3 m-3">
                <h3>More Permit Information</h3>

                <table className="table table-sm table-striped table-bordered">
                    <tbody>
                        <tr>
                            <th scope="row">Property Information</th>
                            <td colSpan="2" id="address">Address</td>
                            <td colSpan="2" id="parcelID">Parcel ID</td>
                        </tr>
                        <tr>
                            <th scope="row">Owner Information</th>
                            <td id="ownerName">Name</td>
                            <td id="homePhone">Home Phone</td>
                            <td id="cellPhone">Cell Phone</td>
                        </tr>
                        <tr>
                            <th scope="row">Contractor Information</th>
                            <td id="contractorName">Name</td>
                            <td id="contractorPhone">Phone</td>
                            <td id="contractorEmail">Email</td>
                        </tr>
                        <tr>
                            <th scope="row">More Permit Information</th>
                            <td id="permitNumber">Permit Number</td>
                            <td id="issuedDate">Issued Date</td>
                            <td id="expirationDate">Expiration Date</td>
                        </tr>
                        <tr>
                            <th id="workDescription">Work Description</th>
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
                        <td id="item">Test</td>
                        <td id="quantity">Test</td>
                        <td id="fee">Test</td>
                    </tbody>
                </table>


            </div>
        </div>

    )
}

export default PermitInfo;