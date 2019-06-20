import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {SceneHistory} from '../../bean/sceneHistory';

@Injectable({
    providedIn: 'root'
})
export class CodeService {

    constructor(private http: HttpClient) {
    }

    checkCode(scene: SceneHistory): Observable<SceneHistory> {
        return this.http
            .post<SceneHistory>('http://139.196.80.102:8000/compile', scene).pipe(
                catchError(this.handleError<SceneHistory>(`checkCode error`))
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
