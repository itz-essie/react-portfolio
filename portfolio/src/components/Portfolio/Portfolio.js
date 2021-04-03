import React from 'react';
import Thumbnail from "../../Thumbnail"; // Import the Thumbnail component
import Footer from "../Footer/Footer.js";

function Portfolio(props) {
  return (
    // Render a Thumbnail component
    <div>
      <h1>Portfolio</h1>
      <Thumbnail
        link=""
        image=""
        title=""
        category=""
      />
      <Footer/>
    </div>
  )
}
 
export default Portfolio;

