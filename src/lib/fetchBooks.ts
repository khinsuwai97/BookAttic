import axios from 'axios';
import { BookResponse } from '../types';

export const fetchBooks = async (page: number): Promise<BookResponse> => {
  const res = await axios.get(
    `https://booklibraryapi.onrender.com/Book/paginate/${page}`
  );

  const data = res.data;
  return data;
};

export const fetchAllBooks = async (): Promise<BookResponse> => {
  const res = await axios.get(`https://booklibraryapi.onrender.com/Book`);

  const data = res.data;
  return data;
};
