import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingMotion = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: var(--bg-color);
  width: 100%;
  height: 100vh;

  div {
    display: flex;
    gap: 0.8rem;
  }

  span {
    margin-top: 2rem;
    font-family: var(--font-base);
    letter-spacing: 0.3rem;
    color: var(--text-color);
  }
`;

const moviment = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(30px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Ball = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  animation: ${moviment} 1.5s infinite;
  animation-delay: ${(props) => props.delay};
  background-image: ${(props) => props.color};
`;

export default class Loading extends Component {
  render() {
    return (
      <LoadingMotion>
        <div>
          <Ball
            delay="0s"
            color="linear-gradient(to right, var(--sec-color), #ffc8149b)"
          />
          <Ball
            delay="0.4s"
            color="linear-gradient(to right, var(--pri-color), #80808037)"
          />
          <Ball
            delay="0.8s"
            color="linear-gradient(to right, var(--destak), #d8000037)"
          />
        </div>
        <span>carregando...</span>
      </LoadingMotion>
    );
  }
}
