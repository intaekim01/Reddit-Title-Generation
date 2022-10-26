import React from "react";
import logoV3 from "../Images/logoV4.png";
import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg background">
            <Link className="navbar-brand" to="/">
                <img className="logoV3 p-3" src={logoV3} alt="Home" to="/"></img>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/placeholder">Placeholder</Link>
                    </li>
                </ul>
            </div>
        </nav> 
    )

};

export default Navbar