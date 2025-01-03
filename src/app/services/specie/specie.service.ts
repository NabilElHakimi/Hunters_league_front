import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpeciesService {
  private readonly BASE_URL =  'http://localhost:8443/api/species';


  constructor(private httpClient: HttpClient) {}

  getSpecies(page: number, size: number): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/list?page=${page}&size=${size}`);
  }
}
