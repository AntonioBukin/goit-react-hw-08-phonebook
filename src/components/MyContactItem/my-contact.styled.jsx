import styled from 'styled-components';
import { TiUserDeleteOutline } from 'react-icons/ti';

export const ContactItemWrapper = styled.li`
  margin: 10px;
  padding: 5px;
  justify-content: space-between;
`;

export const ContactData = styled.div`
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 17px;
`;

export const ContactName = styled.span`
  flex-grow: 1;
  margin-right: 10px;
`;

export const DeleteButton = styled.button`
  background-color: #c2fbd7;
  border-radius: 100px;
  box-shadow: rgba(0, 0, 0, 0.24) 10px 10px 5px 0px;
  color: green;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    box-shadow: rgb(255, 255, 255) -2px -2px 5px, rgb(139, 167, 147) 2px 2px 5px;
    transform: scale(1.05) rotate(-1deg);
  }

  &:active {
    background: rgb(33, 147, 90);
    box-shadow: 0 3px rgb(33, 147, 90) inset;
  }
`;

export const DeleteIcon = styled(TiUserDeleteOutline)`
  margin-left: 5px;
`;

export const FirstLetterBox = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 700;
  font-size: 22px;
  text-shadow: 0 0 1px #000000;
`;