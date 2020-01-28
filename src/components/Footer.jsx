import React from "react";
import styled from "styled-components";

const Footer = React.forwardRef((props, ref) => {
  return (
    <Box ref={ref}>
      <H4>© 2018 by Elena Dubinsky</H4>
    </Box>
  );
});

export default Footer;

const Box = styled.div`
  display: grid;
  min-height: 65px;
  position: relative;
  bottom: 0;
  left: 0;
  background-color: #756c6c;
  color: #393955;
  grid-template-rows: 100%;
  grid-template-columns: 100%;
  align-items: end;
  font-size: 1.4rem;
  font-family: sans-serif;
  padding-bottom: 5px;
  @media (min-width: 1200px) {
    font-size: 1.8rem;
  }
  @media (min-width: 1800px) {
    align-items: center;
    font-size: 2.8rem;
  }
`;
const H4 = styled.h5`
  line-height: 1.6rem;
  text-align: center;
`;
