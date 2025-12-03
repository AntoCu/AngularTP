import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Joke } from './jokeInterface';

@Injectable({
  providedIn: 'root',
})
export class RandomJokeService {
  private http = inject(HttpClient);
  private jokeSignal = signal<Joke | null>(null);
  readonly url = 'https://api.chucknorris.io/jokes/random';

  get joke() {
    return this.jokeSignal;
  }

  fetchJoke(): Observable<Joke> {
    return this.http.get<Joke>(this.url).pipe(
      tap(joke => this.jokeSignal.set(joke))
    );
  }
}
