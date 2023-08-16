import { useState, FormEvent, ChangeEvent } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { createBooks } from '../../lib/bookApi';
import Error from '../Error';
import { errorToast, successToast } from '../../lib/showToast';
import Form from './Form';

const CreateBooks = () => {
  const [name, setName] = useState('');
  const [pdf_url, setPdf_url] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const [tag, setTag] = useState('');
  const [image, setImage] = useState<string | Blob>('');
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const addBookMutaion = useMutation({
    mutationFn: createBooks,
    onSuccess: () => {
      queryClient.invalidateQueries(['books'], { exact: true });
    },
  });

  if (addBookMutaion.error) {
    console.log(addBookMutaion.error);
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
//
