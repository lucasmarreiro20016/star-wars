import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const endpoint = 'https://swapi.co/api/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    };
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  constructor(private http: HttpClient) { }

  get(url): Observable<any> {
    return this.http.get(endpoint + url).pipe(
      map(this.extractData));
  }

  post(object, url): Observable<any> {
    return this.http.post<any>(endpoint + url, JSON.stringify(object), httpOptions).pipe(
      tap(object),
      catchError(this.handleError<any>())
    );
  }
  
  put (id, object, url): Observable<any> {
    return this.http.put(endpoint + url + '/' + id, JSON.stringify(object), httpOptions).pipe(
      tap(_ => console.log(`Atualizado com sucesso`)),
      catchError(this.handleError<any>('Atualização'))
    );
  }
  
  delete (id, url): Observable<any> {
    return this.http.delete<any>(endpoint + url + '/' + id, httpOptions).pipe(
      tap(_ => console.log(`Excluido com sucesso`)),
      catchError(this.handleError<any>('Delete'))
    );
  }
}
