import { FaQuoteLeft } from 'react-icons/fa';

const Quote = () => {
  return (
    <section className="md:py-[90px] py-14">
      <div className="max-w-[1280px] my-0 mx-auto py-0 sm:px-[32px] px-[24px]">
        <div className="w-full flex gap-2  box-shadow  rounded-[30px] py-[40px] px-[65px] bg-[#192339]  ">
          <span className="sm:text-[32px] text-[28px] text-[#e01dab] ">
            <FaQuoteLeft />
          </span>
          <h2 className="text-slate-100 font-rubik font-semibold sm:text-[36px] text-[24px] md:leading-[55px] leading-[50px] ">
            "If you don’t like to read, you haven’t found the right book." –
            J.K. Rowling
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Quote;
