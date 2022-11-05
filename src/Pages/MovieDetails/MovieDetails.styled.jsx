import colors from 'utils/colors';
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
export const GoBackBtnText = styled.p`
  margin-left: 10px;
`;
export const GoBackBtn = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  color: ${colors.maintextc};
  outline: none;
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
export const MovImg = styled.img`
  border-radius: 30px;
`;
export const MovText = styled.p`
  margin-left: 10px;
  color: ${colors.secondarytextc};
`;
export const AddInfoBox = styled.div`
  margin: 10px;
`;
export const AddInfoTitle = styled.h4`
  margin-bottom: 10px;
`;
export const NavItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: bold;
  width: auto;
  margin-left: 10px;
  border-radius: 10px;
  color: ${colors.maintextc};
  text-decoration: none;
  :first-child {

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
