import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { PastComponent, InspectionsTable } from "../components/PastComponent";
import Nav from "../components/Nav";
import {SearchInput, SearchBtn} from "../components/SearchBar";
import API from "../utils/API"
import Moment from 'moment';




function PastInspections() {
    const [inspections, setInspections] = useState([]);
    const [addressSearch, setAddressSearch] = useState("");
    
    useEffect(() => {
        loadInspections()
    }, [])

    async  function loadInspections() {  
       await API.getInspections()
       .then(res => {
         setInspections(res.data)
        }).catch(err => console.log(err));
    };

    let presentcounter = 1
    let pastcounter = 1
    let present = [];
    let past = [];
       inspections.forEach(inspection => {
        
          if((Moment(inspection.date).isBefore(Moment(), 'day'))){
           
              past.push(inspection)
          } else if ((Moment(inspection.date).isSame(Moment(), 'day'))) {
           
              present.push(inspection)
          }    
          })

    
    const handleInputChange = event => {
      setAddressSearch(event.target.value);
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        console.log(addressSearch)
        API.getAddress(addressSearch)
            
          .then(res => setInspections(res.data))
          .catch(err => console.log(err));
      };


    return (
        <div>
            <Helmet>
                <title>Past Inspections</title>
            </Helmet>
            <Nav />
            <div className="container-fluid">
                <div className="Search">
                    <SearchInput 
                        value={addressSearch}
                        onChange={handleInputChange}
                    />
                    <SearchBtn
                        onClick={handleFormSubmit}
                    />
                </div>
                <div className="row mt-4">
                    <div className="col-lg-12 col-sm-12">
                        <h2 className="text-center">Today's Inspections</h2>
                        <div className="border border-3 spacers p-3 bg-dark rounded">
                            <div className="card">
                                {present.length ? (
                                    <div className="bg-light">
                                         {present.map(inspection => (
                                            <div className="card">
                                                 <h2>{Moment(inspection.date).format("dddd, MMMM Do YYYY")}</h2>
                                                    <InspectionsTable>
                                                        <PastComponent key={inspection.id}
                                                            number = {presentcounter++}
                                                            date = {Moment(inspection.date).format("dddd, MMMM Do YYYY")} 
                                                            address = {inspection.address}
                                                            type = {inspection.type}
                                                            permit_id = {inspection.permit_id}
                                                            admin = {inspection.admin}
                                                            date_scheduled = {Moment(inspection.date_scheduled).format("MM- D-YY")}
                                                            />
                                                        </InspectionsTable>
                                                    </div> 
                                                 ))}   
                                             </div>        
                                         ) : (
                                        <h3> No Inspections Today</h3>
                                     )}        
                            </div>
                        </div>
                        <h2 className="text-center">Past Inspections</h2>
                        <div className="border border-3 spacers p-3 bg-dark rounded">
                            <div className="card">
                                {past.length ? (
                                    <div className="bg-light">
                                         {past.map(inspection => (
                                            <div className="card">
                                                 <h2>{Moment(inspection.date).format("dddd, MMMM Do YYYY")}</h2>
                                                    <InspectionsTable>
                                                        <PastComponent key={inspection.permit_id}
                                                            number = {pastcounter++}
                                                            index = {inspection.findIndex}
                                                            date = {Moment(inspection.date).format("dddd, MMMM Do YYYY")} 
                                                            address = {inspection.address}
                                                            type = {inspection.type}
                                                            permit_id = {inspection.permit_id}
                                                            admin = {inspection.admin}
                                                            date_scheduled = {Moment(inspection.date_scheduled).format("MM- D-YY")}
                                                            />
                                                        </InspectionsTable>
                                                    </div> 
                                                 ))}   
                                             </div>        
                                         ) : (
                                        <h3> No Result to Display</h3>
                                     )}        
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
       
    )
};

export default PastInspections;