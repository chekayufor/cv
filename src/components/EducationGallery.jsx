import React from "react";
import styled from "styled-components";
import NavBarGalleryRouter from "./NavBarGalleryRouter";
// import { MessageContext } from "./Message.context";

const EducationGallery = () => {
  return (
    <>
      <Box>
        <NavBarGalleryRouter />
      </Box>
    </>
  );
};

export default EducationGallery;

const Box = styled.div`
  background-color: #9d2083;
  /* min-width: 100%; */
  top: 0;
  left: 0;
  min-height: 30px;
  position: relative;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 100%;
  align-items: flex-start;
  padding: 2rem;
`;
