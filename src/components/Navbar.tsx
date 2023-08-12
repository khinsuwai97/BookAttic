import { Link } from 'react-router-dom';
import { navLinks } from '../data';
import { FaBars } from 'react-icons/fa';

interface NavbarProps {
  onClick: () => void;
  goToPage: (link: string, auth: boolean) => void;
}

const Navbar = ({ onClick, goToPage }: NavbarProps) => {
  return (
    <>
      <nav
        className={`md:h-[90px] h-[80px] px-[48px] flex items-center justify-between`}
      >
        <div>
          <Link
            to="/"
            className="tracking-wider sm:text-[32px] text-[28px] font-bold cursor-pointer font-lobsterTwo  no-underline z-50 text-gradient "
          >
            BookAttic
          </Link>
        </div>
        <div className="md:hidden gap-3 flex items-center">
          <button onClick={onClick}>
            <FaBars className="text-[24px] cursor-pointer text-[#a64fe7]" />
          </button>
        </div>

        <ul className="list-none md:flex hidden justify-end items-center flex-1 md:h-[90px] ">
          {navLinks.map((navLink) => (
            <li
              className="no-underline font-bold  cursor-pointer tracking-wider text-[18px] text-slate-100 mr-10 nav-Link"
              key={navLink.id}
              onClick={() => goToPage(navLink.id, navLink.auth!)}
            >
              {navLink.title}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
{
  /* <NavLink to={navLink.id}>{navLink.title}</NavLink> */
}
