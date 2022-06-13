import styled from "styled-components";
import { TileGrid } from "../../common.styles";

export const LiferingIcon = styled.img`
  height: 40px;
  width: 40px;
  margin: auto;
  display: block;
`;

export const Heading = styled.h2`
  font: normal normal normal 18px/36px Stencilia-A;
  letter-spacing: 2.7px;
  color: #022a40;
  text-align: center;
  margin-bottom: 0.3rem;
  @media (min-width: 650px) {
    font: normal normal normal 25px/36px Stencilia-A;
  }
`;

export const MainDetails = styled.h3`
  font: normal normal normal 11px/19px Source Sans Pro;
  letter-spacing: 2.2px;
  color: #022a40;
  text-align: center;
  margin: 0.3rem 0 2rem;
  span {
    margin: 0 1rem;
    border-left: 0.75px solid #022a40;
    width: 0;
  }
  @media (min-width: 650px) {
    font: normal normal normal 16px/19px Source Sans Pro;
  }
`;

export const CharterCardSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 3rem 0;
  max-width: 600px;
  @media (min-width: 650px) {
    flex-direction: row;
    padding: 0;
    max-width: 800px;
    margin: 4rem 1rem 2rem;
  }
`;

export const CharterCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 0 3.2rem;
  font: normal normal normal 11px/19px Source Sans Pro;
  letter-spacing: 2.2px;
  color: #00263a;
  box-shadow: 0 0 3px #00000066;
  border-radius: 3px;
  padding: 1.3rem 0 2.3rem;
  text-align: center;
  min-height: 200px;
  width: 100%;
  max-width: 350px;
  box-sizing: border-box;
  h4 {
    font: normal normal normal 42px/42px "Title Wave Regular";
    letter-spacing: 3.15px;
    margin: 0;
    @media (min-width: 650px) {
      font: normal normal normal 38px/40px "Title Wave Regular";
      letter-spacing: 3px;
    }
  }
  h5 {
    font: normal normal bold 16px/20px Source Sans Pro;
    letter-spacing: 3.2px;
    margin: 0;
    @media (min-width: 650px) {
      font: normal normal bold 12px/16px Source Sans Pro;
      letter-spacing: 3px;
    }
  }
  h6 {
    font: normal normal normal 13px/13px Source Sans Pro;
    letter-spacing: 1.95px;
    margin: 0;
    @media (min-width: 650px) {
      font: normal normal normal 11px/11px Source Sans Pro;
      letter-spacing: 1.75px;
    }
  }
  p {
    letter-spacing: 1.5px;
    margin: 0;
    @media (min-width: 650px) {
      letter-spacing: 1.25px;
    }
  }
  @media (min-width: 650px) {
    max-width: 250px;
    margin: 0 1rem 3.2rem;
    padding: 2rem 0 2.7rem;
  }
`;

export const CTAPadding = styled.div`
  max-width: 350px;
  margin: auto;
  padding: 0 3rem;
`;

export const WhatToExpect = styled.h2`
  text-align: center;
  font: normal normal 600 16px/20px Source Sans Pro;
  letter-spacing: 3.2px;
  color: #00263a;
  margin: 5.25rem auto 4.25rem;
  @media (min-width: 600px) {
    font: normal normal 600 20px/26px Source Sans Pro;
  }
`;

export const PaddedTileGrid = styled(TileGrid)`
  margin-bottom: 3.6rem;
`;

export const Coordinates = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 4rem auto 5rem;
  max-width: 500px;
  span {
    font: normal normal normal 15px/17px Stencilia-A, Courier, sans-serif;
    color: #00263a;
    letter-spacing: 3px;
    @media (min-width: 600px) {
      font-size: 20px;
      line-height: 24px;
    }
  }
`;
