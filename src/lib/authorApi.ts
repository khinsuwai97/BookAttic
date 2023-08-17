import axios from 'axios';
import { AuthorResponse } from '../types';
const headers = {
  Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN} `,
};

interface Author {
  name: string;
}

export const createAuthor = async (author: Author) => {
  const res = await axios.post(
    `https://booklibraryapi.onrender.com/Author`,
    author,
    { headers }
  );
  console.log(res.data);
  return res.data;
};
export const deleteAuthor = async (id: string): Promise<AuthorResponse> => {
  const res = await axios.delete(
    `https://booklibraryapi.onrender.com/Author/${id}`,

    { headers }
  );
  console.log(res.data);
  return res.data;
};
