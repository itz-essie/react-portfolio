import React from "react";
import Img from "../../Assets/images/IMG_1665.jpeg"

function AboutImg() {
    return (
        <figure className="figure" >
            <img src={Img} className="img-fluid img-thumbnail figure-img rounded"
                alt="profileimage" />
        </figure >
    )
};

export default AboutImg;