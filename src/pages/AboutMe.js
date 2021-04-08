// import React from "react";

// const AboutMe = () => {
//   return (
//     <div
//       className="about card col shadow-lg p-3 mb-5 bg-white rounded alert"
//       id="about"
//     >
//       <div className="card-content">
//         <h4>About</h4>
//         <hr />
//         <p className="display-5">
//           I'm a Long Island University social work grad currently working as a
//           social worker. Seeking new and more interesting challenges, I took the
//           leap into programming and web development. I love making beautiful,
//           robust UIs for broad audiences, solving tricky problems, and seeing my
//           applications come to life. Aside from coding, love traveling and doing
//           anything active or adventurous including, hiking, biking, zip-lining,
          // camping, you name it. As a recent Graduate of Columbia School of
          // Engineering, Full-Stack Web Development certification program, I am an
          // aspiring Full-Stack web developer with a focus on. I currently work as
          // a social worker in NYC, and hope to merge my passion for mental health
          // and shattering the stigmas surrounding mental health imarginalized
          // communities, with my new found love of everything tech! I'm always
          // eager to learn new inspiring technologies. ❤
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AboutMe;


import React from "react"
import Fade from "react-reveal/Fade"
import london from "../../src/Assets/images/london.jpg"
import "../components/About/About.scss"

const AboutMe = () => {
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <p> I'm a Long Island University social work grad currently working as a
          social worker. Seeking new and more interesting challenges, I took the
          leap into programming and web development. I love making beautiful,
          robust UIs for broad audiences, solving tricky problems, and seeing my
          applications come to life. Aside from coding, love traveling and doing
          anything active or adventurous including, hiking, biking, zip-lining,
          camping, you name it.
              <br></br>     
              <br></br>
              <br></br>
              As a recent Graduate of Columbia School of
          Engineering, Full-Stack Web Development certification program, I am an
          aspiring Full-Stack web developer with a focus on. I currently work as
          a social worker in NYC, and hope to merge my passion for mental health
          and shattering the stigmas surrounding mental health imarginalized
          communities, with my new found love of everything tech! I'm always
          eager to learn new inspiring technologies. ❤
            </p>
          </div>
          <div className="image-wrapper">
            <img src={london} alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
