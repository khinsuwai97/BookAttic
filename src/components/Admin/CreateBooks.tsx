import { FormEvent, ChangeEvent } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { createBooks } from '../../lib/bookApi';
import { errorToast, successToast } from '../../lib/showToast';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import clearLocalStorage from '../../lib/clearLocalStorage';
import Error from '../Error';
import Form from './Form';

const initialState = {
  name: '',
  pdf_url: '',
  category: '',
  author: '',
  tag: '',
  image: '',
};

const CreateBooks = () => {
  const [bookData, setBookData] = useLocalStorage('bookData', initialState);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const addBookMutaion = useMutation({
    mutationFn: createBooks,
    onSuccess: () => {
      queryClient.invalidateQueries(['books'], { exact: true });
    },
  });

  if (addBookMutaion.error) {
    return <Error text="Cannot create book.Something went wrong!" />;
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setBookData({ ...bookData, [name]: files ? files?.[0] : value });
  };

  const onCreatBook = (e: FormEvent) => {
    e.preventDefault();

    if (
      bookData.name === '' ||
      bookData.name.trim() === '' ||
      bookData.pdf_url === '' ||
      bookData.pdf_url.trim() === '' ||
      bookData.category === '' ||
      bookData.category.trim() === '' ||
      bookData.author === '' ||
      bookData.author.trim() === '' ||
      bookData.tag === '' ||
      bookData.tag.trim() === '' ||
      bookData.image === ''
    ) {
      errorToast('Please fill out', 'all fields of form!');
      return;
    }

   

    const formData = new FormData();
    formData.append('name', bookData.name);
    formData.append('pdf_url', bookData.pdf_url);
    formData.append('category', bookData.category);
    formData.append('author', bookData.author);
    formData.append('tag', bookData.tag);
    formData.append('image', bookData.image);
    addBookMutaion.mutate(formData);

    clearLocalStorage('bookData');

    setBookData({
      name: '',
      pdf_url: '',
      category: '',
      author: '',
      tag: '',
      image: '',
    });
    successToast(bookData.name, 'is added to your book list!');
    navigate('/admin');
  };

  return (
    <section className="md:py-[90px] py-14">
      <div className="max-w-[1280px] my-0 mx-auto py-0 sm:px-[32px] px-[24px] ">
        <Form
          type="Create"
          onSubmit={onCreatBook}
          name={bookData.name}
          author={bookData.author}
          category={bookData.category}
          tag={bookData.tag}
          pdf_url={bookData.pdf_url}
          handleChange={handleChange}
        />
      </div>
    </section>
  );
};

export default CreateBooks;
