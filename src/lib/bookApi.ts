import axios from 'axios';
import { BookResponse, EditBookResponse } from '../types';
export interface Book {
  id?: string;
  name: string;
  pdf_url: string;
  category: string;
  author: string;
  tag: string;
  image: string | Blob;
}

const headers = {
  Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN} `,
};

export const createBooks = async (book: FormData) => {
  const res = await axios.post(
    `https://booklibraryapi.onrender.com/Book`,
    book,
    { headers }
  );
  console.log(res.data);
  return res.data;
};
export const fetchBooksAdminbyId = async (
  id: string
): Promise<EditBookResponse> => {
  const res = await axios.get(`https://booklibraryapi.onrender.com/Book/${id}`);
  console.log(res.data);
  return res.data;
};

export const fetchBooksAdmin = async (page: number): Promise<BookResponse> => {
  const res = await axios.get(
    `https://booklibraryapi.onrender.com/Book/paginate/${page}`
  );
  console.log(res.data);
  return res.data;
};

export const editBooksAdmin = async (
  id: string,
  book: FormData
): Promise<EditBookResponse> => {
  console.log(book);
  const res = await axios.patch(
    `https://booklibraryapi.onrender.com/Book/${id}`,
    book,
    { headers }
  );
  console.log(res.data);
  return res.data;
};

export const deleteBooksAdmin = async (
  id: string
): Promise<EditBookResponse> => {
  const res = await axios.delete(
    `https://booklibraryapi.onrender.com/Book/${id}`,
    { headers }
  );
  console.log(res.data);
  return res.data;
};
