import styled from 'styled-components';

export const Prompt = styled.h3`
  margin-top: 1.25rem;
  margin-left: 5rem;
  font: normal normal normal 10px/12px Source Sans Pro;
  letter-spacing: 2px;
  color: #00263a;
`;
export const Formlet = styled.section`
  max-width: 415px;
  margin: 0 auto;
  padding: 1.5rem 0 2rem 0;
`;
export const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  margin-left: 1.2rem;
  margin-bottom: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
`;
export const BackArrow = styled.img`
  display: inline;
`;
export const BackText = styled.p`
  font: normal normal normal 10px/12px Source Sans Pro;
  letter-spacing: 2px;
  color: #00263a;
  margin: 0 0 0 0.35rem;
`;
export const HR = styled.div`
  width: 100%;
  height: 0;
  margin: 0;
  background: #00263a;
  border-bottom: 0.25px solid #00263a;
  opacity: 0.5;
`;
export const SubmitButton = styled.input`
  display: block;
  width: 240px;
  height: 43px;
  background: #00263a 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 3px #00000066;
  border-radius: 3px;
  color: white;
  border: none;
  font: normal normal normal 13px/16px Source Sans Pro;
  letter-spacing: 2.6px;
  margin-top: 2.5rem;
  margin-left: auto;
  margin-right: auto;
  -webkit-appearance: none;

  :active {
    color: #00263a;
    background: white;
    box-shadow: none;
    border: 0.5px solid #003d5e;
    opacity: 0.7;
  }

  :disabled {
    opacity: 0.25;
  }
`;
export const SubtleHeader = styled.h2`
  margin-left: 2rem;
  margin-top: 1.5rem;
  font: normal normal normal 11px/13px Source Sans Pro;
  letter-spacing: 2.2px;
  color: #00263a;
  opacity: 0.5;
`;
export const HeavyHeader = styled.h2`
  margin-left: 2rem;
  margin-top: 1.25rem;
  font: normal normal normal 15px/18px Source Sans Pro;
  letter-spacing: 3px;
  color: #00263a;
`;
