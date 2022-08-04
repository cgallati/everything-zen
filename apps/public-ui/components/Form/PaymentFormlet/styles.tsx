import styled, { keyframes } from 'styled-components';
import React from 'react';

export const PaymentForm = styled.form`
  position: relative;
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

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spimage = styled.img`
  height: 3rem;
  width: 3rem;
  animation: ${spin} 1s linear infinite;
`;

export const ObscuringLoader: React.FC<Record<string, never>> = () => (
  <Frame>
    <Spimage src={'/wave.svg'} alt={'loading indicator'} />
  </Frame>
);
