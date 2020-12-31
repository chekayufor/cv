import React from "react";
import styled from "styled-components";
import NavBarGalleryRouter from "./NavBarGalleryRouter";
import Works from "./Works";
// import { MessageContext } from "./Message.context";

const Gallery = () => {
  return (
      <Box>
        <NavBarGalleryRouter />
        <Works />
      </Box>
  );
};

export default Gallery;

const Box = styled.div`
  width: 100%;

`;
// const Nav = styled(NavBarGalleryRouter)`
//   width: 100%;
// `;
