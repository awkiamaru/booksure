import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSet } from '../models/DataSet';
import { environment } from 'src/environments/environment';

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
}
