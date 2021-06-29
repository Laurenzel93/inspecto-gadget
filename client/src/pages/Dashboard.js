import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import Nav from "../components/Nav";
import ActionRequiredBanner from "../components/dashboard/ActionRequiredBanner";
import Today from "../components/dashboard/TodayInspections";
import Calendar from "../components/dashboard/Calendar";
import Upcoming from "../components/dashboard/UpcomingInspections";
import Moment from 'moment';
import API from '../utils/API';


function Dashboard() {
    let today = Moment().format("dddd, MMMM Do YYYY").toString()
    const [inspections, setInspections] = useState([]);

    let present = [];
    let future = [];

    // const getInspectionData = () => {
    //     API.getInspections()
    //         .then(res => {
    //             console.log('===========')
    //             console.log(res)
    //             console.log('===========')
    //         })
    //         .then(res => setTodayInspections(res))
    //         .catch(error => console.log(error))
    // }

    useEffect(() => {
        loadInspections()
    }, [])

    async  function loadInspections() {  
        await API.getInspections()
        .then(res => {
          setInspections(res.data)
         }).catch(err => console.log(err));
     };
    
     inspections.forEach(inspection => {
       if((Moment(inspection.date).isAfter(Moment(), 'day'))){
           future.push(inspection)
       } else if ((Moment(inspection.date).isSame(Moment(), 'day'))) {
           present.push(inspection)
       }    
       }) 

    return (
        <div>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <Nav />
            <ActionRequiredBanner />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <h2 className="text-center mt-4">Today's Inspections</h2>
                        {present.length ? (
                        <div className="border border-3 p-3 bg-dark rounded">
                            <h4 className="text-white">{today}</h4>
                              {present.map(inspection => (
                                <div className="card">
                                  <div className="bg-light">
                                      <Today key={inspection.permit_id}
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
                            <h3> No Result to Display</h3>
                        )}        
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <h2 className="text-center mt-4">Calendar</h2>
                        <div className="border border-3 p-3 bg-dark rounded">
                            <div className="card">
                                <div className="card-body bg-light">
                                    <Calendar></Calendar>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-sm-12">
                        <h2 className="text-center mt-4">Upcoming Inspections</h2>
                        {future.length ? (
                        <div className="border border-3 p-3 bg-dark rounded">
                          {future.map(inspection => (
                            <div className="card">
                                <div className="bg-light"></div>
                                <Upcoming key={inspection.permit_id}
                                            date = {Moment(inspection.date).format("dddd, MMMM Do YYYY")} 
                                            address = {inspection.address}
                                            type = {inspection.type}
                                            permit_id = {inspection.permit_id}
                                            admin = {inspection.admin}
                                            date_scheduled = {Moment(inspection.date_scheduled).format("MM- D-YY")}
                                      />
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
    )

};

export default Dashboard;