import BookmarkHeader from './BookmarkHeader';
import EmptyBookmark from './EmptyBookmark';
import BooklistHeader from './BooklistHeader';
import AddToList from './AddToList';
import { useAddToBookmark } from '../../hooks/useAddToBookmark';

const Bookmark = () => {
  const { books } = useAddToBookmark();

  return (
    <section className="md:py-[60px] py-14 ">
      <div className="max-w-[1280px] my-0 mx-auto py-0 sm:px-[32px] px-[24px]  ">
        <BookmarkHeader />
        <hr className="mb-6 border border-b-2 border-gray-800" />
        <BooklistHeader />
        {books.length === 0 && <EmptyBookmark />}
        {books.length > 0 && <AddToList />}
      </div>
    </section>
  );
};

export default Bookmark;
