import axios from 'axios';
import { AuthorResponse } from '../types';

export const useFetchAuthor = async (): Promise<AuthorResponse> => {
  const res = await axios.get(`https://booklibraryapi.onrender.com/Author`);
  const data = res.data;
  return data;
};
