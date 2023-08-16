import { ChangeEvent, useState, FormEvent } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchBooksAdminbyId, editBooksAdmin } from '../../lib/bookApi';
import Error from '../Error';
import Form from './Form';
import { errorToast, successToast } from '../../lib/showToast';

const EditBooks = () => {
  const navigate = useNavigate();
  const param = useParams();
  const { id } = param;

  const { isLoading, isError, data } = useQuery({
    queryKey: ['books', id],
    queryFn: () => fetchBooksAdminbyId(id ?? ''),
  });

  const iniitalName = data ? data.Result?.name : '';
  const iniitalPdf_url = data ? data.Result?.pdf_url : '';
  const iniitalCategory = data ? data.Result?.category : '';
  const iniitalAuthour = data ? data.Result?.author : '';
  const iniitalTag = data ? data.Result?.tag : '';

  const [editName, setEditName] = useState<string>(iniitalName);
  const [editPdf_url, setEditPdf_url] = useState<string>(iniitalPdf_url);
  const [editCategory, setEditCategory] = useState<string>(iniitalCategory);
  const [editAuthor, setEditAuthor] = useState<string>(iniitalAuthour);
  const [editTag, setEditTag] = useState<string>(iniitalTag);
  const [editImage, setEditImage] = useState<string | Blob>('');

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
    successToast(editName, 'is added to your book list!');
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
