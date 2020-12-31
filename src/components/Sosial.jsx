import React, { useContext } from "react";
import styled from "styled-components";
// import { SosialLinksList } from "./_api";
import { CVContext } from "./CV.context";
// import Pic from '../images/flowers.png'
import Pic from '../images/woman-workspace-with-notebook-pink-carnation-flower-on-white-background_46208-102.jpg'

const Sosial = () => {
  const { sosialData, myData } = useContext(CVContext);
  const { tel, email } = myData;

  return (
    <Box id="Sosial">
      <ParallaxBox>
        <ContentTitle>
          <H1>CONTACT ME</H1>
        </ContentTitle>
        <ContentDiv>
          <SosialLinks>
            <Ul>
              {sosialData.map(({ id, name, icon, link }) => {
                return (
                  <Li key={name}>
                    <A target="_blank" href={link}>
                      <Img src={icon} alt={name} />
                    </A>
                  </Li>
                );
              })}
            </Ul>
          </SosialLinks>
          <Contacts>
            <Lang> 
            <h5>🇮🇱</h5>
            <h5>🇷🇺</h5>
            <h5>🇺🇦</h5>
            <h5>🇺🇸</h5>
            </Lang>
            <Span> {tel}</Span>
            <SpanEmail>
              <A href="mailto:{email}?subject=Hello from my CV_site&amp;body=Please write you massege here&amp">
                {email}
              </A>
            </SpanEmail>
          </Contacts>
        </ContentDiv>
      </ParallaxBox>
    </Box>
  );
};

export default Sosial;

const Box = styled.div`
  width: 100%;
  min-height: 40vh;
  font-size: 2rem;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 100%;
  color: #2f2f35;
  font-weight: 600;
  /* @media (min-width: 820px) {
    height: 60vh;
  }
  @media (min-width: 1100px) {
    height: 100vh;
  } */
`;
const ParallaxBox = styled.div`
  width: 100%;
  background-image: url(${Pic});
  background-repeat: no-repeat;
  background-size: 50% 50%;
  position: static;
  display: grid;
  grid-template-rows: 1fr 3fr;
  grid-template-columns: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #393955;
`;
const ContentTitle = styled.div`
  font-family: sans-serif;
  pointer-events: none;
  position: relative;
  align-self:center;
  padding: 3vh 0;
`;
const ContentDiv = styled.div`
  height: auto;
  background-color: none;
  min-width: 100%;
  display: grid;
  grid-template-rows:2fr 0.5fr;
  grid-template-columns:repeat(2,1fr);
  font-family: sans-serif;
`;
const SosialLinks = styled.div`
  display: grid;
  grid-area:1/2/2/3
  /* grid-template-columns: 100%; */
  /* grid-template-rows: 100%; */
  align-content: center;
  justify-content: space-around;
`;
const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2,1fr);
`;
const Li = styled.li`
  align-self: center;
  text-align: center;
  justify-content: space-around;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;
const Contacts = styled.div`
  grid-area:1/1/2/2;
  font-size: 2.6rem;
  line-height: 2.5rem;
  text-align: center;
  align-self: center;
  padding-left: 10px;
  @media (min-width: 820px) {
    padding-top: 40px;
    padding-bottom: 10px;
  }
`;
const H1 = styled.h1`
  font-size: 30px;
  font-family: sans-serif;
  justify-self: center;
  text-align: center;

  @media (min-width: 820px) {
    font-size: 55px;
  }
`;
const Lang=styled.div`
  display:flex;
  flex-direction:row;
  font-size: 1.8rem;
  justify-content: space-around;
  align-content:center;
  padding-bottom:20px;

  @media (min-width: 820px) {
    font-size: 2.6rem;
  }
  @media (min-width: 1200px) {
    font-size: 4rem;
  }
`
const Span = styled.p`
  font-size: 1.8rem;
  position: relative;
  justify-self: center;
  align-self: start;
  font-weight: 600;
  color: #144dce;
  font-family: fantasy;
  padding-bottom:20px;
  text-shadow: 1px -1px black;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
  @media (min-width: 820px) {
    font-size: 2.6rem;
  }
  @media (min-width: 1200px) {
    font-size: 4rem;
  }
`;
const SpanEmail = styled.p`
  font-size: 1.8rem;
  position: relative;
  justify-self: center;
  align-self: start;
  font-weight: 600;
  color: #144dce;
  font-family: fantasy;
  text-shadow: 1px -1px black;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
  @media (min-width: 820px) {
    font-size: 2.6rem;
  }
  @media (min-width: 1200px) {
    font-size: 4rem;
  }
`;
const A = styled.a`
  font-size: 1.6rem;
  cursor: pointer;
  color: #144dce;
  @media (min-width: 820px) {
    font-size: 2.6rem;
    justify-self: center;
  }
  /* font-family: fantasy; */
`;
const Img = styled.img`
  width: 60px;
  height: auto;
  /* margin: 20px; */
  @media (min-width: 820px) {
    width: 80px;
  }
`;
