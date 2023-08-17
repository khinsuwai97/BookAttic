import { FormEvent, useState } from 'react';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { useFetchTag } from '../../hooks/useFetchTag';
import { createTag, deleteTag } from '../../lib/tagApi';
import { errorToast, successToast } from '../../lib/showToast';
import Features from './Features';

const Tag = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['tag'],
    queryFn: useFetchTag,
  });
  const [copy, setCopy] = useState('');
  const [tag, setTag] = useState('');
  const queryClient = useQueryClient();
  const addTagMutation = useMutation({
    mutationFn: createTag,
    onSuccess: () => {
      queryClient.invalidateQueries(['tag'], { exact: true });
    },
  });
  const deleteTagMutation = useMutation({
    mutationFn: deleteTag,
    onSuccess: () => {
      queryClient.invalidateQueries(['tag']);
    },
  });

  const handleDelete = (id: string) => {
    const hasConfirmed = confirm('Are you sure you want to delete this tag?');
    if (hasConfirmed) {
      deleteTagMutation.mutate(id);
    }
  };

  const tagData = data?.Result?.map((tag) => {
    return {
      id: tag?._id,
      name: tag?.name,
      delete: 'Delete',
    };
  });

  const handleCopy = (id: string) => {
    setCopy(id);
    navigator.clipboard.writeText(id);
  };

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (tag.trim() === '' || tag === '') {
      errorToast('Please', 'fill out tag!');
      return;
    }

    addTagMutation.mutate({ name: tag });
    successToast('Created', 'tag!');
    setTag('');
  };

  return (
    <section className="md:py-[90px] py-14">
      <div className="max-w-[1280px] my-0 mx-auto py-0 sm:px-[32px] px-[24px]">
        <Features
          isError={isError}
          isLoading={isLoading}
          allData={data?.Result}
          data={tagData!}
          handleCopy={handleCopy}
          copy={copy}
          value={tag}
          setValue={setTag}
          onSubmit={onFormSubmit}
          onClick={handleDelete}
          type="Add Tag"
          headerType="Tag"
        />
      </div>
    </section>
  );
};

export default Tag;
