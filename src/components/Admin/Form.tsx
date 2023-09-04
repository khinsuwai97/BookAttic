import { FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreatButton, ButtonList } from '../ui/Button';

interface FormProps {
  onSubmit: (e: FormEvent) => void;
  name: string;
  pdf_url: string;
  category: string;
  author: string;
  tag: string;
  type: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Form = ({
  onSubmit,
  name,
  pdf_url,
  category,
  author,
  tag,
  type,
  handleChange,
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
              id="name"
              name="name"
              placeholder="Enter name"
              className="form-input"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="form-container">
            <label htmlFor="pdf_url" className="form-label ">
              PDF Url
            </label>
            <input
              type="text"
              id="pdf_url"
              name="pdf_url"
              placeholder="Enter pdf_url"
              className="form-input"
              value={pdf_url}
              onChange={handleChange}
            />
          </div>
          <div className="form-container">
            <label
              htmlFor="category"
              className="form-label cursor-pointer "
              onClick={() => {
                navigate('/admin/category');
              }}
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              placeholder="Enter category"
              className="form-input"
              value={category}
              onChange={handleChange}
            />
          </div>
          <div className="form-container">
            <label
              htmlFor="author"
              className="form-label cursor-pointer "
              onClick={() => navigate('/admin/author')}
            >
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              placeholder="Enter author"
              className="form-input"
              value={author}
              onChange={handleChange}
            />
          </div>
          <div className="form-container">
            <label
              htmlFor="tag"
              className="form-label cursor-pointer "
              onClick={() => navigate('/admin/tag')}
            >
              Tag Name
            </label>
            <input
              type="text"
              id="tag"
              name="tag"
              placeholder="Enter tag name"
              className="form-input"
              value={tag}
              onChange={handleChange}
            />
          </div>
          <div className="form-container">
            <label htmlFor="file" className="form-label ">
              Upload Image
            </label>
            <input
              type="file"
              id="file"
              name="image"
              placeholder="Enter tag name"
              className="text-slate-200"
              onChange={handleChange}
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
