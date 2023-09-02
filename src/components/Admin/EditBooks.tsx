import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchBooksAdminbyId, editBooksAdmin } from '../../lib/bookApi';
import { errorToast, successToast } from '../../lib/showToast';
import Error from '../Error';
import Form from './Form';

const EditBooks = () => {
  const navigate = useNavigate();
  const param = useParams();
  const { id } = param;

  const { isLoading, isError, data } = useQuery({
    queryKey: ['books', id],
    queryFn: () => fetchBooksAdminbyId(id ?? ''),
  });

  const [editName, setEditName] = useState('');
  const [editPdf_url, setEditPdf_url] = useState('');
  const [editCategory, setEditCategory] = useState('');
  const [editAuthor, setEditAuthor] = useState('');
  const [editTag, setEditTag] = useState('');
  const [editImage, setEditImage] = useState<string | Blob>('');

  useEffect(() => {
    setEditName(data?.Result?.name ?? '');
    setEditPdf_url(data?.Result?.pdf_url ?? '');
    setEditCategory(data?.Result?.category ?? '');
    setEditAuthor(data?.Result?.author ?? '');
    setEditTag(data?.Result?.tag ?? '');
    setEditImage('');
  }, [
    data?.Result?.name,
    data?.Result?.pdf_url,
    data?.Result?.category,
    data?.Result?.author,
    data?.Result?.tag,
    data?.Result?.image,
  ]);

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

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) {
      errorToast('Please select', 'image file!');
    }
    if (selectedFile) {
      setEditImage(selectedFile);
    }
  };

  const onEditFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (
      editName === '' ||
      editName.trim() === '' ||
      editPdf_url === '' ||
      editPdf_url.trim() === '' ||
      editCategory === '' ||
      editCategory.trim() === '' ||
      editAuthor === '' ||
      editAuthor.trim() === '' ||
      editTag === '' ||
      editTag.trim() === '' ||
      editImage === ''
    ) {
      errorToast('Please fill out', 'all fields of form!');
      return;
    }

    const formData = new FormData();
    formData.append('name', editName);
    formData.append('pdf_url', editPdf_url);
    formData.append('category', editCategory);
    formData.append('author', editAuthor);
    formData.append('tag', editTag);
    formData.append('image', editImage);

    try {
      editBooksAdmin(id!, formData);
    } catch (error) {
      console.log(error);
    }

    setEditName('');
    setEditPdf_url('');
    setEditCategory('');
    setEditAuthor('');
    setEditTag('');
    setEditImage('');
    successToast(editName, 'is edited and added to your book list!');
    navigate('/admin');
  };

  return (
    <section className="md:py-[90px] py-14">
      <div className="max-w-[1280px] my-0 mx-auto py-0 sm:px-[32px] px-[24px] ">
        <Form
          type="Edit"
          onSubmit={onEditFormSubmit}
          handleImageChange={handleImageChange}
          name={editName}
          author={editAuthor}
          category={editCategory}
          tag={editTag}
          pdf_url={editPdf_url}
          setName={setEditName}
          setAuthor={setEditAuthor}
          setCategory={setEditCategory}
          setTag={setEditTag}
          setPdf_url={setEditPdf_url}
        />
      </div>
    </section>
  );
};
export default EditBooks;
