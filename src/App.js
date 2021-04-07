import React from "react";
// import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./pages/Portfolio.js";
import Contact from "./pages/Contact.js";
import LandingPage from "./pages/LandingPage.js";
import AboutMe from "./pages/AboutMe.js";
import Header from "./components/Navbar/Header.js";
import Footer from "./components/Footer/Footer.js";
import "./App.css";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL+'/'}>
      <div className="App">
        <Header />
        <Switch>
        <Route exact path="/">
          <LandingPage/>
        </Route>
        <Route exact path="/About">
          <AboutMe/>
        </Route>
        <Route exact path="/Portfolio">
          <Portfolio/>
        </Route>
        <Route exact path="/Contact">
          <Contact/>
        </Route>
        <Footer/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
