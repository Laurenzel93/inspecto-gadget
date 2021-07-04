import React from "react";
import './style.css';

export function PermitInfo(props) {
    return (
        <div className="" >
            <div className="container col-10 border rounded border-primary p-4" id="permitInfoContainer">
                <div className="row justify-content-center">
                    <h3 className="col-12 col-md-10  text-center mb-0 border" >Permit Information</h3>

                    <div style={{ fontWeight: "bold" }} className="col-12 col-md-3  border border-botom-0 m-0 bg-light">Property Information</div>
                    <div className="col-12 col-md-4 border bg-light m-0" id="address"> {props.address}</div>
                    <div className="col-12 col-md-3 border bg-light" id="parcelID">parcel: {props.parcel}</div>
                    <div style={{ fontWeight: "bold" }} className="col-12 col-md-3 border m-0">Owner Information</div>
                    <div className="col-12 col-md-2 border" id="ownerName">{props.owner}</div>
                    <div className="col-12 col-md-2 border" id="homePhone">ph: {props.owner_phone}</div>
                    <div className="col-12 col-md-3 border" id="cellPhone">cell: {props.owner_mobile}</div>
                    <div style={{ fontWeight: "bold" }} className="col-12 col-md-3 border  m-0 bg-light">Contractor Information</div>
                    <div className="col-12 col-md-2 border bg-light" id="contractorName">{props.contractor}</div>
                    <div className="col-12 col-md-2 border bg-light" id="contractorPhone">ph: {props.contractor_phone}</div>
                    <div className="col-12 col-md-3 border bg-light" id="contractorEmail">email: {props.contractor_email}</div>
                    <div style={{ fontWeight: "bold" }} className="col-12 col-md-3 border  m-0">Permit Details</div>
                    <div className="col-12 col-md-2 border" id="permitNumber">{props.id}</div>
                    <div className="col-12 col-md-2 border" id="issuedDate">iss: {props.issued}</div>
                    <div className="col-12 col-md-3 border" id="expirationDate">exp: {props.expired}</div>
                    <div style={{ fontWeight: "bold" }} className="col-12 col-md-3 border m-0 bg-light">Work Description</div>
                    <div className="col-12 col-md-7 border bg-light" id="workDescription">{props.work_description}</div>
                </div>
            </div>
        </div>
    )
}


export function InvoiceInfo(props) {

    return (

        <div className="" >
            <div className="container col-10 border rounded border-primary p-4" id="permitInfoContainer">
                <div className="row justify-content-center">
                    <h3 className="col-12 col-md-10  text-center" >Fee Information</h3>
                    {/* <div style={{ fontWeight: "bold" }} className="col-12 col-md-3  border border-botom-0 m-0 bg-light">Item</div> */}
                    <div style={{ fontWeight: "bold" }} className="col-12 col-md-3 border bg-light m-0 text-center" id="item"> {props.item}</div>
                    <div className="col-12 col-md-2 border bg-light text-center" id="quantity">Quantity: {props.quantity}</div>
                    <div className="col-12 col-md-3 border bg-light text-center" id="cost">${props.amount_total}</div>
                    <div className="col-12 col-md-3 border bg-light text-right" id="cost">${props.amount_total}</div>
                </div>
            </div>
        </div>


    )
}

export default PermitInfo;