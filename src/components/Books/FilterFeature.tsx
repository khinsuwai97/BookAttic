import { HiChevronDown } from 'react-icons/hi';
import { filterOptions } from '../../data';

interface FilterFeatureProps {
  handleToggleBtn: (choice: string) => void;

  selectAll: () => void;
}

const FilterFeature = ({ handleToggleBtn, selectAll }: FilterFeatureProps) => {
  return (
    <div className="flex gap-3 items-center mb-2 px-[48px] md:px-[28px] ">
      <div className="flex gap-2 flex-wrap justify-center items-center">
        <button className=" flex items-center cursor-pointer bg-gray-800 px-2 py-1 rounded-lg ">
          <p
            className="text-white font-rubik font-semibold tracking-wide text-sm"
            onClick={selectAll}
          >
            All
          </p>
        </button>
        {filterOptions.map((option) => {
          return (
            <button
              key={option.id}
              className=" flex items-center cursor-pointer bg-gray-800 px-2 py-1 rounded-lg "
              onClick={() => handleToggleBtn(option.title)}
            >
              <p className="text-white font-rubik font-semibold tracking-wide text-sm">
                {option.title}
              </p>
              <HiChevronDown
                className={`w-6 text-[20px] text-white transition `}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterFeature;
