import React, { useContext, useState } from "react";
import styled from "styled-components";
import { CVContext } from "./CV.context";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Slider = () => {
  const { slidsData } = useContext(CVContext);
  const [thumbWidth, setThumbWidth] = useState(30);

  const random = (list) => {
    return list.sort(() => Math.random() - 0.5);
  }
  const [index, setIndex] = useState(0);
  const totalItemsNum = slidsData.length;
  const thumbsNum = 1;
  const space = 0.5; //rem
  const slideWidth = thumbWidth + space; //rem...
  const trackWidth = slideWidth * totalItemsNum;
  const maskWidth = slideWidth * thumbsNum - space;
  const lastIndex = -(totalItemsNum - thumbsNum);

  return (
    <Box>
      <Mask w={maskWidth}>
        <SlideContainer
          x={index * (slideWidth + (space * 3) / (totalItemsNum - 1))}
          w={trackWidth}
        >
          {slidsData.map(({ id, component, img, name, linkCode }) => (
            <Slide key={name}>
              <A target="_blank" href={linkCode}>
                {component !== null && <Component>{component}</Component>}
                {img !== null && <Image src={img} />}
                <SlideTitle>{name}</SlideTitle>
              </A>
            </Slide>
          ))}
        </SlideContainer>
      </Mask>
      <RoundBtn
        dir="back"
        visible={index < 0}
        onClick={() => setIndex(index + 1)}
      >
        <BackIcon />
      </RoundBtn>
      <RoundBtn
        dir="next"
        visible={index > lastIndex}
        onClick={() => setIndex(index - 1)}
      >
        <NextIcon />
      </RoundBtn>
    </Box>
  );
};

export default Slider;

const Box = styled.div`
  display: grid;
  width: 100%;
  height: auto;
  justify-content: start;
  align-content: center;
  position: relative;
  grid-area: 2/2/3/3;
  @media (min-width: 820px) {
    display: none;
  }
`;
const Mask = styled.div`
  width: ${({ w }) => w}rem;
  overflow: hidden;
`;
const SlideContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  transition: transform 250ms;
  transform: translateX(${({ x }) => x}rem);
`;
const Slide = styled.div`
  width: ${({ w }) => w}rem;
  /* min-height: 265px; */
  display: flex;
  justify-content: space-between;
  transition: transform 250ms;
  transform: translateX(${({ x }) => x}rem);
`;
const A = styled.a`
    font-family: Verdana;
    text-decoration:none;
    line-height: 1.8em;
    position: relative;
    justify-self: start;
    color: #2f0a24;
   align-content: center;
   justify-items: center;
   cursor: pointer;
   padding: 0.2rem 0.5rem 0.2rem 0;
`;
const Component = styled.div`
  object-fit: cover;
  object-position: center;
  border-radius: 0.4rem;
  grid-template-rows: 1fr;
  grid-area: 1/1/2/2;
  width: 30.1rem;
  height: auto;
  /* height: 20rem; */
  /* @media (min-width: 1800px) {
    width: 45rem;
    height: 30rem;
  } */
  /* z-index: 3; */
  /* position: absolute; */
`;

const RoundBtn = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ dir }) => (dir === "next" ? "right" : "left")}: -1.8rem;
  cursor: pointer;
  border-radius: 50%;
  background: #0a1c96;
  opacity: 0.7;
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.25);
  width: 5rem;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  display: ${({ visible }) => (visible ? "flex" : "none")};
`;
const NextIcon = styled(FiChevronRight)`
  color: white;
  font-size: 1.8rem;
`;

const BackIcon = styled(FiChevronLeft)`
  color: white;
  font-size: 1.8rem;
  @media (min-width: 1800px) {
    font-size: 3.2rem;
  }
`;

const SlideTitle = styled.h2`
  font-size: 1.2rem;
  cursor: pointer;
  color:#bb73a4;
  justify-self: center;
  line-height: 2.6rem;
  bottom: 5.4rem;
  text-align: center;
  width: 100%;
`;

const Image = styled.img`
  width: 30.1rem;
  height: 20rem;
  object-fit: cover;
  object-position: center;
  border-radius: 0.3rem;
  /* @media (min-width: 1800px) {
    width: 45rem;
    height: 30rem;
  } */
`;
