import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root', // This makes the service globally available
})
export class SpeciesService {

  constructor(private httpClient: HttpClient) {}

  getSpecies(page: number, size: number): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/species/list?page=${page}&size=${size}`);
  }
  
}
