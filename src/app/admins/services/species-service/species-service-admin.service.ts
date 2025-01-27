import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SpeciesServiceAdminService {

  constructor(private http :  HttpClient) { }

  getCompetitions(page : number){
      return this.http.get(environment.apiUrl+'/species/list?page='+page);
    }
}
