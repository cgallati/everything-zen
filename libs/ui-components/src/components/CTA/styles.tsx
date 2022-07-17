import styled from 'styled-components';

export const Padding = styled.div`
  padding: 0 2.5rem;
`;

export const Button = styled.button`
  display: block;
  border-radius: 3px;
  font: normal normal 600 16px/18px Source Sans Pro;
  letter-spacing: 3.2px;
  width: 100%;
  height: 3.4rem;
  border: none;
  max-width: 500px;
  margin: 2rem auto;
  color: white;
  cursor: pointer;
`;

export const BlueButton = styled(Button)`
  background: #00263a;
  color: white;
  box-shadow: 0 0 5px #00000029;
  :active {
    color: #00263a;
    background: white;
  }
`;

export const BlueAndFatButton = styled(BlueButton)`
  height: 68px !important;
  margin: 0 auto;
  max-width: 800px;
`;

export const WhiteButton = styled(Button)`
  background: white;
  color: #00263a !important;
  box-shadow: inset 0px 1px 3px #00000029, 0px 1px 1px #00000029;
  :active {
    color: white;
    background: #00263a;
  }
`;
export const TransparentButton = styled(Button)`
  background: transparent;
  color: white;
  border: 2px solid #ffffff;
  :active {
    color: #00263a;
    background: white;
  }
`;

export const FatButton = styled(WhiteButton)`
  height: 7.8rem;
  font: normal normal 600 20px/17px Source Sans Pro;
`;
