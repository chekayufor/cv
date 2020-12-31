import React, { useContext } from "react";
import styled from "styled-components";
import { CVContext } from "./CV.context";
import WellcomePic from "../images/45184396a325d2b3248dc9b417a6c460.jpg";

const Wellcome = () => {
  const { myData, descriptionData } = useContext(CVContext);
  const { first_name, last_name, specialization, img } = myData;
  console.log({ descriptionData });
  return (
    <ParallaxBox id="Wellcome">
      <Img src={img} alt="profile photo" />
      <WelcomeMessage>
        <H1>
          I<Span1 className="color_18">'</Span1>M
        </H1>
        <H1>{first_name}</H1>
        <H1>
          {last_name}
          <Span1 className="color_18">.</Span1>
        </H1>
        <H5>
          <Span2>{specialization}</Span2>
        </H5>
      </WelcomeMessage>
      <Par>
        {descriptionData.map(str => {
          return (
            <p key={str}>
              {str}
              <br />
            </p>
          );
        })}
      </Par>
    </ParallaxBox>
  );
};

export default Wellcome;

const ParallaxBox = styled.div`
  background-image: url(${WellcomePic});
  position: static;
  height: 100vh;
  width: 100%;
  padding-top:10%;
  padding-bottom:5%;
  display: grid;
  min-height: auto;
  grid-template-rows: 1fr 2fr 2fr 1fr;
  grid-template-columns: 3fr 1fr;
  /* Full height */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  @media (min-width: 820px) {
    min-height: 100vh;
  }
  /* Turn off parallax scrolling for tablets and phones. Increase the pixels if needed */
  /* @media only screen and (max-device-width: 1366px) {
    background-attachment: scroll;
  } */
`;
const WelcomeMessage = styled.div`
  /* font-family: sans-serif; */
  font-family: Verdana;
  color: #bb73a4;
  pointer-events: none;
  position: relative;
  grid-area: 2 / 1 / 2 / 2;
  justify-self: start;
  align-self: start;
  margin: 0 30px;
  @media (min-width: 820px) {
    grid-area: 1/ 1 / 3 / 2;
    align-self: center;
  }
`;
const Img = styled.img`
  display: none;
  height: auto;
  grid-area: 1/2/4/3;
  z-index: 11;
  justify-self: center;
  opacity: 0.9;
  @media (min-width: 1165px) {
    margin-top: 160px;
    display: grid;
    width: 160%;
    height: auto;
    grid-area: 1/2/4/3;
  }
  @media (min-width: 1800px) {
    margin-top: 50px;
    width: 120%;
  }
`;
const H1 = styled.h1`
  /* font-size: 65px; */
  font-size: 30px;
  /* font-family: sans-serif; */
  @media (min-width: 820px) {
    font-size: 55px;
  }
`;
const H5 = styled.h5`
  line-height: 1.8rem;
  position: relative;
  grid-area: 2 / 1/ 3 / 2;
  justify-self: start;
  align-self: start;
`;
const Span1 = styled.span`
  color: green;
`;
const Span2 = styled.span`
  letter-spacing: 0.18em;
`;
const Par = styled.div`
 font-family:Verdana;
  margin-top:2vh;
  line-height: 1.8em;
  position: relative;
  grid-area: 3 / 1/ 4 / 2;
  justify-self: start;
  align-self: start;
  color: #2f0a24;
  margin-left: 30px;
  font-size: 1.4rem;
  @media (min-width: 820px) {
    font-size: 1.8rem;
    margin-top:5vh;
  }
  @media (min-width: 1800px) {
    font-size: 2.5rem;
  }
`;