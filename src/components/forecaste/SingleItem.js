import React from 'react'

function SingleItem({ name, value, unit }) {
    return (
        <div>
            <p className='single-item'><span className='h1'>{name}:</span> <span className="value">{value} {unit}</span></p>
        </div>
    )
}

export default SingleItem
