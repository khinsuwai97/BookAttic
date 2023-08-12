import HeroImage from '../../images/hero.png';
import { Button } from '../ui/Button';
const Hero = () => {
  return (
    <section id="home" className="md:pt-22 md:pb-[90px] pb-3 pt-6 ">
      <div className="xl:max-w-[1280px] w-full grid md:grid-cols-2 py-0 sm:px-[32px]  px-[24px]  ">
        <div className=" sm:px-16 px-6 md:mt-20 z-10 max-w-[1300px] md:mb-0 mb-10 ">
          <h1 className="font-rubik text-gradient font-bold sm:text-[58px] ss:text-[44px] leading-tight ss:text-left text-center text-[34px]    ">
            Welcome to Book Attic eBook Library
          </h1>
          <p className="font-rubik font-normal sm:text-[20px] text-[18px] ss:leading-[30px] text-slate-100 ss:text-left text-center  mt-5 leading-[25px] max-w-[520px] ">
            Browse your favorite books from our collections of ebooks and read
            from anywhere, at any time.
          </p>

          <div className=" ss:text-left text-center mt-10">
            <Button />
          </div>
        </div>
        <div className="flex justify-center items-center relative ">
          <img src={HeroImage} className="w-[70%] z-10" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
