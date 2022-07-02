import styled from 'styled-components';

export const TileList = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  @media (min-width: 750px) {
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    max-width: 800px;
  }
`;
