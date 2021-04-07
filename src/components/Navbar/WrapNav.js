import React from "react";
import "./style.css"

function WrapNav(props) {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light border-bottom border-info sticky-top navborder">
            <div className="container px-0">
                {props.children}
            </div>
        </nav>
    )
};

export default WrapNav;