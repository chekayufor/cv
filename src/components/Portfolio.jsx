import React from "react";
import styled from "styled-components";
import Carousel from "./CarouselFullScreen";
import CarouselMob from "./CarouselMob";
import ViewMore from "./ViewMore";
import Slider from "./SliderMob";
import SliderTablet from "./SliderTablet";

const Portfolio = () => {
  return (
    <Box id="Portfolio">
      <ContentTitle>
        <H1>PORTFOLIO</H1>
      </ContentTitle>
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
  width: 100%;
  min-height: 100vh;
  /* height: 1200px; */
  font-size: 1.8rem;
  /* background-color: #4e4d55; */
  background-color: #756c6c;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-rows:
    0.5fr
    1fr
    0.5fr;
  grid-template-columns:
    0.5fr
    3fr
    0.5fr;
  color: #e3d5d5;
  position: relative;
  @media (min-width: 1200px) {
    height: auto;
  }
`;
const ContentTitle = styled.div`
  font-family: sans-serif;
  grid-area: 1/1/2/4;
  pointer-events: none;
  position: relative;
  margin: 100px 0px;
`;
const H1 = styled.h1`
  font-size: 30px;
  font-family: sans-serif;
  justify-self: center;
  text-align: center;
  @media (min-width: 600px) {
    font-size: 55px;
  }
`;
const CarouselContainer = styled.div`
  display: grid;
  grid-area: 2/1/3/4;
  height: 100%;
  justify-content: center;
  /* min-width: 35rem; */

  @media (min-width: 1200px) {
    background-color: rgba(188, 182, 193, 0.4);
    align-content: center;
    padding: 0 2rem 0 2rem;
    min-width: auto;
  }
`;
const CarouselMobComponent = styled(CarouselMob)`
  display: grid;
  /* position: absolute; */
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
  @media (min-width: 600px) {
    display: none;
  }
`;
const SliderTabletComponent = styled(SliderTablet)`
  display: none;
  position: absolute;
  background: blue;
  justify-content: space-around;
  align-self: center;
  @media (min-width: 600px) {
    display: grid;
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
  }
`;
const Redirection = styled(ViewMore)`
  display: grid;
  grid-area: 1/3/4/4;
`;
