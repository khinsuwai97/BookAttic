import { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';

const RootLayout = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const navigate = useNavigate();

  const openToggleNav = () => {
    setToggleNav(true);
  };

  const closeToggleNav = () => {
    setToggleNav(false);
  };

  const goToPage = (link: string, auth: boolean) => {
    if (auth && link === '/admin') {
      navigate('/');
    } else {
      navigate(link);
    }
  };

  return (
    <>
      <Navbar onClick={openToggleNav} goToPage={goToPage} />
      <Sidebar
        toggleNav={toggleNav}
        closeNav={closeToggleNav}
        goToPage={goToPage}
      />
      <main className="w-full ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
