import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../bean/user';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient) {
  }

  register(user: User): Observable<User> {
    let res = this.http
      .post<User>('http://139.196.80.102:8000/register', user).pipe(
        catchError(this.handleError<User>(`register error`))
      );
    return res;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
