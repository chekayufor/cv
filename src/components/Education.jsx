import React, { useContext } from "react";
import styled from "styled-components";
import { CVContext } from "./CV.context";

// import certificatJQuery from "../images/certificatJQuery.jpg";
// import certificatJS from "../images/certificatJS.jpg";

const Education = () => {
  const { edData } = useContext(CVContext);
  return (
    <Box id="Education">
      <ParallaxBox>
        <ContentTitle>
          <H1>
            {`EDUCATION
            &
            PROFESSIONAL KNOWLEDGE`}
          </H1>
          <Text>
            Professionally trained Full Stack Developer. I hold a Master's
            degree in Civil Engineering and in Economics. I have extensive
            experience in project management and employees development and
            training. Able to lead processes, to sustain and develop
            interpersonal relationships, have a learning, organizational and
            planning skills. I’m a great self-learner and open minded to new
            challenges and areas. I’m interested in integrating web development.
          </Text>
        </ContentTitle>

        <ContentDiv>
          <Ul>
            {edData.map(({ name, link, establishment, subject }) => {
              return (
                <Li key={name}>
                  <H4>
                    {name} <br /> <A href={link}>{establishment}</A>
                    <Span> {subject}</Span>
                  </H4>
                  <br />
                </Li>
              );
            })}
          </Ul>
        </ContentDiv>
      </ParallaxBox>
    </Box>
  );
};

export default Education;

const Box = styled.div`
  width: 100%;
  /* min-height: 100vh; */
  height: auto;
  font-size: 1.8rem;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 100%;
  color: #2f2f35;
  font-weight: 600;
  @media (min-width: 600px) {
    min-height: 100vh;
  }
`;
const ParallaxBox = styled.div`
  width: 100%;
  min-height: auto;
  /* background-color: blue; */
  background-image: url(https://picsum.photos/id/102/4320/3240);
  background-repeat: no-repeat;
  background-size: 50% 50%;
  position: static;
  display: grid;
  grid-template-rows: 1fr 1fr;
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
  margin: 100px 0px 20px 0;
`;
const ContentDiv = styled.div`
  min-height: auto;
  background-color: none;
  grid-area: 2/ 1 / 3 / 2;
  min-width: 100%;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 100%;
  font-family: sans-serif;
`;
const Ul = styled.ul`
  min-height: auto;
  background-color: none;
  /* grid-area: 1/1/3/2; */
  list-style: none;
  width: 100%;
  align-self: center;
  @media (min-width: 1200px) {
    font-size: 2.2rem;
  }
  @media (min-width: 1800px) {
    font-size: 3.2rem;
  }

  /* background-color: rgba(188, 182, 193, 0.2); */
`;
const Li = styled.li`
  text-align: center;
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
const Text = styled.div`
  text-align: center;
  padding: 20px 50px 20px 50px;
  font-size: 1.8rem;
  font-weight: 500;
  background-color: rgba(188, 182, 193, 0.4);
  margin-top: 50px;
  line-height: 2.4rem;
  @media (min-width: 1100px) {
    font-size: 2.2rem;
    line-height: 3rem;
  }
  @media (min-width: 1600px) {
    font-size: 2.4rem;
  }
`;
const H4 = styled.h4`
  line-height: 1.6rem;
  margin: 0 10px;
  @media (min-width: 1800px) {
    line-height: 2.5rem;
  }
`;
// const StyledLink = styled(Link)`
//   background-color: none;
//   list-style: none;
//   grid-area: 2/1/3/2;
//   cursor: pointer;
//   color: #393955;
//   justify-self: center;
// `;
const Span = styled.p`
  line-height: 1.8em;
  position: relative;
  grid-area: 3 / 1/ 4 / 2;
  justify-self: start;
  align-self: start;
  font-family: Times New Roman;
  margin: 0 25%;
  border-radius: 5px;
  background-color: rgba(188, 182, 193, 0.4);

  font-weight: 600;
  @media (min-width: 1800px) {
    line-height: 2.5rem;
  }
`;
const A = styled.a`
  cursor: pointer;
  color: #393955;
  line-height: 3rem;
`;
