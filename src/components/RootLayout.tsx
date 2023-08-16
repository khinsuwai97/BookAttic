import { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import usePasscodeModal from '../hooks/usePasscodeModal';
import usePasscodeModalMobile from '../hooks/usePasscodeModalMobile';

const RootLayout = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const navigate = useNavigate();
  const { onOpen } = usePasscodeModal();
  const { onOpen: onMobileOpen } = usePasscodeModalMobile();

  const openToggleNav = () => {
    setToggleNav(true);
  };

  const closeToggleNav = () => {
    setToggleNav(false);
  };

  const goToPage = (link: string, auth: boolean) => {
    if (auth) {
      onOpen();
    } else if (link) {
      navigate(link);
    }
  };

  const goToPageMobile = (link: string, auth: boolean) => {
    if (auth) {
      onMobileOpen();
    } else if (link === '/admin') {
      return;
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
        goToPage={goToPageMobile}
      />
      <main className="w-full ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
