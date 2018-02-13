import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Content } from '../modules/common/content/content';
import { ComService } from './com.service';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ContentService {

  private contentUrl = 'api/heroes';  // URL to web api

//  private contentUrl = 'localhost:3030/movies';

  constructor(
    private http: HttpClient,
    private messageService: ComService) { }

  /** GET movies from the server */
  getAllContent (): Observable<Content[]> {
    return this.http.get<Content[]>(this.contentUrl)
      .do( res => console.log('HTTP response:', res))
      .pipe(
        tap(heroes => this.log(`fetched movies`)),
        catchError(this.handleError('getAllContent', []))
      );
  }

  /** GET movie by id. Will 404 if id not found */
  getContent(id: number): Observable<Content> {
    const url = `${this.contentUrl}/${id}`;
    return this.http.get<Content>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Content>(`getHero id=${id}`))
    );
  }


  /** GET movie by id. Return `undefined` when id not found */
  getContentNo404<Data>(id: number): Observable<Content> {
    const url = `${this.contentUrl}/?id=${id}`;
    return this.http.get<Content[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<Content>(`getHero id=${id}`))
      );
  }


  /* GET heroes whose name contains search term */
  searchContent(term: string): Observable<Content[]> {
    if (!term.trim()) {
      // if not search term, return empty movies array.
      return of([]);
    }
    return this.http.get<Content[]>(`api/heroes/?name=${term}`).pipe(
      tap(_ => this.log(`found movies matching "${term}"`)),
      catchError(this.handleError<Content[]>('searchContent', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new movie to the server */
  addContent (hero: Content): Observable<Content> {
    return this.http.post<Content>(this.contentUrl, hero, httpOptions).pipe(
      tap((hero: Content) => this.log(`added movie w/ id=${hero.id}`)),
      catchError(this.handleError<Content>('addContent'))
    );
  }

  /** DELETE: delete the movie from the server */
  deleteContent (hero: Content | number): Observable<Content> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.contentUrl}/${id}`;

    return this.http.delete<Content>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted movie id=${id}`)),
      catchError(this.handleError<Content>('deleteContent'))
    );
  }

  /** PUT: update the movie on the server */
  updateContent (hero: Content): Observable<any> {
    return this.http.put(this.contentUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated movie id=${hero.id}`)),
      catchError(this.handleError<any>('updateContent'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a ContentService message with the ComService */
  private log(message: string) {
    this.messageService.add('ContentService: ' + message);
  }
}
