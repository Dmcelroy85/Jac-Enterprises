<<<<<<< HEAD
import React from "react"
import Joke from "./Joke"
import Button from "./Button"
=======
import { Link } from 'react-router-dom'
import nasaLogo from '../assets/images/NASA_logo.svg.webp'
>>>>>>> fadb5b75fddca0bdd859fc30aa34654235cf3019

function Home() {
    return (
    <div className="container">
    <div className="d-flex flex-row justify-content-evenly mt-5 gap-4 pb-5">
        <div className="flex-fill p-4 rounded-5 border border-3 border-danger">Flex item 1<br/>Flex item 1<br/>Flex item 1<br/>Flex item 1<br/></div>
        <div className="flex-fill p-4 rounded-5 border border-3 border-danger">Flex item 2<br/>Flex item 2<br/>Flex item 2<br/>Flex item 2<br/>Flex item 2<br/>Flex item 2</div>
        <div className="flex-fill p-4 rounded-5 border border-3 border-danger text-center">
            <span className="fw-bold">NASA Photo Search</span>
            <Link to="nasa" className="nav-link px-3 text-danger fw-bold"><img src={nasaLogo} className='nasa-logo'></img></Link></div>
    </div>
    <Joke /><Button />
    </div>
    )
}

export default Home