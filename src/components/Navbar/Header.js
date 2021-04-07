import React from 'react';
import NavLinks from "./NavLinks";
import TogglerBtn from './TogglerBtn';
import WrapNav from './WrapNav';
import ToggleLogo from "./ToggleLogo"

function Header() {
    return (
      <header>
         <WrapNav>
         <ToggleLogo/>
         <TogglerBtn/>
      <NavLinks/>
      </WrapNav>
      </header>
    );
  }

  export default Header;