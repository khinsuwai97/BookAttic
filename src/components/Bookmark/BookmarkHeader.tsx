import { BacktoBooksButton } from '../ui/Button';

const BookmarkHeader = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h3 className="font-semibold font-rubik sm:text-[30px] text-[20px] ss:leading-[80px] leading-[40px] mb-2 sm:mb-0  text-slate-200">
        Your Bookmark
      </h3>
      <BacktoBooksButton />
    </div>
  );
};

export default BookmarkHeader;
