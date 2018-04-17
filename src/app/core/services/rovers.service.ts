import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Rover} from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class RoversService {

  constructor(private httpClient: HttpClient) { }

  list(): Observable<Rover[]> {
    const url = 'http://localhost:3390/rovers';
    return this.httpClient.get<Rover[]>(url);
  }

}
