import React from "react";

function WrapNav(props) {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light border-bottom border-info sticky-top">
            <div className="container px-0">
                {props.children}
            </div>
        </nav>
    )
};

export default WrapNav;