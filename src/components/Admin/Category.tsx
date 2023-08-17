import { FormEvent, useState } from 'react';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { useFetchCategory } from '../../hooks/useFetchCategory';
import { createCategory, deleteCategory } from '../../lib/catergoryApi';
import { errorToast, successToast } from '../../lib/showToast';
import Features from './Features';

const Category = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['category'],
    queryFn: useFetchCategory,
  });
  const [copy, setCopy] = useState('');
  const [category, setCategory] = useState('');
  const queryClient = useQueryClient();

  const addCategoryMutation = useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
      queryClient.invalidateQueries(['category'], { exact: true });
    },
  });
  const deleteCategoryMutation = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      queryClient.invalidateQueries(['category']);
    },
  });

  const handleDelete = (id: string) => {
    const hasConfirmed = confirm(
      'Are you sure you want to delete this category?'
    );
    if (hasConfirmed) {
      deleteCategoryMutation.mutate(id);
    }
  };

  const catData = data?.Result?.map((cat) => {
    return {
      id: cat?._id,
      name: cat?.name,
      delete: 'Delete',
    };
  });

  const handleCopy = (id: string) => {
    setCopy(id);
    navigator.clipboard.writeText(id);
  };

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (category.trim() === '' || category === '') {
      errorToast('Please', 'fill out category!');
      return;
    }

    addCategoryMutation.mutate({ name: category });
    successToast('Created', 'category!');
    setCategory('');
  };

  return (
    <section className="md:py-[90px] py-14">
      <div className="max-w-[1280px] my-0 mx-auto py-0 sm:px-[32px] px-[24px]">
        <Features
          isError={isError}
          isLoading={isLoading}
          allData={data?.Result}
          data={catData!}
          handleCopy={handleCopy}
          copy={copy}
          value={category}
          setValue={setCategory}
          onSubmit={onFormSubmit}
          onClick={handleDelete}
          type="Add Category"
          headerType="Category"
        />
      </div>
    </section>
  );
};

export default Category;
