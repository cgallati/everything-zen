import styled from 'styled-components';

export const WithBackground = styled.div`
  position: relative;
  top: 0;
  height: calc(100vh - 4rem);
  width: 100vw;
  overflow: hidden;
  .bg-image {
    z-index: -1;
  }
`;

export const Heading = styled.h1`
  text-align: center;
  margin-top: 22vh;
  @media (max-width: 600px) {
    margin-top: 15vh;
  }
  font: normal normal normal 14px/17px Source Sans Pro;
  letter-spacing: 2.88px;
  color: #ffffff;
`;

export const PositionedCTA = styled.button`
  display: block;
  position: absolute;
  bottom: 7vh;
  right: 10vw;
  margin: 2rem 0;
  height: 3.4rem;
  width: 100%;
  max-width: 350px;
  font: normal normal 600 16px/18px Source Sans Pro;
  letter-spacing: 3.2px;
  border: 2px solid #ffffff;
  border-radius: 3px;
  background: transparent;
  color: white;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 80%;
    right: calc(50vw - 40%);
    max-width: 600px;
  }
  :active {
    color: #00263a;
    background: white;
  }
`;

export const LocationHeading = styled.h3`
  text-align: center;
  margin: 2rem auto;
  letter-spacing: 3.32px;
  color: #001d2c;
  font-family: 'Stencilia-A', sans-serif;
  font-size: 16px;
  line-height: 2.2rem;
  font-weight: normal;
`;
