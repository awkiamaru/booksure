import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSet } from '../models/DataSet';
import { environment } from 'src/environments/environment';
import { BookSearchInfos } from '../models/BookInfos';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  public getBooks(query: string): Promise<DataSet> {
    return this.http
      .get(`${environment.url}/volumes?q=${query}`)
      .toPromise()
      .then((response: any) => response);
  }

  public getBookById(id: string): Promise<BookSearchInfos> {
    return this.http
      .get(`${environment.url}/volumes/${id}`)
      .toPromise()
      .then((response: any) => response);
  }
}
