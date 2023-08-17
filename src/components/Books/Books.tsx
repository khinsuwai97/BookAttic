import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import SearchBar from './SearchBar';
import FilterFeature from './FilterFeature';
import FilterItems from './FilterItems';
import BookItems from './BookItems';
import Loading from '../Loading';
import Error from '../Error';
import { fetchBooks } from '../../lib/fetchBooks';
import { filterOptions } from '../../data';
import CustomPagination from './CustomPagination';
import { useFetchAuthor } from '../../hooks/useFetchAuthor';
import { useFetchCategory } from '../../hooks/useFetchCategory';
import { useFetchTag } from '../../hooks/useFetchTag';

const Books = () => {
  const [toggle, setToggle] = useState(false);
  const [option, setOption] = useState('');
  const [selected, setSelected] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const { isError, isLoading, data } = useQuery({
    queryKey: ['books', page],
    queryFn: () => fetchBooks(page),
  });

  const {
    isLoading: authorIsLoading,
    isError: authorError,
    data: authorData,
  } = useQuery({
    queryKey: ['author'],
    queryFn: useFetchAuthor,
  });
  const {
    isLoading: categoryIsLoading,
    isError: categoryError,
    data: categoryData,
  } = useQuery({
    queryKey: ['category'],
    queryFn: useFetchCategory,
  });
  const {
    isLoading: tagIsLoading,
    isError: tagError,
    data: tagData,
  } = useQuery({
    queryKey: ['tag'],
    queryFn: useFetchTag,
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [page, data]);

  let content;
  if (isError) {
    content = <Error text="Something went wrong!" />;
  }
  if (authorError) {
    content = <Error text="Something went wrong!" />;
  }
  if (categoryError) {
    content = <Error text="Something went wrong!" />;
  }
  if (tagError) {
    content = <Error text="Something went wrong!" />;
  }

  if (isLoading) {
    content = <Loading />;
  }

  const filterData = (type: string) => {
    switch (type) {
      case 'Authors':
        return data?.Result?.filter((book) =>
          book?.author?.name.toLowerCase().includes(selected.toLowerCase())
        );
      case 'Categories':
        return data?.Result?.filter((book) =>
          book?.category?.name.toLowerCase().includes(selected.toLowerCase())
        );
      case 'Features':
        return data?.Result?.filter((book) =>
          book?.tag?.name.toLowerCase().includes(selected.toLowerCase())
        );
      default:
        return data?.Result;
    }
  };

  if (data) {
    const bookData =
      searchTerm === ''
        ? filterData(option)
        : data.Result.filter((book) =>
            book.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
    if (bookData?.length === 0) {
      content = <Error text="Sorry no books matched your search" />;
    } else {
      content = (
        <div className="grid md:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-6 ">
          {bookData?.map((book) => (
            <BookItems
              key={book?._id}
              name={book?.name}
              author={book?.author?.name}
              category={book?.category?.name}
              image={book?.image}
              read={book?.pdf_url}
              id={book?._id}
              tag={book?.tag?.name}
            />
          ))}
        </div>
      );
    }
  }

  const handleToggle = (choice: string) => {
    filterOptions.map((option) => {
      if (option.title === choice) {
        setToggle((prevToggle) => !prevToggle);
      }
    });
  };

  const handleToggleBtn = (choice: string): void => {
    handleToggle(choice);
    setOption(choice);
    setSelected((prevSelect) => {
      if (choice === option && prevSelect) {
        return selected;
      } else {
        return '';
      }
    });
  };

  const selectedOption = (option: string) => {
    setToggle(false);
    setSelected(option);
  };

  const selectAll = () => {
    setSelected('');
    setSearchTerm('');
    setToggle(false);
  };

  return (
    <section className="md:py-[90px] py-14">
      <div className="max-w-[1280px]  my-0 mx-auto py-0 sm:px-[32px] px-[24px]">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="my-8 border-t border-zinc-700 "></div>
        <FilterFeature
          handleToggleBtn={handleToggleBtn}
          selectAll={selectAll}
        />
        <FilterItems
          toggle={toggle}
          option={option}
          selectedOption={selectedOption}
          selected={selected}
          authors={authorData?.Result}
          categories={categoryData?.Result}
          features={tagData?.Result}
          authorIsLoading={authorIsLoading}
          categoryIsLoading={categoryIsLoading}
          tagIsLoading={tagIsLoading}
          authorError={authorError}
          tagError={tagError}
          categoryError={categoryError}
        />

        {content}
        <CustomPagination totalPages={2} page={page} setPage={setPage} />
      </div>
    </section>
  );
};

export default Books;
