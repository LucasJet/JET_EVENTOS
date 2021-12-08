// import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 85px;
  padding: 0px 25px;
  position: fixed;
  background: white;
  width: 100%;
`;

export const NavLogo = styled(Link)`
  display: flex;
  cursor: pointer;
  color: #fff;
  font-size: 2rem;
  text-decoration: none;
`;

export const NavLink = styled.a`
  color: #373F41;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  line-height: 18px;
  letter-spacing: 0.2px;

  &.active {
    color: #3C64B1;
  }
  &:hover {
    color: #3C64B1;
  }
`;

// export const Bars = styled(FaBars)`
//   display: none;
//   color: #fff;

//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 75%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #3C64B1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: 1px solid #3C64B1;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #2254B7;
    color: #fff;
  }
`;