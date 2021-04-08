import React from "react";
import EssentialLinks from "./EssentialLinks.js";
import IMG_1665 from "../../Assets/images/IMG_1665.jpeg"

function SideContainer() {
    return (
        <div className="col-lg-3">
            <div className="text-center">
                {IMG_1665}
                <EssentialLinks />
            </div>
        </div>
    )
};

export default SideContainer;