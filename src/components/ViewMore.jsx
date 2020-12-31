import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ViewMore = () => {
  return (
    <Box>
      <StyledLink to="/Gallery">View more projects...</StyledLink>
    </Box>
  );
};

export default ViewMore;

const Box = styled.div`
  font-size: 1.8rem;
  display: grid;
  grid-area: 3/1/4/4;
  text-transform: uppercase;
  padding:3vh 0;
  @media (min-width: 820px) {
    font-size: 2.8rem;
  }
  @media (min-width: 1800px) {
    font-size: 3.2rem;
  }
`;
const StyledLink = styled(Link)`
  background-color: none;
  list-style: none;
  cursor: pointer;
  color:#bb73a4;
  justify-self: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    font-size: scale(1.1);
    transform: scale(1.1);
  }
`;
