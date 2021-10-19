import React from 'react';
import floatimg from '../../assets/weather.png'

const CurrentDay = ({ weekday, date, location, temperature, weatherIcon, weatherDescription }) => {

    return(
        <div className="current-day">
           <div className="day">
               <h1 className='weekday'>{weekday}</h1>
               <p>{date}</p>
               <p className='loca'><i className="fas fa-map-marker-alt"></i>  {location}</p>
               <img className="float-img" src={floatimg} alt="" />
           </div>

           <div className="temperature">
                <p className="temp">{temperature}°C</p>
                <p className='desc'>{weatherDescription}</p>
           </div>
       </div>
    )
}


export default CurrentDay;