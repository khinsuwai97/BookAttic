import { Link } from 'react-router-dom';

export const Button = () => {
  return (
    <Link to="/books">
      <button
        className={`px-[20px] py-[8px] font-rubik text-[16px]  outline-none font-medium cursor-pointer rounded-[25px] whitespace-nowrap bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-0 `}
      >
        {' '}
        Start Reading
      </button>
      //{' '}
    </Link>
  );
};
export const ButtonView = () => {
  return (
    <Link to="/books">
      <button
        className={`px-[20px] py-[8px] rounded-lg font-rubik text-[14px]  sm:text-[16px]  outline-none font-medium cursor-pointer whitespace-nowrap bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-0 `}
      >
        {' '}
        View All Books
      </button>
    </Link>
  );
};

export const BacktoBooksButton = () => {
  return (
    <Link to="/books">
      <button className="sm:text-[16px]text-sm text-slate-200 outline-none font-rubik hover:text-white">
        Back to Books{' '}
      </button>
    </Link>
  );
};

interface ButtonClearProps {
  onClick: () => void;
}

export const ButtonClear = ({ onClick }: ButtonClearProps) => {
  return (
    <button
      className={`px-[20px] py-[8px] rounded-lg font-rubik text-[16px]  outline-none font-medium cursor-pointer whitespace-nowrap bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-0 `}
      onClick={onClick}
    >
      {' '}
      Clear List
    </button>
  );
};
