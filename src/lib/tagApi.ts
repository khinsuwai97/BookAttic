import axios from 'axios';
import { TagResponse } from '../types';
const headers = {
  Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN} `,
};

interface Tag {
  name: string;
}

export const createTag = async (tag: Tag) => {
  const res = await axios.post(`https://booklibraryapi.onrender.com/Tag`, tag, {
    headers,
  });
  console.log(res.data);
  return res.data;
};
export const deleteTag = async (id: string): Promise<TagResponse> => {
  const res = await axios.delete(
    `https://booklibraryapi.onrender.com/Tag/${id}`,

    { headers }
  );
  console.log(res.data);
  return res.data;
};
