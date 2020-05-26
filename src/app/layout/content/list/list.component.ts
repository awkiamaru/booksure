import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { DataSet } from 'src/app/models/DataSet';

@Component({
  selector: 'app-list-books',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(public bookService: BooksService) {}
  book: any;
  ngOnInit(): void {
    this.search();
    this.book = JSON.stringify(this.bookService.results);
  }

  search() {
    this.bookService.getBooks('1984');
  }
}
