interface FilterItemsProps {
  toggle: boolean;
  option: string;
  selectedOption: (option: string) => void;
  selected: string;
  authors: string[];
  categories: string[];
  features: string[];
}

const FilterItems = ({
  toggle,
  option,
  selectedOption,
  selected,
  authors,
  categories,
  features,
}: FilterItemsProps) => {
  const getData = (): string[] | undefined => {
    if (option === 'Authors') {
      return authors;
    }

    if (option === 'Categories') {
      return categories;
    }

    if (option === 'Features') {
      return features;
    }
  };

  return (
    <div className="flex  item-center justify-center ss:block ss:ml-1 relative mb-10">
      <div
        className={` bg-gray-800  w-72 py-5  border-2  shadow-md rounded-[10px]  border-slate-900 px-2 
        absolute top-[70%] z-30 ${toggle ? 'opacity-1' : 'opacity-0'}  ${
          toggle ? 'visible' : 'invisible'
        } ${
          toggle ? 'translate-y-0' : 'translate-y-[100%]'
        } transitiona-all ease-in duration-300 ${
          option === 'Authors' ? 'sm:ml-24 ml-0' : ''
        }
         ${option === 'Features' ? 'sm:ml-52 ml-0' : ''}
    
    `}
      >
        <p className="text-center font-rubik text-white font-semibold text-base mb-2">
          {option}
        </p>
        <ul className="flex justify-evenly  flex-wrap  text-sm text-white  gap-3 cursor-pointer">
          {/* <li className="hover:underline tracking-wide">All</li> */}
          {getData()?.map((data) => {
            return (
              <li
                key={data}
                className={`hover:underline font-rubik  tracking-wide ${
                  selected === data ? 'text-[#a64fe7]' : ''
                } `}
                onClick={() => selectedOption(data)}
              >
                {data}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FilterItems;
