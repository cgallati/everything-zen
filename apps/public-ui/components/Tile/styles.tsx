import styled from "styled-components";

export const TileFrame = styled.div`
  box-sizing: border-box;
  display: inline-block;
  height: 11rem;
  width: 11rem;

  box-shadow: 0 0 3px #00000066;
  border-radius: 3px;
  margin: 0.8rem;
  padding: 1.75rem 1rem;
  @media (max-width: 425px) {
    height: 9rem;
    width: 9rem;
    padding: 1rem 1rem;
  }
`;

export const TileImgFrame = styled.img`
  box-sizing: border-box;
  display: inline-block;
  height: 11rem;
  width: 11rem;
  @media (max-width: 425px) {
    height: 9rem;
    width: 9rem;
  }
  border-radius: 3px;
  margin: 0.8rem;
  cursor: pointer;
`;

export const TileGrid = styled.section`
  display: flex;
  flex-direction: column;
  margin: 3.6rem auto;
  @media (min-width: 1000px) {
    flex-direction: row;
  }
  > div {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
`;

export const BigTileFrame = styled(TileFrame)`
  height: 20rem;
  width: 20rem;
  margin: 1.5rem 0.5rem;
  padding-top: 2rem;
  @media (min-width: 750px) {
    max-width: 15rem;
    height: 19rem;
    padding-top: 1rem;
`;

export const Icon = styled.img`
  margin: 0 auto 1rem;
  display: block;
`;

export const SizedIcon = styled.img`
  margin: 0 auto 1rem;
  display: block;
  height: 77px;
`;

export const TileText = styled.p`
  font: normal normal normal 13px/22px Source Sans Pro;
  @media (max-width: 425px) {
    font: normal normal normal 11px/18px Source Sans Pro;
  }
  letter-spacing: 0.65px;
  text-align: center;
  margin: 0 auto 0;
`;

export const NarrowTileText = styled(TileText)`
  width: 88px;
  @media (max-width: 425px) {
    width: 80px;
  }
`;

export const BigTileText = styled.p`
  font: normal normal bold 13px/22px Source Sans Pro;
  letter-spacing: 2.8px;
  text-align: center;
  margin: 2rem auto 2rem;
`;

export const BodyText = styled.p`
  font: normal normal normal 12px/30px Source Sans Pro;
  letter-spacing: 0.6px;
  text-align: center;
  margin: 0 auto;
  width: 13rem;
`;
