import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Nav from "../components/Nav";
import InspectionInfo from "../components/details/InspectionInfo";

import InspectionResults from "../components/details/InspectionResults";
import PermitInfo from "../components/details/InspectionInfo";
import ResultsHistory from "../components/details/ResultsHistory";
import API from "../utils/API"
import Moment from 'moment';



function Details() {
    const {id} = useParams()
   
   console.log(id)
  
    const [inspection, setInspection] = useState([]);
    const [permit, setPermit] = useState([]);
    
    useEffect(() => {
        loadInspections()
    }, [])

    async  function loadInspections() {  
       await API.getInspection(id)
       .then(res => {
         setInspection(res.data)
         console.log(inspection)
        }).catch(err => console.log(err));
        
        await API.getPermit(id)
       .then(res => {
         setPermit(res.data)
         console.log(permit)
        }).catch(err => console.log(err));
    };

      
    return (
        <div>
            <Helmet>
                <title>Details</title>
            </Helmet>
            <Nav />
            <InspectionInfo key={inspection.id}
                date = {Moment(inspection.date).format("dddd, MMMM Do YYYY")} 
                address = {inspection.address}
                type = {inspection.type}
                permit_id = {inspection.permit_id}
                admin = {inspection.admin}
                date_scheduled = {Moment(inspection.date_scheduled).format("MM- D-YY")}
            />
            <ResultsHistory/>
            <InspectionResults/>
            <PermitInfo
            address = {permit.address}
            parcel = {permit.parcel_number}
            owner = {permit.owner}
            owner_phone = {permit.owner_phone}
            owner_mobile = {permit.owner_mobile}
            contractor = {permit.contractor}
            contractor_phone = {permit.contractor_phone}
            contractor_email = {permit.contractor_email}
            id = {permit.id}
            issued = {permit.issued}
            expired = {permit.expired}
            work_description = {permit.work_description}   /> 
           
           

        </div>
    )
};

export default Details;