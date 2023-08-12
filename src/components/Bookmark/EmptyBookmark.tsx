import { ButtonView } from '../ui/Button';

const EmptyBookmark = () => {
  return (
    <div className="h-screen ">
      <div className=" w-full flex flex-col justify-center items-center gap-4 mt-10">
        <h2 className=" font-rubik  font-semibold sm:text-[40px] text-[26px] ss:leading-[80px] text-center text-slate-200 leading-[40px] mb-2 sm:mb-0">
          Your Bookmark is empty{' '}
        </h2>
        <ButtonView />
      </div>
    </div>
  );
};

export default EmptyBookmark;
