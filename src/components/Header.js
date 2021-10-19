import React from 'react'
import earth from '../assets/earth.png'

function Header() {
    return (
        <header className="header">
            <img src={earth} alt="" />
            <h1>Weather <span className="bold">App</span></h1>
        </header>
    )
}

export default Header
