import React from 'react';
import { BiSearch } from 'react-icons/bi';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
  return (
    <form
      className="flex justify-center items-center relative"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        placeholder="Search name"
        className="sm:py-[8px] py-[6px] w-[70%]  sm:w-[50%]  px-[50px] rounded-[10px] font-rubik text-slate-100  bg-[#111827] font-[16px] placeholder:text-slate-600 border-solid border-2 border-slate-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="text-[20px]  top-[50%] left-[0%] translate-x-[-150%] opacity-[70%] hover:opacity-100 "
        type="submit"
      >
        <BiSearch className="text-slate-400" />
      </button>
    </form>
  );
};

export default SearchBar;
