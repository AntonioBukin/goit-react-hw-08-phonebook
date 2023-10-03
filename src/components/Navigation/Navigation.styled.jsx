import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const NavLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: ${props => `${props.theme.colors.primary}`};

  &.active {
    color: ${props => `${props.theme.colors.hover}`};
  }

  :hover,
  :focus {
    color: ${props => `${props.theme.colors.hover}`};
  }
`;