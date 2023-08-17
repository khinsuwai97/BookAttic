import { FormEvent, useState } from 'react';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { useFetchAuthor } from '../../hooks/useFetchAuthor';
import { createAuthor, deleteAuthor } from '../../lib/authorApi';
import { errorToast, successToast } from '../../lib/showToast';
import Features from './Features';

const Author = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['author'],
    queryFn: useFetchAuthor,
  });
  const [copy, setCopy] = useState('');
  const [author, setAuthor] = useState('');
  const queryClient = useQueryClient();
  const addAuthorMutation = useMutation({
    mutationFn: createAuthor,
    onSuccess: () => {
      queryClient.invalidateQueries(['author'], { exact: true });
    },
  });
  const deleteAuthorMutation = useMutation({
    mutationFn: deleteAuthor,
    onSuccess: () => {
      queryClient.invalidateQueries(['author']);
    },
  });

  const handleDelete = (id: string) => {
    const hasConfirmed = confirm(
      'Are you sure you want to delete this author?'
    );
    if (hasConfirmed) {
      deleteAuthorMutation.mutate(id);
    }
  };

  const authorData = data?.Result?.map((author) => {
    return {
      id: author?._id,
      name: author?.name,
      delete: 'Delete',
    };
  });

  const handleCopy = (id: string) => {
    setCopy(id);
    navigator.clipboard.writeText(id);
  };

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (author.trim() === '' || author === '') {
      errorToast('Please', 'fill out author!');
      return;
    }

    addAuthorMutation.mutate({ name: author });
    successToast('Created', 'author!');
    setAuthor('');
  };

  return (
    <section className="md:py-[90px] py-14">
      <div className="max-w-[1280px] my-0 mx-auto py-0 sm:px-[32px] px-[24px]">
        <Features
          isError={isError}
          isLoading={isLoading}
          allData={data?.Result}
          data={authorData!}
          handleCopy={handleCopy}
          copy={copy}
          value={author}
          setValue={setAuthor}
          onSubmit={onFormSubmit}
          onClick={handleDelete}
          type="Add Author"
          headerType="Author"
        />
      </div>
    </section>
  );
};

export default Author;
