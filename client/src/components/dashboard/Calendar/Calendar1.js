import React, { Component } from 'react'  
import FullCalendar from "@fullcalendar/react";  
import dayGridPlugin from "@fullcalendar/daygrid";  
import timeGridPlugin from "@fullcalendar/timegrid";  
  
import "@fullcalendar/core/main.css";  
import "@fullcalendar/daygrid/main.css";  
import "@fullcalendar/timegrid/main.css";  
  
const events = [{ title: "Today", date: new Date() }];  
export class Calendar1 extends Component {  
    render() {  
        return (  
            <div className="container">  
                  <div className="row title" style={{ marginTop: "20px" }} >  
                    <div class="col-sm-12 btn btn-info">  
                        FullCalendar In React Application  
               </div>  
                </div>  
                 <FullCalendar  
              defaultView="dayGridMonth"  
             header={{  
            left: "prev,next",  
            center: "title",  
           right: "dayGridMonth,timeGridWeek,timeGridDay"  
        }}  
        plugins={[dayGridPlugin, timeGridPlugin]}  
        events={events}  
      />  
            </div>  
        )  
    }  
}  
  
export default Calendar1 