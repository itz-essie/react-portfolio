import React from "react";
import headshot from "../Assets/images/headshot.JPG";
import "../components/About.scss";
import Typist from "react-typist";
import portfolioResume from "../Assets/other/portfolioResume.pdf";

const LandingPage = () => {
  return (
    <div class="landingpage">
      <div className="name">
        <img
          class="profileimg"
          src={headshot}
          alt="profile_photo"
          className="img"
        />
        <Typist className="leadtypist" cursor={{ show: false }}>
          <h1>Esiena Ekwofia</h1>
        </Typist>
        <div className="subtitle">
          <h3>
            I am a Full stack web developer. I give life to designs. Creating
            Beautiful things with quality and elegance!
          </h3>
          <div class="container1">
            <a href="/about" button type="button" class="btn btn-light space">
              Get To Know Me
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={portfolioResume}
              button
              type="button"
              class="btn btn-light space"
            >
              <i class="far fa-file"></i>Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
