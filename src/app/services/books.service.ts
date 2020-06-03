import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DataSet } from '../models/DataSet';
import { environment } from 'src/environments/environment';
import { BookSearchInfos } from '../models/BookInfos';
import { retry, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  getBook(id: string): Observable<BookSearchInfos> {
    return this.http
      .get<BookSearchInfos>(`${environment.url}/volumes/${id}`)
      .pipe(retry(2), catchError(this.handleError));
  }
  public getBooks(query: string): Promise<DataSet> {
    return this.http
      .get(`${environment.url}/volumes?q=${query}&maxResults=12`)
      .toPromise()
      .then((response: any) => response);
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage =
        `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
