import React from "react";
import styled from "styled-components";

const Footer = React.forwardRef((props, ref) => {
  return (
    <Box ref={ref}>
      <H4>© 2021 by Elena Dubinsky</H4>
    </Box>
  );
});

export default Footer;

const Box = styled.div`
  display: flex;
  width:100%;
  align-items:center;
  justify-content:center;
  min-height: 65px;
  position: fixed;
  bottom: 0;
  left: 0;
  /* background-color: #756c6c; */
  font-size: 1.6rem;
  font-family: sans-serif;
  padding-bottom: 5px;
  @media (min-width: 820px) {
    font-size: 2.2rem;
  }
  @media (min-width: 1200px) {
    align-items: center;
    font-size: 2.8rem;
  }
`;
const H4 = styled.h5`
  line-height: 1.6rem;
  text-align: center;
  /* color:rgb(206, 178, 218); */
  color:#bb73a4;
`;
