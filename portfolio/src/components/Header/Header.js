import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    // let ResumeInfo = this.props.ResumeInfo;
    return (
      <React.Fragment>
      <header id="home">
         <nav id="nav-wrap">
            <ul id="nav" className="nav">
               <li><a className="smoothscroll" href="/about">About</a></li>
               <li><a className="smoothscroll" href="/portfolio">Portfolio</a></li>
               <li><a className="smoothscroll" href="/resume">Resume</a></li>
               <li><a className="smoothscroll" href="/contact">Contact Me</a></li>
            </ul>
         </nav>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}