import React from 'react';
import Footer from "../components/Footer/Footer.js";
import ProjectsCard from '../components/Projects/ProjectsCard.js';
import ProjectTitle from '../components/Projects/ProjectTitle.js';


function Portfolio() {
  return (
   <div>
         <ProjectTitle/>
         <ProjectsCard/>
        <Footer/> 
   </div>
           
  )
   }
 
export default Portfolio;
