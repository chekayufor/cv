import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../images/Logo.svg';
import logo from '../images/kisspng-react-logo-javascript-front-and-back-ends-user-int-5afef575c096e1.8015139215266584217889.png';

function NavBarGalleryRouter() {
  return (
    <Nav>
      <Logo src={logo} alt="logo" />
      <StyledLink to="/">Home</StyledLink>
    </Nav>
  );
}

export default NavBarGalleryRouter;

const Nav = styled.nav`
  width: 100%;
  display: grid;
  background-color: #756c6c;
  grid-template-rows: 100%;
  grid-template-columns: 1fr 5fr;
  justify-content: center;
  align-content: senter;
  text-align: center;
`;
const StyledLink = styled(Link)`
  text-align: start;
  grid-area: 1/2/2/3;
  line-height: 1.8rem;
  position: relative;
  justify-self: start;
  align-self: center;
  text-decoration: none;
  color: #e3d5d5;
  text-transform: uppercase;
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
  animation: ${spin} infinite 5s linear;
  height: 5vh;
  grid-area: 1/1/2/2;
`;
