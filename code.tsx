import { useEffect, useState } from 'react';
import { BookResponse, Book } from './types';

const App = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedFile, setSelectedFile] = useState<string | Blob>('');
  // const [editFile, setEditFile] = useState<string | Blob>(selectedFile);
  const [name, setName] = useState('');
  const [pdf_url, setPdf_url] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const [tag, setTag] = useState('');

  const fetchBooks = async (): Promise<void> => {
    const res = await fetch('https://booklibraryapi.onrender.com/Book');
    const data: BookResponse = await res.json();
    // console.log(data.Result);
    setBooks(data.Result);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePdfUrlChange = (e) => {
    setPdf_url(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleTagChange = (e) => {
    setTag(e.target.value);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const handleEditFileChange = (e) => {
    setEditFile(e.target.files[0]);
  };

  const postBooks = async () => {
    const formData = new FormData();
    formData.append('name', 'khin su');
    formData.append(
      'pdf_url',
      'https://www.pdfbooksworld.com/bibi/pre.html?book=380.epub'
    );
    formData.append('category', '64c3390fb1f32b3934d71ff0');
    formData.append('author', '64c3390fb1f32b3934d71ff0');
    formData.append('tag', '64c3390fb1f32b3934d71ff0');
    formData.append('image', selectedFile);

    const res = await fetch('https://booklibraryapi.onrender.com/Book', {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2NGM3NTUwNzA4Mjk1MmNlNWRiNmUzMmIiLCJuYW1lIjoiWmF3IEx3aW4gUGh5byIsIkVtYWlsIjoiemF3bHdpbnAyMjNAZ21haWwuY29tIiwicGhfbm8iOjkyMjIyMiwicm9sZSI6IkFkbWluIn0.Wy4sRa7uaatdM7RXuetu3axzs6nuBaOIV2kZcLDriEs`,
      },
    });
    const data = await res.json();
    console.log(data);
  };

  const editBooks = async () => {
    if (!selectedFile) {
      // If 'selectedFile' is not set, do nothing or display an error message
      console.error('Please select a file to edit.');
      return;
    }
    const formData = new FormData();
    formData.append('name', 'Nick');
    formData.append(
      'pdf_url',
      'https://www.pdfbooksworld.com/bibi/pre.html?book=54.epub'
    );
    formData.append('category', '64c3390fb1f32b3934d71ff1');
    formData.append('author', '64c3390fb1f32b3934d71ff1');
    formData.append('tag', '64c3390fb1f32b3934d71ff1');

    formData.append('image', selectedFile);

    // Append a unique timestamp as a query parameter to avoid caching
    const timestamp = Date.now();
    const imageUrlWithTimestamp = `https://booklibraryapi.onrender.com/Book/64cf99abbf345ee30df4414f?timestamp=${timestamp}`;
    const res = await fetch(imageUrlWithTimestamp, {
      method: 'PATCH',
      body: formData,
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2NGM3NTUwNzA4Mjk1MmNlNWRiNmUzMmIiLCJuYW1lIjoiWmF3IEx3aW4gUGh5byIsIkVtYWlsIjoiemF3bHdpbnAyMjNAZ21haWwuY29tIiwicGhfbm8iOjkyMjIyMiwicm9sZSI6IkFkbWluIn0.Wy4sRa7uaatdM7RXuetu3axzs6nuBaOIV2kZcLDriEs`,
      },
    });

    const data = await res.json();
    console.log(data);
  };

  // console.log(editFile);
  console.log(selectedFile);

  const deleteBook = async (id: string) => {
    const res = await fetch(`https://booklibraryapi.onrender.com/Book/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2NGM3NTUwNzA4Mjk1MmNlNWRiNmUzMmIiLCJuYW1lIjoiWmF3IEx3aW4gUGh5byIsIkVtYWlsIjoiemF3bHdpbnAyMjNAZ21haWwuY29tIiwicGhfbm8iOjkyMjIyMiwicm9sZSI6IkFkbWluIn0.Wy4sRa7uaatdM7RXuetu3axzs6nuBaOIV2kZcLDriEs`,
      },
    });

    const deleteData = await res.json();
    console.log(deleteData);
  };

  return (
    <div>
      {books.map((book) => (
        <div key={book._id} onClick={() => deleteBook(book._id)}>
          {book.name}
        </div>
      ))}
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label>PDF URL:</label>
        <input type="text" value={pdf_url} onChange={handlePdfUrlChange} />
      </div>
      <div>
        <label>Category:</label>
        <input type="text" value={category} onChange={handleCategoryChange} />
      </div>
      <div>
        <label>Author:</label>
        <input type="text" value={author} onChange={handleAuthorChange} />
      </div>
      <div>
        <label>Tag:</label>
        <input type="text" value={tag} onChange={handleTagChange} />
      </div>
      <div>
        <label htmlFor="">upload</label>
        <input type="file" name="image" onChange={handleFileChange} />
        {/* <label htmlFor="">edit</label>
        <input type="file" name="image" onChange={handleEditFileChange} /> */}
        <button onClick={postBooks}>Upload</button>
        <button onClick={editBooks}>Edit</button>
      </div>
    </div>
  );
};
export default App;
// JSON.stringify({
//   name: 'khin su',
//   pdf_url: 'https://www.pdfbooksworld.com/bibi/pre.html?book=380.epub',
//   category: '64c3390fb1f32b3934d71ff0',
//   author: '64c3390fb1f32b3934d71ff0',
//   tag: '64c3390fb1f32b3934d71ff0',
//   image: formData,

//  // 'Content-Type': 'application/json',
//  'Content-Type': 'multipart/form-data',
// 64cf724e4364c94d646c54db
// 4cf82f0bf345ee30df43f2c
