import styled, { keyframes } from "styled-components"
import React from "react"

const Frame = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Spimage = styled.img`
  height: 3rem;
  width: 3rem;
  animation: ${spin} 1s linear infinite;
`

export const Loading: React.FC<Record<string, never>> = () => (
  <Frame>
    <Spimage src={"/wave.svg"} alt={"loading indicator"} />
  </Frame>
)
