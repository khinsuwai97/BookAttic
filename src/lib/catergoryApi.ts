import axios from 'axios';
import { CategoryResponse } from '../types';
const headers = {
  Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN} `,
};

interface Category {
  name: string;
}

export const createCategory = async (category: Category) => {
  const res = await axios.post(
    `https://booklibraryapi.onrender.com/Category`,
    category,
    { headers }
  );
  console.log(res.data);
  return res.data;
};
export const deleteCategory = async (id: string): Promise<CategoryResponse> => {
  const res = await axios.delete(
    `https://booklibraryapi.onrender.com/Category/${id}`,

    { headers }
  );
  console.log(res.data);
  return res.data;
};
