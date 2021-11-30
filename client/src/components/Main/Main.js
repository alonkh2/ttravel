import React from 'react'
import "./Main.css"
import Trip from '../Trip/Trip'
const trips = [
    {origin: "New York", destination: "Chicago", date: "12/12/12"},
]

function Main() {
    return (
        <div className="main-container">
            <div className="next-trip">
                <Trip trip={trips[0]}/>
            </div>
            <div className="upcoming-trips">hey</div>
            <div className="side-bar">
                <div className="calendar">how are you</div>
                <div className="map">world</div>
            </div>
        </div>
    )
}

export default Main
