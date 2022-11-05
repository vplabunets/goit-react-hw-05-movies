import colors from 'utils/colors';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  height: 60px;
  padding: 10px;
  border-bottom: 1px groove rgba(0, 0, 0, 0.1);
`;

export const NavItem = styled(NavLink)`
  display: flex;
  font-size: 20px;
  font-weight: bold;
  width: 150px;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  color: ${colors.maintextc};
  text-decoration: none;
  :first-child {
    margin-right: 10px;
  }
  &.active {
    background-color: ${colors.accentc};
    color: ${colors.white};
  }
  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: ${colors.accentc};
    background-color: ${colors.white};
  }
`;

// export default (Header, NavItem);
