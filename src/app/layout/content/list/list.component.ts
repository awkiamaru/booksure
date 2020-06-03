import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { DataSet } from 'src/app/models/DataSet';
import { BookSearchInfos } from 'src/app/models/BookInfos';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-list-books',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public dataBooks: DataSet;
  public books;
  faArrowRight = faChevronRight;
  constructor(private bookService: BooksService) {
    this.books = [];
  }
  loading: boolean;
  isSearch: boolean;

  ngOnInit(): void {}

  search(searchValue: string) {
    this.books = [];
    this.loading = true;
    this.isSearch = true;
    this.dataBooks = null;
    this.bookService
      .getBooks(searchValue.split(' ').join('+'))
      .then((books: DataSet) => {
        this.dataBooks = books;
        books.items.forEach((book: BookSearchInfos) => {
          this.books.push(book);
        });
        this.loading = false;
      });
  }
}
