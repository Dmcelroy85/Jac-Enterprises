import React from "react"
import Joke from "./Joke"
import { Link } from 'react-router-dom'
import nasaLogo from '../assets/images/NASA_logo.svg.webp'
import bored from '../assets/images/Bored.svg'

function Home() {
    return (
        <div className="container shadow-lg">
            <div className="d-flex row gap-5 justify-content-center bg-white shadow-lg p-5">
        
        <div className="p-4 rounded-5 border border-3 border-danger text-center w-50">
            <span className="fw-bold">NASA Photo Search</span>
            <Link to="nasa" className="nav-link px-3 text-danger fw-bold"><img src={nasaLogo} className='nasa-logo'></img></Link></div>

            <div className="p-4 rounded-5 border border-3 border-danger text-center w-50">
            <span className="fw-bold">Looking for Something to do?</span>
            <Link to="bored" className="nav-link px-3 text-danger fw-bold"><img src={bored} className='nasa-logo'></img></Link></div>
    </div>
    </div>
    )
}

export default Home