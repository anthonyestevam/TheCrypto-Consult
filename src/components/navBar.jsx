import React from "react";

import { Link } from "react-router-dom";

import "./navBar.css"

const NavBar = () => {
    return(
        <div className="nav">
            <header className="name-logo">theCrypto Consult</header>
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
