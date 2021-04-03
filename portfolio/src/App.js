import React from "react";
// import logo from "./logo.svg";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Portfolio from "./components/Portfolio/Portfolio.js";
import Contact from "./components/Contact/Contact.js";
import About from "./components/About/About.js";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import ResumeInfo from "./ResumeInfo";
import Background from "./components/Background/Background.js"
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Background/>
        <Header />
        <Switch>
        <Route exact path={["/", "/about"]}>
          <About ResumeInfo={ResumeInfo} />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio ResumeInfo={ResumeInfo} />
        </Route>
        <Route exact path="/contact">
          <Contact ResumeInfo={ResumeInfo} />
        </Route>
        <Footer ResumeInfo={ResumeInfo} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
