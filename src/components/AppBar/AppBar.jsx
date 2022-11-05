import React from 'react';
import { Header } from './AppBar.styled';
import { NavItem } from './AppBar.styled';
const AppBar = () => {
  return (
    <Header>
      <NavItem to="/goit-react-hw-05-movies_2" end>
        Home
      </NavItem>
      <NavItem to="/goit-react-hw-05-movies_2/movies">Movies</NavItem>
    </Header>
  );
};

export default AppBar;
