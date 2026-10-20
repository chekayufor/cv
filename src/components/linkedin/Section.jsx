import React from "react";
import styled from "styled-components";

const Section = ({ id, title, children }) => (
  <Card id={id}>
    <Title>{title}</Title>
    {children}
  </Card>
);

export default Section;

const Card = styled.section`
  background: #ffffff;
  border: 1px solid #e0dfdc;
  border-radius: 8px;
  padding: 20px 24px 24px;
  margin-bottom: 8px;
  scroll-margin-top: 64px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.9);
  margin-bottom: 16px;
`;
