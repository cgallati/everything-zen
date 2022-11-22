import styled from 'styled-components';

export const BandedCardList = styled.ul`
  padding: 0.5rem 0 0 0;
  margin: 0 2rem;
`;

export const BandedCardFrame = styled.li`
  display: block;
  box-shadow: 0 0 3px #00000066;
  border-radius: 3px;
  list-style-type: none;
  margin: 2rem auto;
  font: normal normal 300 11px/13px Source Sans Pro;
  letter-spacing: 2.12px;
  color: #00263a;
  max-width: 400px;
`;

export const BandedCardHeader = styled.div`
  display: flex;
  border-radius: 3px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  background-color: #00263a;
  color: white;
  height: 5rem;
  letter-spacing: 3.2px;

  h2 {
    font: normal normal 300 16px/27px Source Sans Pro;
  }
`;

export const BandedCardDetailArea = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1.25rem 1.5rem;

  h2 {
    margin: 0.25rem 0;
    font: normal normal 400 16px/27px Source Sans Pro;
  }

  div {
    flex-basis: 50%;
  }
`;

export const EditButton = styled.button`
  background-color: #00263a;
  display: block;
  margin: auto;
  padding: 1rem;
  font: normal normal 400 13px/13px Source Sans Pro;
  letter-spacing: 2px;
  color: white;
  cursor: pointer;
  border: #00263a solid 1px;
  border-radius: 3px;

  :active {
    background-color: white;
    color: #00263a;
  }
`;
