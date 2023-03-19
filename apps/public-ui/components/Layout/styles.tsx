import styled, { keyframes } from 'styled-components';
import React from 'react';

export const FooterWrapper = styled.footer`
  margin: 15vw auto 0;
  background: #00263a;
  padding: 2.25rem 0 3.75rem;
  position: relative;
  box-shadow: 0 50vh 0 50vh #00263a;
  @media (min-width: 700px) {
    margin: 25vw auto 0;
  }

  img {
    width: 100vw;
    position: absolute;
    top: -15vw;
  }

  h2 {
    font: normal normal normal 20px/39px Source Sans Pro;
    letter-spacing: 4px;
    color: white;
  }

  ul {
    list-style: none;
    padding: 0;
    text-align: center;
    margin: 2rem auto 4rem;
    @media (min-width: 750px) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      max-width: 750px;
      justify-content: space-evenly;
    }
  }

  li {
    margin: 1.4rem 1.5rem;
    cursor: pointer;
  }

  //icon wrapper
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 240px;
    margin: 0 auto 3rem;
  }

  span {
    position: absolute;
    width: 100vw;
    height: 1rem;
    bottom: -1rem;
  }
`;

export const UpArrowButton = styled.button`
  display: block;
  background: url('/icons/up-arrow.svg') no-repeat center;
  background-size: 28px 17px;
  height: 5rem;
  width: 5rem;
  border: none;
  margin: 0 auto;
  cursor: pointer;
`;

type SocialIconProps = {
  href: string;
  bg: string;
  target: '_blank';
};
export const SocialIcon = styled.a<SocialIconProps>`
  display: block;
  height: 3rem;
  width: 3rem;
  cursor: pointer;
  background-image: url(${({ bg }) => bg});
  background-size: 3rem;
`;

export const PageWrapper = styled.div`
  margin: 3rem auto 8rem;
  max-width: 800px;
  padding-bottom: 2rem;
  @media (min-width: 600px) {
    margin-bottom: 10rem;
  }
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

export const Loading: React.FC<Record<string, never>> = () => (
  <Frame>
    <Spimage src={'/wave.svg'} alt={'loading indicator'} />
  </Frame>
);

const Frame = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;
