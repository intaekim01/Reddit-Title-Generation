import React from "react";
import logoV3 from "../Images/logoV4.png";
import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <div className="container-fluid py-5" style={{backgroundColor: "#536879"}}>
            <footer className="container py-5">
                <div className="row">
                    <div className="col-sm-12 col-md-4 text-center text-light">
                        <p>Version 26.2.11.2022</p>
                        <p>Copyright 2022</p>
                    </div>
                    <div className="col-sm-12 col-md-4 text-center text-light">
                        <ul className="navbar-nav mb-2 mb-lg-0 mx-4 mx-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/title_generator">Title Generator</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/team">Team</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/coming_soon">Coming Soon</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-4 text-center">
                        <Link className="navbar-brand" to="/">
                            <img className="logoV3" src={logoV3} alt="Home" to="/"></img>
                        </Link>
                    </div>
                </div>
                
                
            </footer>
           
        </div> 
    )

};

export default Navbar