import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {NasaRoversResult, Rover} from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class RoversService {

  constructor(private httpClient: HttpClient) { }

  list(): Observable<Rover[]> {
    const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=DEMO_KEY';
    return this.httpClient.get<NasaRoversResult>(url)
      .pipe(
        map(result => result.rovers)
      );
  }

}
