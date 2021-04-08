import React from "react";
import "./style.css";
import Typist from "react-typist";

const ProjectTitle =() =>{
    return(
        <div class= "project-title">
          <Typist className="leadtypist" cursor={{ show: false }}>
          <h1>Projects</h1> </Typist>
        </div>
        
    )
}

export default ProjectTitle