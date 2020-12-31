import React, { useRef } from 'react';
import Wrapper from './Wrapper';
import styled, { keyframes } from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
// import logo from '../images/react.svg';
import logo from '../images/pink-flower-on-a-white-background_1203-2127.jpg';
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
  top: 0;
  left: 0;
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
  /* animation: ${spin} infinite 5s linear; */
  height: 8vh;
  width:8vh;
  border-radius:100%;
  border-radius: 100%;
  border: solid 3px #bb73a4;
  margin: 3vh 2vh 0 0;
`;
const NavigationBar = styled.div`
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
const Nav = styled.nav`
  display: grid;
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
  text-transform: uppercase;
`;

const StyledLink = styled(HashLink)`
  text-align: start;
  grid-area: 1/2/2/3;
  line-height: 1.8rem;
  position: relative;
  justify-self: start;
  align-self: center;
  font-size: 1.2rem;
  text-decoration: none;
  color: #2f0a24;
  @media (min-width: 1200px) {
    font-size: 1.8rem;
  }
`;
