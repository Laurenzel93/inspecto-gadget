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
    const [id, setId] = useState('');

    let presentcounter 
    let futurecounter
    let present 
    let future 
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

    async function loadInspections() {
        await API.getInspections()
        .then(res => {
          setInspections(res.data)
           }).catch(err => console.log(err));
        }
    
    
          present = [];
          future = [];
          presentcounter = 1
          futurecounter = 1
     inspections.forEach(inspection => {
       if((Moment(inspection.date).isAfter(Moment(), 'day'))){
           future.push(inspection)
       } else if ((Moment(inspection.date).isSame(Moment(), 'day'))) {
           present.push(inspection)
       }
          
       }) 
       const grouped = future.reduce((grouped, inspection) => {
        const date = inspection.date;
        if (!grouped[date]) {
          grouped[date] = [];
        }
        grouped[date].push(inspection);
        return grouped;
      }, {});
      
      // Edit: to add it in the array format instead
      const upcoming = Object.keys(grouped).map((date) => {
        return {
          date,
          inspections: grouped[date]
        };
      });
      
      console.log(upcoming);
    

    return (
        <div>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <Nav />
            {present.length ? (
                <ActionRequiredBanner />
            ) : (
                null
            )}
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
                                            length = {present.length}
                                            number = {presentcounter++}
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
                        {upcoming.length ? (
                           <div> 
                          {upcoming.map(inspection => (  
                        <div className="border border-3 p-3 bg-dark rounded">
                          
                            <div className="card">
                                <div className="bg-light"></div>
                               
                                <Upcoming key={inspection.permit_id}
                                            number = {futurecounter++}
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
                </div>
            </div>
        </div>
    )

};

export default Dashboard;