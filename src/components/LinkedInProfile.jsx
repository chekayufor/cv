import React from "react";
import styled from "styled-components";
import TopNav from "./linkedin/TopNav";
import ProfileHeader from "./linkedin/ProfileHeader";
import About from "./linkedin/About";
import Experience from "./linkedin/Experience";
import EducationSection from "./linkedin/EducationSection";
import SkillsLanguages from "./linkedin/SkillsLanguages";
import Activity from "./linkedin/Activity";
import ContactFooter from "./linkedin/ContactFooter";

const LinkedInProfile = () => (
  <Page>
    <TopNav />
    <Main>
      <ProfileHeader />
      <About />
      <Experience />
      <EducationSection />
      <SkillsLanguages />
      <Activity />
    </Main>
    <ContactFooter />
  </Page>
);

export default LinkedInProfile;

const Page = styled.div`
  min-height: 100%;
  background: #f4f2ee;
`;

const Main = styled.main`
  max-width: 900px;
  margin: 0 auto;
  padding: 24px 16px 0;
`;
