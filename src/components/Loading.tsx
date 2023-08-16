const Loading = () => {
  return (
    <div className=" flex justify-around flex-wrap gap-6 animate-pulse">
      {Array.from({ length: 10 }, (_, i) => {
        return (
          <div
            key={i}
            className="bg-[#192339] w-[140px] md:w-[180px] h-[279px]  rounded-lg shadow-sm overflow-hidden pb-6 relative"
          ></div>
        );
      })}
    </div>
  );
};

export default Loading;
