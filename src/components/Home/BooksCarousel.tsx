import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Book } from '../../types';

interface BooksCarouselProps {
  books: Book[];
}

const BooksCarousel = ({ books }: BooksCarouselProps) => {
  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
  };
  const items = books.slice(0, 6).map((book) => {
    return (
      <>
        <a
          href={book.pdf_url}
          target="_blank"
          className=" rounded-lg ml-8 pb-2 cursor-pointer flex justify-center items-center"
        >
          <img
            src={book.image}
            alt="image1"
            className="sm:w-[80%] w-[100%]   cursor-pointer rounded-lg shadow-sm  "
            role="presentation"
            onDragStart={handleDragStart}
          />
        </a>
      </>
    );
  });

  const responsive = {
    0: {
      items: 3,
    },

    480: {
      items: 3,
    },

    768: {
      items: 4,
    },
    1060: {
      items: 4,
    },

    1200: {
      items: 6,
    },
  };

  return (
    <AliceCarousel
      items={items}
      autoPlayInterval={1000}
      animationDuration={1500}
      mouseTracking
      autoPlay
      disableButtonsControls
      disableDotsControls
      infinite
      responsive={responsive}
    />
  );
};

export default BooksCarousel;
