import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { useAuth } from '../../hooks/use-auth';
import Loading from '../Loading/Loading';

const Layout: FC = () => {
  const { pending } = useAuth();

  return (
    <>
      <Header />
      {pending ? <Loading /> : <Outlet />}
      <Footer />
    </>
  );
};

export default Layout;
