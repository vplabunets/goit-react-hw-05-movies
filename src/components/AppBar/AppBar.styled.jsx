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
  width: auto;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  color: black;
  text-decoration: none;
  :first-child {
    margin-right: 10px;
  }
  &.active {
    background-color: rgb(220, 71, 11);
    color: #f7f7f7;

    :hover:not(.active),
    :focus-visible:not(.active) {
      color: blue;
      background-color: green;
    }
  }
`;

// export default (Header, NavItem);
