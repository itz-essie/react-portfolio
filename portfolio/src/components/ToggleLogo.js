import React from "react";
import { Link } from "react-router-dom";

function ToggleLogo() {
    return (
        <div>
            <Link to="/" className="navbar-brand d-lg-inline-block d-none bg-info p-2 mb-0 rounded text-light h1">
                Esiena Ekwofia
                </Link>
            <Link to="/" className="navbar-brand d-inline-block d-lg-none bg-info p-2 mb-0 rounded text-light h1">
                EE
                </Link>
        </div>
    )
}


export default ToggleLogo;