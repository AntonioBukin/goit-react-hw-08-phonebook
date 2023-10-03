import styled, { keyframes } from 'styled-components';
import phoneBook from 'images/phone-book.svg';

const pulseAnimation = keyframes`
  0% {transform: scale(0.95)}

	70% {transform: scale(1.1)}

	100% {transform: scale(0.95)}
  `;

export const Wrapper = styled.div`
  min-height: calc(100vh - 150px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const HomePageImage = styled.div`
  width: 200px;
  height: 200px;
  background-image: url('${phoneBook}');
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;

  animation-name: ${pulseAnimation};
  animation-duration: 3s;
  animation-iteration-count: infinite;
`;