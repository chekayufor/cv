import React, { useRef } from 'react';
import Wrapper from './Wrapper';
import styled, { keyframes } from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
// import logo from '../images/react.svg';
import logo from '../images/kisspng-react-logo-javascript-front-and-back-ends-user-int-5afef575c096e1.8015139215266584217889.png';
// import NavigationBar from "./NavigationBar";
import Wellcome from './Wellcome';
import Education from './Education';
import Portfolio from './Portfolio';
import Sosial from './Sosial';
import Footer from './Footer';

import GlobalStyles from '../styles.lib/global.styles';

const Root = () => {
  return (
    <AppContainer>
      <Wrapper>
        <NavigationBar>
          <Logo src={logo} alt="logo" />
          <Nav>
            <Ul>
              <Li>
                <StyledLink to="/#Wellcome" smooth>
                  Home
                </StyledLink>
              </Li>
              <Li>
                <StyledLink to="/#Education" smooth>
                  Education
                </StyledLink>
              </Li>
              <Li>
                <StyledLink to="/#Portfolio" smooth>
                  Portfolio
                </StyledLink>
              </Li>
              <Li>
                <StyledLink to="/#Sosial" smooth>
                  Social
                </StyledLink>
              </Li>
            </Ul>
          </Nav>
        </NavigationBar>
        <Wellcome />
        <Education />
        <Portfolio />
        <Sosial />
        <Footer />
      </Wrapper>
      <GlobalStyles />
    </AppContainer>
  );
};

export default Root;

const AppContainer = styled.div`
  height: 100%;
  width: 100%;
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
`;
const NavigationBar = styled.div`
  /* background-color: #6c7767; */
  background-color: #756c6c;
  top: 0;
  left: 0;
  min-height: 30px;
  position: relative;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 1fr 5fr;
  align-items: flex-start;
  padding: 2rem;
  /* background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
  /* z-index: 10; */
`;
const Nav = styled.nav`
  display: none;
  @media (min-width: 600px) {
    display: grid;
  }
`;
const Ul = styled.ul`
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
`;
const Li = styled.li`
  text-align: center;
  line-height: 50px;
  text-transform: uppercase;
`;

const StyledLink = styled(HashLink)`
  text-align: start;
  grid-area: 1/2/2/3;
  line-height: 1.8rem;
  position: relative;
  justify-self: start;
  align-self: start;
  font-size: 1.4rem;
  text-decoration: none;
  color: #e3d5d5;
  @media (min-width: 1200px) {
    font-size: 1.8rem;
  }
`;
