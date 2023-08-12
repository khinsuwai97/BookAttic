import axios from 'axios';
import { BookResponse } from '../types';

export const useFetchBooks = async (): Promise<BookResponse> => {
  const res = await axios.get('https://booklibraryapi.onrender.com/Book');
  const data = res.data;
  return data;
};
