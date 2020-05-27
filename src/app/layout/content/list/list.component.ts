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
  book: any;
  ngOnInit(): void {
    this.bookService.getBooks('1984').then((books: DataSet) => {
      this.dataBooks = books;

      books.items.forEach((book: BookSearchInfos) => {
        console.log(book.volumeInfo);
        this.books.push(book.volumeInfo);
      });
    });
  }

  search() {}
}
