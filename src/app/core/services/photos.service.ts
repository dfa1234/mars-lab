import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Photo} from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private httpClient: HttpClient) { }

  search(rover: string, camera?: string, sol?: number): Observable<Photo[]> {
    let url = `http://localhost:3390/rovers/${rover}/photos`;
    const query = [];
    if (camera) {
      query.push('camera=' + camera);
    }
    if (sol != null) {
      query.push('sol=' + sol);
    }
    const queryString = query.join('&');
    if (queryString) {
      url += '?' + queryString;
    }
    return this.httpClient.get<Photo[]>(url);
  }

  get(rover: string, photoId: number): Observable<Photo> {
    const url = `http://localhost:3390/rovers/${rover}/photos/${photoId}`;
    return this.httpClient.get<Photo>(url);
  }

}
