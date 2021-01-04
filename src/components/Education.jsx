import React, { useContext } from 'react';
import styled from 'styled-components';
import { CVContext } from './CV.context';
import Pic from '../images/delicate-colorful-flower-on-white-background_23-2147847603.jpg';

import pic1 from '../images/logoNess.png';
import pic2 from '../images/logoElectroinginiring.png';
import pic3 from '../images/logoPotatoHouse.jpg';

import icon1 from '../images/icons8-html-filetype-80.png';
import icon2 from '../images/icons8-css3-512.png';
import icon3 from '../images/icons8-js-96.png';
import icon4 from '../images/icons8-react-480.png';
import icon5 from '../images/icons8-nodejs-480.png';
import icon6 from '../images/icons8-mysql-96.png';

// import certificatJQuery from "../images/certificatJQuery.jpg";
// import certificatJS from "../images/certificatJS.jpg";

const Education = () => {
  
  const { edData } = useContext(CVContext);
  const skills=[icon1,icon2,icon3,icon4,icon5,icon6]
  const ness =' • Customer support and training for ERP.';
  // const freelans =' • Web sites development (Full Stack).';
  const logistics ='• Manage and transport logistics. \n •   The organization of management ERP, development of new reports and features. \n • Analysis of sales. \n •   Preparation of financial reports and analysis of the whole enterprise. \n •   Direct sales of electrical equipment. \n •   ERP support and training of personnel, quality control of subordinate duties.';
  const potata ='•	Management and control of launching restaurants. \n •	Signing contracts and quality control of construction and finishing works as well as equipment supplied. \n•	Control and management of company finances. \n •	Preparation of financial reports and analysis of the enterprise. \n •	Recruitment and quality control of restaurants. employers';

  return (
    <Box id="Education">
      <ParallaxBox>
          <H1>
            {`ABOUT ME`}
          </H1>
          <Experience>
            <Div>
              <Logo>
                <img src={pic1} alt='pic1'/>
              </Logo>
              <Text>
                <h3>New Product Introduction Specialist in 
                <a href="https://www.ness-tech.co.il/" target="_blank" rel="">
                  <h4>Ness Technologies</h4>
                </a>
              </h3>
                {ness && ness.split('\n').map(i=> <P>{i}</P>)
              }
              </Text>
            </Div>
            <Div>
              <Logo>
                <img src={pic2} alt='pic1'/>
              </Logo>
              <Text>
              <h3>Head of logistic department & Integrator in
                <a href="http://www.eleng.com.ua/kontaktyi/czentralnyij-ofis.html" target="_blank" rel="">
                  <h4>Electroengeniring</h4>
                </a>
              </h3>
                {logistics && logistics.split('\n').map(i=> <P>{i}</P>)
              }
              </Text>
            </Div>
            <Div>
              <Logo>
                <img src={pic3} alt='pic1'/>
              </Logo>
              <Text>
                <h3>Restaurant Opening Project Manager in 
                  <a href="https://www.bistro.com.ua/houses/house/index/14" target="_blank" rel="">
                    <h4>POTATO'S HOUSE </h4>
                  </a>
                </h3>
                  {potata && potata.split('\n').map(i=> <P>{i}</P>)
                }
              </Text>
            </Div>
          </Experience>
          <Skills>
            <ul>
              {skills.map(i=><li><img src={i} alt={i}/></li>)}
            </ul>
          </Skills>
      </ParallaxBox>
    </Box>
  );
};

export default Education;

const Box = styled.div`
  width: 100%;
  min-height: 100vh;
  height:100%;
  font-size: 1.8rem;
  display: flex;
  align-content:center;
  justify-content:center;
  color: #2f2f35;
  font-weight: 600;
`;
const ParallaxBox = styled.div`
  width: 100%;
  height: auto;
  background-image: url(${Pic});
  background-repeat: no-repeat;
  background-size: 50% 50%;
  position: static;
  display: grid;
  grid-template-rows: 1fr 8fr 1fr;
  grid-template-columns: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 3vh;
  @media (min-width: 820px) {
    padding: 3vh 0;
    grid-template-rows: 1fr 5fr 1fr;

  }
`
const H1 = styled.h1`
  color:#393955;
  font-size: 30px;
  font-family: sans-serif;
  justify-self: center;
  text-align: center;
  align-self: center;
  padding-top:3vh;
  @media (min-width: 820px) {
    font-size: 55px;
    padding-bottom:3vh;
  }
`;
const Experience = styled.div`
  display:grid;
  height:100%;
  justify-content: center;
  align-content: start;
  /* grid-template-columns:100%; */
  /* grid-template-rows: 100%; */
`
const Div = styled.div`
  display:grid;
  align-content: center;
  text-align: center;
  margin: 3vh 0;
  /* grid-template-columns:100%; */
  /* grid-template-rows:100%; */
  /* background-color:white;
  opacity:0.7; */
  @media (min-width: 820px) {
    grid-template-columns:1fr 3fr;
  }
`;
const Logo = styled.div`
  align-self: start;
  justify-self: start;
  padding:0 20px;
  img{
    width:120px;
    height:auto;
  }
  @media (min-width: 1100px) {
    align-self: center;
    justify-self: center;
    img{
    width:160px;
    height:auto;
  }
    }
`;

const Text = styled.div`
    font-family: Verdana;
    color: #2f0a24;
    text-align: start;
    align-self: center;
    justify-self:start;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
    padding: 0 20px;
    h3{
      color:#393955;
      font-size: 20px;
      text-shadow: 0.5px -0.5px black;
      a{
        text-decoration: none;
      }
      h4{
        text-transform:uppercase;
        padding:10px 0;
        font-size: 1.4rem;
        position: relative;
        justify-self: center;
        align-self: start;
        font-weight: 600;
        color: #144dce;
        font-family: fantasy;
        text-shadow: 0.5px -0.5px black;
        transition: all 0.2s ease-in-out;
        
      }
    }
    @media (min-width: 1200px) {
      font-size: 1.6rem;
      line-height: 3rem;
      h3{
      font-size: 30px;
      }
    }
    @media (min-width: 1800px) {
      font-size: 2.4rem;
    }
`;
const Skills=styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  ul{
    display:flex;
    flex-direction:row;
    width: 100%;
    justify-content: space-around;
      img{
        width:40px;
        height:auto;
      }
  }
  @media (min-width: 820px) {
    ul{
      img{
        width:60px;
      }
    }
  }
  @media (min-width: 1800px) {
    ul{
      img{
        width:100px;
      }
    }
  }
`;
const H4 = styled.h4`
  line-height: 1.6rem;
  margin: 0 10px;
  @media (min-width: 1800px) {
    line-height: 2.5rem;
  }
`;
const P = styled.p`
  font-family:Verdana;
  line-height: 1.8em;
  position: relative;
  justify-self: start;
  align-self: start;
  color: #2f0a24;
  font-size: 1.4rem;
  @media (min-width: 820px) {
    font-size: 1.8rem;
  }
  @media (min-width: 1800px) {
    font-size: 2.5rem;
  }
`;