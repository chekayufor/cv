import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import Pic from '../images/pink-flower-on-a-white-background_1203-2127.jpg';

function NavBarGalleryRouter() {
  return (
    <Nav>
      <Logo src = {Pic} alt="logo" />
      <StyledLink to="/">Home</StyledLink>
    </Nav>
  );
}

export default NavBarGalleryRouter;

const Nav = styled.nav`
  background-color: #c6c1ca;
  top: 0;
  left: 0;
  min-height: 5vh;
  height:6vh;
  position: relative;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 1fr 5fr;
  align-items: center;
  position: fixed;
  z-index:100;
  width:100%;
`;
const StyledLink = styled(Link)`
  text-align: center;
  grid-area: 1/2/2/3;
  line-height: 1.8rem;
  position: relative;
  padding-left: 2rem;
  justify-self: start;
  align-self: center;
  text-decoration: none;
  color: #2f0a24;
  text-transform: uppercase;
  font-size: 1.2rem;
  @media (min-width: 1200px) {
    font-size: 1.8rem;
  }
`;
const spin = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;
const Logo = styled.img`
  /* animation: ${spin} infinite 5s linear; */
  height: 8vh;
  width:8vh;
  border-radius:100%;
  border-radius: 100%;
  border: solid 3px #bb73a4;
  margin: 3vh 2vh 0 0;
`;
