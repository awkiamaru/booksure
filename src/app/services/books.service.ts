import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/Book';
import { HttpClient } from '@angular/common/http';
import { DataSet } from '../models/DataSet';
import { promise } from 'protractor';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private REST_API_SERVER = 'https://www.googleapis.com/books/v1/volumes?q=';
  results: Object;

  constructor(private http: HttpClient) {}

  getBooks(query: string) {
    let promise = new Promise((resolve, reject) => {
      this.http
        .get(`${this.REST_API_SERVER}${query}`)
        .toPromise()
        .then(
          (res) => {
            this.results = JSON.stringify(res);
            resolve();
          },
          (msg) => {
            reject(msg);
          }
        );
    });

    return promise;
  }
}
