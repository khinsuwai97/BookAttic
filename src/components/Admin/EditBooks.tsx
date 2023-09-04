import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchBooksAdminbyId, editBooksAdmin } from '../../lib/bookApi';
import { errorToast, successToast } from '../../lib/showToast';
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

const EditBooks = () => {
  const navigate = useNavigate();
  const param = useParams();
  const { id } = param;

  const { isLoading, isError, data } = useQuery({
    queryKey: ['books', id],
    queryFn: () => fetchBooksAdminbyId(id ?? ''),
  });

  const [editBookData, setEditBookData] = useState(initialState);

  useEffect(() => {
    if (data?.Result) {
      setEditBookData({
        name: data?.Result?.name,
        pdf_url: data?.Result?.pdf_url,
        category: data?.Result?.category,
        author: data?.Result?.author,
        tag: data?.Result?.tag,
        image: '', // data does not persist, need to add image again
      });
    }
  }, [data?.Result]);

  if (isError) {
    return <Error text="Something went wrong!" />;
  }

  if (isLoading) {
    return (
      <div className="h-screen">
        <h5 className="font-rubik text-cyan-700 text-center sm:text-[20px] text-[16px]">
          Loading...
        </h5>
      </div>
    );
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setEditBookData({
      ...editBookData,
      [name]: files ? files?.[0] : value,
    });
  };

  const onEditFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (
      editBookData.name === '' ||
      editBookData.pdf_url === '' ||
      editBookData.category === '' ||
      editBookData.author === '' ||
      editBookData.tag === '' ||
      editBookData.image === ''
    ) {
      errorToast('Please fill out', 'all fields of form!');
      return;
    }

    const formData = new FormData();
    formData.append('name', editBookData.name!);
    formData.append('pdf_url', editBookData.pdf_url!);
    formData.append('category', editBookData.category!);
    formData.append('author', editBookData.author!);
    formData.append('tag', editBookData.tag!);
    formData.append('image', editBookData.image);

    try {
      editBooksAdmin(id!, formData);
    } catch (error) {
      console.log(error);
    }

    setEditBookData({
      name: '',
      pdf_url: '',
      category: '',
      author: '',
      tag: '',
      image: '',
    });

    successToast(editBookData.name, 'is edited and added to your book list!');
    navigate('/admin');
  };

  return (
    <section className="md:py-[90px] py-14">
      <div className="max-w-[1280px]  my-0 mx-auto py-0 sm:px-[32px] px-[24px] ">
        <Form
          type="Edit"
          onSubmit={onEditFormSubmit}
          name={editBookData.name}
          author={editBookData.author}
          category={editBookData.category}
          tag={editBookData.tag}
          pdf_url={editBookData.pdf_url}
          handleChange={handleChange}
        />
      </div>
    </section>
  );
};
export default EditBooks;
