import React from 'react'
import PropTypes from 'prop-types'
import CurrentDay from './forecaste/CurrentDay'
import CurrentDayDescription from './forecaste/CurrentDayDescription'
import Upcomingdaysforecate from './forecaste/Upcomingdaysforecate'

function Forecast({ forecast }) {
    return (
        <div className="forecast">
            <div className="flex">
             <CurrentDay {...forecast.currentDay}/>
             <CurrentDayDescription forecast={forecast.currentdaydetails}/>
            </div>
            <Upcomingdaysforecate days={forecast.upcomingDays}/>
        </div>
    )
}

Forecast.propTypes ={
   forecast : PropTypes.shape({
    currentDay: PropTypes.object,
    currentdaydetails: PropTypes.array,
    upcomingDays: PropTypes.array
   }) 
}

export default Forecast
