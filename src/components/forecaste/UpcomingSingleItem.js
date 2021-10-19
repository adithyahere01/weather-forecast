import React from 'react'

function UpcomingSingleItem({imgUrl, temperature, weekday}) {
    return (
        <div className='upcoming-single'>
              <h2 className='h2'>{weekday}</h2>
              <h4 className='celcius'> {temperature}°C</h4>
        </div>
    )
}

export default UpcomingSingleItem
