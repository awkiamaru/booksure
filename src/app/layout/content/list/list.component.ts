import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { DataSet } from 'src/app/models/DataSet';
import { Book } from 'src/app/models/Book';
import { BookSearchInfos } from 'src/app/models/BookInfos';

@Component({
  selector: 'app-list-books',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public dataBooks: DataSet;
  public books;

  constructor(private bookService: BooksService) {
    this.books = [];
  }
  loading: boolean;
  ngOnInit(): void {}

  search(searchValue: string) {
    this.books = [];
    this.dataBooks = null;
    this.loading = true;
    this.bookService
      .getBooks(searchValue.split(' ').join('+'))
      .then((books: DataSet) => {
        this.dataBooks = books;
        books.items.forEach((book: BookSearchInfos) => {
          this.books.push(book.volumeInfo);
        });
        this.loading = false;
      });

    console.log(this.books);
  }
}
