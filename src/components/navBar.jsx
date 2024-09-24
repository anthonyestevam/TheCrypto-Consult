import React from "react";

import { Link } from "react-router-dom";

import "./navBar.css"

import logo from "../assets/logo.svg"
const NavBar = () => {
    return(
        <div className="nav">
            <header className="name-logo">theCrypto Consulte</header>
             <div className="navBar">
                 <ul>
                    <li className="about">
                        <Link to="/about">ABOUT</Link>
                        </li>
                 </ul>
             </div>


        </div>
    )
}

export default NavBar;