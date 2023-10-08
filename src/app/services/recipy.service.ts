import { Injectable, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipyService {
  private http = inject(HttpClient);

  public getList(): Observable<Recipy[]> {
    return this.http.get<Recipy[]>(' http://localhost:8888/recipes');
  }

  public addItem(recipy: Recipy): Observable<Object> {
    return this.http.post('http://localhost:8888/recipes', recipy);
  }
}

export interface Recipy {
  title: string;
  score: number;
  scoreTotal: number;
  preperationTimeInMinutes: number;
}
