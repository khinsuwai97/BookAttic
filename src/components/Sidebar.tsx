import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { navLinks } from '../data';

interface SidebarProps {
  toggleNav: boolean;
  closeNav: () => void;
  goToPage: (link: string, auth: boolean) => void;
}

const Sidebar = ({ toggleNav, closeNav, goToPage }: SidebarProps) => {
  const handleGoToPage = (link: string, auth: boolean) => {
    goToPage(link, auth);
    closeNav();
  };

  return (
    <aside className={toggleNav ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className="flex justify-between items-center pt-[16px] px-[24px] mb-5">
        <Link
          className="font-lobsterTwo text-[28px] text-gradient font-bold  tracking-wider cursor-pointer no-underline z-50"
          to="/"
          onClick={closeNav}
        >
          BookAttic
        </Link>
        <button onClick={closeNav}>
          <FaTimes className="text-[28px] cursor-pointer text-[#a64fe7] z-50" />
        </button>
      </div>
      <ul className="text-left pt-[16px] px-[24px] ">
        {navLinks.map((link) => {
          return (
            <li
              key={link.id}
              className="no-underline font-rubik text-slate-100 font-normal cursor-pointer text-[20px]  mb-8 hover:pl-4 transition-all ease-linear duration-200 hover:text-[#a64fe7]  "
              onClick={() => handleGoToPage(link.id, link.auth!)}
            >
              {link.title}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
