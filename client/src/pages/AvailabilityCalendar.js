import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { getUser } from '../utils/Session';
import { useHistory } from 'react-router';
import API from '../utils/API';
import moment from 'moment';

function AvailabilityCalendar() {
  const [calendar, setCalendar] = useState([])
  const [background, setBackground] = useState("")
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
    await API.getCalender()
        .then(res => {
         // console.log((getUser().role))
          if (getUser().role === 'admin') {
            setBackground('yellow')
          } else {
            setBackground(res.data[0].color)
          }
         // console.log(res.data)
            setCalendar(res.data)
        })
        .catch(err => {
            console.log(err)
        })
}

let nextWeek = moment().add(7, 'd'); 
let nextMonth = moment().add(30, 'd');
   
  const handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event')
    let span = selectInfo.view.calendar
    
    span.unselect() // clear date selection
    console.log(background)

    if (title) {
      span.addEvent({
     
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
        backgroundColor: background,
        textColor: "black"
      })
    }
  }


function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}



  

 
    return (
      <div className='container-fluid col-12'>
         <h3 className="text-center mt-4">Availability Calendar</h3>
        <div className='mt-2 p-3 bg-dark rounded'>
        <div className="card">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev',
              center: 'title',
              right: 'next'
            }}
            initialView='dayGridMonth'
            events={calendar}
            hiddenDays={[0, 6]}
            selectable={true}
            selectMirror={true}
            select={handleDateSelect}
            eventContent={renderEventContent} // custom render function
            //eventsSet={handleEvents}  called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
          />
        </div>
      </div>
    </div>  
    )
  
}
 
export default AvailabilityCalendar;
 