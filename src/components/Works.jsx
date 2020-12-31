import React, { useContext } from "react";
import styled from "styled-components";
import { CVContext } from "./CV.context";
import Pic from '../images/3ea1a985175c31dc9ad204316c32506b.jpg'

const Works = () => {
  const { slidsData } = useContext(CVContext);

  const random = (list) => {
    return list.sort(() => Math.random() - 0.5)
}

  return (
    <Container>
      {slidsData && random(slidsData).map(({ id, img, name, linkCode, linkOnline }) => (
        <Box key={name}>
          <a target="_blank" href={linkCode}>
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
  width:100%;
  top:6vh;
  position: relative;
  min-height: 100vh;
  justify-content: center;
  display: grid;
  grid-gap: 1rem;
  position: relative;
  background-image: url(${Pic});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 1034px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-flow: dense;
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: dense;
  }
`;
const Box = styled.div`
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 2.2rem;
  font-family: 700;
  line-height: 2.8rem;
  text-align: center;
  justify-content: space-around;
  align-self: center;
  transition: all 0.2s ease-in-out;
  margin: 1rem;
  &&:hover {
    transform: scale(1.05);
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

const Image = styled.img`
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
  border-radius: 0.7rem;
  ${Box}:hover & {
    opacity: 0.5;
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
