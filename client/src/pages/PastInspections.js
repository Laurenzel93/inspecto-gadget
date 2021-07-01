import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { PastComponent, InspectionsTable } from "../components/PastComponent";
import Nav from "../components/Nav";
import { Upcoming, DateCard, Heading }from "../components/dashboard/UpcomingInspections";
import Moment from 'moment';
import {SearchInput, SearchBtn} from "../components/SearchBar";
import API from "../utils/API"





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

    let present = [];
    let past = [];
    inspections.forEach(inspection => {
        
          if((Moment(inspection.date).isBefore(Moment(), 'day'))){
              past.push(inspection)

          } else if ((Moment(inspection.date).isSame(Moment(), 'day'))) {
              present.push(inspection)
          }    
    })
    const grouped = past.reduce((grouped, inspection) => {
    const date = inspection.date;
        if (!grouped[date]) {
                grouped[date] = [];
        }
        grouped[date].push(inspection);
        return grouped;
        }, {});
    
        // Edit: to add it in the array format instead
        const yore = Object.keys(grouped).map((date) => {
            return {
                date,
                inspections: grouped[date]
            };
        });
    
        console.log(yore);
          
    
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
                        {present.length ? (
                        <div className="border border-3 p-3 bg-dark rounded">
                            <h4 className="text-white">
                                <span className= "mr-4">{Moment().format("dddd, MMMM Do YYYY").toString()}</span>
                                <span className= "ml-4">{present.length} Inspections Today</span>
                            </h4>
                              {present.map(inspection => (
                                <div className="card">
                                  <div className="bg-light">
                                        <PastComponent key={inspection.id}
                                            date = {Moment(inspection.date).format("dddd, MMMM Do YYYY")} 
                                            address = {inspection.address}
                                            type = {inspection.type}
                                            permit_id = {inspection.permit_id}
                                            admin = {inspection.admin}
                                            date_scheduled = {Moment(inspection.date_scheduled).format("MM- D-YY")}
                                        />
                                    </div>
                                </div> 
                             ))}   
                        </div>        
                        ) : (
                        <h3> No Inspections Today</h3>
                                     )}        
                    </div>
                </div>
                        <div>
                            <h2 className="text-center">Past Inspections</h2>
                                {yore.length ? (
                                <div>
                                    {yore.map(card => (   
                                        <div className="border border-3 spacers p-3 bg-dark rounded">
                                            <Heading
                                                date = {Moment(card.date).format("dddd, MMMM Do YYYY")} 
                                                length = {card.inspections.length}
                                            />
                                            <div className="card">
                                                <div className="bg-light"></div>
                                                    <DateCard>
                                                        {card.inspections.map(inspection => (
                                                            <PastComponent key={inspection.permit_id}
                                                                id = {inspection.id}
                                                                index = {inspection.findIndex}
                                                                date = {Moment(inspection.date).format("dddd, MMMM Do YYYY")} 
                                                                address = {inspection.address}
                                                                type = {inspection.type}
                                                                permit_id = {inspection.permit_id}
                                                                admin = {inspection.admin}
                                                                date_scheduled = {Moment(inspection.date_scheduled).format("MM- D-YY")}
                                                            />
                                                        ))}    
                                                    </DateCard>
                                                </div>  
                                        </div> 
                                    ))}
                                </div>                    
                            ) : (
                            <h3> No Result to Display</h3>
                             )}        
                    </div>
                </div>
            </div>   
    )
};

export default PastInspections;