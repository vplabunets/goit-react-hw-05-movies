import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import LayoutBox from './Layout.styled';

const Layout = () => {
  return (
    <LayoutBox>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </LayoutBox>
  );
};

export default Layout;
