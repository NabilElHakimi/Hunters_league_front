import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ResutlsService {

  constructor(private http : HttpClient , private router : Router) { }


  getResults(){   
    return this.http.get(environment.apiUrl + '/participation/getMyHistoric');
  }
}
