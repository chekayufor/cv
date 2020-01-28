import React, { useContext } from "react";
import styled from "styled-components";
import { CVContext } from "./CV.context";

const Carousel = () => {
  const { slidsData } = useContext(CVContext);

  const handleClick = (e, props) => {
    if (e) e.preventDefault();
    console.log("link was clicked");
  };

  return (
    <Box>
      <SlideContainer>
        {slidsData.map(({ id, component, img, name, linkOnline }) => (
          <Slide key={name}>
            <A target="_blank" href={linkOnline}>
              {component !== null && <Component>{component}</Component>}
              {img !== null && <Image src={img} />}
            </A>
          </Slide>
        ))}
      </SlideContainer>
    </Box>
  );
};

export default Carousel;

const Box = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-rows: 100%;
  grid-template-columns: 100%;
  position: relative;
  @media (min-width: 1200px) {
    display: none;
  }
`;
const SlideContainer = styled.div`
  overflow: hidden;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 100%;
  display: grid;
  align-content: center;
`;
const Slide = styled.div`
  min-height: 265px;
  position: relative;
  color: white;
  grid-template-rows: 1fr;
  grid-template-columns: 100%;
  align-content: center;
  margin: 1px 0 1px 0;
`;
const A = styled.a`
  display: grid;
  align-content: center;
  justify-items: center;
  position: relative;
  color: white;
  grid-template-rows: 1fr;
  grid-template-columns: 100%;
  cursor: pointer;
  padding: 0.2rem 0.5rem;
  /* background-color: blue; */
`;
const Component = styled.div`
  object-fit: cover;
  object-position: center;
  border-radius: 0.4rem;
  grid-template-rows: 1fr;
  grid-area: 1/1/2/2;
  width: 35rem;
  height: 20rem;
  /* z-index: 3; */
  /* position: absolute; */
`;
const Image = styled.img`
  width: 35rem;
  height: 263px;
  /* height: 20rem; */
  object-fit: cover;
  object-position: center;
  border-radius: 0.4rem;
  grid-template-rows: 1fr;
  grid-area: 1/1/2/2;
  position: absolute;
`;
