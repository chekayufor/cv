import React, { useContext } from "react";
import styled from "styled-components";
import { CVContext } from "./CV.context";

const Works = () => {
  const { slidsData } = useContext(CVContext);

  return (
    <Container>
      {slidsData.map(({ id, component, img, name, linkCode, linkOnline }) => (
        <Box key={name}>
          <a target="_blank" href={linkCode}>
            {component !== null && <Component>{component}</Component>}
            {img !== null && <Image src={img} />}
          </a>
          <Middle>
            <A target="_blank" href={linkCode}>
              vew online
            </A>
            <A target="_blank" href={linkOnline}>
              vew code
            </A>
          </Middle>
        </Box>
      ))}
    </Container>
  );
};

export default Works;

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  /* height: 100%; */
  background-color: rgba(188, 182, 193, 0.7);
  justify-content: center;
  padding: 2rem;
  display: grid;
  grid-gap: 1rem;
  position: relative;
  @media (min-width: 1034px) {
    /* height: 100%; */
    grid-template-columns: repeat(2, 1fr);
    grid-auto-flow: dense;
  }
  @media (min-width: 1280px) {
    /* height: 100%; */
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: dense;
  }
`;
const Box = styled.div`
  /* background-color: mediumslateblue; */
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 2.2rem;
  font-family: 700;
  line-height: 2.8rem;
  text-align: center;
  padding: 1rem 0;
  justify-content: space-around;
  align-self: center;
  transition: all 0.2s ease-in-out;
  margin: 1rem;
  &&:hover {
    transform: scale(1.1);
  }
`;
const A = styled.a`
  text-decoration: none;
  background-color: white;
  color: #716e75;
  font-size: 16px;
  width: 150px;
  height: auto;
  cursor: pointer;
  padding: 0.2rem 0.5rem;
  border: double 0.1rem #716e75;
  border-radius: 0.7rem;
  &&:hover {
    background-color: #716e75;
    color: white;
  }
`;
const Component = styled.div`
  object-fit: cover;
  object-position: center;
  border-radius: 0.7rem;
  width: 100%;
  @media (min-width: 600px) {
    width: 30rem;
    height: 20rem;
  }
  @media (min-width: 1200px) {
    width: 100%;
    height: auto;
  }
`;
const Image = styled.img`
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
  border-radius: 0.3rem;
  ${Box}:hover & {
    opacity: 0.3;
    border: double 0.1rem #716e75;
  }
  @media (min-width: 600px) {
    width: 30rem;
    height: 20rem;
  }
  @media (min-width: 1200px) {
    width: 100%;
    height: auto;
  }
`;
const Middle = styled.div`
  display: none;
  @media (min-width: 1100px) {
    transition: 0.5s ease;
    opacity: 0;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    ${Box}:hover & {
      opacity: 1;
    }
  }
`;
