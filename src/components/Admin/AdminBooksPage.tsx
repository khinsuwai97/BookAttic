import { useEffect, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import DebouncedInput from './DebounceInput';
import { Link } from 'react-router-dom';
import { fetchBooksAdmin, deleteBooksAdmin } from '../../lib/bookApi';
import { ButtonList } from '../ui/Button';

const AdminBooksPage = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ['books', page],
    queryFn: () => fetchBooksAdmin(page),
    keepPreviousData: true,
  });

  const deleteBookMutaion = useMutation({
    mutationFn: deleteBooksAdmin,
    onSuccess: () => {
      queryClient.invalidateQueries(['books']);
    },
  });

  if (error) {
    <p className="h-screen text-center text-red-500">
      {JSON.stringify(error)}
    </p>;
  }

  const books = data?.Result.map((book) => {
    return {
      id: book?._id,
      author: book?.author?.name,
      category: book?.category.name,
      pdf_url: book?.pdf_url,
      image: book?.image,
      tag: book?.tag?.name,
      name: book?.name,
      edit: 'Edit',
      delete: 'Delete',
      no: 'No',
    };
  });

  const bookHeader = [
    { id: 'no', name: 'No' },
    { id: 'name', name: 'Name' },
    { id: 'author', name: 'Author' },
    { id: 'category', name: 'Category' },
    { id: 'Tag', name: 'Tag' },
    { id: 'image', name: 'Image' },
    { id: 'edit', name: 'Edit' },
    { id: 'delete', name: 'Delete' },
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [page, data?.Result]);

  const filterBooks =
    filter === ''
      ? books
      : books?.filter((book) =>
          book.name.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <section className="md:py-[90px] py-14">
      <div className="max-w-[1280px] my-0 mx-auto py-0 sm:px-[32px] px-[24px]">
        <div className="p-2 max-w-5xl mx-auto text-white fill-gray-400">
          <div className="flex justify-between mb-2">
            <div className="w-full flex justify-center items-center gap-1 mb-4">
              <DebouncedInput
                value={filter ?? ''}
                onChange={(value: string) => setFilter(String(value))}
                debounce={300}
              />
            </div>
          </div>
          {/* className="capitalize px-3.5 py-2" */}
          <table className="border font-rubik border-gray-700 w-full ">
            <thead className="bg-cyan-700 grid grid-cols-8 items-center justify-center gap-4 table-header ">
              {bookHeader.map((book) => (
                <tr key={book.id} className=" px-3.5 py-2">
                  <th>{book.name}</th>
                </tr>
              ))}
            </thead>
            <tbody>
              {filterBooks?.length ? (
                filterBooks?.map((row, i) => (
                  <tr
                    key={row.id}
                    className={`${i % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'}
                    
                    
                  grid grid-cols-8 items-center justify-center gap-4  px-3.5 py-2
                `}
                  >
                    <td className="table-row">{i + 1}</td>
                    <td className="table-row">
                      <a href={row.pdf_url} target="_blank">
                        {row.name}
                      </a>
                    </td>
                    <td className="table-row">{row.author}</td>
                    <td className="table-row">{row.category}</td>
                    <td className="table-row">{row.tag}</td>
                    <td className="w-[80px] flex justify-center items-center">
                      <img src={row.image} />
                    </td>
                    <td className="font-rubik text-[16px] text-cyan-700 block  ml-4">
                      <Link to={`/admin/${row.id}/edit`}> {row.edit}</Link>
                    </td>

                    <td
                      className="font-rubik text-[16px] cursor-pointer text-red-500 ml-4"
                      onClick={() => deleteBookMutaion.mutate(row.id)}
                    >
                      {row.delete}
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="text-center h-32">
                  {isLoading ? (
                    <td colSpan={12}>Loading...</td>
                  ) : (
                    <td colSpan={12}>No Record Found!</td>
                  )}
                </tr>
              )}
            </tbody>
          </table>
          {/* pagination */}
          <div className="flex items-center justify-end mt-4 gap-2 ">
            <button
              onClick={() => setPage((prevPage) => prevPage - 1)}
              disabled={page === 1}
              className="p-1 border border-gray-300 px-2 disabled:opacity-30 rounded-md"
            >
              {'<'}
            </button>
            <button
              onClick={() => setPage((prevPage) => prevPage + 1)}
              disabled={page === 2}
              className="p-1 border border-gray-300 px-2 disabled:opacity-30 rounded-md"
            >
              {'>'}
            </button>
            <ButtonList
              text="Add Books"
              onClick={() => navigate('/admin/create')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminBooksPage;
