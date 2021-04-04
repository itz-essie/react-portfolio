import React from "react";
import {Link, useLocation} from "react-router-dom";

function NavLinks(){
    const location = useLocation();
    return(
        
        <div class="collapse navbar-collapse" id="basicExampleNav">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item">
                    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}><i
                        className="far fa-address-card mr-1"></i>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}><i
                        className="far fa-address-card mr-1"></i>About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}><i
                        className="fas fa-project-diagram mr-1"></i>Portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}><i className="far fa-envelope mr-1"></i>Contact</Link>
                </li>
            </ul>
        </div>
        </div>
    )
}

export default NavLinks