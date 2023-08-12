export const CarouselLoading = () => {
  return (
    <div className="md:grid md:grid-cols-6 sm:grid-cols-4  gap-6  animate-pulse flex ">
      {Array.from({ length: 6 }, (_, i) => {
        return (
          <div
            key={i}
            className="bg-[#192339] w-[77px] h-[116px] sm:w-[160px] sm:h-[194px]  rounded-lg shadow-sm overflow-hidden pb-6 relative"
          >
            <div className=" bg-[#192339]  pb-2 cursor-pointer flex justify-center items-center">
              <div className="w-[50%]  cursor-pointer pt-4   " />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CarouselLoading;
