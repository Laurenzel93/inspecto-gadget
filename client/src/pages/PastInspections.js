import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router';
import { getUser } from '../utils/Session';
import { Helmet } from "react-helmet";
import { PastComponent, Results, Card } from "../components/PastComponent";
import Nav from "../components/Nav";
import { Upcoming, DateCard, Heading } from "../components/dashboard/UpcomingInspections";
import Moment from 'moment';
import { SearchInput, SearchBtn } from "../components/SearchBar";
import API from "../utils/API"





function PastInspections() {
    const [inspections, setInspections] = useState([]);
    const [addressSearch, setAddressSearch] = useState("");

    const history = useHistory();
    useEffect(() => {
        window.scrollTo(0, 0);
        if (getUser() != null) {
            loadInspections()
        } else {
            history.push('/login');
        };
    }, [])

    async function loadInspections() {
        await API.getInspections()
            .then(res => {
                setInspections(res.data)
            }).catch(err => console.log(err));
    };

    let present = [];
    let past = [];
    inspections.forEach(inspection => {

        if ((Moment(inspection.date).isBefore(Moment(), 'day'))) {
            past.push(inspection)

        } else if ((Moment(inspection.date).isSame(Moment(), 'day'))) {
            present.push(inspection)
        }
    })

    past.forEach(inspection => {
        inspection.classname ="card p-2 "
        console.log(inspection.results.length)
        if (inspection.results.length == 0) {
            inspection.classname += "late-result"
        } else {
            inspection.classname += "resulted"
        }
    })
        // console.log(past)


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
    
        // console.log(past);
          
    
    // const handleInputChange = event => {
    //   setAddressSearch(event.target.value);
    // };

    // const handleFormSubmit = event => {
    //     event.preventDefault();
    //     console.log(addressSearch)
    //     API.getAddress(addressSearch)
            
    //       .then(res => setInspections(res.data))
    //       .catch(err => console.log(err));
    //   };

    // console.log(inspections)
    return (
        <div  >
            <Helmet>
                <title>Past Inspections</title>
            </Helmet>
            <Nav />
            <div className="container-fluid">
                <div className="row mt-4">
                    {yore.length ? (
                        <div className="col-lg-12 col-sm-12">
                            <h3 className="text-center mt-4">Past Inspections</h3>
                            {yore.map(card => (
                                <div className="mt-2 p-3 bg-dark rounded">
                                 <h4 className="text-white">
                                 <p className= "">{Moment(card.date).format("dddd, MMMM Do YYYY").toString()}</p>
                                 <p className= "">Inspections: &nbsp;{card.inspections.length} </p>
                                </h4>
                                {card.inspections.map(inspection => (
                                        <div className={inspection.classname}>
                                            <div className= "pb-0 card-body mb-0 container col-12 ">
                                        <PastComponent key={inspection.id}
                                                        id = {inspection.id}
                                                        class = {inspection.classname}
                                                        date = {Moment(inspection.date).format("ddd, MMMM Do")} 
                                                        address = {inspection.address}
                                                        type = {inspection.type}
                                                        permit_id = {inspection.permit_id}
                                                        admin = {(inspection.admin).toLowerCase()}
                                                        date_scheduled = {Moment(inspection.date_scheduled).format("l")}/>
                                            {inspection.results.length ? (
                                                 <div className={inspection.classname}>
                                               <div className="row mb-4 ">
                                                <div className="col-12 col-md-auto ">Results: </div> 
                                                    {inspection.results.map(result => (
                                                        <Results 
                                                            result = {result.result}
                                                            time = {Moment(result.createdAt).format("MMM D, YYYY ha")}
                                                            notes = {result.notes}/>
                                                    ))}
                                                </div>
                                                </div>
                                            ) : (
                                                <div className="row mb-4">
                                                        <div className="col- col-md-10">No Results to Display</div>
                                                    </div>
                                                )}
                                       
                                    </div>
                                    </div>         
                                    ))}
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