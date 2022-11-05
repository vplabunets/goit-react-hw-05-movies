import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovDetails = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px groove rgba(0, 0, 0, 0.1);
`;

export const MovInfo = styled.div`
  margin-left: 10px;
`;

export const GoBackBtn = styled(NavLink)`
  display: flex;
  width: 100px;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 10px 0 10px 10px;
  border-radius: 4px;
  color: black;
  text-decoration: none;

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
