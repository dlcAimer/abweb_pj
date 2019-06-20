import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {User} from '../../bean/user';
import {SceneHistory} from '../../bean/sceneHistory';


@Injectable({
    providedIn: 'root'
})
export class HistoryService {

    constructor(private http: HttpClient) {
    }

    getScenes(userName:string): Observable<SceneHistory[]> {
        let token;
        if(localStorage.getItem("user")){
            token = JSON.parse(localStorage.getItem("user")).token;
        }else{
            token = JSON.parse(localStorage.getItem("admin")).token;
        }
        return this.http
            .get<SceneHistory[]>('http://139.196.80.102:8000/getScene?userName='+userName+'&token='+token).pipe(
                catchError(this.handleError<SceneHistory[]>(`login error`))
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
