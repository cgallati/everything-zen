import styled from 'styled-components';

const buttonSize = 3.5;
export const Frame = styled.section`
  max-width: 800px;
  margin: 4rem auto;
  position: relative;
  overflow: hidden;

  button:first-of-type {
    left: 1rem;
  }
  button:last-of-type {
    right: 1rem;
    transform: rotate(180deg);
  }
`;

export const Button = styled.button`
  z-index: 1;
  background-color: transparent;
  background-size: 100% 100%;
  border: 0;
  background-image: url('/gallery_arrow.svg');
  position: absolute;
  width: ${buttonSize}rem;
  height: ${buttonSize}rem;
  opacity: 55%;
  cursor: pointer;
  top: calc(50% - ${buttonSize / 2}rem);
  :active {
    opacity: 1;
  }
`;
