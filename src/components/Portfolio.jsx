import React from "react";
import styled from "styled-components";
import Carousel from "./CarouselFullScreen";
import CarouselMob from "./CarouselMob";
import ViewMore from "./ViewMore";
import Slider from "./SliderMob";
import SliderTablet from "./SliderTablet";
import Pic from '../images/blue-summer-flowers-on-white-background_176873-2097.jpg'
const Portfolio = () => {
  return (
    <Box id="Portfolio">
      <H1>PORTFOLIO</H1>
      <CarouselContainer>
        {/* <CarouselMobComponent /> */}
        <SliderComponent />
        <SliderTabletComponent />
        <CarouselFullScreenComponent />
      </CarouselContainer>
      <Redirection />
    </Box>
  );
};

export default Portfolio;

const Box = styled.div`
  display: grid;
  width: 100%;
  min-height: 65vh;
  padding: 5vh 0;
  height:100%;
  font-size: 1.8rem;
  background-image: url(${Pic});
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  align-items: center;
  grid-template-rows: 1fr 5fr 0.5fr;
  grid-template-columns:
    0.5fr
    5fr
    0.5fr;
  /* position: relative; */
  @media (min-width: 1200px) {
    height: auto;
  }
`;
const H1 = styled.h1`
  color:#bb73a4;
  font-size: 30px;
  font-family: sans-serif;
  justify-self: center;
  text-align: center;
  grid-area: 1/2/1/4;
  padding-top:3vh;
  @media (min-width: 820px) {
    font-size: 55px;
  }
  padding-bottom:3vh;
`;
const CarouselContainer = styled.div`
  display: grid;
  grid-area: 2/1/3/4;
  height: 100%;
  justify-content: center;

  @media (min-width: 1200px) {
    align-content: center;
    padding: 0 2rem 0 2rem;
    min-width: auto;
  }
`;
const CarouselMobComponent = styled(CarouselMob)`
  display: grid;
  background: blue;
  @media (min-width: 1200px) {
    display: none;
  }
`;
const SliderComponent = styled(Slider)`
  display: grid;
  position: absolute;
  background: blue;
  justify-content: space-around;
  align-self: center;
  height:100%;
  @media (min-width: 820px) {
    display: none;
  }
`;
const SliderTabletComponent = styled(SliderTablet)`
  display: none;
  position: absolute;
  background: blue;
  justify-content: space-around;
  align-self: center;

  @media (min-width: 820px) {
    display: grid;
    height:100%;
  }
  @media (min-width: 1200px) {
    display: none;
  }
`;
const CarouselFullScreenComponent = styled(Carousel)`
  display: none;
  /* position: absolute; */
  background: blue;
  @media (min-width: 1200px) {
    display: grid;
    height:100%;
  }
`;
const Redirection = styled(ViewMore)`
  display: grid;
  grid-area: 1/3/4/4;
  font-family: sans-serif;
  justify-self: center;
  text-align: center;
  color:#bb73a4;
  font-size: 2rem;
  @media (min-width: 820px) {
    font-size: 2.8rem;
  }
`;
