import React from "react";
import styled from "styled-components";

export const NetflixAnimationCard = () => {
  return (
    <Box>
      <AnimationContainer>
        <Img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
        <VideoContainer className="our-story-card-animation">
          <Video autoPlay playsinline muted loop>
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
              type="video/mp4"
            />
          </Video>
        </VideoContainer>
      </AnimationContainer>
    </Box>
  );
};

const Box = styled.div`
  /* width: 35rem; */
  /* height: 20rem; */
  @media (min-width: 1200px) {
    /* width: 30rem; */
  }
`;
const AnimationContainer = styled.div`
  margin: 0 auto;
  position: relative;
`;
const Img = styled.img`
  /* background-color: blue; */
  position: relative;
  z-index: 2;
  width: 100%;
  height: auto;
  border: 0;
`;
const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 3;
  top: 19%;
  left: 13%;
  max-width: 73%;
  max-height: 55.5%;
`;
const Video = styled.video`
  width: 100%;
  height: 100%;
  display: inline-block;
  vertical-align: baseline;
`;
