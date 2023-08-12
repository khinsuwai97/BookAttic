import React from 'react';
import { BsBookmarkCheckFill, BsBookmarkFill } from 'react-icons/bs';
import { useAddToBookmark } from '../../hooks/useAddToBookmark';
import { successToast, errorToast } from '../../lib/showToast';
interface BookItmesProps {
  name: string;
  author: string;
  category: string;
  image: string;
  read: string;
  id: string;
  tag: string;
}

const BookItems = ({
  name,
  author,
  category,
  image,
  read,
  id,
  tag,
}: BookItmesProps) => {
  const { addToBookmark, books } = useAddToBookmark();

  const isAlreadyInList = books.find((book) => book.id === id);

  const handleBookmark: React.MouseEventHandler<HTMLSpanElement> = (e) => {
    e.stopPropagation();
    if (isAlreadyInList) {
      errorToast(name, 'is already in your bookmark.');
      return;
    }
    addToBookmark({
      name,
      author,
      category,
      image,
      read,
      id,
      tag,
    });

    successToast(name, 'is added to your bookmark.');
  };

  return (
    <div className="bg-[#192339]  rounded-lg shadow-sm overflow-hidden pb-6 relative">
      <a href={read} target="_blank">
        <div className="  pb-2 cursor-pointer flex justify-center items-center">
          <img
            src={image}
            alt="image1"
            className="w-[50%]  cursor-pointer pt-4   "
          />
        </div>
        <div className="mx-1 sm:mx-0 flex flex-col gap-2">
          <p className="font-rubik text-center text-[16px] font-semibold text-slate-100 mt-5 mx-2">
            {name}
          </p>
          <p className="font-rubik text-slate-100 text-sm text-center mx-2">
            <span className="font-semibold">Author:{''} </span>
            {author}
          </p>
          <p className="font-rubik text-slate-100 text-sm text-center mx-2">
            <span className="font-semibold">Category:{''} </span>
            {category}
          </p>
        </div>
      </a>
      <span onClick={handleBookmark}>
        {isAlreadyInList ? (
          <BsBookmarkCheckFill className={`bookmark-icon  text-pink-600 `} />
        ) : (
          <BsBookmarkFill className={`bookmark-icon  text-cyan-600 `} />
        )}
      </span>
    </div>
  );
};

export default BookItems;
