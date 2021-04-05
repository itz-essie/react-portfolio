import React from 'react';
import {Projects} from "../utils/Projects.js"
import Footer from "../components/Footer.js";


function Portfolio() {
  return (
    <div class = "row">
   {Projects.map((project) => (
    <div class="col-sm-6 col-md-4">
     <div key= {project.id}>
          <h3>{project.title}</h3>
          <h3>{project.description}</h3>
          <img src={project.image}
                className="rounded mx-auto d-block img-fluid img-thumbnail imgsize" alt={project.title} />
          <a href={project.githubRepo}><button type="button"
                    className="btn btn-info rounded"><i className="fab fa-github">&nbsp;</i>
              Github</button></a>
          <h3> </h3>
          <h3>{project.deployed}</h3>
           <Footer/>
       </div>
       </div>

   ))}
   </div>
  )
   }
 
export default Portfolio;
