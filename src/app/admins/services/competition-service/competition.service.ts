import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private http : HttpClient) { }

  getCompetitions(page : number){
    return this.http.get(environment.apiUrl+'/competition/details?page='+page);
  }

  updateCompetition(data : any , id : string){
    return this.http.put(environment.apiUrl+'/competition/update/'+ id , data);
  }

  createCompetition(data : any){
    return this.http.post(environment.apiUrl+'/competition/create' , data);
  }
  
}
