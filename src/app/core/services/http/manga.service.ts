import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Manga } from '../../models/manga';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MangaService {
  endPoint: string = environment.MangaEndpoint;

  constructor(private _httpClient: HttpClient) {}

  get(): Observable<Manga[]> {
    return this._httpClient.get<Manga[]>(this.endPoint);
  }

  getById(id: number): Observable<Manga> {
    return this._httpClient.get<Manga>(this.endPoint + '/' + id);
  }

  post(manga: Manga): Observable<Manga> {
    return this._httpClient.post<Manga>(this.endPoint, manga);
  }

  put(manga: Manga, id): Observable<Manga> {
    return this._httpClient.put<Manga>(this.endPoint + '/' + id, manga);
  }

  delete(id): Observable<Manga> {
    return this._httpClient.delete<Manga>(this.endPoint + '/' + id);
  }
}
