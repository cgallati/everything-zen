import styled from "styled-components";
import React from "react";

const Frame = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  margin-top: 13.5rem;
`;

const Heading = styled.h1`
  font: normal normal normal 15px/18px Source Sans Pro;
  letter-spacing: 3px;
  color: #00263a;
  margin: 0;
`;

const Subheading = styled.h2`
  font: normal normal normal 10px/12px Source Sans Pro;
  letter-spacing: 2px;
  color: #000000;
  margin: 0;
`;

export const Success: React.FC<Record<string, never>> = () => (
  <Frame>
    <Heading>RESERVATION REQUESTED</Heading>
    <img src="/checkmark.svg" alt="Checkmark in a circle" />
    <Subheading>CHECK YOUR EMAIL FOR CONFIRMATION DETAILS</Subheading>
  </Frame>
);
