import styled from "styled-components";

interface ToggleProps {
  readonly isActive: boolean;
  readonly maxHeight?: number;
}

export const Frame = styled.section<ToggleProps>`
  box-shadow: 0 0 3px #00000066;
  border-radius: 3px;
  padding: 1.5rem;
  margin: 0 2rem 2rem;
  color: #13293a;
  cursor: pointer;
  max-height: ${(props) => props.maxHeight}px;
  transition: max-height 0.25s ease-in-out;
  box-sizing: border-box;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Question = styled.h2`
  font: normal normal 600 13px/29px Source Sans Pro;
  letter-spacing: 2.6px;
  margin: 0;
`;

export const Toggle = styled.button<ToggleProps>`
  width: 1rem;
  height: 1rem;
  border: none;
  background: none;
  position: relative;
  padding: 0;
  margin-left: 0.5rem;
  div {
    background: #00263a;
    position: absolute;
    border: none;
  }

  div:first-child {
    height: 1rem;
    width: 2px;
    left: calc(0.5rem - 1px);
    top: 0;
    transition: transform 0.25s ease-in-out;
    transform: rotate(${(props) => (props.isActive ? "90" : "0")}deg);
  }

  div:last-child {
    height: 2px;
    width: 1rem;
    top: calc(0.5rem - 1px);
    left: 0;
  }
`;

export const Answer = styled.p<ToggleProps>`
  font: normal normal normal 13px/25px Source Sans Pro;
  letter-spacing: 0.65px;
  margin: 0;
  ${(props) =>
    props.isActive
      ? `
      visibility: visible;
      opacity: 1;
      transition: visibility 0s linear 0s, opacity .5s ease-in;
    `
      : `
      visibility: hidden;
      opacity: 0;
      transition: visibility 0s linear .5s, opacity .25s ease-out 0s;
    `};
`;
