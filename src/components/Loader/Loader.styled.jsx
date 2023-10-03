import styled, { keyframes } from 'styled-components';

export const LoaderWrapper = styled.div`
  background: #ffffff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 9999;
`;

export const LoaderInner = styled.div`
  background-image: url('http://denis-creative.com/wp-content/uploads/2017/10/loader.gif');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #fff;
  height: 60px;
  width: 60px;
  margin-top: -30px;
  margin-left: -30px;
  left: 50%;
  top: 50%;
  position: absolute;
`;

export const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;