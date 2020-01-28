import React from "react";
import styled from "styled-components";
import NavBarGalleryRouter from "./NavBarGalleryRouter";
import Works from "./Works";
// import { MessageContext } from "./Message.context";

const Gallery = () => {
  return (
    <>
      <Box>
        <Nav />
      </Box>
      <Works />
    </>
  );
};

export default Gallery;

const Box = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  min-height: 30px;
  position: relative;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 100%;
  align-items: start;
`;
const Nav = styled(NavBarGalleryRouter)`
  width: 100%;
`;
