import axios from 'axios';
import { CategoryResponse } from '../types';

export const useFetchCategory = async (): Promise<CategoryResponse> => {
  const res = await axios.get(`https://booklibraryapi.onrender.com/Category`);
  const data = res.data;
  return data;
};
