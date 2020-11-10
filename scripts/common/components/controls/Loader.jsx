import React from 'react';
import styled, { keyframes } from 'styled-components';

const StyledWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const rotate360 = keyframes`
  0% {
        transform-origin: 50% 50%;
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledLoader = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: inline-block;
  width: 40px;
  height: 40px;
  animation: ${rotate360} 1.4s linear infinite;
  color: #e91e63;
`;

const StyledSvg = styled.svg`
  display: block;
`;

const StyledCircle = styled.circle`
  stroke: currentColor;
  stroke-dasharray: 80px, 200px;
  stroke-dashoffset: 0px;
`;

const Loader = () => {
  return (
    <StyledWrapper>
      <StyledLoader>
        <StyledSvg viewBox="22 22 44 44">
          <StyledCircle
            cx="44"
            cy="44"
            r="20.2"
            fill="none"
            strokeWidth="3.6"
          />
        </StyledSvg>
      </StyledLoader>
    </StyledWrapper>
  );
};

export default Loader;
