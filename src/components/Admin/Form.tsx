import React, { FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreatButton, ButtonList } from '../ui/Button';

interface FormProps {
  onSubmit: (e: FormEvent) => void;
  name: string | undefined;
  pdf_url: string | undefined;
  category: string | undefined;
  author: string | undefined;
  tag: string | undefined;
  setName: (value: React.SetStateAction<string>) => void;
  setPdf_url: (value: React.SetStateAction<string>) => void;
  setAuthor: (value: React.SetStateAction<string>) => void;
  setTag: (value: React.SetStateAction<string>) => void;
  setCategory: (value: React.SetStateAction<string>) => void;
  handleImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
}

const Form = ({
  onSubmit,
  name,
  pdf_url,
  category,
  author,
  tag,
  setName,
  setAuthor,
  setCategory,
  setPdf_url,
  setTag,
  handleImageChange,
  type,
}: FormProps) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center ">
      <form
        className="flex flex-col bg-slate-900 sm:px-8 px-4  py-8 rounded-md shadow-sm"
        onSubmit={onSubmit}
      >
        <div>
          <div className="form-container">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter name"
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-container">
            <label htmlFor="pdf_url" className="form-label ">
              PDF Url
            </label>
            <input
              type="text"
              placeholder="Enter pdf_url"
              className="form-input"
              value={pdf_url}
              onChange={(e) => setPdf_url(e.target.value)}
            />
          </div>
          <div className="form-container">
            <label htmlFor="category" className="form-label ">
              Category
            </label>
            <input
              type="text"
              placeholder="Enter category"
              className="form-input"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="form-container">
            <label htmlFor="author" className="form-label ">
              Author
            </label>
            <input
              type="text"
              placeholder="Enter author"
              className="form-input"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="form-container">
            <label htmlFor="tag" className="form-label ">
              Tag Name
            </label>
            <input
              type="text"
              placeholder="Enter tag name"
              className="form-input"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            />
          </div>
          <div className="form-container">
            <label htmlFor="file" className="form-label ">
              Upload Image
            </label>
            <input
              type="file"
              name="image"
              placeholder="Enter tag name"
              className="text-slate-200"
              onChange={handleImageChange}
            />
          </div>
        </div>

        <div className="flex gap-2 justify-end ">
          <CreatButton text={type} />
          <ButtonList text="Cancel" onClick={() => navigate('/admin')} />
        </div>
      </form>
    </div>
  );
};

export default Form;
