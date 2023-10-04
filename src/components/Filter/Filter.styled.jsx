import styled from 'styled-components';
import { FcSearch } from 'react-icons/fc';

export const FilterTitle = styled.label`
  position: relative;
  align-items: center;
  text-shadow: -1px 4px 4px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  margin: 5px 0 25px 0;
  padding-top: 15px;
  font-size: 18px;
  font-weight: 600;
`;

export const Icon = styled(FcSearch)`
  position: absolute;
  margin-right: 220px;
  bottom: 58px;
`;

export const FilterInput = styled.input`
  margin: 20px auto 0 auto;
  width: 350px;
  padding: 8px 16px;
  border: 0px;
  border-radius: 8px;
  box-shadow: rgb(139, 167, 147) 1px 1px 3px inset,
    rgb(255, 255, 255) -1px -1px 5px inset;
  font-style: italic;
`;