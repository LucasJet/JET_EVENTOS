import React from "react";

import {
  Nav,
  NavLogo,
  NavLink,
  // Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./styles";

const HomeNavbar = () => {
  return (
    <>
      <Nav>
        <NavLogo to="/home">
          <img src={ require('../../assets/logo-jet-azul.svg')} alt="Logo jet" />
        </NavLogo>

        <NavMenu>
          <NavLink href="#sobre-nos" activeStyle>
            Sobre nós
          </NavLink>
          <NavLink href="#contato" activeStyle>
            Contato
          </NavLink>
        </NavMenu>

        <NavBtn>
          <NavBtnLink to="/login">Conectar</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
export default HomeNavbar;
