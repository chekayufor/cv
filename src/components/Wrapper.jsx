import React from "react";
import styled from "styled-components";

const Wrapper = ({ children }) => {
  return (
    <Box>
      {/* <h2>Wrapper</h2> */}
      {children}
    </Box>
  );
};

export default Wrapper;

const Box = styled.div`
  /* background-color: lightblue; */
  display: flex;
  flex-direction: column;
  min-width: 100vh;
  min-width: 100%;
  position: relative;
`;
