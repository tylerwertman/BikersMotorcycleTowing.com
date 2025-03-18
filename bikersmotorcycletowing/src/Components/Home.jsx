import React from 'react'
import Bike from '../Images/Bike.jpg'

const Home = () => {
    return (
        <div>
            <div style={{position: "absolute", top: "20%", left: "35%", color: "white", fontSize: "2rem", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", lineHeight: "0.5"}}>
                <h1 style={{justifyContent:"center"}}>Bikers MotorCycle Towing</h1>
                <h1>Open 24/7</h1>
                <h1>Call: (516) 749-1314</h1>
                <h1>Serving South Florida</h1>
            </div>
            <img src={Bike} alt="motorcycle in front of towing trailer" width={"100%"} />

        </div>
    )
}

export default Home