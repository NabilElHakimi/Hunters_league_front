import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {


  constructor(private http : HttpClient) { }




  participate(competitionId: string) {
    const token = localStorage.getItem('authToken');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    const body = { competitionId };

    this.http.post(`${environment.apiUrl}/participation/create`, body, { headers }).subscribe(
      (response: any) => {
        console.log(response);
      },

      (error) => {
        console.error('Error while participating in competition:', error);
      }
    );
  }


}
