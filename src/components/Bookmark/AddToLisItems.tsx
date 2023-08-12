import { BsFillBookmarkXFill } from 'react-icons/bs';
import { BookItem } from '../../hooks/useAddToBookmark';
import { useAddToBookmark } from '../../hooks/useAddToBookmark';

const AddToLisItems = ({
  id,
  name,
  image,
  read,
  category,
  tag,
  author,
}: BookItem) => {
  const { removeFromBookmark } = useAddToBookmark();
  return (
    <div>
      <div className="book-list-container justify-between">
        <a
          href={read}
          target="_blank"
          className=" flex items-center gap-4 mb-4 "
        >
          <img
            src={image}
            alt={name}
            className=" md:w-[15%] sm:w-[20%] w-[30%] cursor-pointer rounded-lg shadow-sm"
          />

          <div>
            <p className="font-rubik sm:text-[18px] text-[16px] font-semibold text-slate-100  ">
              {name}
            </p>
            <p className="font-rubik text-slate-100 sm:text-base text-sm  ">
              <span className="font-semibold">Author:{''} </span>
              {author}
            </p>
            <p className="font-rubik text-slate-100 sm:text-base text-sm  ">
              <span className="font-semibold">Category:{''} </span>
              {category}
            </p>
            {/* <p className="flex text-slate-100 items-center text-sm sm:text-[16px] gap-1 font-rubik  sm:hidden  ">
              Popular
            </p> */}
          </div>
        </a>

        <div className="flex sm:justify-between justify-end items-center">
          <p className="sm:flex font-rubik text-slate-100 items-center text-[16px] gap-1 hidden  ">
            {tag}
          </p>
          <button
            className="justify-self-center"
            onClick={() => removeFromBookmark(id)}
          >
            <BsFillBookmarkXFill size={22} className="text-red-500" />
          </button>
        </div>
      </div>
      <div className="my-8 border-b border-zinc-700 "></div>
    </div>
  );
};

export default AddToLisItems;
