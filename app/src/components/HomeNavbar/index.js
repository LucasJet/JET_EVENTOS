import React from "react";
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./styles";

const HomeNavbar = () => {
  return (
    <>
      <Nav>
        <NavLogo to="/">
          Logo
        </NavLogo>
        <Bars />

        <NavMenu>
          <NavLink to="/about" activeStyle>
            Sobre nós
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contato
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/sign-up">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
export default HomeNavbar;
