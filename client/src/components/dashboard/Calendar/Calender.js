import React, { Component } from 'react'  
// import "@fullcalendar/core/main.css";  
// import "@fullcalendar/daygrid/main.css";  
import FullCalendar from "@fullcalendar/react";  
import dayGridPlugin from "@fullcalendar/daygrid";  

const events = [{ title: "Today", date: new Date() }];  
 class Calendar extends Component {  
    render() {  
        return (  
            <div className="container">  
                <div className="row title" style={{ marginTop: "20px" }} >  
                    <div className="col-sm-12 btn btn-info">  
                        FullCalendar In React Application  
               </div>  
                </div>  
                <FullCalendar  
                    defaultView="dayGridMonth"  
                    plugins={[dayGridPlugin]}  
                    events={events}  
                />  
            </div>  
        )  
    }  
}  
  
export default Calendar;