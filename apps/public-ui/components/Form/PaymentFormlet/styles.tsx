import styled, { keyframes } from 'styled-components';
import React from 'react';
import { Paragraph } from '@everything-zen/ui-components';

export const PaymentForm = styled.div`
  width: 100%;
  min-height: 400px;
`;

const Frame = styled.section`
  z-index: 99;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90%;
  background: white;
  width: 100%;
`;

export const DisclaimerText = styled(Paragraph)`
  font: normal normal 400 12px/28px Source Sans Pro;
  //letter-spacing: 1px;
  //color: #040505;
  margin: 1rem 1.75rem 0 2rem;
  @media (min-width: 600px) {
    font: normal normal 400 15px/32px Source Sans Pro;
  }
`;

export const PolicyHeading = styled.h2`
  margin-left: 2rem;
  margin-top: 1.25rem;
  font: normal normal normal 15px/18px Source Sans Pro;
  letter-spacing: 3px;
  color: #00263a;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spimage = styled.img`
  margin-top: 50%;
  height: 3rem;
  width: 3rem;
  animation: ${spin} 1s linear infinite;
`;

export const ObscuringLoader: React.FC<Record<string, never>> = () => (
  <Frame>
    <Spimage src={'/wave.svg'} alt={'loading indicator'} />
  </Frame>
);
