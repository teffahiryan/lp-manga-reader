import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chapitre } from '../../models/chapitre';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { filter } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ChapitreService {
  endPoint: string = environment.ChapitreEndpoint;

  constructor(private _httpClient: HttpClient) {}

  get(): Observable<Chapitre[]> {
    return this._httpClient.get<Chapitre[]>(this.endPoint);
  }

  getById(id: number): Observable<Chapitre> {
    return this._httpClient.get<Chapitre>(this.endPoint + '/' + id);
  }

  getByIdList(term): Observable<Chapitre[]> {
    const options = term
      ? { params: new HttpParams().set('MangaId', term) }
      : {};
    return this._httpClient.get<Chapitre[]>(this.endPoint, options);
  }

  post(chapitre: Chapitre): Observable<Chapitre> {
    return this._httpClient.post<Chapitre>(this.endPoint, chapitre);
  }

  put(chapitre: Chapitre, id): Observable<Chapitre> {
    return this._httpClient.put<Chapitre>(
      'http://localhost:3000/chapitres/' + id,
      chapitre
    );
  }

  delete(id): Observable<Chapitre> {
    return this._httpClient.delete<Chapitre>(this.endPoint + '/' + id);
  }
}
