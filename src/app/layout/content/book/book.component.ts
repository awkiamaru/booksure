import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { BookSearchInfos } from 'src/app/models/BookInfos';
import { faStar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [BooksService],
})
export class BookComponent implements OnInit {
  public book: BookSearchInfos;
  faStar = faStar;
  constructor(
    private route: ActivatedRoute,
    private bookService: BooksService
  ) {}

  ngOnInit(): void {
    this.book = {
      id: '',
      accessInfo: {
        webReaderLink: null,
        accessViewStatus: null,
        country: null,
        epub: null,
        pdf: null,
      },
      volumeInfo: {
        title: null,
        authors: null,
        averageRating: null,
        description: null,
        imageLinks: null,
        infoLink: null,
        language: null,
        pageCount: null,
        previewLink: null,
        publishedDate: null,
        publisher: null,
      },
      saleInfo: {
        buyLink: null,
      },
    };
    this.getBookData();
  }
  getBookData() {
    this.route.params.subscribe((params: Params) => {
      this.bookService
        .getBook(params.id)
        .subscribe((dataBook: BookSearchInfos) => {
          this.book = dataBook;
        });
    });
  }
}
