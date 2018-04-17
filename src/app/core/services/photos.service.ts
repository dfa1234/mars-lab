import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {NasaPhotosResult, Photo} from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private httpClient: HttpClient) { }

  search(rover: string, camera?: string, sol?: number): Observable<Photo[]> {
    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos`;
    const query = [];
    if (camera) {
      query.push('camera=' + camera);
    }
    if (sol != null) {
      query.push('sol=' + sol);
    }
    query.push('api_key=DEMO_KEY');
    const queryString = query.join('&');
    if (queryString) {
      url += '?' + queryString;
    }
    return this.httpClient.get<NasaPhotosResult>(url)
      .pipe(
        map(result => result.photos)
      );
  }

}
