import React from 'react';
import SingleItem from './SingleItem';

const CurrentDayDescription = ({ forecast }) => (
    <div className="current-day-desc">
            {forecast.map((forecastitem)=>{
                return(
                    <SingleItem {...forecastitem} key={forecastitem.name}/>
                )
            } )}
    </div>
);

export default CurrentDayDescription;