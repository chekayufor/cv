import React, { useContext } from "react";
import styled from "styled-components";
// import { SosialLinksList } from "./_api";
import { CVContext } from "./CV.context";

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
            <Span>Tel: {tel}</Span>
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
  height: 480px;
  font-size: 1.8rem;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 100%;
  color: #2f2f35;
  font-weight: 600;
  @media (min-width: 813px) {
    min-height: 100vh;
  }
`;
const ParallaxBox = styled.div`
  width: 100%;
  min-height: auto;
  background-color: blue;
  background-image: url(https://picsum.photos/id/365/5616/3744);
  /* background-image: url(https://picsum.photos/id/20/3670/2462); */
  background-repeat: no-repeat;
  background-size: 50% 50%;
  position: static;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #393955;
`;
const ContentTitle = styled.div`
  font-family: sans-serif;
  grid-area: 1/1/2/2;
  pointer-events: none;
  position: relative;
  margin: 100px 0px;
`;
const ContentDiv = styled.div`
  min-height: auto;
  background-color: none;
  grid-area: 2/ 1 / 4 / 2;
  min-width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 100%;
  font-family: sans-serif;
`;
const SosialLinks = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
`;
const Ul = styled.ul`
  grid-area: 1/ 1 / 2 / 2;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 100%;
`;
const Li = styled.li`
  align-self: center;
  text-align: center;
  justify-content: space-around;
`;
const Contacts = styled.div`
  grid-area: 2/ 1 / 3 / 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 12%;
  padding-left: 10px;
  padding-right: 10px;
  align-self: end;
  font-size: 2.6rem;
  line-height: 2.5rem;
  text-align: center;
  background-color: rgba(188, 182, 193, 0.4);
  @media (min-width: 813px) {
    padding-top: 40px;
    padding-bottom: 10px;
  }
`;
const H1 = styled.h1`
  font-size: 30px;
  font-family: sans-serif;
  justify-self: center;
  text-align: center;

  @media (min-width: 813px) {
    font-size: 55px;
  }
`;
const Span = styled.p`
  font-size: 1.6rem;
  position: relative;
  justify-self: start;
  align-self: start;
  font-weight: 600;
  color: #393955;
  font-family: fantasy;
  font-weight: 400;

  @media (min-width: 813px) {
    font-size: 2.6rem;
    justify-self: center;
  }
`;
const SpanEmail = styled.p`
  font-size: 1.6rem;
  position: relative;
  justify-self: start;
  align-self: start;
  font-weight: 600;
  color: #393955;
  font-family: fantasy;
  font-weight: 400;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;
const A = styled.a`
  font-size: 1.6rem;
  cursor: pointer;
  color: #393955;
  @media (min-width: 813px) {
    font-size: 2.6rem;
    justify-self: center;
  }
  /* font-family: fantasy; */
`;
const Img = styled.img`
  width: 50%;
  height: auto;
  @media (min-width: 813px) {
    width: 80px;
  }
`;
