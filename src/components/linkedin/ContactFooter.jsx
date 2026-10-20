import React from "react";
import styled from "styled-components";
import { profile } from "../../data/profile";

const ContactFooter = () => (
  <Card>
    <Row>
      <a href={`mailto:${profile.email}`}>{profile.email}</a>
      <span>·</span>
      <a href={`tel:${profile.phone}`}>{profile.phone}</a>
      <span>·</span>
      <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">
        LinkedIn Profile ↗
      </a>
    </Row>
    <Copyright>
      &copy; {new Date().getFullYear()} {profile.name}
    </Copyright>
  </Card>
);

export default ContactFooter;

const Card = styled.footer`
  text-align: center;
  padding: 24px 16px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 13px;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 8px;
  a {
    color: #0a66c2;
    text-decoration: none;
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Copyright = styled.div``;
