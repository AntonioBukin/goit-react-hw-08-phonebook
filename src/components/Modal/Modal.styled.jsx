import styled from 'styled-components';
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1200;
`;

export const ModalBox = styled.div`
  background-color: lightcyan;
  padding: 20px;
  border-radius: 8px;
  box-shadow: -1px -5px 7px 10px rgb(0 0 0 / 21%);
`;