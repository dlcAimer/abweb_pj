import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {User} from '../../bean/user';


@Injectable({
    providedIn: 'root'
})
export class OverviewService {

    constructor(private http: HttpClient) {
    }

    getStudents(): Observable<User[]> {
        let token = localStorage.getItem('admin');
        return this.http.get<User[]>('http://139.196.80.102:8000/getUsers?token='+token).pipe(
            catchError(this.handleError<User[]>(`getUsers error`))
        );
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
