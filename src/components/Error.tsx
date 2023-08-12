interface ErrorProps {
  text: string;
}

const Error = ({ text }: ErrorProps) => {
  return (
    <div className="h-screen">
      <h5 className="font-rubik text-red-500 text-center sm:text-[20px] text-[16px]">
        {text}
      </h5>
    </div>
  );
};

export default Error;
