export interface BookResponse {
  Message: string;
  Result: Book[];
}

export interface Book {
  author: {
    created: string;
    name: string;
    __v: number;
    _id: string;
  };
  category: {
    created: string;
    name: string;
    __v: number;
    _id: string;
  };
  created: string;
  image: string;
  name: string;
  pdf_url: string;
  tag: {
    created: string;
    name: string;
    __v: number;
    _id: string;
  };
  __v: number;

  _id: string;
}

export interface Passcode {
  passcode: number;
}

export interface AuthorResponse {
  Message: string;
  Result: Author[];
}

export interface Author {
  _id: string;
  name: string;
  created: string;
  __v: number;
}
export interface CategoryResponse {
  Message: string;
  Result: Category[];
}

export interface Category {
  _id: string;
  name: string;
  created: string;
  __v: number;
}
export interface TagResponse {
  Message: string;
  Result: Tag[];
}

export interface Tag {
  _id: string;
  name: string;
  created: string;
  __v: number;
}

export interface EditBookResponse {
  Message: string;
  Result: EditBook;
}
export interface EditBook {
  author: string;
  category: string;
  created: string;
  image: string;
  name: string;
  pdf_url: string;
  tag: string;
  __v: number;
  _id: string;
}
