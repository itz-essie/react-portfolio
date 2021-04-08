import React from "react"
import AboutInfo from "../components/About/AboutInfo.js"
import AboutMeRow from "../components/About/AboutMeRow.js"
import SideContainer from "../components/About/SideContainer.js"

function AboutMe(){
  return(
    <AboutMeRow>
      <SideContainer />
      <AboutInfo />
    </AboutMeRow>
  )
}

export default AboutMe;