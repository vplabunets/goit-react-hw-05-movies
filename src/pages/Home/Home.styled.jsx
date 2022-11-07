import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import colors from 'utils/colors';

export const MoviesWrap = styled.div`
  padding: 10px;
`;
export const MoviesList = styled.ul`
  margin-left: 10px;
`;
export const MoviesItem = styled.li``;
export const MoviesImg = styled.img`
  display: none;
  border-radius: 20px;
  width: 190px;
  height: 280px;
  ${MoviesItem}:hover & {
    display: block;
  }
`;
export const NavItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: bold;
  width: auto;
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
