import React from "react";
import logoV3 from "../Images/logoV4.png";
import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <nav className="navbar sticky-top navbar-expand-lg" style={{backgroundColor: "white"}}>
            <Link className="navbar-brand" to="/">
                <img className="logoV3 p-3" src={logoV3} alt="Home" to="/"></img>
            </Link>
            <button className="navbar-toggler mx-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-end" id="navbarNav">
                <ul className="navbar-nav mb-2 mb-lg-0 mx-4 mx-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/title_generator">Title Generator</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/team">Team</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/coming_soon">Coming Soon</Link>
                    </li> */}
                </ul>
            </div>
        </nav> 
        
    )

};

export default Navbar