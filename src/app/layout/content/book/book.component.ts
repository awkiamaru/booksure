import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { BookSearchInfos } from 'src/app/models/BookInfos';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [BooksService],
})
export class BookComponent implements OnInit {
  public book: BookSearchInfos;

  constructor(
    private route: ActivatedRoute,
    private bookService: BooksService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.bookService.getBookById(params.id).then((book: BookSearchInfos) => {
        this.book = book;
        console.log(this.book);
      });
    });
  }
}
