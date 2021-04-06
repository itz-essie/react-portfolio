import React from "react";
import headshot from "../Assets/images/headshot.JPG";
import { Typography } from "@material-ui/core";
import "../components/About.scss";
import Typist from "react-typist";
import portfolioResume from "../Assets/other/portfolioResume.pdf"

const LandingPage = () => {
  return (
    <div class= "landingpage">
      <Typography
        variant="h2"
        display="block"
        align="center"
        style={{
          margin: "1rem",
          fontSize: "1.6rem",
          textTransform: "uppercase"
        }}
      >
      </Typography>
      <div className="name">
        <img class= "profileimg" src={headshot} alt="profile_photo" className="img" />
        <Typist className="lead typist" cursor={{ show: false }}>
          <h1>Esiena Ekwofia</h1></Typist>
        <div className="subtitle">
          <h3>I am a Full stack web developer. I give life to designs</h3>
          <p>
            Creating Beautiful things with quality and elegance! <br />
            Experienced in HTML, CSS, and JS. My favorite technology is
            ReactJS
          </p>
          <a href="/about" button type="button" class="btn btn-info">Get To Know Me</a>
          <a target="_blank" rel="noreferrer" href={portfolioResume} button type="button" class="btn btn-info"><i class="far fa-file"></i>Resume</a>
        </div>
      </div>
      </div>
  );
};

export default LandingPage;
