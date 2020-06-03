import { Book } from './Book';
import { BookAccessInfo } from './BookAccessInfo';
import { SaleBookInfo } from './SaleBookInfo';

export class BookSearchInfos {
  id: string;
  volumeInfo: Book;
  saleInfo: SaleBookInfo;
  accessInfo: BookAccessInfo;
  constructor() {
    this.id = null;
    this.volumeInfo = null;
    this.saleInfo = null;
    this.accessInfo = null;
  }
}
