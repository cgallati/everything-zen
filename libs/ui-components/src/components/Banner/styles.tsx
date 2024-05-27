import styled from 'styled-components';


export const BannerBox = styled.div`
  // full width, background color as primary color and white text
  background-color: #00263a;
  color: white;
  padding: .5rem;
  font: normal normal normal 16px/18px Source Sans Pro;
  text-align: center;

  @media (min-width: 600px) {
    font: normal normal normal 22px/28px Source Sans Pro;
  }
`;
