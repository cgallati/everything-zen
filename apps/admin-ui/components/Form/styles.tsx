import styled from 'styled-components';

export const ItemLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 1rem 1rem 2rem;
`;

export const ReservationDate = styled.h4`
  margin-left: 2rem;
  font: normal normal normal 11px/13px Source Sans Pro;
  letter-spacing: 2.2px;
  color: #00263a;
  margin-bottom: 0.75rem;
`;

export const Time = styled.h4`
  margin-bottom: 1.5rem;
  margin-left: 2rem;
  font: normal normal 300 15px/18px Source Sans Pro;
  letter-spacing: 3px;
  color: #00263a;
`;

export const ReservationItem = styled.h3`
  font: normal normal normal 15px/18px Source Sans Pro;
  letter-spacing: 3px;
  color: #00263a;
  margin: 0;
`;

export const Answer = styled.select`
  height: 23px;
  width: 240px;
  margin-left: 2rem;
  margin-bottom: 1.5rem;
  background: none;
  box-shadow: 0px 1px 3px #00000066;
  border-radius: 3px;
  border: none;
  color: #00263a;
  font: normal normal normal 10px/12px Source Sans Pro;
  letter-spacing: 2px;
  padding-left: 0.5rem;
`;

export const TextInput = styled.input`
  display: block;
  width: 240px;
  height: 23px;
  background: #ffffff 0 0 no-repeat padding-box;
  box-shadow: 0 0 3px #00000066;
  border-radius: 3px;
  font: normal normal normal 10px/12px Source Sans Pro;
  letter-spacing: 2px;
  border: none;
  color: #00263a;
  margin: 1.25rem auto 0 auto;
  padding-left: 0.5rem;

  :focus {
    outline: 1px solid #003d5e;
  }
`;

export const Prompt = styled.h3`
  margin-top: 1.25rem;
  margin-left: 2rem;
  font: normal normal normal 10px/12px Source Sans Pro;
  letter-spacing: 2px;
  color: #00263a;
`;