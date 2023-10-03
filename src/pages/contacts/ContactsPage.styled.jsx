import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

export const Wrapper = styled.div`
  text-align: center;
`;
export const Title = styled.h1`
  text-align: center;
  margin-top: 10px;
  animation: ${slideIn} 0.5s ease-in-out forwards;
  transform: translateX(-100%);
`;
export const PhonebookWrapper = styled.div`
  animation: ${slideIn} 0.5s ease-in-out forwards;
  transform: translateX(-100%);
`;