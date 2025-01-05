import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TopThreeService {

  constructor(private http : HttpClient ) { }

  getTopThree(){
    return this.http.get(environment.apiUrl + '/participation/top-three');
  }
}
