import { Author } from './Author';
import { Image } from './Image';

export class Book {
  title: string;
  authors: Author[];
  publisher: string;
  publishedDate: string;
  description: string;
  averageRating: string;
  imageLinks: Image[];
}
