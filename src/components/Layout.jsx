import { Outlet } from 'react-router';
import Navbar from './global/Navbar';
import Footer from './global/Footer';

const Layout = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
