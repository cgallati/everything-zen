import styled from 'styled-components';

export const Formlet = styled.section`
  width: 267px;
  margin: auto;
  padding: 2.5rem 0;
`;

export const Heading = styled.h1`
  font: normal normal normal 22px/26px Source Sans Pro;
  letter-spacing: 4.37px;
  color: #00263a;
  text-align: center;
  margin-bottom: 1.25rem;
`;

export const SubHeading = styled.h2`
  font: normal normal normal 11px/13px Source Sans Pro;
  letter-spacing: 2.12px;
  color: #00263a;
  text-align: center;
  margin-bottom: 3rem;
`;

interface TimeButtonProps {
  booked: boolean;
}

export const CharterTimeButton = styled.button<TimeButtonProps>`
  display: block;
  background: #fff;
  width: 234px;
  height: 43px;
  box-shadow: 0px 1px 3px #00000066;
  border-radius: 3px;
  border: none;
  font: normal normal 300 11px/13px Source Sans Pro;
  letter-spacing: 2.12px;
  color: #00263a;
  margin: 0 auto 1.25rem auto;
  cursor: ${({ booked }) => (booked ? 'auto' : 'pointer')};
  :active {
    background: #00263a;
    color: #fff;
  }
  opacity: ${({ booked }) => (booked ? '.35' : '1')};
`;

export const OffSeasonMessage = styled.h4`
  font: normal normal normal 14px/20px Source Sans Pro;
  letter-spacing: 2.12px;
  color: #00263a;
  text-align: center;
  a {
    color: #00263a;
  }
`;
