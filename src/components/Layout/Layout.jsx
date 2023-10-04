import { AppBar } from 'components/AppBar/AppBar';
import { Container } from './Layout.styled';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
//import AppFooter from 'components/AppFooter/AppFooter';

export const Layout = () => {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<Loader width={96} />}>
        <Outlet />
      </Suspense>
      <Toaster position="top-left" reverseOrder={false} />
    </Container>
  );
};