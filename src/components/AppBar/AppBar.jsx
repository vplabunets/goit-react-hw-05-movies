import React from 'react';
import { Header, NavItem } from './AppBar.styled';

const AppBar = () => {
  return (
    <Header>
      <NavItem to="/" end>
        Home
      </NavItem>
      <NavItem to="/movies">Movies</NavItem>
    </Header>
  );
};

export default AppBar;
