import axios from 'axios';
import { TagResponse } from '../types';

export const useFetchTag = async (): Promise<TagResponse> => {
  const res = await axios.get(`https://booklibraryapi.onrender.com/Tag`);
  const data = res.data;
  return data;
};
