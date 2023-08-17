import React, { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Error from '../Error';
import copyIcon from '../../images/assests/copy.svg';
import tickIcon from '../../images/assests/tick.svg';
import { ButtonList } from '../ui/Button';
import { Category } from '../../types';
import DebouncedInput from './DebounceInput';

const featureHeader = [
  { catId: 'id', name: 'ID', header: true },
  { catId: 'copy', name: 'Copy' },
  { catId: 'name', name: 'Name' },
  { catId: 'delete', name: 'Delete' },
];

interface TData {
  id: string;
  name: string;
  delete: string;
}

interface FeaturesProps {
  isError: boolean;
  isLoading: boolean;
  data: TData[];
  allData: Category[] | undefined;
  handleCopy: (value: string) => void;
  copy: string;
  onSubmit: (e: FormEvent) => void;
  onClick: (id: string) => void;
  value: string;
  setValue: (value: React.SetStateAction<string>) => void;
  type: string;
  headerType: string;
}

const Features = ({
  isError,
  isLoading,
  data,
  allData,
  handleCopy,
  copy,
  onSubmit,
  onClick,
  value,
  setValue,
  type,
  headerType,
}: FeaturesProps) => {
  const navigate = useNavigate();

  if (isError) {
    return <Error text="Something went wrong!" />;
  }

  return (
    <div className="p-2 max-w-5xl mx-auto text-white fill-gray-400">
      <div className="flex justify-between mb-2">
        <div className="w-full  gap-1 mb-4">
          <form className="flex justify-center gap-4" onSubmit={onSubmit}>
            <DebouncedInput
              value={value}
              onChange={(value) => setValue(value)}
              debounce={500}
              type={type}
            />
            <button
              className="sm:py-[8px] py-[6px]    px-[30px] rounded-[10px] font-rubik text-slate-100  bg-slate-800 font-[16px]  border-solid border-2 border-slate-500"
              type="submit"
            >
              Add
            </button>

          </form>
        </div>
      </div>
      <table className="border font-rubik border-gray-700 w-full] ">
        <thead className="bg-cyan-700 grid grid-cols-4 gap-4 table-header ">
          {featureHeader.map((cat) => (
            <tr key={cat.catId} className="px-3.5  py-2">
              <th>{`${
                cat.header ? `${headerType} - ${cat.name}` : cat.name
              }`}</th>
            </tr>
          ))}
        </thead>
        <tbody>
          {allData?.length ? (
            data?.map((row, i) => (
              <tr
                key={row.id}
                className={`${i % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'}
                    grid grid-cols-4  gap-4  px-3.5 py-2
                `}
              >
                <td className="table-row-feature">{row.id}</td>
                <td
                  className="table-row-feature ml-4 cursor-pointer"
                  onClick={() => handleCopy(row.id)}
                >
                  <img
                    src={copy === row.id ? tickIcon : copyIcon}
                    width="20px"
                  />
                </td>
                <td className="table-row-feature ml-4">{row.name}</td>

                <td
                  className="font-rubik text-[16px] cursor-pointer text-red-500 ml-6"
                  onClick={() => onClick(row.id)}
                >
                  {row.delete}
                </td>
              </tr>
            ))
          ) : (
            <tr className="text-center h-32">
              {isLoading ? (
                <td colSpan={12}>Loading...</td>
              ) : (
                <td colSpan={12}>No Record Found!</td>
              )}
            </tr>
          )}
        </tbody>
      </table>
      {/* pagination  */}
      <div className="flex items-center justify-end mt-4 gap-2 mr-20 ">
        <ButtonList text="Back to Admin" onClick={() => navigate('/admin')} />
        <ButtonList text="Back" onClick={() => navigate(-1)} />
      </div>
    </div>
  );
};

export default Features;
