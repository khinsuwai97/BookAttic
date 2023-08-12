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
