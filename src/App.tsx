import { useState, useEffect } from 'react';
import Pages from './components/pages/Pages';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Pages />
    </QueryClientProvider>
  );
};

export default App;

{
  /* <div>
{books.map((book) => {
  return (
    <div key={book._id}>
      <p>{book.name}</p>
      <img src={book.image} alt={book.name} />
      <p>{book.category?.name}</p>
      <p>{book.author?.name}</p>
    </div>
  );
})}
</div> */
}
