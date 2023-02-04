import styled from 'styled-components';

export const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  font: normal normal 300 11px/13px Source Sans Pro;
  padding: 0.5rem 1.5rem;
  color: #00263a;

  h2 {
    font-size: 20px;
    line-height: 16px;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  input {
    margin-bottom: 0.5rem;
    color: #00263a;
    border: #00263a solid 1px;
    border-radius: 3px;
  }

  label {
    margin-bottom: 0.25rem;
  }

  button {
    background-color: #00263a;
    display: block;
    padding: 0.5rem 1rem;
    letter-spacing: 2px;
    color: white;
    cursor: pointer;
    border: #00263a solid 1px;
    border-radius: 3px;
    margin: 1rem auto 0.5rem;
    width: 100%;

    :disabled {
      cursor: not-allowed;
      background-color: lightgrey;
      color: #00263a;
    }

    :last-of-type {
      background-color: white;
      color: #00263a;
    }
  }
`;
