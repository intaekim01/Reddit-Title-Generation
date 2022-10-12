import React from "react";
import logoV3 from "../Images/logoV3.png";

function Navbar() {

    return (
        <nav className="navbar navbar-expand-sm px-5">
            <div className="conatainer-fluid ">
                <div className="navbar-brand ">
                    <img className="logoV3 py-2" src={logoV3} alt="logoV3"></img>
                </div>
            </div>
        </nav>
    )

};

export default Navbar