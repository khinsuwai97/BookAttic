import { useEffect, useState } from 'react';

interface DebouncedInputProps {
  value: string;
  onChange: (value: string) => void;
  debounce: number;
}

const DebouncedInput = ({
  value: initValue,
  onChange,
  debounce = 300,
}: DebouncedInputProps) => {
  const [value, setValue] = useState(initValue);
  useEffect(() => {
    setValue(initValue);
  }, [initValue]);

  // *  0.3s after set value in state
  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);
    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Filter"
      className="sm:py-[8px] py-[6px] w-[40%]   px-[50px] rounded-[10px] font-rubik text-slate-100  bg-[#111827] font-[16px] placeholder:text-slate-600 border-solid border-2 border-slate-500"
    />
  );
};

export default DebouncedInput;
