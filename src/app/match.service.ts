import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Players } from './players';
import { ScoreBoard } from './score-board';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError} from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private tennisUrl = 'http://localhost:8080/match';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient) { }

   createMatch(players: Players): Observable<String> {
    return this.http.post<string>(this.tennisUrl + '/create', players, this.httpOptions)
    .pipe(
      catchError(this.handleError<String>('createMatch', ""))
    );
  }

  playOneBall(idMatch: String): Observable<ScoreBoard>{
    return this.http.post<ScoreBoard>(this.tennisUrl + '/play-one-ball', idMatch, this.httpOptions)
    .pipe(
      catchError(this.handleError<ScoreBoard>('playOneBall', new ScoreBoard()))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
