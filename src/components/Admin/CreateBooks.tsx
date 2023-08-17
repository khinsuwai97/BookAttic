import { FormEvent, ChangeEvent } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { createBooks } from '../../lib/bookApi';
import { errorToast, successToast } from '../../lib/showToast';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import clearLocalStorage from '../../lib/clearLocalStorage';
import Error from '../Error';
import Form from './Form';

const CreateBooks = () => {
  const [name, setName] = useLocalStorage('name', '');
  const [pdf_url, setPdf_url] = useLocalStorage('pdf_url', '');
  const [category, setCategory] = useLocalStorage('category', '');
  const [author, setAuthor] = useLocalStorage('author', '');
  const [tag, setTag] = useLocalStorage('tag', '');
  const [image, setImage] = useLocalStorage<string | Blob>('image', '');
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

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) {
      errorToast('Please select', 'image file!');
    }
    if (selectedFile) {
      setImage(selectedFile);
    }
  };

  const onCreatBook = (e: FormEvent) => {
    e.preventDefault();

    if (
      name === '' ||
      name.trim() === '' ||
      pdf_url === '' ||
      pdf_url.trim() === '' ||
      category === '' ||
      category.trim() === '' ||
      author === '' ||
      author.trim() === '' ||
      tag === '' ||
      tag.trim() === '' ||
      image === ''
    ) {
      errorToast('Please fill out', 'all fields of form!');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('pdf_url', pdf_url);
    formData.append('category', category);
    formData.append('author', author);
    formData.append('tag', tag);
    formData.append('image', image);
    addBookMutaion.mutate(formData);

    clearLocalStorage('name');
    clearLocalStorage('pdf_url');
    clearLocalStorage('category');
    clearLocalStorage('author');
    clearLocalStorage('tag');
    clearLocalStorage('image');

    setName('');
    setPdf_url('');
    setCategory('');
    setAuthor('');
    setTag('');
    setImage('');
    successToast(name, 'is added to your book list!');
    navigate('/admin');
  };

  return (
    <section className="md:py-[90px] py-14">
      <div className="max-w-[1280px] my-0 mx-auto py-0 sm:px-[32px] px-[24px] ">
        <Form
          type="Create"
          onSubmit={onCreatBook}
          handleImageChange={handleImageChange}
          name={name}
          author={author}
          category={category}
          tag={tag}
          pdf_url={pdf_url}
          setName={setName}
          setAuthor={setAuthor}
          setCategory={setCategory}
          setTag={setTag}
          setPdf_url={setPdf_url}
        />
      </div>
    </section>
  );
};

export default CreateBooks;
