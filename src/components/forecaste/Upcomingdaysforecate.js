import React from 'react'
import UpcomingSingleItem from './UpcomingSingleItem'

function Upcomingdaysforecate({ days }) {
    return (
        <div className="upcomingdays">
            <h1>Upcoming days</h1>
            <div className="line"></div>
            <div className="flew-row">
               {days.map((day) => <UpcomingSingleItem {...day} key={day.weekday}/>)}
            </div>
        </div>
    )
}

export default Upcomingdaysforecate
