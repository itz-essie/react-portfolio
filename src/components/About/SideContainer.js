import React from "react";
import EssentialLinks from "./EssentialLinks.js";
import AboutImg from "./AboutImg.js"

function SideContainer() {
    return (
        <div className="col-lg-3">
            <div className="text-center">
                <AboutImg />
                <EssentialLinks />
            </div>
        </div>
    )
};

export default SideContainer;