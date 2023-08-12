import { create } from 'zustand';

export interface BookItem {
  name: string;
  author: string;
  category: string;
  image: string;
  read: string;
  id: string;
  tag: string;
}

interface BookmarkState {
  books: BookItem[];
  addToBookmark: (book: BookItem) => void;
  removeFromBookmark: (id: string) => void;
  clearBookmark: () => void;
}
const storedBooks = localStorage.getItem('books');
const initialItems: BookItem[] = storedBooks ? JSON.parse(storedBooks) : [];

export const useAddToBookmark = create<BookmarkState>((set) => ({
  books: initialItems,
  addToBookmark: (book) =>
    set((state) => {
      const updatedItems = [...state.books, book];
      localStorage.setItem('books', JSON.stringify(updatedItems)); // Save items to localStorage
      return { books: updatedItems };
    }),
  removeFromBookmark: (id) =>
    set((state) => {
      const updatedItems = state.books.filter((item) => item.id !== id);
      localStorage.setItem('books', JSON.stringify(updatedItems)); // Save items to localStorage
      return { ...state, books: updatedItems };
    }),
  clearBookmark: () => {
    localStorage.removeItem('books'); // Remove items from localStorage
    set({ books: [] });
  },
}));
