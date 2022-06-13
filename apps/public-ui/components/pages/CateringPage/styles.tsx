import styled from "styled-components";

export const StyledMain = styled.main`
  margin: 0 auto 4rem;
  max-width: 800px;
  padding-bottom: 2rem;
`;

export const Heading = styled.h1`
  font: normal normal 600 17px/21px Source Sans Pro;
  letter-spacing: 3.4px;
  color: #001d2c;
  text-align: center;
  margin-bottom: 4rem;
`;

export const CaviarAndBananasLogo = styled.img`
  width: 80%;
  display: block;
  margin: 0 auto;
  max-width: 500px;
`;

export const CCCLogo = styled.img`
  width: 75%;
  display: block;
  margin: 1rem auto 3rem;
  max-width: 400px;
`;

export const PaddedAnchor = styled.a`
  text-decoration: none;
  display: block;
  padding: 0 3rem;
  margin: 3rem auto 5rem;
`;

export const MenuCTA = styled.button`
  display: block;
  border-radius: 3px;
  font: normal normal 600 16px/18px Source Sans Pro;
  text-decoration: none;
  letter-spacing: 3.2px;
  width: 100%;
  border: none;
  cursor: pointer;
  background: #022a40;
  color: white;
  box-shadow: 0 0 5px #00000029;
  :active {
    color: #00263a;
    background: white;
  }
  height: 68px;
  margin: 0 auto;
  max-width: 800px;
`;
