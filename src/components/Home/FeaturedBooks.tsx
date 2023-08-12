import { useQuery } from '@tanstack/react-query';
import BooksCarousel from './BooksCarousel';
import CarouselLoading from '../CarouselLoading';
import Error from '../Error';
import { ButtonView } from '../ui/Button';
import { useFetchBooks } from '../../hooks/useFetchBooks';

const FeaturedBooks = () => {
  const { isError, isLoading, data } = useQuery({
    queryKey: ['books'],
    queryFn: useFetchBooks,
  });

  let content;

  if (isError) {
    content = <Error text="Something went wrong!" />;
  }

  if (isLoading) {
    content = <CarouselLoading />;
  }

  if (data) {
    content = <BooksCarousel books={data?.Result} />;
  }

  return (
    <section id="feature" className="md:py-[90px] py-14">
      <div className="max-w-[1280px] my-0 mx-auto py-0 sm:px-[32px] px-[24px]">
        <div className="mb-10">
          <h2 className="font-rubik text-slate-100 sm:text-[44px] text-[34px] ss:leading-[80px] font-semibold text-center leading-[40px] mb-2 sm:mb-0 ">
            Featured Books
          </h2>
          <div className="w-[100px] h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto my-0"></div>
        </div>
        {content}
        <div className="flex justify-center items-center mt-10">
          <ButtonView />
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
