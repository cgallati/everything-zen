import styled from 'styled-components';

export const FormHeading = styled.h2`
  font: normal normal 600 16px/28px Source Sans Pro;
  letter-spacing: 3.2px;
  color: #022133;
  margin-bottom: 2rem;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  background: #ffffff 0 0 no-repeat padding-box;
  border: none;
  box-shadow: 0 0 3px #00000066;
  border-radius: 3px;
  font: normal normal normal 13px/17px Source Sans Pro;
  letter-spacing: 2.6px;
  box-sizing: border-box;
  :focus {
    outline: 1px solid #003d5e;
  }
`;

export const TextArea = styled.textarea`
  box-shadow: 0 0 3px #00000066;
  border-radius: 3px;
  border: none;
  display: block;
  width: 100%;
  height: 7rem;
  margin-bottom: 2rem;
  resize: none;
  font: normal normal normal 13px/17px Source Sans Pro;
  background: #ffffff 0 0 no-repeat padding-box;
  letter-spacing: 2.6px;
  padding: 0.5rem;
  box-sizing: border-box;
  :focus {
    outline: 1px solid #003d5e;
  }
`;

export const SubmitButton = styled.input`
  display: block;
  background: #00263a 0 0 no-repeat padding-box;
  margin-top: 2.5rem;
  margin-left: auto;
  margin-right: auto;
  -webkit-appearance: none;
  color: white;
  :active {
    color: white;
    background: #00263a;
    box-shadow: none;
    border: 0.5px solid #003d5e;
    opacity: 0.7;
  }

  text-align: center;
  font: normal normal 600 15px/18px Source Sans Pro;
  letter-spacing: 3px;
  box-shadow: 0 0 3px #00000066;
  border-radius: 3px;
  border: none;
  width: 100%;
  height: 3.25rem;
  max-width: 400px;
`;

export const AddressFlex = styled.address`
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
  justify-content: space-between;
  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

export const ContactInfoCard = styled.section`
  box-shadow: 0 0 3px #00000066;
  border-radius: 3px;
  padding: 1rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  height: 146px;
`;

export const SneakyAnchor = styled.a`
  text-decoration: none;
  color: initial;
  cursor: pointer;
  width: 100%;
  max-width: 350px;
  margin: 0 auto 3.3rem;
  @media (min-width: 800px) {
    margin: 0;
  }
`;

export const ContactTitle = styled.h4`
  margin: 0;
  font: normal normal 700 12px/20px Source Sans Pro;
  letter-spacing: 2.4px;
`;

export const Phone = styled.p`
  margin: 0 0 1rem;
  font: normal normal normal 15px/26px Source Sans Pro;
  letter-spacing: 1.5px;
`;

export const Address = styled.p`
  margin: 0;
  font: normal normal normal 13px/25px Source Sans Pro;
  letter-spacing: 1.5px;
`;

export const FullWidthImg = styled.img`
  max-width: 750px;
  width: 100%;
  margin: 1rem auto;
  display: block;
  @media (min-width: 600px) {
    margin-top: 5rem;
  }
`;
