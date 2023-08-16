import { ButtonList } from '../ui/Button';
import AddToLisItems from './AddToLisItems';
import { useAddToBookmark } from '../../hooks/useAddToBookmark';

const AddToList = () => {
  const { books, clearBookmark } = useAddToBookmark();

  return (
    <div>
      {books.map((book) => {
        return (
          <AddToLisItems
            key={book.id}
            id={book.id}
            name={book.name}
            author={book.author}
            category={book.category}
            read={book.read}
            tag={book.tag}
            image={book.image}
          />
        );
      })}
      <div className="flex justify-end mb-[90px]">
        <ButtonList onClick={clearBookmark} text="Clear List" />
      </div>
    </div>
  );
};

export default AddToList;
