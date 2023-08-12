const BooklistHeader = () => {
  return (
    <div className=" book-list-container mb-4 text-slate-200">
      <h5>Booklist</h5>
      <div className="flex justify-between items-center">
        <h5 className="hidden sm:flex">Features</h5>
        <h5 className="sm:flex hidden">Remove from List</h5>
      </div>
    </div>
  );
};

export default BooklistHeader;
