import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { PastComponent, InspectionsTable } from "../components/PastComponent";
import Nav from "../components/Nav";
import SearchBar from "../components/SearchBar";
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
         console.log(inspections)
        })

       .catch(err => console.log(err));

    };
    
    const handleInputChange = event => {
      setAddressSearch(event.target.value);
    };

    const handleFormSubmit = event => {
        // When the form is submitted, prevent its default behavior, get recipes update the recipes state
        event.preventDefault();
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
                <SearchBar 
                value={addressSearch}
                onChange={handleInputChange}
                onClick={handleFormSubmit}
                />
                <div className="row mt-4">
                    <div className="col-lg-12 col-sm-12">
                        <h2 className="text-center">Past Inspections</h2>
                        <div className="border border-3 spacers p-3 bg-dark rounded">
                            <div className="card">
                                <div className="bg-light">
                                    <div className="card">
                                        <h2>Date and number of inspections on that day</h2>
                                        {inspections.length ? (
                                            <InspectionsTable>
                                                {inspections.map(inspection => (
                                                    <PastComponent key={inspection.permit_id}
                                                        date = {inspection.date}
                                                        address = {inspection.address}
                                                        type = {inspection.type}
                                                        code = {inspection.permit_id}
                                                        admin = {inspection.admin}
                                                        on = {inspection.date_scheduled}/>
                                                ))}
                                            </InspectionsTable>
                                        ) : (
                                            <h3> No Result to Display</h3>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PastInspections;