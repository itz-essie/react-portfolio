import React from 'react';
import {Projects} from "../../utils/Projects.js"
import "./style.css"


// function ProjectsCard() {
//   return (
//     <div class = "row">
//    {Projects.map((project) => (
//     <div class="col-sm-6 col-md-4">
//      <div key= {project.id}>
//           <h3>{project.title}</h3>
//           <p>{project.description}</p>
//           <h3>{project.technogies}</h3>
//           <img src={project.image}
//                 className="rounded mx-auto d-block img-fluid img-thumbnail imgsize" alt={project.title} />
//           <a href={project.githubRepo}><button type="button"
//                     className="btn btn-info rounded"><i className="fab fa-github">&nbsp;</i>
//               Github Repo</button></a>
//               <a href={project.deployed}><button type="button"
//                     className="btn btn-info rounded"><i className="fab fa-github">&nbsp;</i>
//               See it Live</button></a>
//            <Footer/>
//        </div>
//        </div>

//    ))}
//    </div>
//   )
//    }
 
// export default ProjectsCard;



function ProjectsCard() {
  return Projects.map((project) => {
    // let languageString = "";
    return (
      <section class="container">
       {/* <h1 className="projects">Projects</h1> */}
      <section class="row">
      <div className="card mb-3 wholeCard">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              className="image-fluid mx-auto d-block imageStyling"
              src={project.image}
              alt={project.title}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body text-center">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text text-left description">{project.description}</p>
              <p className="card-text cardCenter">
                   <small className="text-muted">{project.technologies}</small>
                {/* // })} */}
                {/* <small className="text-muted">HTML | CSS | Bootstrap</small> */}
              </p>
              <a href={project.deployed} target="_blank" rel="noreferrer">
                <button type="button" className="btn btn-dark marginRight">
                  <i className="fas fa-sun"></i> Deployed
                </button>
              </a>
              <a href={project.githubRepo} target="_blank" rel="noreferrer">
                <button type="button" className="btn btn-dark marginLeft">
                  <i className="fab fa-github"></i> Github
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      </section>
      </section>
    );
  });
}

export default ProjectsCard;